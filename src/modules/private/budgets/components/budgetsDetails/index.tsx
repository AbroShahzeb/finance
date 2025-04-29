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
import { BudgetCard } from "./components";

export interface Budget {
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
