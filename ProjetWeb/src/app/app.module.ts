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
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkTreeModule } from '@angular/cdk/tree';
import { PortalModule } from '@angular/cdk/portal';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { MatBadgeModule } from '@angular/material/badge';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import {ReactiveFormsModule} from '@angular/forms';
import { TestComponent } from './test/test.component';
import { MatDialogModule } from '@angular/material/dialog';
import {CdkTableModule} from '@angular/cdk/table';

const appRoutes: Routes = [
  {path: 'ajouter', component : AjouterPlaylistComponent},
  {path: 'ajouter/morceaux', component : AjouterMorceauxCreationComponent},
  {path: 'lister', component : ListerPlaylistComponent},
  {path: 'lister/afficher', component : AfficherPlaylistComponent},
  {path: 'lister/propositions', component : ListeMorceauxComponent},
  {path: 'test', component : TestComponent},
  {path: '', redirectTo: 'lister', pathMatch: 'full'},
  {path: '**', redirectTo: 'lister'}


  // {path: '', redirectTo: 'nvcompte', pathMatch: 'full'},
  // {path: '**', redirectTo: 'nvcompte'}
]

const materialModules = [
  CdkTableModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  // MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  // MatSliderModule,
  // MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  // MatStepperModule,
];
@NgModule({
  declarations: [
    AppComponent,
      AjouterPlaylistComponent,
      ListerPlaylistComponent,
      AfficherPlaylistComponent,
      ListeMorceauxComponent,
      AjouterMorceauxCreationComponent,
      ListeStyleComponent,
      ListeUtilisateurComponent,
      TestComponent,
   ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    materialModules,
    BrowserModule,
    ReactiveFormsModule,
  ],
  exports: [
    materialModules,
  ],
  providers: [ApiMusiqueService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
