interface Props {
  label?: string;
  preIcon?: React.ReactNode | null;
  postIcon?: React.ReactNode | null;
  hint?: string;
  error?: string;
  placeholder?: string;
  type?: string;
  registerProps?: React.InputHTMLAttributes<HTMLInputElement>;
  disabled?: boolean;
}

export const Input = ({
  label,
  preIcon,
  postIcon,
  hint,
  error,
  placeholder,
  type,
  registerProps,
  disabled,
}: Props) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <div className="text-preset-5 font-bold text-grey-500">{label}</div>
      )}
      <div className="flex items-center gap-4 px-4 bg-white rounded-lg border border-beige-500 text-preset-4 text-grey-500 focus-within:text-grey-900 transition-all">
        {preIcon && preIcon}
        <input
          type={type || "text"}
          disabled={disabled}
          placeholder={placeholder}
          className="flex-1 py-3 placeholder:text-beige-500 text-grey-900 focus:outline-none"
          {...registerProps}
        />
        {postIcon && postIcon}
      </div>
      {hint && (
        <div
          className={`text-preset-5
             text-grey-500
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
