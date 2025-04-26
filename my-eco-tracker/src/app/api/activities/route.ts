import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import dbConnect from "../../lib/mongodb";
import Activity from "../../models/Activity";
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
    const activities = await Activity.find({ userId: user._id })
      .sort({ createdAt: -1 })
      .limit(10);

    return NextResponse.json(activities);
  } catch (error) {
    console.error("GET error:", error); 
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();

    const user = await User.findOne({ email: session.user.email });
    const data = await request.json();

    const activity = await Activity.create({
      userId: user._id,
      name: data.name,
      date: new Date(data.date),
      points: data.points,
    });

    // Update user points
    await User.findByIdAndUpdate(user._id, {
      $inc: { points: data.points },
      level: Math.floor((user.points + data.points) / 100) + 1,
    });

    return NextResponse.json(activity);
  } catch (error) {
    console.error("GET error:", error); 
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
