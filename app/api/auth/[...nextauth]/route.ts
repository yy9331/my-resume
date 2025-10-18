import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      // Add GitHub username to session
      if (session.user && token.login) {
        session.user.username = token.login as string;
      }
      return session;
    },
    async jwt({ token, account, profile }) {
      // Persist GitHub username in token
      if (account && profile) {
        const githubProfile = profile as { login?: string };
        token.login = githubProfile.login;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
