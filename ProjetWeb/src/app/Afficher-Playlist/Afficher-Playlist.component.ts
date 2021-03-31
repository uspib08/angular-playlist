import { Morceau } from './../Morceau';
import { DataService } from './../DataService';
import { PlayList } from '../PlayList';
import { ApiMusiqueService } from '../apiMusique.service';
import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatSortModule } from '@angular/material/sort' ;
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

  //public PlaylistSorted: any; // marche pas

  constructor(
    private apiMusique: ApiMusiqueService,
    public dataservice: DataService
  ) {
    this.Playlist = new PlayList();

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
  ngOnDestroy() {}

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
    location.reload();
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
