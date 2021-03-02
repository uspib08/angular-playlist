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


  constructor(private apimusique:  ApiMusiqueService) { }

  ngOnInit() {
  }

   public afficherListPlaylist(){
     this.apimusique.afficherToutePlaylist().subscribe((response) => {console.log(response)},
    (error)=>{console.log("Erreur d'affichage playlist : " +error)});

   }
}
