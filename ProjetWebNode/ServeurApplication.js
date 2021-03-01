const express = require('express');
const banquePlaylist = require('./banquePlaylist');
const app = express();
const port = 3000;

let b1 = new banquePlaylist();

app.use(express.json())

app.post('/:nom/:createur/:style', function(req,res) {
    var objres = b1.creerPlaylist(req.params.nom, req.params.createur, req.params.style);
    // res.send(b1);
    if((typeof objres === 'undefined') || (typeof objres === {}))
        res.status(400);
    else res.status(201).json(objres);
});

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port port!`));