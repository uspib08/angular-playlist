import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DataService } from './../DataService';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiMusiqueService } from '../apiMusique.service';
import { PlayList } from '../PlayList';
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
}
