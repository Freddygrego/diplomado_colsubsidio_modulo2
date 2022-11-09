const fs = require('fs');
const path = require('path');
const crypto = require('cripto');

const pathJSON = path.join(__dirname, './db.json');

const readJSON = () => {
    const data = fs.readFileSync(pathJSON, 'utf-8');
    return JSON.parse(data);
};

const writeJSON = (data) => {
     fs.writeFileSync(pathJSON, JSON.stringify(data, null, 4), 'utf-8');
};

const { movies } = readJSON()
movies.push({
    "title" : "Encanto",
    "id": crypto.randomUUID()
})

writeJSON({
    movies: movies,
})