import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import { ApiMusiqueService } from '../apiMusique.service';

@Component({
  selector: 'app-Liste-Style',
  templateUrl: './Liste-Style.component.html',
  styleUrls: ['./Liste-Style.component.scss'],
})
export class ListeStyleComponent implements OnInit {
  public listPlaylist: any;
  public listStyle: any;
  // @ViewChild('dummyClick') dummyClickRef: ElementRef;


  constructor(private apimusique: ApiMusiqueService) {
    this.listStyle = new Array();
  }

  @Output() emetstyle = new EventEmitter<any>();



  // names = ['Rap', 'UUU', 'hhh', 'tetet'];

  ngOnInit() {
    this.apimusique.afficherToutePlaylist().subscribe(
      (response) => {
        this.listPlaylist = response;
      },
      (error) => {
        console.log("Erreur d'affichage playlist : " + error);
      }
    );

    // this.tester();

    // this.dummyClickRef.nativeElement.click()
  }

  @HostListener('document:mousemove', ['$event'])
  tester() {
    // console.log(this.listPlaylist[0]._style);
    for(let index=0;index<this.listPlaylist.length;index++){
      this.listStyle.push(this.listPlaylist[index]._style)
    }
    // console.log(this.listStyle);


    // var u = document.getElementById('coucou')?.innerText;
    // console.log(u);

    // this.listStyle = u?.split('\n');
    this.listStyle = uniqueArray3(this.listStyle);
    // this.listStyle.splice(0,1);
    // console.log("ici"+this.listStyle);

  }

  filtrer(style : string){
    // this.tester();
    console.log(this.listStyle);

    var listefiltree = new Array();
    for(let index=0; index<this.listPlaylist.length; index++){
      if(this.listPlaylist[index]._style == style){
        listefiltree.push(this.listPlaylist[index]);
      }
    }
    // this.listPlaylist = listefiltree;
    // console.log(this.listPlaylist);
    this.emetstyle.emit(listefiltree);




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
