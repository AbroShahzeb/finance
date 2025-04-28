import { Outlet } from "react-router-dom";
import { Sidebar, Tabs } from "./components";

export const DashboardLayout = () => {
  return (
    <main className="w-full h-screen bg-beige-100 flex">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div>
        <Outlet />
      </div>
      <div className="lg:hidden">
        <Tabs />
      </div>
    </main>
  );
};
