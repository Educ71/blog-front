import * as Types from '../../../../types';

export type BaseUserFragment = { __typename?: 'UserResponse', bio?: string | null | undefined, createdAt: Date, email: string, name: string, updatedAt: Date, userId: string };

export declare const BaseUser: import("graphql").DocumentNode;