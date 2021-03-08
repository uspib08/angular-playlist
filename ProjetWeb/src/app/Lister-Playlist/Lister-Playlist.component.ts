import { Ng2SearchPipeModule } from 'ng2-search-filter';
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
  public test : any;
  public listPlaylist : any;
  public noindex: number=0;



  public laliste : any;
  public sty : string="";
  public searchText: any;





  constructor(private apimusique:  ApiMusiqueService,
              private router : Router,
              private routeactive: ActivatedRoute,
              public dataservice : DataService) {
                this.laliste = new Array();
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

   recup(s : string){
    console.log(s);

  }

  style(style:string){
    // console.log(this.listPlaylist.length);
    // for (let index = 0; index < this.listPlaylist.length; index++) {
    //   this.apimusique.afficherPlaylist(index).subscribe((response) => {this.test = response;},
    //   (error)=>{console.log("Erreur d'affichage playlist : " +error)});
    //   console.log(this.test);

    //   this.laliste.push(this.test);
    // }
    // // for(const p in this.laliste){
    // //   console.log(p._style);

    // // }
    // console.log(this.laliste[1]._style);
    console.log(this.sty);

  }
}
