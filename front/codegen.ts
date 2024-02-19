import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8000/api/graphql",
  documents: ["./src/**/*.tsx", "./src/**/*.gql"],
  generates: {
    "src/generated/": {
      preset: "client",
      plugins: [],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
}

export default config
