import { ApolloError } from '@apollo/client';
import { Button } from 'components/button';
import { TextField } from 'components/text-field';
import { TextareaField } from 'components/textarea-field';
import { useSignUpMutation } from 'data/graphql/mutation/sign-up';
import Router from 'next/router';
import React from 'react';
import { validateEmail, validatePassword } from 'utils/field-validators';

export default function Login() {
  const handleCreateUserComplete = () => {
    Router.push('/login');
  };

  const handleCreateUserError = (error: ApolloError) => {
    alert(error.message);
  };

  const [createUser, { loading }] = useSignUpMutation(
    handleCreateUserComplete,
    handleCreateUserError,
  );

  const handleCreateUserSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = event.target as typeof event.target & {
      email: { value: string };
      name: { value: string };
      bio?: { value: string };
      password: { value: string };
    };

    const data = {
      email: formData.email.value,
      name: formData.name.value,
      bio: formData.bio?.value,
      password: formData.password.value,
    };

    const isDataValid = validateData(data);

    isDataValid && createUser({ variables: { data } });
  };

  return (
    <div className="bg-white p-10 rounded border border-pink-900">
      <h1 className="font-bold text-2xl mb-3">Registration form</h1>
      <form className="flex flex-col" onSubmit={handleCreateUserSubmit}>
        <TextField
          label="Name"
          placeholder="Ex. John Travolta"
          type="text"
          name="name"
        />

        <TextField
          label="Email"
          placeholder="Ex. user@email.com"
          type="email"
          name="email"
        />

        <TextareaField
          label="Bio"
          placeholder="Ex. Actor and dancer"
          name="bio"
        />

        <TextField
          label="Password"
          placeholder="Ex. 12345"
          type="password"
          name="password"
        />

        <Button loading={loading}>Register</Button>
      </form>
    </div>
  );
}

const validateData = (data: {
  email: any;
  name: any;
  bio?: string | undefined;
  password: any;
}) => {
  if (!validateEmail(data.email)) {
    alert('Email should be valid. Example: user@register.com');
    return false;
  }

  if (!validatePassword(data.password)) {
    alert(
      'Password should be minimum eight in length have at least one upper case letter, one lower case letter, one digit and one special character',
    );
    return false;
  }

  if (!data?.name) {
    alert('Name is required');
    return false;
  }

  return true;
};
