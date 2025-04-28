import { Outlet } from "react-router-dom";
import { Sidebar, Tabs } from "./components";

export const DashboardLayout = () => {
  return (
    <main className="w-full h-screen bg-beige-100 flex">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className=" flex-1 h-screen overflow-y-auto max-lg:pb-[72px] max-sm:pb-[52px]">
        <Outlet />
      </div>
      <div className="lg:hidden">
        <Tabs />
      </div>
    </main>
  );
};
