const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.listen(3001, () => {
    console.log('서버 시작')
});

app.get('/movies', (req, res) => {
    res.set('Content-Type', 'application/json');
    res.sendFile(__dirname + '/movies.json');
});