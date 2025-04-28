import { FormattedNumber } from "react-intl";

interface CardData {
  id: number;
  title: string;
  amount: number;
  invert: boolean;
}

const CARD_DATA: CardData[] = [
  {
    id: 0,
    title: "Current Balance",
    amount: 4836.0,
    invert: true,
  },
  {
    id: 1,
    title: "Income",
    amount: 3814.25,
    invert: false,
  },
  {
    id: 2,
    title: "Expenses",
    amount: 1700.5,
    invert: false,
  },
];

export const OverviewCards = () => {
  return (
    <div className="flex gap-6 max-md:flex-col">
      {CARD_DATA.map((card: CardData) => (
        <div
          className={`flex flex-col gap-3 p-6 flex-1 rounded-lg  ${
            card.invert
              ? "bg-grey-900 text-white"
              : "bg-white text-primary-text"
          }`}
        >
          <span className="text-preset-4">{card.title}</span>
          <span className="text-preset-1 font-bold">
            <FormattedNumber
              value={card.amount}
              style="currency"
              maximumFractionDigits={2}
              minimumFractionDigits={2}
              currency="USD"
            />
          </span>
        </div>
      ))}
    </div>
  );
};
