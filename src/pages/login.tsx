import { ApolloError } from '@apollo/client';
import { Button } from 'components/button';
import { TextField } from 'components/text-field';
import { useLoginMutation } from 'data/graphql/mutation/login';
import { LoginMutation } from 'data/graphql/mutation/login/login-user.mutation.gql';
import Router from 'next/router';
import React from 'react';

export default function Login() {
  const handleLoginComplete = (data: LoginMutation) => {
    sessionStorage.setItem('@auth-key', data?.login?.accessToken);

    Router.push('/index');
  };

  const handleLoginError = (error: ApolloError) => {
    alert(error.message);
  };

  const [login, { loading }] = useLoginMutation(
    handleLoginComplete,
    handleLoginError,
  );

  const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = event.target as typeof event.target & {
      userId: { value: string };
      password: { value: string };
    };

    const email = formData.userId.value;
    const password = formData.password.value;

    login({ variables: { data: { email, password } } });
  };

  return (
    <div className="bg-white p-10 rounded border border-pink-900">
      <h1 className="font-bold text-2xl mb-3">Login</h1>
      <form className="flex flex-col" onSubmit={handleLoginSubmit}>
        <TextField
          label="User ID"
          placeholder="Ex. admin"
          type="text"
          name="userId"
        />

        <TextField
          label="Password"
          placeholder="Ex. 12345"
          type="password"
          name="password"
        />

        <Button loading={loading}>Login</Button>
      </form>
    </div>
  );
}
