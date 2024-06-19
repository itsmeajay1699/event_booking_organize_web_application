import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/db";

const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const email = credentials?.email;
        const password = credentials?.password;

        const user = await prisma.user.findFirst({
          where: {
            email: email,
          },
        });

        if (user && user.password === password) {
          return user;
        }

        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID ?? "",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET ?? "",
    }),
  ],

  callbacks: {
    // async signIn({ user, account, profile, email, credentials }) {
    //   console.log(account?.provider, "account");

    //   if (account?.provider === "google") {
    //     if (user?.role) {
    //       return "/select-role";
    //     }
    //   }

    //   const isAllowedToSignIn = true;
    //   if (isAllowedToSignIn) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // },

    async jwt({ token, user }) {
      if (user?.id) {
        token._id = user.id;
        token.role = user?.role as number;
      }
      return token;
    },
    async session({ session, token, user }) {
      // user id is stored in ._id when using credentials provider
      if (token?._id) session.user.id = token._id as string;
      if (token?.role) session.user.role = token.role as number;

      // user id is stored sub ._id when using google provider
      // if (token?.sub) session.user._id = token.sub;

      // we'll update the session object with those
      // informations besides the ones it already has
      return session;
    },
  },
  secret: process.env.NEXT_AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
};

export default authOptions;
