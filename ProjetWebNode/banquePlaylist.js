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
        this.listPlaylist[id].ajouterMorceau(titre, artiste);

    }
    ajouterContributeurPlaylist(id, contri){
        this.listPlaylist[id].ajouterContributeur(contri);

    }

    get play(){
        return this.listPlaylist;
    }
}