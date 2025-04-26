import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import dbConnect from "../../lib/mongodb";
import User from "../../models/User";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("GET error:", error); 
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function PUT(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();

    const data = await request.json();
    const user = await User.findOneAndUpdate(
      { email: session.user.email },
      { $set: data },
      { new: true },
    );

    return NextResponse.json(user);
  } catch (error) {
    console.error("GET error:", error); 
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
