interface Props {
  title: string;
}

export const PageHeader = ({ title }: Props) => {
  return (
    <div className="py-2">
      <h1 className="text-preset-1 text-primary-text font-bold">{title}</h1>
    </div>
  );
};
