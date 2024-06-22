'use client';

import { useState, useEffect } from 'react';

function getStorageValue<T>(key: string, defaultValue: T): T {
  const saved = localStorage.getItem(key);
  const initial = saved ? JSON.parse(saved) : defaultValue;
  return initial;
}

export function useLocalStorage<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState<T>(() =>
    getStorageValue(key, defaultValue),
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}

/**
 * 1. key (string): A unique key to store the value under in localStorage.
 * 2. defaultValue (any): The initial value to use if there is no item in localStorage with the specified key.
 * const [count, setCount] = useLocalStorage('counter', 0);
 * <button onClick={() => setCount(count + 1)}>Increment</button>
 */
