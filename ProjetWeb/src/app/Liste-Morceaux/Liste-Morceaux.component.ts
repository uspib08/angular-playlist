import { Morceau } from './../Morceau';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Liste-Morceaux',
  templateUrl: './Liste-Morceaux.component.html',
  styleUrls: ['./Liste-Morceaux.component.css']
})
export class ListeMorceauxComponent implements OnInit {

  public liste: any;
  public m: Morceau = new Morceau();

  constructor() {
    this.liste = new Array();
  }

  ngOnInit() {



  }

  ajouter(artiste:string, titre:string){
    const m2 = new Morceau();
    m2._artiste = artiste;
    m2._titre = titre
    this.liste.push(m2);
  }

}
