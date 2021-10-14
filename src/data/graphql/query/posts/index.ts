import { Posts, PostsQuery, PostsQueryVariables } from "./posts.query.gql";
import { useQuery } from "@apollo/client";

export const usePostsQuery = () => {
  return useQuery<PostsQuery, PostsQueryVariables>(Posts, {
    variables: { data: { pagination: { first: 10, after: null } } },
  });
};
