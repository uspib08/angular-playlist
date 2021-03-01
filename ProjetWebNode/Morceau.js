module.exports = class Morceau{

    constructor(titre, artiste){
        this._artiste = artiste;
        this._titre = titre;
    }

    get artiste(){
        return this._artiste;
    }

    get titre(){
        return this._titre;
    }

    set artiste(artiste){
        this._artiste =  artiste;
    }

    set titre(titre){
        this._titre = titre;
    }
}