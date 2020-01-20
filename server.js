// Import express and path modules
let express = require('express');
let path = require('path');
let fs = require('fs');


// Create an instance of express
let app = express();

// Establish the relative port as well as a default of 3000
var PORT = process.env.PORT || 3900;

let note_db = [];



// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))

// ROUTES

// GET Routes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
    console.log('Notes page is rendered');
});

app.get('/api/notes', (req, res) => {
    console.log(res);
    res.sendFile(path.join(__dirname, "db/db.json"))
});

app.post("/api/notes", (req, res) => {
    var newNote = req.body;
    // console.log(newNote);
    if (note_db.length == 0) {
        newNote.id = 1;
    } else {
        newNote.id = note_db[note_db.length - 1].id + 1;
    }

    note_db.push(newNote);
    console.log(res);
    fs.writeFileSync(path.join(__dirname + '/db/db.json'), JSON.stringify(note_db));
    res.send(note_db);


    // fs.readFileSync(path.join(__dirname + '/db/db.json'), (err, data) => {
    //     if (err) throw (err);
    //     // let json = [JSON.parse(data)];
    //     // json.push('{title:"how you doin", text:"Im Guud"}');
    // })
});



app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
    console.log('Home page is rendered');
});

//POST Route

// DELETE Route
app.delete("/api/notes/:id", (req, res) => {
    let id = req.params.id;
    console.log('note deleted');
    notes = note_db.filter(note => {
        if (id == note.id) {
            note_db.splice((id - 1), 1);
            fs.writeFileSync(path.join(__dirname + '/db/db.json'), JSON.stringify(note_db));
            console.log(note_db);
        } else {
            console.log('nothing deleted');
        }
    })
    console.log(notes);
    res.json(notes);


})

app.listen(PORT, () => {
    console.log(`Jake's server is listening on port ${PORT}`);
});