import App from 'App'
import ModalWrapper from 'components/modal'
import Navbar from 'components/navbar'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Layout = () => {
  const store = useSelector(state => state)
  return (
    <div>
      <Navbar />
      {store.modal.show ? (
        <ModalWrapper show={store.modal.show} content={store.modal.content} size={store.modal.size} />
      ) : null}
      {/* <Socket/> */}
      <ToastContainer className="toast" toastClassName="toast-wrapper" bodyClassName="toast-body" closeButton={false} />
      <App />
    </div>
  )
}

export default Layout
