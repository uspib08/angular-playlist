import { DataService } from './../DataService';
import { ApiMusiqueService } from './../apiMusique.service';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { Component, EventEmitter, HostListener, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
declare const sortTable: any;
@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.component.html',
  styleUrls: ['./liste-utilisateur.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class ListeUtilisateurComponent implements OnInit {
  public listPlaylist : any;
  public listuti : any;
  public listnomUti : any;
  public PlaylistUti: any;
  public searchText: any;


  constructor(private apimusique : ApiMusiqueService, private dataservice : DataService) {
    this.listuti=new Array();
    this.listnomUti=new Array();
    this.PlaylistUti = new Array();
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


  public viewPlaylist(id : number){
    this.dataservice.noindex = id;
    console.log(this.dataservice.noindex);

 }

 @HostListener('document:mousemove', ['$event'])
 remplirListe(){
  for (let index = 0; index < this.listPlaylist.length; index++) {
    this.listnomUti.push(this.listPlaylist[index]._createur);
  }
  this.listnomUti = uniqueArray3(this.listnomUti);
  //console.log(this.listnomUti);

 }


 hideElements(tabChangeEvent : MatTabChangeEvent){

   console.log('index => ', tabChangeEvent.index);
   if(tabChangeEvent.index==0){
     this.emetclick.emit("non");
   }
   this.emetclick.emit("oui");
   //console.log(this.listPlaylist);

   for (let oui = 0; oui < this.listnomUti.length; oui++) {
      for (let i = 0; i < this.listPlaylist.length; i++) {
       //console.log(this.listPlaylist[i].createur +"|||"+this.listnomUti[oui]);
       if(this.listPlaylist[i]._createur == this.listnomUti[oui]){
         if(!this.PlaylistUti.includes(this.listPlaylist[i])){
          this.PlaylistUti.push(this.listPlaylist[i]);
         }
       }
     }
   }
  //  sortTable.init();
   console.log(this.PlaylistUti);
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
