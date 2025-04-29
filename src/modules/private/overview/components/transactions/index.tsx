import { Button } from "@/components";
import {
  DanielCarter,
  EmmaRichardson,
  SavoryBitesBistro,
  SunPark,
  UrbanServicesHub,
} from "@/constants/images";
import ROUTES from "@/constants/routes";
import { FormattedNumber } from "react-intl";
import { Link } from "react-router-dom";

export interface Transaction {
  id: number;
  name: string;
  avatar: string;
  amount: number;
  date: string;
}

const TRANSACTIONS: Transaction[] = [
  {
    id: 0,
    name: "Emma Richardson",
    avatar: EmmaRichardson,
    amount: +75,
    date: "19 Aug 2024",
  },
  {
    id: 1,
    name: "Savory Bites Bistro",
    avatar: SavoryBitesBistro,
    amount: -55.5,
    date: "19 Aug 2024",
  },
  {
    id: 2,
    name: "Daniel Carter",
    avatar: DanielCarter,
    amount: -42.3,
    date: "18 Aug 2024",
  },
  {
    id: 4,
    name: "Sun Park",
    avatar: SunPark,
    amount: +120,
    date: "17 Aug 2024",
  },
  {
    id: 5,
    name: "Urban Services Hub",
    avatar: UrbanServicesHub,
    amount: -65,
    date: "17 Aug 2024",
  },
];

export const Transactions = () => {
  return (
    <div className="bg-white p-8 pb-3 flex flex-col gap-8 rounded-lg">
      {/* Heading and Details Link    */}
      <div className="flex items-center gap-4 justify-between">
        <h3 className="text-preset-2 font-bold">Transactions</h3>
        <Link to={ROUTES.TRANSACTIONS}>
          <Button variant="tertiary" label="View All" />
        </Link>
      </div>

      <div className="flex flex-col divide-y divide-beige-100">
        {TRANSACTIONS.map((transaction: Transaction) => (
          <div className="py-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span>
                <img
                  src={transaction.avatar}
                  className="size-10 rounded-full"
                />
              </span>
              <span className="text-preset-4 font-bold text-primary-text">
                {transaction.name}
              </span>
            </div>

            <div className="flex flex-col gap-2 items-start">
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
  );
};
