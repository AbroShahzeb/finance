import { PageHeader } from "@/layout/dashboardLayout/components";
import {
  Budgets,
  OverviewCards,
  Pots,
  RecurringBills,
  Transactions,
} from "./components";

export const Overview = () => {
  return (
    <div className="flex-1 py-8 px-10 max-sm:py-6 max-sm:px-4 flex flex-col gap-8">
      <PageHeader title="Overview" />
      <OverviewCards />
      <div className="flex gap-6 flex-1 max-lg:flex-col">
        {/* Pots and Transactions  */}
        <div className="flex flex-col gap-6 flex-1 ">
          <Pots />
          <Transactions />
        </div>
        {/* Budgets and Recurring Bills  */}
        <div className="flex flex-col gap-6 flex-1">
          <Budgets />
          <RecurringBills />
        </div>
      </div>
    </div>
  );
};
