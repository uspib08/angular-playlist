import { Morceau } from './../Morceau';
import { DataService } from './../DataService';
import { PlayList } from '../PlayList';
import { ApiMusiqueService } from '../apiMusique.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Afficher-Playlist',
  templateUrl: './Afficher-Playlist.component.html',
  styleUrls: ['./Afficher-Playlist.component.css']
})
export class AfficherPlaylistComponent implements OnInit {
  public Playlist : PlayList;
  public test:number=0;

  constructor(private apiMusique : ApiMusiqueService, public dataservice : DataService) {
    this.Playlist = new PlayList();

  }

  ngOnInit() {
    this.apiMusique.afficherPlaylist(this.dataservice.noindex).subscribe((response) => {this.Playlist = response},
    (error)=>{console.log("Erreur d'affichage playlist : " +error)});
    console.log(this.Playlist._nom);
  }

  incrementer(){
    this.test = 1;
  }

  recupEvt(m : Morceau){
    // console.log(this.dataservice.noindex);
    // this.apiMusique.afficherPlaylist(this.dataservice.noindex).subscribe((response) => {this.Playlist = response},
    // (error)=>{console.log("Erreur d'affichage playlist : " +error)});
    // console.log(this.Playlist._nom);
    this.Playlist._listMorceaux.push(m);
  }








}
