type Storage = string
type Data = string | object | null;

const storage = {
  getStorage: <T = any>(item: Storage): T | null => {
    if (typeof window === 'undefined') {
      return null;
    }

    const storedItem = window.localStorage.getItem(item);

    if(!storedItem) {
      return null;
    }

    try {
      return JSON.parse(storedItem) as T;
    } catch (error) {
      return storedItem as any as T;
    }
  },
  setStorage: (item: Storage, data: Data) => {
    if (typeof window === 'undefined') {
      return null;
    }

    window.localStorage.setItem(item, JSON.stringify(data));
  },
  clearStorage: (item: Storage) => {
    if (typeof window === 'undefined') {
      return null;
    }

    window.localStorage.removeItem(item);
  },
};

export default storage;
