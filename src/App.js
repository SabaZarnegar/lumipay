
import { HashRouter, Routes, Route } from "react-router-dom";
// import Login from './Componets/Login';
// import OTP from './Componets/OTP';
// import CashierRollPage from './Componets/Pages/CashierRollPage';
// import OwnerRollPage from './Componets/Pages/OwnerRollPage';
// import FinanceRollPage from './Componets/Pages/FinanceRollPage';
import PayInPersonPage from './Componets/Pages/PayInPersonPage';



export default function App() {
  return (
   <HashRouter>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        {/* <Route path="/Login" element={<Login />} />
        <Route path="/OTP" element={<OTP />} /> */}
        <Route path="/PayInPersonPage" element={<PayInPersonPage />} />
        {/* <Route path="/OwnerRollPage" element={<OwnerRollPage />} />
        <Route path="/FinanceRollPage" element={<FinanceRollPage />} />
        <Route path="/CashierRollPage" element={<CashierRollPage />} /> */}
        {/* <Route path="*" element={<div>صفحه مورد نظر یافت نشد (404)</div>} /> */}
      </Routes>
    </HashRouter>
  )
}
