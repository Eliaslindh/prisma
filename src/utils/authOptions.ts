import { AuthOptions, Session } from "next-auth";
import { CredentialsProvider } from "next-auth/providers/credentials";
import Credentials from "next-auth/providers/credentials";
import { db } from "./db";

type User = {
  id: string,
  name: string,
  password: string,
  email: string
}

export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',

      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        //database
        const user: User[] = await db.query("SELECT * FROm users_1 WHERE email = ?",
          [credentials?.username])

        if (user[0].password == credentials?.password) {
          return user[0]
        }
        return null
      },

    }),

  ],
  session: {
    strategy: 'jwt'
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET
  }
}