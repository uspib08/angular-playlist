import { NotifierService } from './../notifier.service';
import { Subscription } from 'rxjs';

import { Router } from '@angular/router';
import { ApiMusiqueService } from './../apiMusique.service';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-Ajouter-playlist',
  templateUrl: './Ajouter-playlist.component.html',
  styleUrls: ['./Ajouter-playlist.component.scss']
})
export class AjouterPlaylistComponent implements OnInit {
  public name!: string;
  public createur !: string ;
  public style !: string ;
  public bool : number=0;
  public message : string="";
  public listPlaylist : any;
  public pb : number =0;
  public scrollbas : number=0;


  constructor(private apiMusique : ApiMusiqueService, private router: Router, private notiferservice: NotifierService) { }

  ngOnInit() {
    this.apiMusique.afficherToutePlaylist().subscribe((response) => {this.listPlaylist = response},
    (error)=>{console.log("Erreur d'affichage playlist : " +error)});

  }
  ngOnDestroy() {

  }

  ajouterPlaylist(nom : string, createur :string, style : string){
    this.message="";
    if (nom == null || createur == null || style == null ) {
      // this.message="Des cases vides ..";
      // //console.log("Des cases vides ..");
      this.notiferservice.showNotification('Veuillez remplir les champs', 'OK', 'error');
      return;
    }
    for (let key = 0; key < this.listPlaylist.length; key++) {
      var a = this.listPlaylist[key];
      if (a._nom== nom && a._createur == createur && a._style==style) {
      //   this.message="Playlist déjà existante !"
      //  // console.log("Déjà dans la playlist finale !");
        this.notiferservice.showNotification('Playlist déjà existante !', 'OK', 'error');
         return;
      }
    }
    if(this.pb%2==0){
      this.apiMusique.creerPlaylist(nom, createur, style);
      this.message="Playlist crée ! "
      this.bool=1;
      this.notiferservice.showNotification('Playlist crée !', 'OK', 'success');

      //this.scroll(target);
    }
    this.pb++;
    this.apiMusique.afficherToutePlaylist().subscribe((response) => {this.listPlaylist = response},
    (error)=>{console.log("Erreur d'affichage playlist : " +error)});
    console.log(this.listPlaylist)



  }

  scroll(id: string){
    let el =document.getElementById(id);
    if(el==null){
      return;
    }
    el.scrollIntoView();
  }
}
