/* eslint-disable */
import * as Types from '../../../../types.gql';

import { gql } from '@apollo/client';
export type BaseUserFragment = {
  __typename?: 'UserResponse';
  bio?: string | null | undefined;
  createdAt: string;
  email: string;
  name: string;
  updatedAt: string;
  userId: string;
};

export const BaseUserFragmentDoc = gql`
  fragment BaseUser on UserResponse {
    bio
    createdAt
    email
    name
    updatedAt
    userId
  }
`;
