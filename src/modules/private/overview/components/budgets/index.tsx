import { Button } from "@/components";
import ROUTES from "@/constants/routes";
import { BudgetsChart } from "@/modules/private/budgets/components";
import { FormattedNumber } from "react-intl";
import { Link } from "react-router-dom";

export const Budgets = () => {
  return (
    <div className="p-8 rounded-lg bg-white flex flex-col gap-5">
      {/* Heading and Details Link    */}
      <div className="flex items-center gap-4 justify-between">
        <h3 className="text-preset-2 font-bold">Budgets</h3>
        <Link to={ROUTES.BUDGETS}>
          <Button variant="tertiary" label="See Details" />
        </Link>
      </div>

      {/* Content  */}
      <div className="flex gap-4 max-sm:flex-col">
        <div className="max-lg:flex-1 max-sm:flex-auto flex justify-center">
          <BudgetsChart />
        </div>
        <div className="flex flex-col gap-4 flex-shrink-0">
          {/* Entertainment Card  */}
          <div className="flex gap-4">
            <div className="w-[4px] flex-shrink-0 bg-green  rounded-full h-[43px]"></div>
            <div className="flex flex-col gap-1">
              <span className="text-preset-5 text-secondary-text">
                Entertainment
              </span>
              <span className="text-preset-4 font-bold text-primary-text">
                <FormattedNumber
                  value={50}
                  style="currency"
                  currency="USD"
                  minimumFractionDigits={0}
                />
              </span>
            </div>
          </div>

          {/* Bills Card  */}
          <div className="flex gap-4">
            <div className="w-[4px] flex-shrink-0 bg-cyan h-[43px] rounded-full"></div>
            <div className="flex flex-col gap-1">
              <span className="text-preset-5 text-secondary-text">Bills</span>
              <span className="text-preset-4 font-bold text-primary-text">
                <FormattedNumber
                  value={750}
                  style="currency"
                  currency="USD"
                  minimumFractionDigits={0}
                />
              </span>
            </div>
          </div>

          {/* Dining Out Card  */}
          <div className="flex gap-4">
            <div className="w-[4px] flex-shrink-0 bg-yellow h-[43px] rounded-full"></div>
            <div className="flex flex-col gap-1">
              <span className="text-preset-5 text-secondary-text">
                Dining Out
              </span>
              <span className="text-preset-4 font-bold text-primary-text">
                <FormattedNumber
                  value={75}
                  style="currency"
                  currency="USD"
                  minimumFractionDigits={0}
                />
              </span>
            </div>
          </div>

          {/* Personal Card Card  */}
          <div className="flex gap-4">
            <div className="w-[4px] flex-shrink-0 bg-navy h-[43px] rounded-full"></div>
            <div className="flex flex-col gap-1">
              <span className="text-preset-5 text-secondary-text">
                Personal Care
              </span>
              <span className="text-preset-4 font-bold text-primary-text">
                <FormattedNumber
                  value={100}
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
