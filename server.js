// Import express and path modules
let express = require('express');
let path = require('path');
let fs = require('fs');

// Create an instance of express
let app = new express();

// Establish the relative port as well as a default of 3000
var PORT = process.env.PORT || 3000;



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
    console.log(newNote);

    fs.readFileSync(path.join(__dirname + '/db/db.json'), (err, data) => {
        if (err) throw (err);
        let json = JSON.parse(data);
        json.push(newNote);


        fs.appendFileSync(path.join(__dirname + '/db/db.json'), JSON.stringify(newNote), err => {
            if (err) throw (err);
        });
        res.send(newNote);
    })


});


app.listen(PORT, () => {
    console.log(`Jake's server is listening on port ${PORT}`);
});