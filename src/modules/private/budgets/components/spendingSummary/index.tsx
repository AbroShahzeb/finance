import { FormattedNumber } from "react-intl";
import { BudgetsChart } from "../bugdetsChart";

interface SummaryItem {
  id: number;
  name: string;
  color: string;
  spent: number;
  budget: number;
}

const SUMMARY_ITEMS: SummaryItem[] = [
  {
    id: 0,
    name: "Entertainment",
    color: "green",
    spent: 15,
    budget: 50,
  },
  {
    id: 1,
    name: "Bills",
    color: "cyan",
    spent: 150,
    budget: 750,
  },
  {
    id: 2,
    name: "Dining Out",
    color: "yellow",
    spent: 133,
    budget: 75,
  },
  {
    id: 3,
    name: "Personal Care",
    color: "navy",
    spent: 40,
    budget: 100,
  },
];

export const SpendingSummary = () => {
  return (
    <div className="p-8 rounded-lg bg-white lg:sticky lg:top-[20px] flex flex-col gap-8 xl:min-w-[428px] max-lg:flex-row max-lg:flex-1 max-lg:w-full max-sm:flex-col">
      <div className="flex items-center justify-center">
        <BudgetsChart />
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="text-preset-2 text-primary-text font-bold">
          Spending Summary
        </h3>
        <div className="space-y-4  divide-y divide-grey-100">
          {SUMMARY_ITEMS.map((item: SummaryItem) => (
            <SummaryItemComponent {...item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const SummaryItemComponent = ({
  color,
  name,
  spent,
  budget,
}: SummaryItem) => {
  return (
    <div className="flex items-center gap-4 justify-between pb-4">
      <div className="flex items-center gap-4 ">
        <div className={`w-[4px] h-[21px] rounded-md bg-${color}`}></div>
        <span className="text-preset-4 text-secondary-text">{name}</span>
      </div>
      <div className="text-preset-5 text-secondary-text flex items-center gap-2">
        <span className="text-primary-text text-preset-3 font-bold">
          <FormattedNumber
            value={spent}
            style="currency"
            currency="USD"
            minimumFractionDigits={2}
            maximumFractionDigits={2}
          />
        </span>
        of{" "}
        <FormattedNumber
          value={budget}
          style="currency"
          currency="USD"
          minimumFractionDigits={2}
          maximumFractionDigits={2}
        />
      </div>
    </div>
  );
};
