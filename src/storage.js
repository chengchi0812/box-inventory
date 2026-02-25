const STORAGE_KEY = 'box-inventory';

export const loadData = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { boxes: [] };
  } catch {
    return { boxes: [] };
  }
};

export const saveData = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Storage save failed:', e);
  }
};
