import * as Types from '../../../../types';

export type LoginMutationVariables = Types.Exact<{
  data: Types.LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', accessToken: string, user: { __typename?: 'UserResponse', bio?: string | null | undefined, createdAt: Date, email: string, name: string, updatedAt: Date, userId: string } } };

export declare const Login: import("graphql").DocumentNode;