import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage.js';

export const useDarkMode = () => {

  
  const [ storedValue, setValue ] = 
  useLocalStorage('darkMode', false);

  
  const dark = 
  document.querySelector('body');

  
  useEffect(() => {
  storedValue ? 
    dark.classList.add('dark-mode') :
    dark.classList.remove('dark-mode')
  }, [storedValue, dark.classList]);

  return [storedValue, setValue];
}