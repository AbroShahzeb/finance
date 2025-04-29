import { PageHeader } from "@/layout/dashboardLayout/components";
import { RecurringBillsSummary, RecurringBillsTable } from "./components";

export const RecurringBills = () => {
  return (
    <div className="flex-1 py-8 px-10 max-sm:py-6 max-sm:px-4 flex flex-col gap-8">
      <PageHeader title="Recurring Bills" />

      <div className="flex items-start gap-6 max-lg:flex-col">
        <RecurringBillsSummary />
        <RecurringBillsTable />
      </div>
    </div>
  );
};
