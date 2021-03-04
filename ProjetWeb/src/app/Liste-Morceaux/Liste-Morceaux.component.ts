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

    this.m._titre = 'OKLM';
    this.m._artiste = 'BOOBA';
    this.liste.push(this.m);

  }

}
