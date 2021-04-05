import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayList } from './PlayList';

@Injectable({
  providedIn: 'root'
})
export class ApiMusiqueService {
  private url = 'http://localhost:3000/';
  constructor(private httpclient : HttpClient) { }

  public creerPlaylist(nom : string, createur: string, style:string){
    this.httpclient.post(this.url+"creerPlay/"+nom+"/"+createur+"/"+style,{ title: 'Angular POST Request Example' })
    .subscribe((response)=> {console.log(response);},
      (error)=>{console.log("erreur ajoutée");}
    )
  }

  public afficherPlaylist(id : number) : Observable<PlayList>{
    return this.httpclient.get<PlayList>(this.url+"affichePlay/"+id);
  }
  public afficherToutePlaylist(){
    console.log(this.url+"afficheToutesPlay");
    return this.httpclient.get<PlayList>(this.url+"afficheToutesPlay");
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

  public supprimerPlaylist(id : number){
    this.httpclient.delete(this.url+"supprimer/"+id)
    .subscribe((response)=> {console.log(response);},
      (error)=>{console.log("erreur ajoutée");}
    )
  }

  public incrementerLikes(id : number){
    this.httpclient.put(this.url+"like/"+id, {title: '1 Like en plus'})
    .subscribe((response)=>{console.log(response);},
    (error)=>{console.log("erreur ajoutée");}
    )
  }

  public incrementerDislikes(id : number){
    this.httpclient.put(this.url+"dislike/"+id, {title: '1 Dislike en plus'})
    .subscribe((response)=>{console.log(response);},
    (error)=>{console.log("erreur ajoutée");}
    )
  }

}
