import { IconBillDue, IconBillPaid } from "@/assets/svgAssets";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AquaFlowUtilites,
  ByteWise,
  EcofuelEnergy,
  ElevateEducation,
  NimbusDataStorage,
  PixelPlayground,
  SerenitySpaAndWellness,
  SparkElectricSolutions,
} from "@/constants/images";
import { useIntl, IntlShape, FormattedNumber } from "react-intl";

interface Bill {
  id: number;
  avatar: string;
  name: string;
  frequency: "monthly" | "yearly";
  status: "paid" | "due" | "upcoming";
  amount: number;
  date: number;
}

const BILLS_DATA: Bill[] = [
  {
    id: 0,
    avatar: SparkElectricSolutions,
    name: "Spark Electric Solutions",
    frequency: "monthly",
    status: "paid",
    amount: 100,
    date: 2,
  },
  {
    id: 1,
    avatar: SerenitySpaAndWellness,
    name: "Serenity Spa and Wellness",
    frequency: "monthly",
    status: "paid",
    amount: 30,
    date: 3,
  },
  {
    id: 2,
    avatar: ElevateEducation,
    name: "Elevate Education",
    frequency: "monthly",
    status: "paid",
    amount: 50,
    date: 4,
  },
  {
    id: 3,
    avatar: PixelPlayground,
    name: "Pixel Playground",
    frequency: "monthly",
    status: "paid",
    amount: 10,
    date: 11,
  },
  {
    id: 4,
    avatar: NimbusDataStorage,
    name: "Nimbus Data Storage",
    frequency: "monthly",
    status: "due",
    amount: 9.99,
    date: 21,
  },
  {
    id: 5,
    avatar: ByteWise,
    name: "Byte Wise",
    frequency: "monthly",
    status: "due",
    amount: 49.99,
    date: 23,
  },
  {
    id: 6,
    avatar: EcofuelEnergy,
    name: "EcoFuel Energy",
    frequency: "monthly",
    status: "upcoming",
    amount: 35,
    date: 29,
  },
  {
    id: 7,
    avatar: AquaFlowUtilites,
    name: "Aqua Flow Utilities",
    frequency: "monthly",
    status: "upcoming",
    amount: 100,
    date: 30,
  },
];

export const BillsTable = () => {
  const intl = useIntl();
  const getOrdinal = (intl: IntlShape, value: number): string => {
    const suffixes: Record<string, string> = {
      one: "st",
      two: "nd",
      few: "rd",
      other: "th",
    };

    const rule = new Intl.PluralRules(intl.locale, { type: "ordinal" });
    const suffix = suffixes[rule.select(value)] || "th";

    return `${value}${suffix}`;
  };
  return (
    <div className="max-lg:flex-1 w-full">
      <Table className="max-lg:flex-1 w-full">
        <TableHeader>
          <TableRow className="h-[42px] max-sm:hidden">
            <TableHead className=" text-preset-5 text-secondary-text">
              Bill Title
            </TableHead>
            <TableHead className="text-preset-5 text-secondary-text">
              Due Date
            </TableHead>
            <TableHead className="text-right text-preset-5 text-secondary-text">
              Amount
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="divide-y divide-grey-100">
          {BILLS_DATA.map((bill: Bill) => (
            <TableRow key={bill.id}>
              <TableCell className="font-medium max-sm:hidden">
                <div className="flex items-center gap-4 py-5">
                  <span className="flex-shrink-0">
                    <img src={bill.avatar} className="size-8 rounded-full" />
                  </span>
                  <span className="text-preset-4 font-bold text-primary-text">
                    {bill.name}
                  </span>
                </div>
              </TableCell>

              <TableCell className="max-sm:hidden">
                <div className="py-5 flex items-center gap-2">
                  <div
                    className={`${
                      bill.status === "paid"
                        ? "text-green"
                        : bill.status === "due"
                        ? "text-red"
                        : "text-secondary-text"
                    } `}
                  >
                    <span>
                      {bill.frequency.charAt(0).toUpperCase() +
                        bill.frequency.slice(1)}
                    </span>
                    -<span>{getOrdinal(intl, bill.date)}</span>
                  </div>
                  {bill.status === "paid" && (
                    <span>
                      <IconBillPaid />
                    </span>
                  )}
                  {bill.status === "due" && (
                    <span>
                      <IconBillDue />
                    </span>
                  )}
                </div>
              </TableCell>

              <TableCell
                className={`py-5 text-right text-preset-4 font-bold max-sm:hidden  ${
                  bill.status === "due" ? "text-red" : "text-primary-text"
                }`}
              >
                <FormattedNumber
                  value={bill.amount}
                  style="currency"
                  currency="USD"
                  minimumFractionDigits={2}
                  maximumFractionDigits={2}
                />
              </TableCell>

              {/* Only One table Cell For smaller Screens  */}
              <TableCell className="sm:hidden flex flex-col gap-2 py-5 px-0">
                <div className="flex items-center gap-4 ">
                  <span className="flex-shrink-0">
                    <img src={bill.avatar} className="size-8 rounded-full" />
                  </span>
                  <span className="text-preset-4 font-bold text-primary-text">
                    {bill.name}
                  </span>
                </div>
                <div className="flex items-center gap-4 justify-between">
                  <div className=" flex items-center gap-2">
                    <div
                      className={`${
                        bill.status === "paid"
                          ? "text-green"
                          : bill.status === "due"
                          ? "text-red"
                          : "text-secondary-text"
                      } `}
                    >
                      <span>
                        {bill.frequency.charAt(0).toUpperCase() +
                          bill.frequency.slice(1)}
                      </span>
                      -<span>{getOrdinal(intl, bill.date)}</span>
                    </div>
                    {bill.status === "paid" && (
                      <span>
                        <IconBillPaid />
                      </span>
                    )}
                    {bill.status === "due" && (
                      <span>
                        <IconBillDue />
                      </span>
                    )}
                  </div>
                  <div
                    className={`text-right text-preset-4 font-bold  ${
                      bill.status === "due" ? "text-red" : "text-primary-text"
                    }`}
                  >
                    <FormattedNumber
                      value={bill.amount}
                      style="currency"
                      currency="USD"
                      minimumFractionDigits={2}
                      maximumFractionDigits={2}
                    />
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
