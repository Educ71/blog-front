import { ApolloError, useMutation } from '@apollo/client';
import {
  CreateUser,
  CreateUserMutation,
  CreateUserMutationVariables,
} from './create-user.mutation.gql';

export const useCreateUserMutation = (
  onCompleted?: () => void,
  onError?: (error: ApolloError) => void,
) => {
  return useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUser,
    {
      onCompleted,
      onError,
    },
  );
};
