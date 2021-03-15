import { DataService } from './../DataService';
import { ApiMusiqueService } from './../apiMusique.service';
import { MatTabsModule } from '@angular/material/tabs';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.component.html',
  styleUrls: ['./liste-utilisateur.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class ListeUtilisateurComponent implements OnInit {
  public listPlaylist : any;
  public listuti : any;
  constructor(private apimusique : ApiMusiqueService, private dataservice : DataService) {

  }
  tabs=['oui', 'non', 'hihi'];

  ngOnInit() {
    this.apimusique.afficherToutePlaylist().subscribe(
      (response) => {
        this.listPlaylist = response;
      },
      (error) => {
        console.log("Erreur d'affichage playlist : " + error);
      }
    );
    console.log(this.listPlaylist);

  }

  // recup(){
  //   var u = document.getElementById('luti')?.innerText;
  //   console.log(u);

  // }

  public viewPlaylist(id : number){
    this.dataservice.noindex = id;
    console.log(this.dataservice.noindex);

 }

 hideElements(){
   console.log("ça marche");
 }





}
