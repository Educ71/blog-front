/* eslint-disable */
import * as Types from '../../../../types.gql';

import { gql } from '@apollo/client';
import { BaseUserFragmentDoc } from '../../fragment/base-user/base-user.fragment.gql';
import * as Apollo from '@apollo/client';
export type LoginMutationVariables = Types.Exact<{
  data: Types.LoginInput;
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  login: {
    __typename?: 'LoginResponse';
    accessToken: string;
    user: {
      __typename?: 'UserResponse';
      bio?: string | null | undefined;
      createdAt: string;
      email: string;
      name: string;
      updatedAt: string;
      userId: string;
    };
  };
};

export const LoginDocument = gql`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      accessToken
      user {
        ...BaseUser
      }
    }
  }
  ${BaseUserFragmentDoc}
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
