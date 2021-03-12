import { MatTabsModule } from '@angular/material/tabs';
import { DataService } from './DataService';
import { AjouterPlaylistComponent } from './Ajouter-playlist/Ajouter-playlist.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiMusiqueService } from './apiMusique.service';
import { RouterModule, Routes } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { ListerPlaylistComponent } from './Lister-Playlist/Lister-Playlist.component';
import { AfficherPlaylistComponent } from './Afficher-Playlist/Afficher-Playlist.component';
import { ListeMorceauxComponent } from './Liste-Morceaux/Liste-Morceaux.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AjouterMorceauxCreationComponent } from './ajouterMorceauxCreation/ajouterMorceauxCreation.component';
import { ListeStyleComponent } from './Liste-Style/Liste-Style.component';
import { ListeUtilisateurComponent } from './liste-utilisateur/liste-utilisateur.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';


const appRoutes: Routes = [
  {path: 'ajouter', component : AjouterPlaylistComponent},
  {path: 'ajouter/morceaux', component : AjouterMorceauxCreationComponent},
  {path: 'lister', component : ListerPlaylistComponent},
  {path: 'lister/afficher', component : AfficherPlaylistComponent},
  {path: 'lister/propositions', component : ListeMorceauxComponent},
  {path: 'test', component : ListeUtilisateurComponent},
  {path: '', redirectTo: 'lister', pathMatch: 'full'},
  {path: '**', redirectTo: 'lister'}


  // {path: '', redirectTo: 'nvcompte', pathMatch: 'full'},
  // {path: '**', redirectTo: 'nvcompte'}
]
@NgModule({
  declarations: [
    AppComponent,
      AjouterPlaylistComponent,
      ListerPlaylistComponent,
      AfficherPlaylistComponent,
      ListeMorceauxComponent,
      AjouterMorceauxCreationComponent,
      ListeStyleComponent,
      ListeUtilisateurComponent
   ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    Ng2SearchPipeModule,
    MatTabsModule,
    BrowserAnimationsModule,
  ],
  providers: [ApiMusiqueService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
