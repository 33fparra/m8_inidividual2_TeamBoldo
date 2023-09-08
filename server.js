
//punto 13
import express from "express";
import fs from "fs";
import cors from "cors";
import bodyParser from "body-parser";
// app.use(cors());
const app = express();
app.use(bodyParser.json());
//app.use(express.json());


//definimos array
let items = [1,2,3];

//GET: Devuelve el array.
app.get('/items', (req, res) => {
    res.json(items);
});

//POST: Agrega un elemento al array desde el body.
app.post('/items', (req, res) => {
    const item = req.body.item;
    if (item) {
        items.push(item);
        res.json({ message: 'Item agregado!', items });
    } else {
        res.status(400).json({ message: 'Por favor, envía un item en el body.' });
    }
});

//PUT: Modifica un elemento del array basado en un índice y reemplaza con el valor enviado en el body.
app.put('/items/:index', (req, res) => {
    const index = parseInt(req.params.index, 10);
    const item = req.body.item;

    if (index >= 0 && index < items.length && item) {
        items[index] = item;
        res.json({ message: 'Item modificado!', items });
    } else {
        res.status(400).json({ message: 'Índice inválido o item no enviado en el body.' });
    }
});

app.listen(3000, ()=>{console.log("Levantado puerto http://localhost:3000")});

//punto 17 Funciona