import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <Flex zIndex={1} position="sticky" top={0} bg="#7A2448" p={4}>
      <Flex flex={1} align="center" margin="auto">
        <NextLink href="/">
          <Link>
            <Heading>LireReddit</Heading>
          </Link>
        </NextLink>
        <Box ml={"auto"}>
          <NextLink href="/login">
            <Link mr={4}>Login</Link>
          </NextLink>
          <NextLink href="/register">
            <Link>register</Link>
          </NextLink>
        </Box>
      </Flex>
    </Flex>
  );
};
