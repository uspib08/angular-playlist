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

    afficherPlaylist(id){
        if (typeof this.listePlaylist[id] === 'undefined')
			return false;
        return this.listPlaylist[id];
    }
}