export function Impact() {
    const leaderboardData = ["Sarah G.", "Michael R.", "Emma T."];
  
    return (
      <section className="px-5 py-16 mt-10">
        <div className="mx-auto my-0 max-w-[1200px]">
          <h2 className="mb-10 text-4xl text-center text-green-700">
            Your Environmental Impact
          </h2>
          <div className="grid gap-8 grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
            <article className="p-8 rounded-2xl bg-neutral-100">
              <h3 className="mb-5 text-2xl">Achievement Badges</h3>
              <div className="grid gap-4 grid-cols-[repeat(3,1fr)]">
                <img
                  alt="Beginner Badge"
                  src="https://images.pexels.com/photos/29622540/pexels-photo-29622540.jpeg"
                  className="object-cover overflow-hidden w-full aspect-square"
                />
                <img
                  alt="Intermediate Badge"
                  src="https://images.pexels.com/photos/13882094/pexels-photo-13882094.jpeg"
                  className="object-cover overflow-hidden w-full aspect-square"
                />
                <img
                  alt="Advanced Badge"
                  src="https://images.pexels.com/photos/7048428/pexels-photo-7048428.jpeg"
                  className="object-cover overflow-hidden w-full aspect-square"
                />
              </div>
            </article>
            <article className="p-8 rounded-2xl bg-neutral-100">
              <h3 className="mb-5 text-2xl">Community Leaderboard</h3>
              <div className="flex flex-col gap-2.5">
                {leaderboardData.map((name, index) => (
                  <div
                    key={name}
                    className="flex justify-between p-2.5 rounded-lg"
                  >
                    <span>
                      {index + 1}. {name}
                    </span>
                    <span>{(3 - index) * 1000} points</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    );
  }
  