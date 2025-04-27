import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";
import dbConnect from "../../lib/mongodb";
import User from "../../models/User";

// Extend the NextAuth session types to include `id`, `points`, and `level`
// import { Session } from "next-auth";
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      points?: number;
      level?: number;
    };
  }
}

export const authOptions: NextAuthOptions = {
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
            // Create a new user in the database
            await User.create({
              name: user.name,
              email: user.email,
              image: user.image,
              emailVerified: true,  // You can set this to true assuming it's the first time login
              points: 0,            // Default points value
              level: 1,             // Default level value
            });
          }
          return true;
        } catch (error) {
          console.error("Error during sign-in:", error);
          return false;
        }
      }
      return true;
    },

    async session({ session }) {
      try {
        if (session.user) {
          // Fetch user data from the database to attach additional fields to the session
          await dbConnect();
          const user = await User.findOne({ email: session.user.email });
          if (user) {
            session.user.id = user._id.toString(); // Add `id` to session
            session.user.points = user.points;
            session.user.level = user.level;
          }
        }
      } catch (error) {
        console.error("Error getting session:", error);
      }
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        // Attach user ID to the JWT token
        token.id = user.id;
      }
      return token;
    },
  },
};
