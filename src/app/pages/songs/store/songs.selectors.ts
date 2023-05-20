import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SongState } from "./songs.state";


export const songFeatureSelector = createFeatureSelector<SongState>('songs');

export const selectAllSongs = createSelector(
   songFeatureSelector,
   (state: SongState) => state.songs
);

export const selectCurrentSong = createSelector(
  songFeatureSelector,
  (state: SongState) => state.currentSong
);

