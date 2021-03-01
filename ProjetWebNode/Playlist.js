const Morceau = require('./Morceau');

module.exports = class Playlist{
    constructor(nom, createur, style){
        this._nom = nom;
        this._createur = createur;
        this._style = style;
        this._nbclicks =0;
        this._listMorceaux = new Array();
        this._listContributeurs = new Array();
    }

    ajouterMorceau(titre, artiste){
        this._listMorceaux.push(new Morceau(titre, artiste));
    }

    retirerMorceau(morceau){
        if(this._listMorceaux.indexOf(morceau)!=-1){
            this._listMorceaux.splice(0, this._listMorceaux.indexOf(morceau));
        }
    }

    ajouterContributeur(contri){
        this._listContributeurs.push(contri);
    }

    get _listMorceaux(){
        this._nbclicks++;
        return this._listMorceaux;
    }

    set _listMorceaux(listem){
        this._listMorceaux = listem;
    }

    get _listContributeurs(){
        return this._listContributeurs;
    }


}