"use client"

import { create } from 'zustand';
import storage from 'app/_utils/storage';

interface UserDataInterface {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface UserDataStoreInterface {
  userData: UserDataInterface | null;
  setUserData: (userData: UserDataInterface) => void;
}

export const useUserData = create<UserDataStoreInterface>((set) => ({
  userData: storage.getStorage<UserDataInterface>('user_data'),
  setUserData: (userData: UserDataInterface) => {
    set(() => ({ userData }));
    storage.setStorage('user_data', userData);
  },
}));
