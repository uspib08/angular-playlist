import { DataService } from './DataService';
import { EventEmitter, Output } from "@angular/core";

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetWeb';
  public searchStr:string | undefined;

constructor(private data:DataService) {

}

  ngOnInit(): void {
    this.data.currentSearch.subscribe(message => this.searchStr=message)
  }


  recherche(str : string){
    this.searchStr=str;
    console.log("str "+str);
    this.data.changeSearch(str);
  }


}
