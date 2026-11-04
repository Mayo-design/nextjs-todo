import type { Filter } from "@/types/todo";

type FilterTabsProps = {
  filter: Filter;
  onChange: (filter: Filter) => void;
};

const TABS: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "done", label: "Done" },
];

export default function FilterTabs({ filter, onChange }: FilterTabsProps) {
  return (
    <div className="flex gap-2">
      {TABS.map((tab) => (
        <button
          key={tab.value}
          type="button"
          onClick={() => onChange(tab.value)}
          className={`rounded-full px-4 py-1 text-sm font-medium ${
            filter === tab.value
              ? "bg-indigo-600 text-white"
              : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
