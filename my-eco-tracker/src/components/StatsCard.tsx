interface StatsCardProps {
    value: React.ReactNode;
    label: string;
  }
  
  export function StatsCard({ value, label }: StatsCardProps) {
    return (
      <article className="p-8 text-center rounded-xl shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
        <div className="mb-2.5 text-5xl text-green-700 font-[bold]">{value}</div>
        <div className="text-base text-stone-500">{label}</div>
      </article>
    );
  }
  