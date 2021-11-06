const express = require('express');
const app = express();

const server = app.listen(3000, () => {
    console.log('Start Server : localhost:3000');
});

app.get('/', function (req, res) {
    res.send('Node.js始めまして')
});

app.get('/about', function (req, res) {
    res.send('Node.jsとは')
});