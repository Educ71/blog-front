import { FormField } from 'components/form-field'
import React from 'react'

export default function Login() {
  return (
    <div className="bg-white p-10 rounded border border-pink-900">
      <h1 className="font-bold text-2xl mb-3">Login</h1>
      <form
        className="flex flex-col"
        onSubmit={(event) => event.preventDefault()}
      >
        <FormField label="User ID" placeholder="Ex. admin" type="text" />

        <FormField label="Password" placeholder="Ex. 12345" type="password" />

        <input
          type="submit"
          value="Login"
          className="rounded bg-pink-900 text-white font-bold text-lg p-1 self-start px-10 shadow-lg cursor-pointer"
        />
      </form>
    </div>
  )
}
