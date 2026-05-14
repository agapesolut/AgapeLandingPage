import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    // Verifica se já existe um tema salvo no navegador
    const savedTheme = localStorage.getItem('agape-theme');
    if (savedTheme !== null) {
      return savedTheme === 'dark';
    }
    // O SITE INICIA NO MODO LIGHT COMO PRINCIPAL
    return false; 
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.remove('light');
      root.classList.add('dark');
      localStorage.setItem('agape-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem('agape-theme', 'light');
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
