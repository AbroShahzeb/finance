interface Props {
  title: string;
  rightComponent?: React.ReactNode | null;
}

export const PageHeader = ({ title, rightComponent = null }: Props) => {
  return (
    <div className="py-2 flex items-center justify-between">
      <h1 className="text-preset-1 text-primary-text font-bold">{title}</h1>
      {rightComponent && rightComponent}
    </div>
  );
};
