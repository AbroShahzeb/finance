import ROUTES from "@/constants/routes";
import { DashboardLayout } from "@/layout/dashboardLayout";
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
          <Route element={<p>Overview</p>} path={ROUTES.HOME} />
          <Route element={<p>Transactions</p>} path={ROUTES.TRANSACTIONS} />
          <Route element={<p>Budgest</p>} path={ROUTES.BUDGETS} />
          <Route element={<p>Pots</p>} path={ROUTES.POTS} />
          <Route
            element={<p>Recurring Bills</p>}
            path={ROUTES.RECURRING_BILLS}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
