import { useForm } from "react-hook-form";
import { Input } from "../input";
import { IconSearch } from "@/assets/svgAssets";

export const SearchBox = () => {
  const { register } = useForm();
  return (
    <Input
      postIcon={<IconSearch />}
      registerProps={register("query")}
      placeholder="Search bills"
    />
  );
};
