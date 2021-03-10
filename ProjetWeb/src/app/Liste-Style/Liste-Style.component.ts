import { Component, OnInit } from '@angular/core';
import { ApiMusiqueService } from '../apiMusique.service';

@Component({
  selector: 'app-Liste-Style',
  templateUrl: './Liste-Style.component.html',
  styleUrls: ['./Liste-Style.component.scss']
})
export class ListeStyleComponent implements OnInit {
  public listPlaylist: any;
  public listStyle : any;

  constructor(private apimusique:  ApiMusiqueService) {
    this.listStyle = new Array();
  }

  names = ['Rap','UUU','hhh','tetet'];

  ngOnInit() {
    this.apimusique.afficherToutePlaylist().subscribe((response) => {this.listPlaylist = response},
    (error)=>{console.log("Erreur d'affichage playlist : " +error)});
  }

  tester(){
    var u = document.getElementById("coucou")?.innerText;
    console.log(u);

    this.listStyle = u?.split('\n');
    console.log(this.listStyle);
    this.listStyle = uniqueArray3(this.listStyle);
    console.log(this.listStyle);

  }


}
function uniqueArray3(a : any) {
  function onlyUnique(value:any, index:any, self:any) {
      return self.indexOf(value) === index;
  }

  // usage
  var unique = a.filter( onlyUnique ); // returns ['a', 1, 2, '1']

  return unique;
}

