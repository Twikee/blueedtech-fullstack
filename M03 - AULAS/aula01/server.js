const express = require('express');
const cors = require('cors');
const animes = require('./mocks/animes');


const app = express();

const Char = require('./entities/character.entity');

app.use(cors());



app.get('/', function (req, res) {

    const char1 = new Char({
        name: 'Testando',
        lastName: 'Teste',
        skill: 'poder do teste',
        age: '20',
        gender: 'nada'
    });

    char1.validate();

    console.log(char1.getCharacter());

    // console.log(req.headers);
    res.send(animes)
})


app.get('/anime/:id', function (req, res) {
    const animeId = req.params.id;
    let animeFinded;

    animes.map(function (anime) {
        if (anime.id === animeId) {
            animeFinded = anime;
        }
    })

    if (animeFinded) {
        res.send(animeFinded);
    } else {
        res.send('ERRO 404')
    }
})


app.listen(3000, () => {
    console.log('APP RODANDO');
    console.log('Aceesse em http://localhost:3000')
})