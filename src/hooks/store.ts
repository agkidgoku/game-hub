import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface StoreGameQuery {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenre: (genreId?: number) => void;
  setPlatform: (platformId?: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQuery = create<StoreGameQuery>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setGenre: (genreId?: number) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatform: (platformId?: number) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSortOrder: (sortOrder: string) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));

export default useGameQuery;
