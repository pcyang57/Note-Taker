const path = require('path');

module.exports = (app) => {
    //returns notes.html file
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/pages/notes.html'));
    });

    //returns index.html file
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/pages/index.html'));
    })
};