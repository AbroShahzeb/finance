import { IconCaretDown } from "@/assets/svgAssets";
import { Dropdown } from "@/components";
import { useState } from "react";

export const SortByDropdown = () => {
  const [selectedValue, setSelectedValue] = useState("Latest");
  const options = ["Latest", "Oldest", "Highest", "Lowest"];
  return (
    <Dropdown
      postIcon={<IconCaretDown />}
      selectedValue={selectedValue}
      setSelectedValue={setSelectedValue}
      options={options}
    />
  );
};
