/* eslint-disable */
import {
  FieldPolicy,
  FieldReadFunction,
  TypePolicies,
  TypePolicy,
} from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {},
};
export default result;

export type LoginResponseKeySpecifier = (
  | 'accessToken'
  | 'user'
  | LoginResponseKeySpecifier
)[];
export type LoginResponseFieldPolicy = {
  accessToken?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MutationKeySpecifier = (
  | 'create'
  | 'createPost'
  | 'createUser'
  | 'login'
  | 'removePost'
  | 'removeUser'
  | 'updatePost'
  | 'updateUser'
  | MutationKeySpecifier
)[];
export type MutationFieldPolicy = {
  create?: FieldPolicy<any> | FieldReadFunction<any>;
  createPost?: FieldPolicy<any> | FieldReadFunction<any>;
  createUser?: FieldPolicy<any> | FieldReadFunction<any>;
  login?: FieldPolicy<any> | FieldReadFunction<any>;
  removePost?: FieldPolicy<any> | FieldReadFunction<any>;
  removeUser?: FieldPolicy<any> | FieldReadFunction<any>;
  updatePost?: FieldPolicy<any> | FieldReadFunction<any>;
  updateUser?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PageInfoKeySpecifier = (
  | 'endCursor'
  | 'hasNextPage'
  | 'hasPreviousPage'
  | 'startCursor'
  | PageInfoKeySpecifier
)[];
export type PageInfoFieldPolicy = {
  endCursor?: FieldPolicy<any> | FieldReadFunction<any>;
  hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>;
  startCursor?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostKeySpecifier = (
  | 'authorId'
  | 'claps'
  | 'content'
  | 'createdAt'
  | 'postId'
  | 'published'
  | 'title'
  | 'updatedAt'
  | PostKeySpecifier
)[];
export type PostFieldPolicy = {
  authorId?: FieldPolicy<any> | FieldReadFunction<any>;
  claps?: FieldPolicy<any> | FieldReadFunction<any>;
  content?: FieldPolicy<any> | FieldReadFunction<any>;
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  postId?: FieldPolicy<any> | FieldReadFunction<any>;
  published?: FieldPolicy<any> | FieldReadFunction<any>;
  title?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostConnectionKeySpecifier = (
  | 'edges'
  | 'pageInfo'
  | PostConnectionKeySpecifier
)[];
export type PostConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostResponseEdgeKeySpecifier = (
  | 'cursor'
  | 'node'
  | PostResponseEdgeKeySpecifier
)[];
export type PostResponseEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryKeySpecifier = (
  | 'hello'
  | 'post'
  | 'posts'
  | 'user'
  | QueryKeySpecifier
)[];
export type QueryFieldPolicy = {
  hello?: FieldPolicy<any> | FieldReadFunction<any>;
  post?: FieldPolicy<any> | FieldReadFunction<any>;
  posts?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserResponseKeySpecifier = (
  | 'bio'
  | 'createdAt'
  | 'email'
  | 'name'
  | 'updatedAt'
  | 'userId'
  | UserResponseKeySpecifier
)[];
export type UserResponseFieldPolicy = {
  bio?: FieldPolicy<any> | FieldReadFunction<any>;
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  email?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
  userId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StrictTypedTypePolicies = {
  LoginResponse?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | LoginResponseKeySpecifier
      | (() => undefined | LoginResponseKeySpecifier);
    fields?: LoginResponseFieldPolicy;
  };
  Mutation?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | MutationKeySpecifier
      | (() => undefined | MutationKeySpecifier);
    fields?: MutationFieldPolicy;
  };
  PageInfo?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | PageInfoKeySpecifier
      | (() => undefined | PageInfoKeySpecifier);
    fields?: PageInfoFieldPolicy;
  };
  Post?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | PostKeySpecifier | (() => undefined | PostKeySpecifier);
    fields?: PostFieldPolicy;
  };
  PostConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | PostConnectionKeySpecifier
      | (() => undefined | PostConnectionKeySpecifier);
    fields?: PostConnectionFieldPolicy;
  };
  PostResponseEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | PostResponseEdgeKeySpecifier
      | (() => undefined | PostResponseEdgeKeySpecifier);
    fields?: PostResponseEdgeFieldPolicy;
  };
  Query?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | QueryKeySpecifier
      | (() => undefined | QueryKeySpecifier);
    fields?: QueryFieldPolicy;
  };
  UserResponse?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | UserResponseKeySpecifier
      | (() => undefined | UserResponseKeySpecifier);
    fields?: UserResponseFieldPolicy;
  };
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;
export const namedOperations = {
  Query: {
    Posts: 'Posts' as const,
  },
  Mutation: {
    CreateUser: 'CreateUser' as const,
    Login: 'Login' as const,
  },
  Fragment: {
    BasePost: 'BasePost' as const,
    BaseUser: 'BaseUser' as const,
  },
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: string;
};

export type ConnectionInput = {
  after?: Maybe<Scalars['String']>;
  first: Scalars['Int'];
};

export type CreatePostInput = {
  authorId: Scalars['String'];
  content: Scalars['String'];
  published: Scalars['Boolean'];
  title: Scalars['String'];
};

export type CreateUserInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  /** user jwt access token */
  accessToken: Scalars['String'];
  user: UserResponse;
};

export type Mutation = {
  __typename?: 'Mutation';
  create: UserResponse;
  createPost: Post;
  createUser: UserResponse;
  login: LoginResponse;
  removePost: Post;
  removeUser: UserResponse;
  updatePost: Post;
  updateUser: UserResponse;
};

export type MutationCreateArgs = {
  data: SignupInput;
};

export type MutationCreatePostArgs = {
  data: CreatePostInput;
};

export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};

export type MutationLoginArgs = {
  data: LoginInput;
};

export type MutationRemovePostArgs = {
  postId: Scalars['String'];
};

export type MutationRemoveUserArgs = {
  id: Scalars['Int'];
};

export type MutationUpdatePostArgs = {
  updatePostInput: UpdatePostInput;
};

export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  authorId: Scalars['ID'];
  claps: Scalars['Int'];
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  postId: Scalars['ID'];
  published: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type PostConnection = {
  __typename?: 'PostConnection';
  edges?: Maybe<Array<PostResponseEdge>>;
  pageInfo: PageInfo;
};

export type PostConnectionInput = {
  pagination: ConnectionInput;
};

export type PostResponseEdge = {
  __typename?: 'PostResponseEdge';
  cursor: Scalars['String'];
  node: Post;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  post: Post;
  posts: PostConnection;
  user: UserResponse;
};

export type QueryPostArgs = {
  postId: Scalars['String'];
};

export type QueryPostsArgs = {
  data: PostConnectionInput;
};

export type QueryUserArgs = {
  id: Scalars['Int'];
};

export type SignupInput = {
  bio?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type UpdatePostInput = {
  content: Scalars['String'];
  postId: Scalars['String'];
  published: Scalars['Boolean'];
  title: Scalars['String'];
};

export type UpdateUserInput = {
  /** Example field (placeholder) */
  exampleField?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  bio?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['ID'];
};
