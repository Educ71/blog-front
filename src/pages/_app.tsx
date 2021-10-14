// _app.jsx
import React from "react";
import { AppProps } from "next/app";
import { Provider } from "next-auth/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Layout } from "../components/layout";
import { StrictTypedTypePolicies } from "../types";
import { Chakra } from "../chakra/chakra-provider";

export const Token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1NDQ5OTY5OS0xNTBmLTQxMjktYjE2YS0yMTU3MDM0NTU1YTciLCJ1c2VybmFtZSI6ImVzZHJhcyIsImlhdCI6MTYzNDE3NjY5OCwiZXhwIjoxNjM0MjYzMDk4fQ.kpxGoFlvgrpI4Xj6p9K1icK4IYQY3LGqXS81MNnqSv4";

const typePolicies: StrictTypedTypePolicies = {
  // LoginResponse: {
  //   fields: {
  //     user: {
  //       merge: true,
  //     },
  //   },
  // },
};

const client = new ApolloClient({
  connectToDevTools: process.env.NODE_ENV !== "production",
  headers: { Authorization: Token },
  uri: "https://serene-woodland-54282.herokuapp.com/graphql",
  cache: new InMemoryCache({ typePolicies }),
});

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <ApolloProvider client={client}>
        <Chakra>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Chakra>
      </ApolloProvider>
    </Provider>
  );
}

export default App;
