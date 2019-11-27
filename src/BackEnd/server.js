const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const mongodDB = 'mongodb+srv://admin:admin@cluster0-prbvj.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongodDB, { useNewUrlParser: true });

app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const Schema = mongoose.Schema;

const tankSchema = new Schema({
    name: String,
    type: String,
    country: String,
    gun: Number,
    weight: Number,
    crew: Number,
    photograph: String
});

const TankModel = mongoose.model('tanks', tankSchema);

app.post('/api/tanks', (req, res) => {
    TankModel.create({
        name: req.body.name,
        type: req.body.type,
        country: req.body.country,
        gun: req.body.gun,
        weight: req.body.weight,
        crew: req.body.crew,
        photograph: req.body.photograph
    });

    res.json('Data Uploaded');
})

app.get('/api/tanks/:id', (req, res) => {
    TankModel.findById(req.params.id, (error, data) => {
        res.json(data);
    });
})

app.get('/api/tanks', (req, res) => {
    TankModel.find((error, data) => {
        res.json({ tanks: data });
    })
})

app.delete('/api/tanks/:id', (req, res) => {
    TankModel.deleteOne({ _id: req.params.id },
        (error, data) => {
            res.json(data);
        });
})

app.get('/api/tanks/:id', (req, res) => {
    TankModel.findById(req.params.id, (error, data) => {
        res.json(data);
    })
})

app.put('/api/tanks/:id', (req, res) => {
    TankModel.findByIdAndUpdate(req.params.id,
        req.body,
        { new: true },
        (error, data) => {
            res.json(data);
        }
    )
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))