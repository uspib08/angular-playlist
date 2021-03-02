import { ApiMusiqueService } from './../apiMusique.service';
import { Component, OnInit } from '@angular/core';
import { PlayList } from '../PlayList';


@Component({
  selector: 'app-Ajouter-playlist',
  templateUrl: './Ajouter-playlist.component.html',
  styleUrls: ['./Ajouter-playlist.component.css']
})
export class AjouterPlaylistComponent implements OnInit {
  public name : string="";
  public createur : string="";
  public style : string="";

  constructor(private apiMusique : ApiMusiqueService) { }

  ngOnInit() {
  }

  ajouterPlaylist(nom : string, createur :string, style : string){
    this.apiMusique.creerPlaylist(nom, createur, style);
    console.log(this.apiMusique.afficherToutePlaylist());
  }

}
