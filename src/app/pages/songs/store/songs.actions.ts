import { createAction, props } from "@ngrx/store";
import { Song } from "src/app/models/song";

export const getAllSongs = createAction('[Songs Page] Get All Songs');

export const getAllSongsSuccess = createAction(
  '[Songs Page] Get All Songs Success',
  props<{ songs: Song[] }>()
)

export const getAllSongsFailure = createAction(
  '[Songs Page] Get All Songs Failure',
  props<{ error: Error | any }>()
)

export const getCurrentSong = createAction(
  '[Songs Page] Get Current Song',
  props<{ id?: number }>()  
);

export const getCurrentSongSuccess = createAction(
  '[Songs Page] Get Current Song Success',
  props<{ currentSong: Song }>()
);

export const getCurrentSongFailure = createAction(
  '[Songs Page] Get Current Song Failure',
  props<{ error: Error | any }>()
);

export const addNewSong = createAction(
  '[Songs Page] Add New Song'
);

export const createSong = createAction(
  '[Song Page] Create Song',
  props<{ song: Partial<Song> }>()
);

export const createSongSuccess = createAction(
  '[Song Page] Create Song Success',
  props<{ song: Song }>()
);

export const createSongFailure = createAction(
  '[Song Page] Create Song Failure',
  props<{ error: Error | any }>()
);

export const updateSong = createAction(
  '[Song Page] Update Song',
  props<{ song: Song}>()
);

export const updateSongSuccess = createAction(
  '[Song Page] Update Song Success',
  props<{ song: Song }>()
);

export const updateSongFailure = createAction(
  '[Song Page] Update Song Failure',
  props<{ error: Error | any }>()
);

export const deleteSong = createAction(
  '[Song Page] Delete Song',
  props<{ song: Song }>()
);

export const deleteSongSuccess = createAction(
  '[Song Page] Delete Song Success',
  props<{ song: Song }>()  
);

export const deleteSongFailure = createAction(
  '[Song Page] Delete Song Failure',
  props<{ error: Error | any }>()
);