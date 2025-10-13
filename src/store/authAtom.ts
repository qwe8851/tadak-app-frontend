import { atom } from "jotai";

export const userAtom = atom<{ id: string; name: string } | null>(null);
export const tokenAtom = atom<string | null>(null);
export const isLoggedInAtom = atom(get => !!get(tokenAtom));
