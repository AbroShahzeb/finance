import { Button } from "@/components";
import { PageHeader } from "@/layout/dashboardLayout/components";
import { BudgetsDetails, SpendingSummary } from "./components";

export const Budgets = () => {
  return (
    <div className="flex-1 py-8 px-10 max-sm:py-6 max-sm:px-4 flex flex-col gap-8">
      <PageHeader
        title="Budgets"
        rightComponent={<Button label="+ Add New Budget" />}
      />

      <div className="flex items-start gap-6 max-lg:flex-col ">
        <SpendingSummary />
        <BudgetsDetails />
      </div>
    </div>
  );
};
