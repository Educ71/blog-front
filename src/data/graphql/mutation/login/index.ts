import { ApolloError, useMutation } from '@apollo/client';
import {
  Login,
  LoginMutation,
  LoginMutationVariables,
} from './login-user.mutation.gql';

export const useLoginMutation = (
  onCompleted?: (data: LoginMutation) => void,
  onError?: (error: ApolloError) => void,
) => {
  return useMutation<LoginMutation, LoginMutationVariables>(Login, {
    onCompleted,
    onError,
  });
};
