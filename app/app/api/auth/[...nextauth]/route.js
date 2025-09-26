// app/api/auth/[...nextauth]/route.ts  (or wherever your route is)
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma"; // adjust if your path differs

const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    wellKnown: "https://accounts.google.com/.well-known/openid-configuration",
    authorization: { params: { prompt: "consent", access_type: "offline", response_type: "code" } },
    httpOptions: { timeout: 10000 }, // 10 seconds
  }),
],

  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // include user.id on the session object (convenience)
    async session({ session, user }) {
      if (session?.user) {
        (session.user).id = user.id;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
