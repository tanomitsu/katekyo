import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

export const options: NextAuthOptions = {
  debug: true,
  session: { strategy: "jwt" },
  providers: [
    // GitHubProvider({
    //   clientId: process.env.GITHUB_ID!,
    //   clientSecret: process.env.GITHUB_SECRET!,
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      // メルアド認証処理
      async authorize(credentials) {
        // TODO: メアド認証でバックエンドのユーザーを参照する
        const users = [
          { id: "1", email: "user1@example.com", password: "password1" },
          { id: "2", email: "user2@example.com", password: "password2" },
          { id: "3", email: "abc@abc", password: "123" },
        ]

        const user = users.find((user) => user.email === credentials?.email)

        if (user && user?.password === credentials?.password) {
          return {
            id: user.id,
            name: user.email,
            email: user.email,
            role: "admin",
          }
        } else {
          return null
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user, account, profile }) => {
      // DEBUG: トークンを出力(プロダクションでは削除)
      console.log("in jwt", { user, token, account, profile })

      if (user) {
        token.user = user
        const u = user as any
        token.role = u.role
      }
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    session: ({ session, token }) => {
      console.log("in session", { session, token })
      token.accessToken
      return {
        ...session,
        user: {
          ...session.user,
          role: token.role,
        },
      }
    },
    async redirect({ url, baseUrl }) {
      // ユーザーがログインしている場合はposts/にリダイレクト
      return url.startsWith(baseUrl) ? url : baseUrl + "/posts/"
    },
  },
}
