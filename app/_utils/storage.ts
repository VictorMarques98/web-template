type Storage = string
type Data = string | object | null;

const storage = {
  getStorage: (item: Storage) => {
    const storedItem = window.localStorage.getItem(item) ?? '';

    try {
      return JSON.parse(storedItem);
    } catch (error) {
      return storedItem;
    }
  },
  setStorage: (item: Storage, data: Data) => {
    window.localStorage.setItem(item, JSON.stringify(data));
  },
  clearStorage: (item: Storage) => {
    window.localStorage.removeItem(item);
  },
};

export default storage;
