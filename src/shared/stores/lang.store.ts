import { TLang } from "shared/types/types";
import create from "zustand";

interface LangStore {
  lang: TLang;
  readonly langOptions: TLang[];
  setLang: (lang: TLang) => void;
	toggleLang: () => void;
}

export const useLangStore = create<LangStore>((set, get) => ({
  lang: "en",
  langOptions: ["en", "vn"],
  setLang: (newLang: TLang) => {
    set({ lang: newLang });
  },
  toggleLang: () => {
    const lang = get().lang;
    set({ lang: lang === "en" ? "vn" : "en" });
  },
}));
