import { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
// Use by suronding routes
// <BrowserRouter> <ScrollToTop><Routes /></ScrollToTop></BrowserRouter>

const ScrollToTop = ({ children, location: { pathname } }) => {
  useEffect(() => {
    document.querySelector('body').scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [pathname])

  return children || null
}

export default withRouter(ScrollToTop)
