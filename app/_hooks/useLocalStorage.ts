"use client"

import { useState } from 'react';

type keyName = string;
type newValue<T> = {
  content: T;
  stringify: boolean;
};

export const useLocalStorage = <T>(keyName: keyName) => {
  const [storedValue, setStoredValue] = useState<T | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  const setValue = ({
    content,
    stringify
  }: newValue<T>) => {
    if (typeof window === 'undefined') return;

    try {
      setIsLoading(true);
      const stringifiedValue = stringify ? JSON.stringify(content) : content;
      window.localStorage.setItem(keyName, stringifiedValue as unknown as string);
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false);
    }
    setStoredValue(content)
  };

  const removeValue = () => {
    try {
      setIsLoading(true);
      window.localStorage.removeItem(keyName);
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false);
    }
    setStoredValue(undefined)
  }

  return { storedValue, setValue, isLoading, removeValue };
};
