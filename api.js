const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;


let prodotti = [];
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', function (req, res) {
    res.send(path.join('prova'));
  });

app.post('/prodotto', (req, res) => {
    const prodotto = req.body
    console.log(prodotto)
    prodotti.push(prodotto)
    res.send('Prodotto aggiunto al database');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));