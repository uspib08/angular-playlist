const Playlist = require('./Playlist');
var listPlaylist = {};

module.exports = class banquePlaylist{

    constructor(){
        this.listPlaylist = [];
    }

    creerPlaylist(nom, createur, style){
        const id = this.listPlaylist.length;
        var p1 = new Playlist(nom, createur, style);
        this.listPlaylist[id] = p1;
        return id;
    }

    afficherListePlaylist(id){
        return this.listPlaylist[id];
    }

    ajouterMorceauPlaylist(id, titre, artiste){
        b.listPlaylist[id].ajouterMorceau(titre, artiste);

    }

    get play(){
        return this.listPlaylist;
    }
}