import { Button } from "@/components";
import { PageHeader } from "@/layout/dashboardLayout/components";
import { Pot } from "./components";

export interface IPot {
  id: number;
  name: string;
  color: string;
  totalSaved: number;
  targetAmount: number;
}

const POTS_DATA: IPot[] = [
  {
    id: 0,
    name: "Savings",
    color: "green",
    totalSaved: 159,
    targetAmount: 2000,
  },
  {
    id: 1,
    name: "Concert Ticket",
    color: "navy",
    totalSaved: 110,
    targetAmount: 150,
  },
  {
    id: 2,
    name: "Gift",
    color: "cyan",
    totalSaved: 40,
    targetAmount: 60,
  },
  {
    id: 3,
    name: "New Laptop",
    color: "yellow",
    totalSaved: 10,
    targetAmount: 1000,
  },
  {
    id: 4,
    name: "Holiday",
    color: "red",
    totalSaved: 531,
    targetAmount: 1440,
  },
];

export const Pots = () => {
  return (
    <div className="flex-1 py-8 px-10 max-sm:py-6 max-sm:px-4 flex flex-col gap-8">
      <PageHeader
        title="Pots"
        rightComponent={<Button label="+ Add New Pot" />}
      />

      <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
        {POTS_DATA.map((pot: IPot) => (
          <Pot key={pot.id} {...pot} />
        ))}
      </div>
    </div>
  );
};
