const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const { notes } = require('../../db/db.json');

function createNote (body, notesArray) {
    const note = body;
    notesArray.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json')
    )
}


module.exports = router;