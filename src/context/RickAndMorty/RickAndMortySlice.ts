
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export interface RickAndMortyStateType {
  page: number;
  info?: {
    pages?: number | null;
  };
  characters: Array<{
    __typename?: "Character";
    id?: string | null;
    name?: string | null;
    gender?: string | null;
    species?: string | null;
    image?: string | null;
    location?: { __typename?: "Location"; name?: string | null } | null;
  } | null>;
  filter: { name: string; gender: string; species: string; location: string };
}
interface ketfilter {
  name: string;
  gender: string;
  species: string;
  location: string;
}

const initialState: RickAndMortyStateType = {
  characters: [],
  filter: { gender: "", species: "", name: "", location: "" },
  page: 1,
};

export const rickAndMortySlice = createSlice({
  name: "rickAndMorty",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<{ key: string; val: string }>) => {
      if (
        state.filter[action.payload.key as keyof ketfilter] !== "" &&
        action.payload.key != "name"
      ) {
        state.filter[action.payload.key as keyof ketfilter] +=
          "," + action.payload.val;
      } else {
        state.filter[action.payload.key as keyof ketfilter] =
          action.payload.val;
      }
    },
    delFilter: (state, action: PayloadAction<{ key: string; val: string }>) => {
      const { key, val } = action.payload;
      state.filter[action.payload.key as keyof ketfilter] = state.filter[
        key as keyof ketfilter
      ]
        .split(",")
        .filter((item) => item != val)
        .join();
    },
    setPage: (state, action: PayloadAction<{ page: number }>) => {
      state.page = action.payload.page;
    },
    setInfo: (
      state,
      action: PayloadAction<{
        info: {
          pages?: number | null;
        };
      }>
    ) => {
      state.info = action.payload.info;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFilter, delFilter, setPage, setInfo } =
  rickAndMortySlice.actions;
export default rickAndMortySlice.reducer;
