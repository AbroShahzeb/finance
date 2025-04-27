import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Props {
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  label?: string;
  preIcon?: React.ReactNode | null;
  postIcon?: React.ReactNode | null;
  hint?: string;
  error?: string;
}

export const Dropdown = ({
  selectedValue = "Select value",
  setSelectedValue,
  label,
  preIcon,
  postIcon,
  hint,
  error,
}: Props) => {
  const handleSelect = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <div className="text-preset-5 font-bold text-grey-500">{label}</div>
      )}

      <DropdownMenu className="w-full">
        <DropdownMenuTrigger asChild>
          <div className="flex items-center  w-full gap-4 px-4 bg-white rounded-lg border border-beige-500 text-preset-4">
            {preIcon && preIcon}
            <div className="flex-1 py-3 placeholder:text-beige-500 text-grey-900 focus:outline-none">
              {selectedValue}
            </div>
            {postIcon && postIcon}
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="start"
          sideOffset={4}
          className="mt-1 divide-y rounded-lg flex flex-col bg-white shadow-[0px_4px_24px_0px_rgba(0,_0,_0,_0.25)]"
          style={{ width: "var(--radix-dropdown-menu-trigger-width)" }}
        >
          <DropdownMenuItem
            onClick={() => handleSelect("Settings")}
            className="px-5 py-3 rounded-none text-preset-4 text-grey-900"
          >
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleSelect("Favorites")}
            className="px-5 py-3 rounded-none text-preset-4 text-grey-900"
          >
            Favorites
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {hint && (
        <div
          className={`text-preset-5
             "text-grey-500"
             text-right`}
        >
          {hint}
        </div>
      )}

      {error && (
        <div
          className={`text-preset-5
             text-red
             text-right`}
        >
          {error}
        </div>
      )}
    </div>
  );
};
