import { PlayList } from './../PlayList';
import { ApiMusiqueService } from './../apiMusique.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotifierService } from '../notifier.service';

@Component({
  selector: 'app-ajouterMorceauxCreation',
  templateUrl: './ajouterMorceauxCreation.component.html',
  styleUrls: ['./ajouterMorceauxCreation.component.scss'],
})
export class AjouterMorceauxCreationComponent implements OnInit {
  public listePlay: any;
  public nom!: string;
  public createur!: string;
  public numero: number = 0;
  //public test:Subscription;
  public message: string = '';
  public pb: number = 0;
  constructor(
    private apiMusique: ApiMusiqueService,
    private notiferservice: NotifierService
  ) {
    //this.test = this.apiMusique.afficherToutePlaylist().subscribe((response) => {this.listePlay = response},
    //(error)=>{console.log("Erreur d'affichage playlist : " +error)});
  }

  ngOnInit() {
    this.apiMusique.afficherToutePlaylist().subscribe(
      (response) => {
        this.listePlay = response;
      },
      (error) => {
        console.log("Erreur d'affichage playlist : " + error);
      }
    );
    document.getElementById("test")?.focus();
  }
  ngOnDestroy() {
    //this.test.unsubscribe();
  }

  ajouterMorceaux(titre: string, artiste: string) {
    this.message = '';
    if (titre == null || artiste == null) {
      // this.message="Renseignez tout les champs ! "
      this.notiferservice.showNotification(
        'Veuillez remplir les champs',
        'OK',
        'error'
      );
      return;
    }
    //console.log(titre +  artiste);
    if (this.pb % 2 == 0) {
      if (this.listePlay.length == 0) {
        for (
          let key = 0;
          key < this.listePlay[0]._listMorceaux.lenghth;
          key++
        ) {
          var a = this.listePlay[0]._listMorceaux[key];
          if (a._titre == titre && a._artiste == artiste) {
            //this.message="Morceau déjà dans la playlist !"
            this.notiferservice.showNotification(
              'Morceau déjà dans la playlist',
              'OK',
              'error'
            );
            return;
          }
        }
        this.apiMusique.ajouterMorceau(0, titre, artiste);
        this.message = 'Musique ajouté ! ';
      } else {
        for (
          let key = 0;
          key < this.listePlay[this.listePlay.length - 1]._listMorceaux.length;
          key++
        ) {
          var a = this.listePlay[this.listePlay.length - 1]._listMorceaux[key];
          if (a._titre == titre && a._artiste == artiste) {
            //this.message="Morceau déjà dans la playlist !"
            this.notiferservice.showNotification(
              'Morceau déjà dans la playlist',
              'OK',
              'error'
            );
            return;
          }
        }
        this.apiMusique.ajouterMorceau(
          this.listePlay.length,
          titre,
          artiste
        );
        //this.message="Musique ajouté !"
        this.notiferservice.showNotification(
          'Musique ajoutée !',
          'OK',
          'success'
        );
      }
    }
    this.pb++;
    this.ngOnInit();

    // console.log(this.apiMusique.afficherToutePlaylist());
  }

}

