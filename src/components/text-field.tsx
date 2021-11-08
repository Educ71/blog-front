interface TextFieldProps {
  label: string;
  placeholder: string;
  type: string;
  name: string;
}

export function TextField({ label, placeholder, type, name }: TextFieldProps) {
  return (
    <label className="flex flex-col mb-3">
      {label}
      <input
        className="border border-gray-300 rounded p-2 focus:outline-none focus:border-8 focus:border-pink-900 focus:border-opacity-75"
        placeholder={placeholder}
        type={type}
        name={name}
      />
    </label>
  );
}
