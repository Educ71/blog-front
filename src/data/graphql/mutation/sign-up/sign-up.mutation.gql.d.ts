import * as Types from '../../../../types';

export type SignUpMutationVariables = Types.Exact<{
  data: Types.SignupInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signup: { __typename?: 'UserResponse', bio?: string | null | undefined, createdAt: Date, email: string, name: string, updatedAt: Date, userId: string } };

export declare const SignUp: import("graphql").DocumentNode;