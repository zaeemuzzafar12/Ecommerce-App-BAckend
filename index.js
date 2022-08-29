const express = require('express');
const app = express()
const databaseConnection = require('./databaseConnection');
const cors = require('cors')
// importing Routes for Apis start here
    const userRoutes = require('./routes/userRoutes')
    const productRoutes = require('./routes/productRoutes')
    const categoryRoutes = require('./routes/categoryRoutes')
    const cartRoutes = require('./routes/cartRoutes')
    const orderRoutes = require('./routes/orderRoutes')
    const stripeRoutes = require('./routes/stripeRoutes')
    const sliderRoutes = require('./routes/sliderRoutes')
    const newsletterRoutes = require('./routes/newsletterRoutes')
// importing Routes for Apis end here

// for using env file secret key start here
require("dotenv/config");
  app.use(express.static(__dirname + '/public'));
  app.use(express.json());
  app.use(cors())

// for using env file secret key end here
  
    // Database Connectivity function start here
        databaseConnection()
    // Database Connectivity function end here

    // Usage for Routes start here
        app.use("/api/user",userRoutes)
        app.use("/api/product",productRoutes)
        app.use("/api/category",categoryRoutes)
        app.use("/api/cart",cartRoutes)
        app.use("/api/order",orderRoutes)
        app.use("/api/stripe",stripeRoutes)
        app.use("/api/slider",sliderRoutes)
        app.use("/api/mail",newsletterRoutes)
    //Usage for Routes end here

    app.get('/' , (req,res) => {
        res.send("iam just testing around herou server only")
    })

// app.listen(5000);


var server = app.listen( process.env.PORT || 5000 ,() => {
    var port = server.address().port;
    console.log(`Express Server is running on ${port} port`)
})


