import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { SongService } from "src/app/services/song.service";
import { 
  createSong, createSongFailure, createSongSuccess, 
  deleteSong, deleteSongFailure, deleteSongSuccess, 
  getAllSongs, getAllSongsFailure, getAllSongsSuccess, 
  getCurrentSong, getCurrentSongFailure, getCurrentSongSuccess, 
  updateSong, updateSongFailure, updateSongSuccess 
} from "./songs.actions";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { Song } from "src/app/models/song";

@Injectable()
export class SongsEffects {

  constructor(
    private actions$: Actions,
    private songService: SongService
  ) {}

  loadAllSongs$ = createEffect(() => 
    this.actions$.pipe(
      ofType(getAllSongs),
      switchMap(() => 
        this.songService.getAllSongs().pipe(
          map((songs) => getAllSongsSuccess({songs})),
          catchError((error) =>  of(getAllSongsFailure({ error })))
        )
      )
    )
  );

  loadCurrentSong$ = createEffect(() => 
    this.actions$.pipe(
      ofType(getCurrentSong),
      switchMap((action) =>
        this.songService.getSong(action.id).pipe(
          map((currentSong) => getCurrentSongSuccess({currentSong})),
          catchError((error) => of(getCurrentSongFailure({error})))
        )
      )
    )
  );

  createSong$ = createEffect(() => 
    this.actions$.pipe(
      ofType(createSong),
      switchMap(({song}) =>
        this.songService.createSong(song).pipe(
          map((song: Song) => createSongSuccess({song})),
          catchError((error) => of(createSongFailure({error})))
        )
      )
    )
  );
  
  updateSong$ = createEffect(() => 
    this.actions$.pipe(
      ofType(updateSong),
      switchMap((action) =>
        this.songService.updateSong(action.song).pipe(
          map(() => updateSongSuccess({song: action.song})),
          catchError((error) => of(updateSongFailure({error})))
        )
      )
    )
  );

  deleteSong$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteSong), 
      switchMap((action) =>
        this.songService.deleteSong(action.song.id ? action.song.id : 0).pipe(
          map(() => deleteSongSuccess({song: action.song})),
          catchError((error) => of(deleteSongFailure({error})))
        ) 
      )
    )
  );
}