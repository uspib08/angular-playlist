const Morceau = require('./Morceau');

var _listMorceaux;
var _listContributeurs;
module.exports = class Playlist{
    constructor(nom, createur, style){
        this._nom = nom;
        this._createur = createur;
        this._style = style;
        this._nbclicks =0;
        this._listMorceaux={};
        this._listContributeurs={};
        //this._listMorceaux = [];
        //this._listContributeurs = [];
    }

    ajouterMorceau(titre, artiste){
        _listMorceaux.push(new Morceau(titre, artiste));
    }

    retirerMorceau(morceau){
        if(_listMorceaux.indexOf(morceau)!=-1){
            _listMorceaux.splice(0, _listMorceaux.indexOf(morceau));
        }
    }

    ajouterContributeur(contri){
        _listContributeurs.push(contri);
    }

   get listMorceaux(){
        _nbclicks++;
        return _listMorceaux;
    }

    set listMorceaux(listem){
        _listMorceaux= listem;
    }

    get listContributeurs(){
        return _listContributeurs;
    }
    set listContributeurs(listecontri){
        _listContributeurs=listecontri;
        
    }


}