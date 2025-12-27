
import { HashRouter, Routes, Route } from "react-router-dom";
// import Login from './Componets/Login';
// import OTP from './Componets/OTP';
// import CashierRollPage from './Componets/Pages/CashierRollPage';
// import OwnerRollPage from './Componets/Pages/OwnerRollPage';
// import FinanceRollPage from './Componets/Pages/FinanceRollPage';
import TodaySalesPage from './Componets/Pages/TodaySalesPage';



export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="*" element={<TodaySalesPage />} />
      </Routes>
    </HashRouter>
  )
}
