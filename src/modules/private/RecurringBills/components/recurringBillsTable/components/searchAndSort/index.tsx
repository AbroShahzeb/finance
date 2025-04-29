import { IconSortMobile } from "@/assets/svgAssets";
import { SearchBox } from "@/components";
import { SortByDropdown } from "@/dropdowns";

export const SearchAndSort = () => {
  return (
    <div className="flex items-center gap-4 justify-between">
      <div className="max-w-[320px] w-full">
        <SearchBox />
      </div>
      <div className="sm:hidden">
        <IconSortMobile />
      </div>
      <div className="flex items-center gap-2 max-sm:hidden">
        <span className="text-preset-4 text-secondary-text">Sort by</span>
        <SortByDropdown />
      </div>
    </div>
  );
};
