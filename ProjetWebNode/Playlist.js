const Morceau = require('./Morceau');
// var _listMorceaux = {};
// var _listContributeurs = {};


var _listMorceaux;
var _listContributeurs;
var index = 0;
module.exports = class Playlist{
    constructor(nom, createur, style){
        this._id=index++; // ça
        this._nom = nom;
        this._createur = createur;
        this._style = style;
        this._nbclicks =0;
        this._listMorceaux = [];
        this._listContributeurs = [];
        this._likes = 0;
        this._dislikes = 0;
    }

    ajouterMorceau(titre, artiste){
        this._listMorceaux.push(new Morceau(titre, artiste));
    }

    retirerMorceau(morceau){
        if(_listMorceaux.indexOf(morceau)!=-1){
            this._listMorceaux.splice(0, _listMorceaux.indexOf(morceau));
        }
    }

    incrementerNbclicks(){
        this._nbclicks++;
    }

    ajouterContributeur(contri){
        this._listContributeurs.push(contri);
    }

    get listMorceaux(){
        this._nbclicks++;
        return this._listMorceaux;
    }

    get listContributeurs(){
        return this._listContributeurs;
    }

    incrementerNbLikes(){
        this._likes++;
    }

    incrementerNbDislikes(){
        this._dislikes++;
    }


}