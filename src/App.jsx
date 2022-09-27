import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ResetCSS from './assets/css/reset'
import GlobalCSS from './assets/css/reset'
import SignUp from './features/signUp/pages/SignUp'

export default function App() {
  return (
    <BrowserRouter>
      <ResetCSS />
      <GlobalCSS />
      <Routes>
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}
