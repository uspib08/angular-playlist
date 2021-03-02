import { Component, OnInit } from '@angular/core';
import { ApiMusiqueService } from '../apiMusique.service';
import { PlayList } from '../PlayList';

@Component({
  selector: 'app-Lister-Playlist',
  templateUrl: './Lister-Playlist.component.html',
  styleUrls: ['./Lister-Playlist.component.css']
})
export class ListerPlaylistComponent implements OnInit {
  public playlist : PlayList = new PlayList();
  public listPlaylist : Array<PlayList>;




  constructor(private apimusique:  ApiMusiqueService) {
    this.listPlaylist= new Array<PlayList>();

  }

  ngOnInit() {
  }


  public afficherListPlaylist(){
    this.apimusique.afficherToutePlaylist().subscribe((response) => {this.listPlaylist.push(response)},
   (error)=>{console.log("Erreur d'affichage playlist : " +error)});
   console.log(this.listPlaylist);
  //  for(let p in this.listPlaylist){
  //    console.log(this.listPlaylist[p]._nom);
  //  }


   }
}
