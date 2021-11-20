/* eslint-disable */
import * as Types from '../../../../types.gql';

import { gql } from '@apollo/client';
export type BasePostFragment = {
  __typename?: 'Post';
  authorId: string;
  claps: number;
  content: string;
  createdAt: string;
  postId: string;
  published: boolean;
  title: string;
  updatedAt: string;
};

export const BasePostFragmentDoc = gql`
  fragment BasePost on Post {
    authorId
    claps
    content
    createdAt
    postId
    published
    title
    updatedAt
  }
`;
