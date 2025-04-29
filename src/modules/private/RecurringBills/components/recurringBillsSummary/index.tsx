import { FormattedNumber } from "react-intl";
import { IconRecurringBills } from "@/assets/svgAssets";

interface SummaryItem {
  id: number;
  name: string;
  amount: number;
  quantity: number;
}

const SUMMARY_ITEMS: SummaryItem[] = [
  {
    id: 0,
    name: "Paid Bills",
    amount: 190,
    quantity: 4,
  },
  {
    id: 1,
    name: "Total Upcoming",
    amount: 194.98,
    quantity: 4,
  },
  {
    id: 3,
    name: "Due Soon",
    amount: 59.98,
    quantity: 2,
  },
];

export const RecurringBillsSummary = () => {
  return (
    <div className=" lg:sticky lg:top-[20px] flex flex-col gap-6 xl:min-w-[428px] max-lg:flex-row max-lg:flex-1 max-lg:w-full max-sm:flex-col">
      {/* Total Bills Card  */}
      <div className="flex flex-col max-sm:flex-row max-sm:items-center max-sm:justify-start max-sm:gap-5 gap-8 rounded-lg p-6 bg-grey-900 max-lg:justify-between  text-white max-lg:flex-1">
        <div>
          <IconRecurringBills />
        </div>
        <div className="flex flex-col gap-3 max-sm:flex-1">
          <span className="text-preset-4">Total Bills</span>
          <span className="text-preset-1 font-bold">
            <FormattedNumber
              value={384.98}
              style="currency"
              currency="USD"
              minimumFractionDigits={2}
              maximumFractionDigits={2}
            />
          </span>
        </div>
      </div>

      {/* Summary Card  */}
      <div className="flex flex-col gap-5 rounded-lg p-5 bg-white text-primary-text max-lg:flex-1">
        <div className="text-preset-3 font-bold">Summary</div>
        <div className="flex flex-col divide-y divide-grey-500/15">
          {SUMMARY_ITEMS.map((item: SummaryItem) => (
            <div className="flex items-center text-preset-5 justify-between gap-4 py-3">
              <span className=" text-secondary-text">{item.name}</span>
              <span
                className={`${
                  item.name === "Due Soon" && "text-red"
                }  font-bold`}
              >
                {item.quantity} (
                <FormattedNumber
                  value={item.amount}
                  style="currency"
                  currency="USD"
                  minimumFractionDigits={2}
                  maximumFractionDigits={2}
                />
                )
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
