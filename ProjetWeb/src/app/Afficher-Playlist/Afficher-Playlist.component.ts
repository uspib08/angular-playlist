import { NotifierService } from './../notifier.service';
import { Morceau } from './../Morceau';
import { DataService } from './../DataService';
import { PlayList } from '../PlayList';
import { ApiMusiqueService } from '../apiMusique.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatSortModule } from '@angular/material/sort' ;
import { NavigationStart, Router } from '@angular/router';
import { ListerPlaylistComponent } from '../Lister-Playlist/Lister-Playlist.component';
declare const sortTable: any;
@Component({
  selector: 'app-Afficher-Playlist',
  templateUrl: './Afficher-Playlist.component.html',
  styleUrls: ['./Afficher-Playlist.component.css'],

})
export class AfficherPlaylistComponent implements OnInit {
  public Playlist: PlayList;
  public test: number = 0;
  public searchText: any;
  public static enregistre: boolean = false;




  //public PlaylistSorted: any; // marche pas

  constructor(
    private apiMusique: ApiMusiqueService,
    public dataservice: DataService,
    private router : Router,
    private notifier : NotifierService,
  ) {
    this.Playlist = new PlayList();
    // router.events.subscribe((event) => {
    //   if (event instanceof NavigationStart) {
    //     AfficherPlaylistComponent.enregistre = false;
    //   }
    // });
  //  this.PlaylistSorted = new Array(); // marche pas

  }

  ngOnInit() {

   // this.loadScripts();
    this.dataservice.currentSearch.subscribe(
      (message) => (this.searchText = message)
    );
    this.apiMusique.afficherPlaylist(this.dataservice.noindex).subscribe(
      (response) => {
        this.Playlist = response;
      },
      (error) => {
        console.log("Erreur d'affichage playlist : " + error);
      }
    );
      sortTable.init()
    console.log(this.Playlist._nom);
  }
  ngOnDestroy() {

  }

  incrementer() {
    this.test = 1;
  }

  recupEvt(m: Morceau) {
    // console.log(this.dataservice.noindex);
    // this.apiMusique.afficherPlaylist(this.dataservice.noindex).subscribe((response) => {this.Playlist = response},
    // (error)=>{console.log("Erreur d'affichage playlist : " +error)});
    // console.log(this.Playlist._nom);
    this.Playlist._listMorceaux.push(m);

  }
  recupEvt2(s: string) {
    this.Playlist._listContributeurs.push(s);

  }
  reloadTableau(){
    this.router.navigateByUrl("", {skipLocationChange: true}).then(()=>
    this.router.navigate(["lister/afficher/"]));

  }

  like(){
    if(!AfficherPlaylistComponent.enregistre){
      this.apiMusique.incrementerLikes(this.dataservice.noindex);
      this.router.navigateByUrl("", {skipLocationChange: true}).then(()=>
      this.router.navigate(["lister/afficher/"]));
      this.notifier.showNotification("Vous avez liké cette Playlist","OK", "success");
      AfficherPlaylistComponent.enregistre=true;
    }else{
      this.notifier.showNotification("Votre avis a déjà été enregistré", "OK", "error");
    }

  }

  dislike(){
    if(!AfficherPlaylistComponent.enregistre){
      this.apiMusique.incrementerDislikes(this.dataservice.noindex);
      this.router.navigateByUrl("", {skipLocationChange: true}).then(()=>
      this.router.navigate(["lister/afficher/"]));
      this.notifier.showNotification("Vous n'avez pas aimé cette Playlist", "OK", "error");
      AfficherPlaylistComponent.enregistre=true;
    }else{
      this.notifier.showNotification("Votre avis a déjà été enregistré", "OK", "error");
    }

  }
  retour(){
    AfficherPlaylistComponent.enregistre = false;
    this.router.navigate(["lister"]);
    ListerPlaylistComponent.refresh = true;
  }

  }

  // marche pas
  /*sortData(sort: Sort) {
    const data = this.Playlist._listMorceaux;
    if (!sort.active || sort.direction === '') {
      this.PlaylistSorted= data;
      return;
    }
  /* var r = this.Playlist._listMorceaux.map((rank: { _index: number }, i: number) => {
    rank._index = i;
  });*/

   /* this.PlaylistSorted = data.sort((a,b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        //case 'index':
        //  return compare(a._index, b._index, isAsc);
        case 'titre':
          return compare(a._titre, b._titre, isAsc);
        case 'artiste':
          return compare(a._artiste, b._artiste, isAsc);
        default:
          return 0;
      }
    });
  }
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
*/
