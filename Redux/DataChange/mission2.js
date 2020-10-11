const game = {
    title : 'DEATH STRANDING',
    production: 'KOJIMA Productions',
    year: 0
}

function changeGameData(game, data) {
    let newGame = {...game};
    if ( data.title ) { newGame.title = data.title };
    if ( data.production ) { newGame.production = data.production };
    if ( data.year ) { newGame.year = data.year};
    console.log(newGame);

    return newGame;
}

changeGameData(game, {year: 2019});
