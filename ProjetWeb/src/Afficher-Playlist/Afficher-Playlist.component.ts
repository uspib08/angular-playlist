import { PlayList } from './../app/PlayList';
import { ApiMusiqueService } from './../app/apiMusique.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Afficher-Playlist',
  templateUrl: './Afficher-Playlist.component.html',
  styleUrls: ['./Afficher-Playlist.component.css']
})
export class AfficherPlaylistComponent implements OnInit {

  public playlist : PlayList = new PlayList();
  constructor(private apimusique:  ApiMusiqueService) { }

  ngOnInit() {
  }

  // public afficherListPlaylist(){
  //   this.apimusique.afficherPlaylist();
  // }

}
