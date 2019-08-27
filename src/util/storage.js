import { STORAGE_KEY } from './constants';

export function store(data) {
  try {
    const serialized = JSON.stringify(data);
    localStorage.setItem(STORAGE_KEY, serialized);
  } catch (err) {
    console.error(`Error storing state: ${err}`);
  }
}

export function clear() {
  localStorage.removeItem(STORAGE_KEY);
}
