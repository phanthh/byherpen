import { darkTheme, lightTheme } from "shared/styles/themes";
import { DefaultTheme } from "styled-components";
import create from "zustand";

interface ThemeStore {
  theme: DefaultTheme;
  setTheme: (theme: DefaultTheme) => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>((set, get) => ({
  theme: lightTheme,
  setTheme: (newTheme: DefaultTheme) => set({ theme: newTheme }),
  toggleTheme: () => {
    const current = get().theme;
    if (current.name === "dark") {
      set({ theme: lightTheme });
    } else {
      set({ theme: darkTheme });
    }
  },
}));
