import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import dbConnect from "../../../lib/mongodb"; // Correct your path if needed
import User from "../../../models/User"; // Correct your path if needed

// --- Auth Options ---
const authOptions = {
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
          session.user.id = user._id.toString();
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

// --- API Route Handlers ---
const handler = NextAuth(authOptions);

export async function GET(request: Request) {
  return handler(request);
}

export async function POST(request: Request) {
  return handler(request);
}
