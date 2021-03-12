import { ApiMusiqueService } from './../apiMusique.service';
import { MatTabsModule } from '@angular/material/tabs';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.component.html',
  styleUrls: ['./liste-utilisateur.component.scss']
})
export class ListeUtilisateurComponent implements OnInit {
  public listPlaylist : any;
  public listuti : any;
  constructor(private apimusique : ApiMusiqueService) {

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

  recup(){
    var u = document.getElementById('luti')?.innerText;
    console.log(u);

  }





}
