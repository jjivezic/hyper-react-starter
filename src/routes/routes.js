import React from 'react'
import { Outlet, useRoutes } from 'react-router-dom'
import Layout from './layout'
import Auth from './auth'
import NonAuth from './nonAuth'
import Landing from 'pages/landing'
import Login from 'pages/auth/login'
import Dashboard from 'pages/dashboard'
import NotFound from 'pages/notFound'
import TestRoute1 from 'pages/testRoutes/testRoute1'
import TestRoute2 from 'pages/testRoutes/testRoute2'
import TestRoute3 from 'pages/testRoutes/testRoute3'
import TestRoute4 from 'pages/testRoutes/testRoute4'
import Users from 'pages/testRoutes/users'
import User from 'pages/testRoutes/user'

const AppRoutes = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        // routes that can be accessed by both auth and non-auth users
        { path: '', element: <Landing /> },
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
                // example when you want to base path be the same but every children inside will be rendered on new page not bellow user
                { path: '', element: <Users /> }, // this mean that /users will render this component
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
