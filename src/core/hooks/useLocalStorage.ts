"use client";

import { useState, useEffect } from "react";

function getStorageValue<T>(key: string, defaultValue: T): T {
  if (typeof window !== "undefined") {
    // Check if running in browser
    const saved = localStorage.getItem(key);
    const initial = saved ? JSON.parse(saved) : defaultValue;
    return initial;
  }
  return defaultValue;
}

export function useLocalStorage<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState<T>(() =>
    getStorageValue(key, defaultValue),
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue] as const;
}
