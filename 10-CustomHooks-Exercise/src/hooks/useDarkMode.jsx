import { useLocalStorage } from './useLocalStorage';

export function useDarkMode(key, initialValue) {
  const [value, setValue] = useLocalStorage(key, initialValue);

  function update(newValue) {
    setValue(newValue);
  }

  return [value, update];
}
