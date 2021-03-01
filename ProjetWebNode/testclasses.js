const banquePlaylist = require("./banquePlaylist")
const Play = require('./Playlist');

const banque = require('./banquePlaylist');
const b = new banque();

console.log(b.creerPlaylist('nom', 'test', 'oui'));
console.log(b.creerPlaylist('nom', 'test2', 'oui'));
console.log(b.afficherListePlaylist(1));
console.log(typeof b.play);
console.log(b.afficherListPlaylist(1));
