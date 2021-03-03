import { PlayList } from '../PlayList';
import { ApiMusiqueService } from '../apiMusique.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Afficher-Playlist',
  templateUrl: './Afficher-Playlist.component.html',
  styleUrls: ['./Afficher-Playlist.component.css']
})
export class AfficherPlaylistComponent implements OnInit {

  constructor(private apiMusique : ApiMusiqueService) { }

  ngOnInit() {
  }

  public afficher(){
    this.apiMusique.afficherPlaylist(1).subscribe((response) => {console.log(response)},
   (error)=>{console.log("Erreur d'affichage playlist : " +error)});

   }





}
