import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Liste-Style',
  templateUrl: './Liste-Style.component.html',
  styleUrls: ['./Liste-Style.component.scss']
})
export class ListeStyleComponent implements OnInit {

  constructor() { }

  names = ['Rap','UUU','hhh','tetet'];

  ngOnInit() {
  }

}
