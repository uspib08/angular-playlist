import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DataService } from './../DataService';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiMusiqueService } from '../apiMusique.service';
import { PlayList } from '../PlayList';
import { Sort } from '@angular/material/sort';
declare const sortTable: any;
@Component({
  selector: 'app-Lister-Playlist',

  templateUrl: './Lister-Playlist.component.html',
  styleUrls: ['./Lister-Playlist.component.css']
})
export class ListerPlaylistComponent implements OnInit {
  public playlist : PlayList = new PlayList();
  public test : any;
  public listPlaylist : any;
  public noindex: number=0;

  public laliste : any;
  public sty : string="";
  public searchText: any;
  public isVisible : boolean=true;





  constructor(private apimusique:  ApiMusiqueService,

              public dataservice : DataService) {
                this.laliste = new Array();
  }

  ngOnInit() {
    this.dataservice.currentSearch.subscribe(message => this.searchText=message)
    this.apimusique.afficherToutePlaylist().subscribe((response) => {this.listPlaylist = response},
    (error)=>{console.log("Erreur d'affichage playlist : " +error)});
    console.log(this.listPlaylist);
    sortTable.init();
  }

  // ngOnDestroy(){
  //   this.dataservice.noindex = this.noindex;
  //   console.log(this.noindex);
  // }

   public viewPlaylist(id : number){
      this.dataservice.noindex = id;
      console.log(this.dataservice.noindex);

   }

   recup(s : string){
    console.log(s);

  }

  style(style:string){
    console.log(this.sty);
  }

  public supprimer(id : number){
    this.apimusique.supprimerPlaylist(id);
    location.reload();
  }


  recupEvt(a : any){
    console.log(a);
    this.listPlaylist = a;
  }

  recupEvtClick(b : any){
     //console.log("test"+b);
     if(b=="oui"){
       this.isVisible = false;
     }
     else{
       console.log("c'est ok ?")
       this.isVisible= true;
       location.reload()
     }

  }
  sortData(sort : Sort){
    const data = this.listPlaylist;
    if (!sort.active || sort.direction === '') {
      this.listPlaylist = data;
      return;
    }

    this.listPlaylist = data.sort((a: { _id: string | number; _nom: string | number; _createur: string | number; _style: string | number; _nbclicks: string | number; }, b: { _id: string | number; _nom: string | number; _createur: string | number; _style: string | number; _nbclicks: string | number; }) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'num': return compare(a._id, b._id, isAsc);
        case 'nom': return compare(a._nom, b._nom, isAsc);
        case 'createur': return compare(a._createur, b._createur, isAsc);
        case 'style': return compare(a._style, b._style, isAsc);
        case 'clicks': return compare(a._nbclicks , b._nbclicks , isAsc);
        default: return 0;
      }
    });
  }
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
