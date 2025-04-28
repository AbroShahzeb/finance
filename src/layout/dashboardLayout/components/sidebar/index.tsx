import {
  IconMinimizeMenu,
  IconNavBudgets,
  IconNavOverview,
  IconNavPots,
  IconNavRecurringBills,
  IconNavTransactions,
  LogoLarge,
  LogoSmall,
} from "@/assets/svgAssets";
import ROUTES from "@/constants/routes";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export interface Link {
  id: number;
  name: string;
  icon: React.ReactNode;
  to: string;
}

export const LINKS = [
  {
    id: 0,
    name: "Overview",
    icon: <IconNavOverview />,
    to: ROUTES.HOME,
  },
  {
    id: 1,
    name: "Transactions",
    icon: <IconNavTransactions />,
    to: ROUTES.TRANSACTIONS,
  },
  {
    id: 2,
    name: "Budgets",
    icon: <IconNavBudgets />,
    to: ROUTES.BUDGETS,
  },
  {
    id: 3,
    name: "Pots",
    icon: <IconNavPots />,
    to: ROUTES.POTS,
  },
  {
    id: 4,
    name: "Recurring Bills",
    icon: <IconNavRecurringBills />,
    to: ROUTES.RECURRING_BILLS,
  },
];

export const Sidebar = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <motion.aside
      className="bg-grey-900 h-full flex flex-col gap-6 rounded-r-2xl overflow-hidden"
      animate={{ width: isMinimized ? "88px" : "300px" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Logo Section */}
      <div className="py-10 px-8 flex ">
        {isMinimized ? <LogoSmall /> : <LogoLarge />}
      </div>

      {/* Nav Links */}
      <div className={`flex flex-col gap-1 ${isMinimized ? "pr-2" : "pr-6"}`}>
        {LINKS.map((link: Link) => (
          <NavLink
            to={link.to}
            key={link.id}
            className={({ isActive }) =>
              `flex items-center gap-4 p-4 border-l-[4px]  ${
                isMinimized ? "justify-center" : "px-8"
              } rounded-r-xl ${
                isActive
                  ? "bg-beige-100 text-grey-900 border-green"
                  : "text-grey-300 border-transparent"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span
                  className={`${
                    isActive ? "text-green" : "text-grey-300"
                  } flex-shrink-0`}
                >
                  {link.icon}
                </span>
                {!isMinimized && (
                  <span className="text-preset-3 font-bold whitespace-nowrap">
                    {link.name}
                  </span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>

      {/* Minimize Toggle Button */}
      <div
        onClick={() => setIsMinimized((prev) => !prev)}
        className={`flex items-center gap-4 mt-auto p-4 ${
          isMinimized ? "justify-center" : "px-8"
        } rounded-r-xl text-grey-300 cursor-pointer`}
      >
        {/* Rotate Icon */}
        <motion.span
          animate={{ rotate: isMinimized ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <IconMinimizeMenu />
        </motion.span>

        {/* Text (only if expanded) */}
        {!isMinimized && (
          <span className="text-preset-3 font-bold whitespace-nowrap">
            Minimize Menu
          </span>
        )}
      </div>
    </motion.aside>
  );
};
