import { IconEllipsis } from "@/assets/svgAssets";
import { Button } from "@/components";
import {
  AquaFlowUtilites,
  EllaPhillips,
  EthanClark,
  JamesThompson,
  PixelPlayground,
  RinaSato,
  SavoryBitesBistro,
  SerenitySpaAndWellness,
  SparkElectricSolutions,
  WilliamHarris,
} from "@/constants/images";
import { Transaction } from "@/modules/private/overview/components/transactions";
import { FormattedNumber } from "react-intl";

interface Budget {
  id: number;
  name: string;
  color: string;
  spent: number;
  remaining: number;
  budget: number;
  latestTransactions: Transaction[];
}

const BUDGETS: Budget[] = [
  {
    id: 0,
    name: "Entertainment",
    color: "green",
    spent: 15,
    remaining: 35,
    budget: 50,
    latestTransactions: [
      {
        id: 0,
        name: "James Thompson",
        avatar: JamesThompson,
        amount: -5,
        date: "11 Aug 2024",
      },
      {
        id: 1,
        name: "Pixel Playground",
        avatar: PixelPlayground,
        amount: -10,
        date: "11 Aug 2024",
      },
      {
        id: 2,
        name: "Rina Sato",
        avatar: RinaSato,
        amount: -10,
        date: "13 Jul 2024",
      },
    ],
  },
  {
    id: 1,
    name: "Bills",
    color: "cyan",
    spent: 150,
    remaining: 600,
    budget: 750,
    latestTransactions: [
      {
        id: 0,
        name: "Spark Electric Solutions",
        avatar: SparkElectricSolutions,
        amount: -100,
        date: "2 Aug 2024",
      },
      {
        id: 2,
        name: "Rina Sato",
        avatar: RinaSato,
        amount: -50,
        date: "2 Aug 2024",
      },
      {
        id: 3,
        name: "Aqua Flow Utilities",
        avatar: AquaFlowUtilites,
        amount: -100,
        date: "30 Jul 2024",
      },
    ],
  },
  {
    id: 2,
    name: "Dining Out",
    color: "yellow",
    spent: 75,
    remaining: 0,
    budget: 75,
    latestTransactions: [
      {
        id: 0,
        name: "Savory Bites Bistro",
        avatar: SavoryBitesBistro,
        amount: -55.5,
        date: "19 Aug 2024",
      },
      {
        id: 1,
        name: "Ethan Clark",
        avatar: EthanClark,
        amount: -32.5,
        date: "20 Aug 2024",
      },
      {
        id: 2,
        name: "Ella Phillips",
        avatar: EllaPhillips,
        amount: -45,
        date: "10 Jul 2024",
      },
    ],
  },
  {
    id: 3,
    name: "Personal Care",
    color: "navy",
    spent: 40,
    remaining: 60,
    budget: 100,
    latestTransactions: [
      {
        id: 0,
        name: "William Harris",
        avatar: WilliamHarris,
        amount: -10,
        date: "5 Aug 2024",
      },
      {
        id: 1,
        name: "Serenity Spa and Wellness",
        avatar: SerenitySpaAndWellness,
        amount: -30,
        date: "3 Aug 2024",
      },
      {
        id: 2,
        name: "Serenity Spa and Wellness",
        avatar: SerenitySpaAndWellness,
        amount: -30,
        date: "3 Jul 2024",
      },
    ],
  },
];

export const BudgetsDetails = () => {
  return (
    <div className="flex-1 flex flex-col gap-6 max-lg:flex-1 max-lg:w-full">
      {BUDGETS.map((budget: Budget) => (
        <BudgetCard key={budget.id} {...budget} />
      ))}
    </div>
  );
};

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
