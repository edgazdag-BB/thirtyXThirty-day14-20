import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Song } from '../../models/song';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent {
  @Input() songList!: Song[];
  @Input() displayedColumns!: string[];
  @Output() editSong: EventEmitter<Song> = new EventEmitter<Song>();
  @Output() deleteSong: EventEmitter<Song> = new EventEmitter<Song>();
  @Output() addSong: EventEmitter<Song> = new EventEmitter<Song>()

  deleteClicked(event: any, song: Song) {
    event.stopPropagation();
    this.deleteSong.emit(song);
  }
}
