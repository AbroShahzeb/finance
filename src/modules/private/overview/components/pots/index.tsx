import { IconPot } from "@/assets/svgAssets";
import { Button } from "@/components";
import ROUTES from "@/constants/routes";
import { FormattedNumber } from "react-intl";
import { Link } from "react-router-dom";

export const Pots = () => {
  return (
    <div className="p-8 rounded-lg bg-white flex flex-col gap-5">
      {/* Heading and Details Link    */}
      <div className="flex items-center gap-4 justify-between">
        <h3 className="text-preset-2 font-bold">Pots</h3>
        <Link to={ROUTES.POTS}>
          <Button variant="tertiary" label="See Details" />
        </Link>
      </div>

      {/* Content  */}
      <div className="flex gap-5 max-sm:flex-col">
        {/* Left Side (Overview)  */}
        <div className="flex-1 rounded-lg bg-beige-100 flex items-center gap-4 p-4">
          <div className="text-green">
            <IconPot />
          </div>
          <div className="flex flex-col  gap-4">
            <span className="text-preset-4 text-grey-500">Total Saved</span>
            <span className="text-grey-900 text-preset-1 font-bold">
              <FormattedNumber
                value={850}
                style="currency"
                currency="USD"
                minimumFractionDigits={0}
              />
            </span>
          </div>
        </div>

        {/* Right Side (Details) */}
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4">
          {/* Savings Card   */}
          <div className="flex gap-4">
            <div className="w-[4px] flex-shrink-0 bg-green h-full rounded-full"></div>
            <div className="flex flex-col gap-1">
              <span className="text-preset-5 text-secondary-text">Savings</span>
              <span className="text-preset-4 font-bold text-primary-text">
                <FormattedNumber
                  value={159}
                  style="currency"
                  currency="USD"
                  minimumFractionDigits={0}
                />
              </span>
            </div>
          </div>

          {/* Gift Card  */}
          <div className="flex gap-4">
            <div className="w-[4px] flex-shrink-0 bg-cyan h-full rounded-full"></div>
            <div className="flex flex-col gap-1">
              <span className="text-preset-5 text-secondary-text">Gift</span>
              <span className="text-preset-4 font-bold text-primary-text">
                <FormattedNumber
                  value={40}
                  style="currency"
                  currency="USD"
                  minimumFractionDigits={0}
                />
              </span>
            </div>
          </div>

          {/* Concert Tickets Card  */}
          <div className="flex gap-4">
            <div className="w-[4px] flex-shrink-0 bg-navy h-full rounded-full"></div>
            <div className="flex flex-col gap-1">
              <span className="text-preset-5 text-secondary-text">
                Concert Tickets
              </span>
              <span className="text-preset-4 font-bold text-primary-text">
                <FormattedNumber
                  value={110}
                  style="currency"
                  currency="USD"
                  minimumFractionDigits={0}
                />
              </span>
            </div>
          </div>

          {/* New Laptop Card  */}
          <div className="flex gap-4">
            <div className="w-[4px] flex-shrink-0 bg-green h-full rounded-full"></div>
            <div className="flex flex-col gap-1">
              <span className="text-preset-5 text-secondary-text">
                New Laptop
              </span>
              <span className="text-preset-4 font-bold text-primary-text">
                <FormattedNumber
                  value={10}
                  style="currency"
                  currency="USD"
                  minimumFractionDigits={0}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
