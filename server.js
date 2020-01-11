// Import express and path modules
let express = require('express');
let path = require('path');
let fs = require('fs');

// Create an instance of express
let app = new express();

// Establish the relative port as well as a default of 3000
var PORT = process.env.PORT || 3000;

let note_db = [];



// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES

// GET Routes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
    console.log('Notes page is rendered');
});

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'db/db.json'));
});



app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
    console.log('Home page is rendered');
});

//POST Route
app.post("/notes", (req, res) => {
    var newNote = req.body;
    // console.log(newNote);
    note_db.push(newNote);
    fs.writeFileSync(path.join(__dirname + '/db/db.json'), JSON.stringify(note_db));
    res.send(note_db);

    // fs.readFileSync(path.join(__dirname + '/db/db.json'), (err, data) => {
    //     if (err) throw (err);
    //     // let json = [JSON.parse(data)];
    //     // json.push('{title:"how you doin", text:"Im Guud"}');



    // })


});


app.listen(PORT, () => {
    console.log(`Jake's server is listening on port ${PORT}`);
});