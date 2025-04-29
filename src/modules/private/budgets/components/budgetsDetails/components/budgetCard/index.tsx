import { IconEllipsis } from "@/assets/svgAssets";
import { Budget } from "../..";
import { FormattedNumber } from "react-intl";
import { Button } from "@/components";
import { Transaction } from "@/modules/private/overview/components/transactions";

export const BudgetCard = ({
  name,
  color,
  spent,
  remaining,
  budget,
  latestTransactions,
}: Budget) => {
  return (
    <div className="bg-white p-8 rounded-lg flex flex-col gap-5 ">
      {/* Heading and More Icon    */}
      <div className="flex items-center gap-4 justify-between">
        <div className="flex items-center gap-4">
          <span className={`size-4 rounded-md bg-${color}`}></span>
          <span className="text-preset-2 text-primary-text font-bold">
            {name}
          </span>
        </div>

        <div className="text-grey-300">
          <IconEllipsis />
        </div>
      </div>

      {/* Spendings  */}
      <div className="flex flex-col gap-4">
        <p className="text-preset-4 text-secondary-text">
          Maximum of{" "}
          <FormattedNumber
            value={budget}
            style="currency"
            currency="USD"
            minimumFractionDigits={2}
            maximumFractionDigits={2}
          />
        </p>
        <div className="p-1 relative h-8 rounded-sm bg-beige-100">
          <div
            className={`bg-${color} rounded-sm absolute left-1 top-1 bottom-1 h-6 `}
            style={{ width: `${(spent / budget) * 100}%` }}
          ></div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4 flex-1">
            <span className={`w-1 bg-${color} h-[43px] rounded-sm`}></span>
            <div className="flex flex-col gap-1">
              <span className="text-preset-5 text-secondary-text">Spent</span>
              <span className="text-preset-4 text-primary-text font-bold">
                <FormattedNumber
                  value={spent}
                  style="currency"
                  currency="USD"
                  minimumFractionDigits={2}
                  maximumFractionDigits={2}
                />
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 flex-1">
            <span className={`w-1 bg-beige-100 h-[43px] rounded-sm`}></span>
            <div className="flex flex-col gap-1">
              <span className="text-preset-5 text-secondary-text">
                Remaninig
              </span>
              <span className="text-preset-4 text-primary-text font-bold">
                <FormattedNumber
                  value={remaining}
                  style="currency"
                  currency="USD"
                  minimumFractionDigits={2}
                  maximumFractionDigits={2}
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Transactions  */}
      <div className="p-5 flex flex-col gap-5 rounded-lg bg-beige-100">
        <div className="flex items-center gap-4 justify-between">
          <h3 className="text-preset-3 text-primary-text font-bold">
            Latest Spending
          </h3>
          <Button variant="tertiary" label="See All" />
        </div>
        <div className="flex flex-col divide-y divide-grey-500/15">
          {latestTransactions.map((transaction: Transaction) => (
            <div className="flex items-center gap-4 justify-between py-3">
              <div className="flex items-center gap-4">
                <span className="flex-shrink-0 hidden sm:block">
                  <img
                    src={transaction.avatar}
                    className="size-10 rounded-full"
                  />
                </span>
                <span className="text-preset-4 font-bold text-primary-text">
                  {transaction.name}
                </span>
              </div>
              <div className="flex flex-col gap-1 items-start">
                <span
                  className={`text-preset-4 font-bold ${
                    transaction.amount < 0 ? "text-primary-text" : "text-green"
                  } `}
                >
                  {transaction.amount > 0 && "+"}
                  <FormattedNumber
                    value={transaction.amount}
                    style="currency"
                    currency="USD"
                    minimumFractionDigits={2}
                    maximumFractionDigits={2}
                  />
                </span>
                <span className="text-preset-5 text-secondary-text">
                  {transaction.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
