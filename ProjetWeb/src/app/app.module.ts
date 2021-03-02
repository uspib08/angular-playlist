import { AjouterPlaylistComponent } from './../Ajouter-playlist/Ajouter-playlist.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiMusiqueService } from './apiMusique.service';
import { RouterModule, Routes } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { ListerPlaylistComponent } from './../Lister-Playlist/Lister-Playlist.component';
import { AfficherPlaylistComponent } from './../Afficher-Playlist/Afficher-Playlist.component';
import { ListeMorceauxComponent } from './../Liste-Morceaux/Liste-Morceaux.component';

const appRoutes: Routes = [
  {path: 'ajouter', component : AjouterPlaylistComponent},
  {path: 'lister', component : ListerPlaylistComponent},
  {path: 'lister/afficher', component : AfficherPlaylistComponent},
  {path: 'lister/propositions', component : ListeMorceauxComponent},

  // {path: '', redirectTo: 'nvcompte', pathMatch: 'full'},
  // {path: '**', redirectTo: 'nvcompte'}
]
@NgModule({
  declarations: [
    AppComponent,
      AjouterPlaylistComponent,
      ListerPlaylistComponent,
      AfficherPlaylistComponent,
      ListeMorceauxComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [ApiMusiqueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
