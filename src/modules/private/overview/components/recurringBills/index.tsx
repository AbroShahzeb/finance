import { Button } from "@/components";
import ROUTES from "@/constants/routes";
import { FormattedNumber } from "react-intl";
import { Link } from "react-router-dom";

export const RecurringBills = () => {
  return (
    <div className="p-8 rounded-lg bg-white flex flex-col gap-8">
      {/* Heading and Details Link    */}
      <div className="flex items-center gap-4 justify-between">
        <h3 className="text-preset-2 font-bold">Recurring Bills</h3>
        <Link to={ROUTES.RECURRING_BILLS}>
          <Button variant="tertiary" label="See Details" />
        </Link>
      </div>

      {/* Content  */}
      <div className="flex gap-3 flex-col">
        {/* Bills Paid Card  */}
        <div className="rounded-md bg-beige-100 py-5 px-4 flex items-center justify-between border-l-4 border-green">
          <span className="text-preset-4 text-secondary-text">Bills Paid</span>
          <span className="text-preset-4 font-bold text-primary-text">
            <FormattedNumber
              value={190}
              style="currency"
              currency="USD"
              minimumFractionDigits={2}
              maximumFractionDigits={2}
            />
          </span>
        </div>

        {/* Total Upcoming Card  */}
        <div className="rounded-md bg-beige-100 py-5 px-4 flex items-center justify-between border-l-4 border-yellow">
          <span className="text-preset-4 text-secondary-text">
            Total Upcoming
          </span>
          <span className="text-preset-4 font-bold text-primary-text">
            <FormattedNumber
              value={194.98}
              style="currency"
              currency="USD"
              minimumFractionDigits={2}
              maximumFractionDigits={2}
            />
          </span>
        </div>

        {/* Due Soon Card  */}
        <div className="rounded-md bg-beige-100 py-5 px-4 flex items-center justify-between border-l-4 border-cyan">
          <span className="text-preset-4 text-secondary-text">Due Soon</span>
          <span className="text-preset-4 font-bold text-primary-text">
            <FormattedNumber
              value={59.98}
              style="currency"
              currency="USD"
              minimumFractionDigits={2}
              maximumFractionDigits={2}
            />
          </span>
        </div>
      </div>
    </div>
  );
};
