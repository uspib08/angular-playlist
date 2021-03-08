import { DataService } from './../DataService';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiMusiqueService } from '../apiMusique.service';
import { PlayList } from '../PlayList';
import { Console } from 'node:console';

@Component({
  selector: 'app-Lister-Playlist',

  templateUrl: './Lister-Playlist.component.html',
  styleUrls: ['./Lister-Playlist.component.css']
})
export class ListerPlaylistComponent implements OnInit {
  public playlist : PlayList = new PlayList();
  public listPlaylist : any;
  public noindex: number=0;
  searchText="";





  constructor(private apimusique:  ApiMusiqueService,
              private router : Router,
              private routeactive: ActivatedRoute,
              public dataservice : DataService) {
  }

  ngOnInit() {
    this.dataservice.currentSearch.subscribe(message => this.searchText=message)
    this.apimusique.afficherToutePlaylist().subscribe((response) => {this.listPlaylist = response},
    (error)=>{console.log("Erreur d'affichage playlist : " +error)});
    console.log(this.listPlaylist);
  }

  // ngOnDestroy(){
  //   this.dataservice.noindex = this.noindex;
  //   console.log(this.noindex);
  // }


   public viewPlaylist(id : number){
      this.dataservice.noindex = id;
      console.log(this.dataservice.noindex);

   }

   recupEvt(s : string){
      console.log("test");
  }
}
