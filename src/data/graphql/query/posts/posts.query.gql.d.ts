import * as Types from '../../../../types';

export type PostsQueryVariables = Types.Exact<{
  data: Types.PostConnectionInput;
}>;


export type PostsQuery = { __typename?: 'Query', posts: { __typename?: 'PostConnection', edges?: Array<{ __typename?: 'PostResponseEdge', cursor: string, node: { __typename?: 'Post', authorId: string, claps: number, content: string, createdAt: Date, postId: string, published: boolean, title: string, updatedAt: Date } }> | null | undefined, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null | undefined, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null | undefined } } };

export declare const Posts: import("graphql").DocumentNode;