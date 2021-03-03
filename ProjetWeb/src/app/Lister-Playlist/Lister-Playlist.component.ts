import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiMusiqueService } from '../apiMusique.service';
import { PlayList } from '../PlayList';

@Component({
  selector: 'app-Lister-Playlist',
  templateUrl: './Lister-Playlist.component.html',
  styleUrls: ['./Lister-Playlist.component.css']
})
export class ListerPlaylistComponent implements OnInit {
  public playlist : PlayList = new PlayList();
  public listPlaylist : any;




  constructor(private apimusique:  ApiMusiqueService,
              private router : Router,
              private routeactive: ActivatedRoute) {
    // this.listPlaylist= new Array<any>();

  }

  ngOnInit() {
  }


  public afficherListPlaylist(){
    this.apimusique.afficherToutePlaylist().subscribe((response) => {this.listPlaylist = response},
   (error)=>{console.log("Erreur d'affichage playlist : " +error)});
   console.log(this.listPlaylist);
  //  for(let p in this.listPlaylist){
  //    console.log(this.listPlaylist[p]._nom);
  //  }


   }
   public viewPlaylist(){
      console.log("ça marche");
      this.router.navigate(['lister/afficher']);

   }
}
