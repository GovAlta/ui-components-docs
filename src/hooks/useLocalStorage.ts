import { useState } from "react";

function useLocalStorage(key: string, fallbackValue: string, callback?: (key: string, newValue: string) => void) {
  const [storedValue, setStoredValue] = useState<string>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? item : fallbackValue;
    } catch (error) {
      return fallbackValue;
    }
  });

  const setValue = (value: string) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, value);
      // Customized logic
      if (callback) {
        callback(key, value);
      }
    } catch (error) {
    }
  };

  return [storedValue, setValue] as const;
}

export default useLocalStorage;
