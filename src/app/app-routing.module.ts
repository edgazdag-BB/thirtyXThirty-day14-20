import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SongsComponent } from './pages/songs/songs.component';

const routes: Routes = [{ path: 'login', component: LoginComponent },
  { path: '',   redirectTo: 'login', pathMatch: 'full' },
  { 
    path: 'app', 
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'songs',
        component: SongsComponent,
      },
      { 
        path: '',   
        redirectTo: 'home', 
        pathMatch: 'full' 
      }
    ],
    canActivate: [AuthGuard]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
