import * as Types from '../../../../types';

export type CreateUserMutationVariables = Types.Exact<{
  data: Types.SignupInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', create: { __typename?: 'UserResponse', bio?: string | null | undefined, createdAt: Date, email: string, name: string, updatedAt: Date, userId: string } };

export declare const CreateUser: import("graphql").DocumentNode;