import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { localStorageService } from 'services/localStorage.service'

const Auth = () => {
  const location = useLocation()
  console.log('Private location', location)
  return localStorageService.isAuth() ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />
}
export default Auth
