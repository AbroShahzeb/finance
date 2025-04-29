import { IconEllipsis } from "@/assets/svgAssets";
import { IPot } from "../..";
import { FormattedNumber } from "react-intl";
import { Button } from "@/components";

export const Pot = ({ name, color, totalSaved, targetAmount }: IPot) => {
  console.log("COlor", color);
  return (
    <div className="rounded-lg flex flex-col gap-8 bg-white p-6">
      {/* Heading and More Icon    */}
      <div className="flex items-center gap-4 justify-between">
        <div className="flex items-center gap-4">
          <span className={`size-4 rounded-md bg-${color}`}></span>
          <span className="text-preset-2 text-primary-text font-bold">
            {name}
          </span>
        </div>

        <div className="text-grey-300">
          <IconEllipsis />
        </div>
      </div>

      {/* Pot Details  */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="text-preset-5 text-secondary-text">Total Saved</span>
          <span className="text-primary-text font-bold text-preset-1">
            <FormattedNumber
              value={totalSaved}
              style="currency"
              currency="USD"
              minimumFractionDigits={2}
              maximumFractionDigits={2}
            />
          </span>
        </div>

        <div className="flex flex-col gap-[13px]">
          {/* Progress Bar  */}
          <div className="w-full h-2 rounded-sm bg-beige-100 relative">
            <div
              className={`bg-${color}  rounded-sm absolute left-0  top-0 bottom-0 h-2 `}
              style={{ width: `${(totalSaved / targetAmount) * 100}%` }}
            ></div>
          </div>

          <div className="flex items-center justify-between gap-4 text-preset-5">
            <span className="font-bold text-primary-text ">
              <FormattedNumber
                value={totalSaved / targetAmount}
                style="percent"
                maximumFractionDigits={2}
                minimumFractionDigits={2}
              />
            </span>
            <span className="text-secondary-text">
              Target of{" "}
              <FormattedNumber
                value={targetAmount}
                style="currency"
                currency="USD"
                minimumFractionDigits={2}
                maximumFractionDigits={2}
              />
            </span>
          </div>
        </div>
      </div>

      {/* Pot Actions  */}
      <div className="flex gap-4">
        <Button label="+ Add Money" variant="secondary" className="flex-1" />
        <Button label="Withdraw" variant="secondary" className="flex-1" />
      </div>
    </div>
  );
};
