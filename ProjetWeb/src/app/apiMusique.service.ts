import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayList } from './PlayList';

@Injectable({
  providedIn: 'root'
})
export class ApiMusiqueService {
  private url = 'http://localhost:3000';
  constructor(private httpclient : HttpClient) { }

  public creerPlaylist(nom : string, createur: string, style:string){
    this.httpclient.post(this.url+nom+"/"+createur+"/"+style,{ title: 'Angular POST Request Example' })
    .subscribe((response)=> {console.log(response);},
      (error)=>{console.log("erreur ajoutée");}
    )
  }

  public afficherPlaylist(id : number) : Observable<PlayList>{
    return this.httpclient.get<PlayList>(this.url+id);
  }

  public ajouterMorceau(id : number, titre : string, artiste : string){
    this.httpclient.put(this.url+"ajouterMorc/"+ id +"/"+titre+"/"+artiste, { title: 'Angular POST Request Example2' })
    .subscribe((response)=> {console.log(response);},
      (error)=>{console.log("erreur ajoutée");}
    );
  }

  public ajouterContributeur(id : number, contri : string){
    this.httpclient.put(this.url+"ajouterContri/"+ id +"/"+contri, { title: 'Angular POST Request Example3' })
    .subscribe((response)=> {console.log(response);},
      (error)=>{console.log("erreur ajoutée");}
    );
  }

}
