import { ActivityItem } from "./EcoTracker";

interface ActivityListProps {
  items: ActivityItem[];
}

export function ActivityList({ items }: ActivityListProps) {
  return (
    <div className="p-8 mt-10 rounded-xl bg-[white] shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
      <h2 className="mb-4 text-xl font-semibold text-slate-700">
        Recent Activity
      </h2>
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <article
            className="flex justify-between items-center p-4 rounded-lg border border-solid bg-[white] border-neutral-200"
            key={item.id}
          >
            <div>
              <div className="text-base font-medium text-slate-700">
                {item.name}
              </div>
              <time className="text-sm text-gray-500">{item.date}</time>
            </div>
            <div className="text-base font-medium text-green-500">
              +{item.points} points
            </div>
          </article>
        ))}
        {items.length === 0 && (
          <p className="p-8 text-center text-gray-500">
            No activities logged yet. Start tracking your eco-friendly choices!
          </p>
        )}
      </div>
    </div>
  );
}
