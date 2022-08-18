const mongoose = require('mongoose');

const databaseConnections = () => {
    mongoose
        .connect(process.env.MONGODB_URL)
        .then(() => { 
            console.log("Database Connected Successfully")
         })
        .catch((error) =>{ console.log(`Error is coming ${error}`)});

}
module.exports = databaseConnections 