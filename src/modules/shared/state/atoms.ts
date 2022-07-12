import { atom } from "recoil";

const darkMode = atom<boolean>({
  key: "layout.darkMode",
  default: false,
});

export const layoutAtoms = { darkMode };
