interface TextareaFieldProps {
  label: string;
  placeholder: string;
  name: string;
}

export function TextareaField({
  label,
  placeholder,
  name,
}: TextareaFieldProps) {
  return (
    <label className="flex flex-col mb-3">
      {label}
      <textarea
        className="border border-gray-300 rounded p-2 focus:outline-none focus:border-8 focus:border-pink-900 focus:border-opacity-75"
        placeholder={placeholder}
        name={name}
      />
    </label>
  );
}
