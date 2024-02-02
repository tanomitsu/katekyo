import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  overwrite: true,
  schema: "src/app/api/graphql/schema/schema.graphql",
  generates: {
    "src/app/api/graphql/types/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
}

export default config
