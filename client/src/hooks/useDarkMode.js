import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage.js';

export const useDarkMode = () => {

  
  const [ storedValue, setValue ] = 
  useLocalStorage('darkMode', false);

  
  // const dark = 
  // document.querySelector('body');

  
  useEffect(() => {
  storedValue ? 
  document.querySelector('body'). classList.add('dark-mode') :
  document.querySelector('body'). classList.remove('dark-mode') 
  }, [storedValue]);

  return [storedValue, setValue];
}