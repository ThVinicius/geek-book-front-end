import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ResetCSS from './assets/css/reset'
import GlobalCSS from './assets/css/reset'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { GlobalProvider } from './context/globalContext'
import SignUp from './features/signUp/pages/SignUp'
import SignIn from './features/signIn/pages/SignIn'
import Home from './features/home/pages/Home'
import Add from './features/add/pages/Add'

export default function App() {
  return (
    <BrowserRouter>
      <ResetCSS />
      <GlobalCSS />
      <ToastContainer />
      <GlobalProvider>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  )
}
