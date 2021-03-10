import { DataService } from './../DataService';
import { ApiMusiqueService } from './../apiMusique.service';
import { Morceau } from './../Morceau';
import { Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-Liste-Morceaux',
  templateUrl: './Liste-Morceaux.component.html',
  styleUrls: ['./Liste-Morceaux.component.css']
})
export class ListeMorceauxComponent implements OnInit {

  public liste: any;
  public m: Morceau = new Morceau();


  constructor(private apimusique:ApiMusiqueService,
              private dataservice : DataService) {
    this.liste = new Array();
  }

  @Output() emetteur = new EventEmitter<Morceau>();


  ngOnInit() {
  }


  ajouter(artiste:string, titre:string): void{
    const m2 = new Morceau();
    m2._artiste = artiste;
    m2._titre = titre
    this.liste.push(m2);
  }
  envoyer(tit:string, art:string){
    console.log(tit+"/"+art);
    console.log(this.dataservice.noindex);
    const m2 = new Morceau();
    m2._artiste = art;
    m2._titre = tit;
    this.emetteur.emit(m2);


    this.apimusique.ajouterMorceau(this.dataservice.noindex,tit,art);
  }




}
