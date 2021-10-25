interface FormFieldProps {
  label: string
  placeholder: string
  type: string
}

export function FormField({ label, placeholder, type }: FormFieldProps) {
  return (
    <label className="flex flex-col mb-3">
      {label}
      <input
        className="border border-gray-300 rounded p-2 focus:outline-none focus:border-8 focus:border-pink-900 focus:border-opacity-75"
        placeholder={placeholder}
        type={type}
      />
    </label>
  )
}
