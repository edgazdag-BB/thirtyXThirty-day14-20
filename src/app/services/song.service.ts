import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Song } from '../models/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  API_URL: string = environment.apiUrl;
  songGenres: string[] = ['Rock', 'Pop', 'Hip-Hop', ];
  
  constructor(private http: HttpClient) {}

  getAllSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(`${this.API_URL}songs/`);
  }

  getSong(id?: number): Observable<Song> {
    return this.http.get<Song>(`${this.API_URL}songs/${id}`);
  }

  createSong(song: Partial<Song>): Observable<Song> {
    return this.http.post<Song>(`${this.API_URL}songs/`, song);
  }

  updateSong(song: Song): Observable<Song> {
    return this.http.put<Song>(`${this.API_URL}songs/${song.id}`, song);
  }

  deleteSong(id: number) {
    return this.http.delete<Song>(`${this.API_URL}songs/${id}`);
  }
}
