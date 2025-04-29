import { BillsTable, SearchAndSort } from "./components";

export const RecurringBillsTable = () => {
  return (
    <div className="p-8 flex flex-col gap-6 rounded-lg bg-white flex-1 w-full max-w-[1440px]">
      <SearchAndSort />

      <BillsTable />
    </div>
  );
};
