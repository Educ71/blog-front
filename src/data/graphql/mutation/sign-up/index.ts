import { ApolloError, useMutation } from '@apollo/client';
import {
  SignUp,
  SignUpMutation,
  SignUpMutationVariables,
} from './sign-up.mutation.gql';

export const useSignUpMutation = (
  onCompleted?: () => void,
  onError?: (error: ApolloError) => void,
) => {
  return useMutation<SignUpMutation, SignUpMutationVariables>(SignUp, {
    onCompleted,
    onError,
  });
};
