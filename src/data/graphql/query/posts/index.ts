import {
  PostsDocument,
  PostsQuery,
  PostsQueryVariables,
  PostsQueryResult,
} from './posts.query';
import { useQuery } from '@apollo/client';

export const usePostsQuery = (): PostsQueryResult => {
  return useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, {
    variables: { data: { pagination: { first: 10, after: null } } },
  });
};
