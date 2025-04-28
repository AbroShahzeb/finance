import { NavLink } from "react-router-dom";
import { Link, LINKS } from "../sidebar";

export const Tabs = () => {
  return (
    <nav className="flex items-center  h-[52px] sm:px-10 sm:h-[72px] w-full fixed right-0 left-0 bottom-0  bg-grey-900 px-4 pt-2 rounded-t-[8px]">
      {LINKS.map((link: Link) => (
        <NavLink
          to={link.to}
          key={link.id}
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 pt-2 pb-3 border-b-[4px] flex-1 h-[44px] sm:h-[66px]   rounded-t-xl ${
              isActive
                ? "bg-beige-100 text-grey-900 border-green "
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

              <span className="text-preset-5  hidden  sm:block font-bold ">
                {link.name}
              </span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
};
