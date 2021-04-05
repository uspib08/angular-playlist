import { DataService } from './../DataService';
import { ApiMusiqueService } from './../apiMusique.service';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { Component, EventEmitter, HostListener, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Sort } from '@angular/material/sort';
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


sortData(sort : Sort){
  const data = this.PlaylistUti;
  if (!sort.active || sort.direction === '') {
    this.PlaylistUti = data;
    return;
  }

  this.PlaylistUti = data.sort((a: { _id: string | number; _nom: string | number; _createur: string | number; _style: string | number; _nbclicks: string | number; }, b: { _id: string | number; _nom: string | number; _createur: string | number; _style: string | number; _nbclicks: string | number; }) => {
    const isAsc = sort.direction === 'asc';
    switch (sort.active) {
      case 'num': return compare(a._id, b._id, isAsc);
      case 'nom': return compare(a._nom, b._nom, isAsc);
      case 'createur': return compare(a._createur, b._createur, isAsc);
      case 'style': return compare(a._style, b._style, isAsc);
      case 'clicks': return compare(a._nbclicks , b._nbclicks , isAsc);
      default: return 0;
    }
  });
}
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

function uniqueArray3(a: any) {
  function onlyUnique(value: any, index: any, self: any) {
    return self.indexOf(value) === index;
  }

  // usage
  var unique = a.filter(onlyUnique); // returns ['a', 1, 2, '1']

  return unique;
}
