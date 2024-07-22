import { createTheme } from '@mui/material';
import { createContext, useContext } from 'react';
import { useColorTheme } from './use-color-theme';

export const ThemeContext = createContext({
  mode: 'Light',
  toogleColorMode: () => {},
  theme: createTheme(),
});

export const ThemeContextProvider = ({ children }) => {
  const value = useColorTheme();

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error('Use app context within provider!');

  return context;
};
