import { DataService } from './../DataService';
import { ApiMusiqueService } from './../apiMusique.service';
import { MatTabsModule } from '@angular/material/tabs';
import { Component, EventEmitter, HostListener, OnInit, Output, ViewEncapsulation } from '@angular/core';
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
    this.listuti=new Array();
  }
  tabs=['oui', 'non', 'hihi'];

  @Output() emetclick = new EventEmitter<String>();


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
  @HostListener('document:mousemove', ['$event'])
  tester() {
    // console.log(this.listPlaylist[0]._style);
    for(let index=0;index<this.listPlaylist.length;index++){
      this.listuti.push(this.listPlaylist[index]._createur)
    }

    this.listuti = uniqueArray3(this.listuti);

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
   this.emetclick.emit("oui");
 }

 recupEvt(a : any){
  console.log(a);
  this.listPlaylist = a;
}


}
function uniqueArray3(a: any) {
  function onlyUnique(value: any, index: any, self: any) {
    return self.indexOf(value) === index;
  }

  // usage
  var unique = a.filter(onlyUnique); // returns ['a', 1, 2, '1']

  return unique;
}
