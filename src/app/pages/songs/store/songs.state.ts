import { createReducer, on } from '@ngrx/store';
import { Song } from 'src/app/models/song';
import {
  addNewSong,
  createSongSuccess,
  deleteSongSuccess,
  getAllSongsSuccess,
  getCurrentSongSuccess,
  updateSongSuccess,
} from './songs.actions';

export interface SongState {
  currentSong?: Song;
  songs: Song[];
}

export const initialSongState: SongState = {
  currentSong: undefined,
  songs: [],
};

export const songReducer = createReducer<SongState>(
  initialSongState,
  on(getAllSongsSuccess, (state, { songs }) => ({ ...state, songs })),
  on(getCurrentSongSuccess, (state, { currentSong }) => ({
    ...state,
    currentSong,
  })),
  on(addNewSong, (state) => ({
    ...state,
    currentSong: {id: 0, name: '', artistName: '', albumName: '', genre: ''}

  })),
  on(createSongSuccess, (state: SongState, { song }) => ({
    ...state,
    songs: [...state.songs, song],
    currentSong: song
  })),
  on(updateSongSuccess, (state: SongState, { song }) => ({
    ...state,
    songs: state.songs.map((s) => s.id === song.id ? song : s),
    currentSong: state.currentSong
  })),
  on(deleteSongSuccess, (state: SongState, { song }) => ({
    ...state,
    currentSong: state.currentSong
      ? state.currentSong.id === song.id
        ? undefined
        : state.currentSong
      : undefined,
    songs: state.songs.filter((s) => s.id !== song.id)
  }))
);
