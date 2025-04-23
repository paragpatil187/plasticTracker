import { StatsCard } from "./StatsCard";

interface StatsProps {
  points: number;
  itemCount: number;
}

export function Stats({ points, itemCount }: StatsProps) {
  return (
    <section className="flex flex-col gap-8 mb-16">
      <div className="grid gap-5 mb-10 grid-cols-[repeat(3,1fr)] max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
        <StatsCard value={points} label="Total Points" />
        <StatsCard value={itemCount} label="Items Logged" />
        <StatsCard
          value={<>Level {Math.floor(points / 100) + 1}</>}
          label="Current Level"
        />
      </div>
      <h1 className="mb-4 text-2xl font-bold text-slate-700">
        Eco-Friendly Product Tracker
      </h1>
      <div className="text-5xl text-green-500 font-[bold]">{points}</div>
      <div className="text-lg text-gray-500">Total Points Earned</div>
    </section>
  );
}
