// app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import dbConnect from "../../../lib/mongodb";
import User from "../../../models/User";

// NextAuth configuration
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        try {
          await dbConnect();
          const existingUser = await User.findOne({ email: user.email });

          if (!existingUser) {
            await User.create({
              name: user.name,
              email: user.email,
              image: user.image,
              emailVerified: user.emailVerified,
            });
          }
          return true;
        } catch (error) {
          console.error("Error during sign in:", error);
          return false;
        }
      }
      return true;
    },
    async session({ session }) {
      try {
        await dbConnect();
        const user = await User.findOne({ email: session.user.email });
        if (user) {
          session.user.id = user._id;
          session.user.points = user.points;
          session.user.level = user.level;
        }
      } catch (error) {
        console.error("Error getting session:", error);
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
};

// Default handler for the NextAuth API
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
