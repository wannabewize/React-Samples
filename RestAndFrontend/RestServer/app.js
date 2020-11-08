const express = require('express');
const app = express();

// images 폴더에서 파일 찾아서 응답하기
app.use( express.static('images') );

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const movieRouter = require('./routes/movieRouter');
app.use(movieRouter);

app.listen(3001, () => {
    console.log('Movies REST 서버가 3001 포트로 시작했습니다.')
});


