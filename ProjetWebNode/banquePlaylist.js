const Playlist = require('./Playlist');
var listPlaylist = {};
var listnom = {};

module.exports = class banquePlaylist{

    constructor(){
        this.listPlaylist = [];
        this.listnom = [];
    }

    creerPlaylist(nom, createur, style){
        const id = this.listPlaylist.length;
        var p1 = new Playlist(nom, createur, style);
        this.listPlaylist[id] = p1;
       // this.listPlaylist[id]._id=id; // ça
        return id;
    }

    afficherListePlaylist(id){
       this.listPlaylist[id].incrementerNbclicks();
        return this.listPlaylist[id];
    }
    afficherToutePlaylist(){
        return this.listPlaylist;
    }

    ajouterMorceauPlaylist(id, titre, artiste){
        this.listPlaylist[id].ajouterMorceau(titre, artiste);

    }
    ajouterContributeurPlaylist(id, contri){
        this.listPlaylist[id].ajouterContributeur(contri);

    }
    supprimerPlaylist(id){
        console.log(id);

        for (let key = 0; key < this.listPlaylist.length; key++) {
            var a = this.listPlaylist[key];
            console.log(a._id);
            this.listnom.push(a._id);
        }

        var index = this.listnom.indexOf(parseInt(id));
        console.log("index : " +index);       
        this.listPlaylist.splice(index,1);  
        this.listnom = [];  

    }

    get play(){
        return this.listPlaylist;
    }
}