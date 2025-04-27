import ROUTES from "@/constants/routes";
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
      </Routes>
    </BrowserRouter>
  );
};
