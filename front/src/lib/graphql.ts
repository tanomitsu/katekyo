import { cacheExchange, createClient, fetchExchange, ssrExchange } from "urql"

const isServerSide = typeof window === "undefined"
const ssrCache = ssrExchange({
  isClient: !isServerSide,
  // initialState: !isServerSide ? window.__URQL_DATA__ : undefined,
})

export const client = createClient({
  url: process.env.GRAPHQL_ENDPOINT || "",
  exchanges: [cacheExchange, ssrCache, fetchExchange],
})
