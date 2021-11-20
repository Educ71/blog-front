/* eslint-disable */
import * as Types from '../../../../types.gql';

import { gql } from '@apollo/client';
import { BasePostFragmentDoc } from '../../fragment/base-post/base-post.fragment.gql';
import * as Apollo from '@apollo/client';
export type PostsQueryVariables = Types.Exact<{
  data: Types.PostConnectionInput;
}>;

export type PostsQuery = {
  __typename?: 'Query';
  posts: {
    __typename?: 'PostConnection';
    edges?:
      | Array<{
          __typename?: 'PostResponseEdge';
          cursor: string;
          node: {
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
        }>
      | null
      | undefined;
    pageInfo: {
      __typename?: 'PageInfo';
      endCursor?: string | null | undefined;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      startCursor?: string | null | undefined;
    };
  };
};

export const PostsDocument = gql`
  query Posts($data: PostConnectionInput!) {
    posts(data: $data) {
      edges {
        node {
          ...BasePost
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
  ${BasePostFragmentDoc}
`;
export type PostsQueryResult = Apollo.QueryResult<
  PostsQuery,
  PostsQueryVariables
>;
