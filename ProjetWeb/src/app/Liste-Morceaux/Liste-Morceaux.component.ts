import { DataService } from './../DataService';
import { ApiMusiqueService } from './../apiMusique.service';
import { Morceau } from './../Morceau';
import {
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-Liste-Morceaux',
  templateUrl: './Liste-Morceaux.component.html',
  styleUrls: ['./Liste-Morceaux.component.scss'],
})
export class ListeMorceauxComponent implements OnInit {
  public liste: any;
  public m: Morceau = new Morceau();
  public contri: any;
  public Playlist: any;

  constructor(
    private apimusique: ApiMusiqueService,
    private dataservice: DataService
  ) {
    this.Playlist=new Array();
    this.liste = new Array();
  }

  @Output() emetteur = new EventEmitter<Morceau>();
  @Output() emetteur2 = new EventEmitter<String>();

  ngOnInit() {
    this.apimusique.afficherPlaylist(this.dataservice.noindex).subscribe(
      (response) => {
        this.Playlist = response;
      },
      (error) => {
        console.log("Erreur d'affichage playlist : " + error);
      }
    );
  }

  ajouter(artiste: string, titre: string, contributeur: string): void {
    // verification que rien ne soit vide
    if (artiste == '' || titre == '' || contributeur == '') {
      console.log("Des cases vides ..");
      return;
    }
    //verification que ça ne soit pas déjà dans la liste des propositions
    for (let key = 0; key < this.liste.length; key++) {
      var a = this.liste[key];
      if (a._artiste == artiste && a._titre == titre) {
        console.log("Déjà dans la liste ! ");
        return;
      }
    }
    // verification que ça ne soit pas déjà dans la playlist
    let listemorceau= this.Playlist._listMorceaux;
    for (let key = 0; key < listemorceau.length; key++) {
      var a = listemorceau[key];
      if (a._artiste == artiste && a._titre == titre) {
        console.log("Déjà dans la playlist finale !");
        return;
      }
    }
    //sinon ajout
    const m2 = new Morceau();
    m2._artiste = artiste;
    m2._titre = titre;
    this.liste.push(m2);
    const rowLen = this.liste.length;
    var r = this.liste.map((rank: { _contributeur: string }, i: number) => {
      if (rowLen === i + 1) {
        rank._contributeur = contributeur;
      }
    });
    this.refreshData();
  }

  envoyer(tit: string, art: string, contri: string) {
    //console.log(tit+"/"+art);
    //console.log(this.dataservice.noindex);
    const m2 = new Morceau();
    m2._artiste = art;
    m2._titre = tit;
    // a ce stade normalement les morceaux n'était pas dans la playlist si les refresh marche bien
    this.emetteur.emit(m2);
    this.apimusique.ajouterMorceau(this.dataservice.noindex, tit, art);
    // verification que le contributeur ne soit pas déjà dans la liste
    let listecontri= this.Playlist._listContributeurs;
    let test=false;
    for(let key = 0; key<listecontri.length;key++){
      var a = listecontri[key];
      if(a==contri){
        console.log("Contributeur déjà dans la liste");
        test=true;
        break;
      }
    }
    if(test==false){
      this.emetteur2.emit(contri);
      this.apimusique.ajouterContributeur(this.dataservice.noindex, contri);
    }
    this.delete(tit, art);
    this.refreshData();
  }

  delete(tit: string, art: string) {
    let index: number = -1;
    for (let key = 0; key < this.liste.length; key++) {
      var a = this.liste[key];
      if (a._artiste == art && a._titre == tit) {
        index = key;
      }
    }
    if (index !== -1) {
      this.liste.splice(index, 1);
    }
    this.refreshData();
  }

  refreshData(){
    this.apimusique.afficherPlaylist(this.dataservice.noindex).subscribe(
      (response) => {
        this.Playlist = response;
      },
      (error) => {
        console.log("Erreur d'affichage playlist : " + error);
      }
    );

  }
}
