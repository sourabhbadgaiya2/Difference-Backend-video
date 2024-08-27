const mongoose = require('mongoose');


function connectToDb() {
    mongoose.connect("mongodb://0.0.0.0/testDb").then(() => {
        console.log("Connected to database");
    }).catch((err) => {
        console.log("Not connected to database", err);
    });
}


module.exports = connectToDb;