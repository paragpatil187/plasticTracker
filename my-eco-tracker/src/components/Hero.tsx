export function Hero() {
    return (
      <section className="overflow-hidden relative px-5 py-20 text-center">
        <div className="relative">
          <video
            className="object-cover absolute top-0 left-0 rounded opacity-10 size-full"
            autoPlay
            muted
            playsInline
            loop
          >
            <source
              type="video/mp4"
              src="https://images.pexels.com/photos/31659064/pexels-photo-31659064.jpeg"
            />
          </video>
        </div>
        <div className="relative mx-auto my-0 max-w-[800px]">
          <h1 className="mb-8 text-6xl text-[white] max-sm:text-4xl">
            Track Your Green Impact
          </h1>
          <p className="mb-10 text-xl opacity-90 text-[white]">
            Join thousands of eco-warriors making a difference. Track your
            sustainable choices, earn rewards, and help save our planet.
          </p>
          <button className="px-10 py-4 text-lg font-semibold text-green-700 transition-transform cursor-pointer border-[none] duration-[0.2s] rounded-[30px]">
            Start Tracking Now
          </button>
        </div>
      </section>
    );
  }
  