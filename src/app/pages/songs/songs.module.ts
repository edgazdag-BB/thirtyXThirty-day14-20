import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { songReducer } from './store/songs.state';
import { NgModule } from '@angular/core';
import { SongsEffects } from './store/songs.effects';
 
@NgModule({
  imports: [
    StoreModule.forFeature('songs', songReducer),
    EffectsModule.forFeature([SongsEffects])
  ],
})
export class SongsModule {}