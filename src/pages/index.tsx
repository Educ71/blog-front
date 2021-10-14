import { Stack, Flex, Box, Link, Heading, Button, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { usePostsQuery } from "../data/graphql/query/posts";

export default function Home() {
  const { data, loading } = usePostsQuery();
  return (
    <>
      <Stack mt={10}>
        {loading ? (
          <div>Loading ...</div>
        ) : (
          data?.posts?.edges?.map(({ cursor, node: post }) => (
            <Flex p={5} key={post.postId} shadow="md" borderWidth="1px">
              {/* <UpdootSection post={post} /> */}
              <Box flex={1}>
                <NextLink href="/post/[id]" as={`/post/${post.postId}`}>
                  <Link>
                    <Heading fontSize="xl">{post.title}</Heading>
                  </Link>
                </NextLink>
                <Text>by zezinho</Text>
                <Flex align="center">
                  <Text flex={1} mt={4}>
                    {post.content}
                  </Text>

                  {/* <Box ml="auto"><EditDeletePostButtons id={post.id} creatorId={post.creator.id} /></Box> */}
                </Flex>
              </Box>
            </Flex>
          ))
        )}
      </Stack>
      {/* {data?.posts.hasMore && (
        <Flex>
          <Button
            onClick={}
            m="auto"
            isLoading={fetching}
            my={8}
          >
            load more{" "}
          </Button>
        </Flex>
      )} */}
    </>
  );
}
