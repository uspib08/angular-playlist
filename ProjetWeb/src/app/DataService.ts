import{Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class DataService{​​​​​
  public noindex:number=0;

  private searchNom=new BehaviorSubject<string>("");
  currentSearch=this.searchNom.asObservable();

  constructor(){}

  changeSearch(msg : string){
    this.searchNom.next(msg);
  }

}​​​​​
