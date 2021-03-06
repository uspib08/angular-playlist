const express = require('express');
const banquePlaylist = require('./banquePlaylist');
const app = express();
const port = 3000;

let b1 = new banquePlaylist();

app.use(express.json())

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

app.post('/creerPlay/:nom/:createur/:style', function(req,res) {
    b1.creerPlaylist(req.params.nom, req.params.createur, req.params.style);
    res.send(b1);
});

app.get('/affichePlay/:id', function(req, res){
    res.json(b1.afficherListePlaylist(req.params.id));
});

app.get('/afficheToutesPlay/', function(req, res){
    res.json(b1.afficherToutePlaylist());
});


app.put('/ajouterMorc/:id/:titre/:artiste', function(req, res){
    b1.ajouterMorceauPlaylist(req.params.id, req.params.titre, req.params.artiste);
    // res.json(b1.afficherListePlaylist(req.params.id));
});

app.put('/ajouterContri/:id/:contri', function(req, res){
    b1.ajouterContributeurPlaylist(req.params.id, req.params.contri);
    res.json(b1.afficherListePlaylist(req.params.id));
});

app.delete('/supprimer/:id', function(req, res){
    b1.supprimerPlaylist(req.params.id);
    res.send(b1);
});

app.put('/like/:id', function(req, res){
    b1.incrementerL(req.params.id)
});

app.put('/dislike/:id', function(req, res){
    b1.incrementerD(req.params.id)
});

app.listen(port, () => console.log(`Example app listening on port port!`));