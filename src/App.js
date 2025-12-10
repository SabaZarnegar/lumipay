import { HashRouter, Routes, Route } from "react-router-dom";
import Login from './Componets/Login'
import OTP from './Componets/OTP'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/OTP" element={<OTP />} />
      </Routes>
    </HashRouter>
  )
}
