const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const { notes } = require('../../db/db.json');

function createNote (body, notesArray) {
    const note = body;
    notesArray.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify({notes: notesArray}, null, 2)
    ); 
    return note;
};

function validateNote (note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
};

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    
    if (!validateNote(req.body)) {
        res.status(400).send('Please enter all information to complete the note!');
    } else {
        const note = createNote(req.body, notes);
        res.json(note);
    }
});

module.exports = router;