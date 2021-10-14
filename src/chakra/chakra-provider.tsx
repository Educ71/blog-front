import { ChakraProvider, cookieStorageManager, CSSReset, localStorageManager } from "@chakra-ui/react";
import React from "react";

export function Chakra({ cookies, children }: any) {
  const colorModeManager = typeof cookies === "string" ? cookieStorageManager(cookies) : localStorageManager;
  return (
    <ChakraProvider colorModeManager={colorModeManager}>
      <CSSReset />
      {children}
    </ChakraProvider>
  );
}

export function getServerSideProps({ req }: any) {
  return {
    props: {
      cookies: req.headers.cookie ?? "",
    },
  };
}
