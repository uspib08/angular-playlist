import { Router } from '@angular/router';
import { ApiMusiqueService } from './../apiMusique.service';
import { Component, OnInit } from '@angular/core';
import { PlayList } from '../PlayList';


@Component({
  selector: 'app-Ajouter-playlist',
  templateUrl: './Ajouter-playlist.component.html',
  styleUrls: ['./Ajouter-playlist.component.scss']
})
export class AjouterPlaylistComponent implements OnInit {
  public name : string="";
  public createur : string="";
  public style : string="";
  public bool : number=0;

  constructor(private apiMusique : ApiMusiqueService, private router: Router) { }

  ngOnInit() {
  }

  ajouterPlaylist(nom : string, createur :string, style : string){
    this.apiMusique.creerPlaylist(nom, createur, style);
    console.log(this.apiMusique.afficherToutePlaylist());
    this.bool=1;
    console.log(this.bool);
  }

}
