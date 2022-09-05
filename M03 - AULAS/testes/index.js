const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('FOI');
    console.log('FOI');
})

app.listen(3000, () => {
    console.log('Rodando em http://localhost:3000');
})  