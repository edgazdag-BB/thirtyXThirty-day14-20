import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.scss']
})
export class SongDetailComponent {
  @Input() songGenres!: string[];
  @Input() songForm!: FormGroup;
  @Output() saveSong = new EventEmitter();
}
