import { ActivityItem } from "./EcoTracker";
import { ActivityList } from "./ActivityList";

interface ActivityTrackerProps {
  currentItem: string;
  usageDate: string;
  onItemChange: (value: string) => void;
  onDateChange: (value: string) => void;
  onAddItem: () => void;
  items: ActivityItem[];
}

export function ActivityTracker({
  currentItem,
  usageDate,
  onItemChange,
  onDateChange,
  onAddItem,
  items,
}: ActivityTrackerProps) {
  return (
    <section>
      <div className="flex gap-4 max-sm:flex-col">
        <input
          className="flex-1 p-4 text-base rounded-lg border-2 border-green-100 border-solid bg-[white]"
          type="text"
          placeholder="What eco-friendly product did you use?"
          value={currentItem}
          onChange={(e) => onItemChange(e.target.value)}
        />
        <input
          className="p-3 text-base rounded-lg border-2 border-solid border-neutral-200"
          type="date"
          value={usageDate}
          onChange={(e) => onDateChange(e.target.value)}
        />
        <button
          className="px-8 py-4 text-base font-semibold bg-green-700 rounded-lg transition-all cursor-pointer border-[none] duration-[0.2s] text-[white]"
          onClick={onAddItem}
        >
          Log Usage
        </button>
      </div>
      <ActivityList items={items} />
    </section>
  );
}
