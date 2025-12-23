
import { HashRouter, Routes, Route } from "react-router-dom";
// import CashierRollPage from './Componets/Pages/CashierRollPage'
  import Login from './Componets/Login'
  import OTP from './Componets/OTP'

export default function App() {
  return (
   <HashRouter>
      <Routes>
      <Route path="/" element={<Login />} />
       <Route path="/Login" element={<Login />} />
        <Route path="/OTP" element={<OTP />} />
        {/* <Route path="/CashierRollPage" element={<CashierRollPage />} /> */}
     </Routes>
     </HashRouter>
  )
}
