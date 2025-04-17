export const saveToLocal = (key: string, value: any, multiple = false) => {
    if (multiple) {
      const existing = JSON.parse(localStorage.getItem(key) || '[]');
      localStorage.setItem(key, JSON.stringify([...existing, value]));
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };
  
  export const getFromLocal = (key: string) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  };