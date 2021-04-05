import { PlayList } from './../PlayList';
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
import { Sort } from '@angular/material/sort';
import { NotifierService } from '../notifier.service';

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
  public message : string | undefined;

  constructor(
    private apimusique: ApiMusiqueService,
    private dataservice: DataService,
    private notiferservice: NotifierService
  ) {
    this.Playlist=new Array();
    this.liste = new Array();
  }
  @Input()
  playlistParent: PlayList = new PlayList;
  @Output() emetteur = new EventEmitter<Morceau>();
  @Output() emetteur2 = new EventEmitter<string>();

  ngOnInit() {
   /* this.apimusique.afficherPlaylist(this.dataservice.noindex).subscribe(
      (response) => {
        this.Playlist = response;
      },
      (error) => {
        console.log("Erreur d'affichage playlist : " + error);
      }
    );*/
    this.Playlist=this.playlistParent;
  }

  ajouter(artiste: string, titre: string, contributeur: string): void {
    this.message="";
    // verification que rien ne soit vide
    if (artiste == null || titre == null || contributeur == null ) {
      this.message="Des cases vides ..";
      this.notiferservice.showNotification('Veuillez remplir les champs', 'OK', 'error');
      //console.log("Des cases vides ..");
      return;
    }
    //verification que ça ne soit pas déjà dans la liste des propositions
    for (let key = 0; key < this.liste.length; key++) {
      var a = this.liste[key];
      if (a._artiste == artiste && a._titre == titre) {
        this.message="Déjà dans la liste ! "
        this.notiferservice.showNotification('Déjà dans la liste !', 'OK', 'error');
        //console.log("Déjà dans la liste ! ");
        return;
      }
    }
    // verification que ça ne soit pas déjà dans la playlist
    let listemorceau= this.Playlist._listMorceaux;
    for (let key = 0; key < listemorceau.length; key++) {
      var a = listemorceau[key];
      if (a._artiste == artiste && a._titre == titre) {
        this.message="Déjà dans la playlist finale !"
        this.notiferservice.showNotification('Déjà dans la playlist finale !', 'OK', 'error');
       // console.log("Déjà dans la playlist finale !");
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
    //this.notiferservice.showNotification( 'Ajouter au propositions !', 'OK', 'success');
    //this.refreshData();
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
    this.notiferservice.showNotification( 'Vos suggestions ont bien été ajouter à la playlist !', 'OK', 'success');
    //this.refreshData();
  }
  envoyerTout(){
    for(let key = 0; key<this.liste.length;key++){
      var a = this.liste[key];
      console.log(key)
      this.envoyer(a._titre,a._artiste,a._contributeur);

    }
    if(this.liste.length>0){
      this.envoyerTout();
    }
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
    //this.refreshData();
  }

  sortData(sort : Sort){
    const data = this.liste;

    if (!sort.active || sort.direction === '') {
      this.liste = data;
      return;
    }

    this.liste = data.sort((a: { _id: string | number; _artiste: string | number; _titre: string | number; _contributeur: string | number; },b: { _id: string | number; _artiste: string | number; _titre: string | number; _contributeur: string | number; }) => {
      const isAsc = sort.direction === 'asc';
     // console.log(a)
      switch (sort.active) {
        //case 'num': return compare(a._id, b._id, isAsc);
        case 'artiste': return compare(a._artiste, b._artiste, isAsc);
        case 'titre': return compare(a._titre, b._titre, isAsc);
        case 'contributeur': return compare(a._contributeur, b._contributeur, isAsc);
        default: return 0;
      }
    });
  }
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

