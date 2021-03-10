import { PlayList } from './../PlayList';
import { ApiMusiqueService } from './../apiMusique.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-ajouterMorceauxCreation',
  templateUrl: './ajouterMorceauxCreation.component.html',
  styleUrls: ['./ajouterMorceauxCreation.component.scss']
})
export class AjouterMorceauxCreationComponent implements OnInit {
  public listePlay : any;
  public nom : string="";
  public createur : string = "";
  public numero :number=0;
  public test:Subscription;
  constructor(private apiMusique: ApiMusiqueService) {
    this.test = this.apiMusique.afficherToutePlaylist().subscribe((response) => {this.listePlay = response},
    (error)=>{console.log("Erreur d'affichage playlist : " +error)});
  }

  ngOnInit() {
    // this.apiMusique.afficherToutePlaylist().subscribe((response) => {this.listePlay = response},
    // (error)=>{console.log("Erreur d'affichage playlist : " +error)});

  }
  ngOnDestroy(){
    this.test.unsubscribe();
  }

  ajouterMorceaux(titre:string, artiste:string){

    console.log(this.listePlay.length);
    console.log(titre +  artiste);

    if(this.listePlay.length==0){
      this.apiMusique.ajouterMorceau(0, titre ,artiste);
    }else{
      this.apiMusique.ajouterMorceau(this.listePlay.length-1, titre ,artiste);
    }
    console.log(this.apiMusique.afficherToutePlaylist());
  }
}
