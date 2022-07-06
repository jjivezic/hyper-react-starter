import React from 'react'
import { Outlet, useRoutes } from 'react-router-dom'
import App from 'App'
const Auth = React.lazy(() => import('./auth'))
const NonAuth = React.lazy(() => import('./nonAuth'))
const Landing = React.lazy(() => import('pages/landing'))
const Login = React.lazy(() => import('pages/auth/login'))
const Dashboard = React.lazy(() => import('pages/dashboard'))
const NotFound = React.lazy(() => import('pages/notFound'))
const TestRoute1 = React.lazy(() => import('pages/testRoutes/testRoute1'))
const TestRoute2 = React.lazy(() => import('pages/testRoutes/testRoute2'))
const TestRoute3 = React.lazy(() => import('pages/testRoutes/testRoute3'))
const TestRoute4 = React.lazy(() => import('pages/testRoutes/testRoute4'))
const Users = React.lazy(() => import('pages/testRoutes/users'))
const User = React.lazy(() => import('pages/testRoutes/user'))

const AppRoutes = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <App />,
      children: [
        // routes that can be accessed by both auth and non-auth users
        { path: '', element: <Landing /> }, // it will be the base component because have path equal to ''
        {
          path: 'test-route-1',
          element: <TestRoute1 />,
          children: [
            // example when you want to render on the same page parent and child bellow
            // parent <TestRoute1 need to have Outlet inside to render this children bellow
            // every parent need to have Outlet
            { path: 'child-1', element: <TestRoute4 /> }
          ]
        },
        {
          // routes that can be accessed just by non-auth users
          // wrapped with NonAuth
          element: <NonAuth />,
          children: [
            { path: 'login', element: <Login /> },
            { path: 'test-route-2', element: <TestRoute2 /> }
          ]
        },
        {
          // can access just auth users
          // wrapped with Auth
          element: <Auth />,
          children: [
            { path: 'app', element: <Dashboard /> },
            { path: 'test-route-3', element: <TestRoute3 /> },
            {
              path: 'users',
              element: <Outlet />,
              children: [
                // example when you want to base path be the same for children (users/) but every child inside will be rendered on new page not bellow users
                { path: '', element: <Users /> }, // this mean that /users will render this component witch have path  equal to ""
                { path: ':id', element: <User /> },
                { path: 'add', element: <User /> }
              ]
            }
          ]
        },
        { path: '*', element: <NotFound /> }
      ]
    }
  ])

  return element
}

export { AppRoutes }
