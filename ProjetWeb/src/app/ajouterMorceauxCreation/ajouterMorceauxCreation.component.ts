import { ApiMusiqueService } from './../apiMusique.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ajouterMorceauxCreation',
  templateUrl: './ajouterMorceauxCreation.component.html',
  styleUrls: ['./ajouterMorceauxCreation.component.scss']
})
export class AjouterMorceauxCreationComponent implements OnInit {
  public listePlay :any;
  public nom : string="";
  public createur : string = "";

  constructor(private apiMusique: ApiMusiqueService) { }

  ngOnInit() {
    this.apiMusique.afficherToutePlaylist().subscribe((response) => {this.listePlay = response},
    (error)=>{console.log("Erreur d'affichage playlist : " +error)});
  }

  ajouterMorceaux(titre:string, artiste:string){

    console.log("test"+this.listePlay.length);
    console.log(this.listePlay.length);
    this.apiMusique.ajouterMorceau(this.listePlay.length-1, titre ,artiste);
    console.log(this.apiMusique.afficherToutePlaylist());
  }
}
