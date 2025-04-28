import ROUTES from "@/constants/routes";
import { DashboardLayout } from "@/layout/dashboardLayout";
import {
  Budgets,
  Overview,
  Pots,
  RecurringBills,
  Transactions,
} from "@/modules/private";
import { Login, SignUp } from "@/modules/public/auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes  */}
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.SIGNUP} element={<SignUp />} />
        {/* Dashboard Routes */}
        <Route path={ROUTES.HOME} element={<DashboardLayout />}>
          <Route element={<Overview />} path={ROUTES.HOME} />
          <Route element={<Transactions />} path={ROUTES.TRANSACTIONS} />
          <Route element={<Budgets />} path={ROUTES.BUDGETS} />
          <Route element={<Pots />} path={ROUTES.POTS} />
          <Route element={<RecurringBills />} path={ROUTES.RECURRING_BILLS} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
