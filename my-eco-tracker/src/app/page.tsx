import { Suspense } from "react";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "../app/api/auth/authOptions";
import { EcoTracker } from "@/components/EcoTracker";
import { Carousel } from "@/components/Carousel";

async function getUserData(email: string) {
  try {
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/user`, {
      method: "POST", // optionally, if you want POST
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }), // Send email in body
      cache: "no-store",
    });

    if (!response.ok) throw new Error("Failed to fetch user data");
    return response.json();
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
}

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const userData = session.user?.email
    ? await getUserData(session.user.email)
    : null;

  return (
    <div className="min-h-screen bg-stone-100">
      <section className="relative">
        <Suspense fallback={<div>Loading carousel...</div>}>
          <Carousel />
        </Suspense>
      </section>

      <section className="px-4 py-8 mx-auto max-w-7xl">
        {userData && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-green-700">
              Welcome back, {userData.name}!
            </h2>
            <p className="text-gray-600">
              Current Level: {userData.level} | Total Points: {userData.points}
            </p>
          </div>
        )}

        <Suspense fallback={<div>Loading tracker...</div>}>
          <EcoTracker />
        </Suspense>
      </section>

      {/* Environmental Impact Stats */}
      <section className="bg-green-50 py-12">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
            Your Environmental Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">
                {userData?.points || 0}
              </div>
              <p className="text-gray-600">Total Eco Points</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">
                {Math.floor((userData?.points || 0) / 10)}
              </div>
              <p className="text-gray-600">Activities Logged</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">
                Level {userData?.level || 1}
              </div>
              <p className="text-gray-600">Current Level</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-700 text-white py-16">
        <div className="px-4 mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Make a Bigger Impact?
          </h2>
          <p className="mb-8 text-lg">
            Join our community challenges and multiply your eco-impact!
          </p>
          <button className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors">
            Join Challenge
          </button>
        </div>
      </section>
    </div>
  );
}
