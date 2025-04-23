"use client";
import * as React from "react";
import { useState } from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Features } from "./Features";
import { Stats } from "./Stats";
import { ActivityTracker } from "./ActivityTracker";
import { Impact } from "./Impact";

export interface ActivityItem {
  id: number;
  name: string;
  date: string;
  points: number;
}

export function EcoTracker() {
  const [points, setPoints] = useState(() => 0);
  const [currentItem, setCurrentItem] = useState(() => "");
  const [usageDate, setUsageDate] = useState(
    () => new Date().toISOString().split("T")[0],
  );
  const [items, setItems] = useState<ActivityItem[]>(() => []);
  const [isMenuOpen, setIsMenuOpen] = useState(() => false);

  function addItem() {
    if (!currentItem) return;
    const points = 10;
    const newItems = [
      {
        id: Date.now(),
        name: currentItem,
        date: usageDate,
        points,
      },
      ...items,
    ];
    setItems(newItems);
    setPoints(points);
    setCurrentItem("");
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <main className="bg-stone-100 text-zinc-800">
      <Header isMenuOpen={isMenuOpen} onToggleMenu={toggleMenu} />
      <Hero />
      <section className="px-5 py-10 mx-auto my-0 max-w-[1200px] max-sm:px-4 max-sm:py-5">
        <Features />
        <Stats points={points} itemCount={items.length} />
        <ActivityTracker
          currentItem={currentItem}
          usageDate={usageDate}
          onItemChange={setCurrentItem}
          onDateChange={setUsageDate}
          onAddItem={addItem}
          items={items}
        />
        <Impact />
      </section>
    </main>
  );
}

export default EcoTracker;
