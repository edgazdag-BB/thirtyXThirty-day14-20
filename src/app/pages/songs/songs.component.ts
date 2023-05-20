import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { map, tap } from 'rxjs';
import { Song } from 'src/app/models/song';
import { addNewSong, createSong, deleteSong, getAllSongs, getCurrentSong, updateSong } from './store/songs.actions';
import { selectAllSongs, selectCurrentSong } from './store/songs.selectors';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'artist', 'album', 'genre', 'delete']
  currentSong$ = this.store.pipe(select(selectCurrentSong));
  songs$ = this.store.pipe(select(selectAllSongs));

  songForm =  new FormGroup({
    id: new FormControl(),
    name: new FormControl('', Validators.required),
    artistName: new FormControl('', Validators.required),
    albumName: new FormControl('', Validators.required),
    genre: new FormControl('', Validators.required)
  });

  songForm$ = this.currentSong$.pipe(
    tap(s => s ? this.songForm.patchValue(s) : this.songForm.reset()),
    map(s => this.songForm)
  );
  
  constructor(private store: Store, public songService: SongService) { }

  ngOnInit(): void {
    this.store.dispatch(getAllSongs());
  }

  setCurrentSong(song: Song) {
    this.store.dispatch(getCurrentSong({id: song.id}));
  }

  addSong() {
    this.store.dispatch(addNewSong());
  }

  saveSong() {
    const song = this.songForm.value as Song;

    song.id === 0 ? 
      this.store.dispatch(createSong({song})) :
      this.store.dispatch(updateSong({song}));
  }

  deleteSong(song: Song) {
    this.store.dispatch(deleteSong({song}));
  }
}
