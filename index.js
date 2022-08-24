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
// importing Routes for Apis end here

// for using env file secret key start here
require("dotenv/config");
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
    //Usage for Routes end here

    app.get('/' , (req,res) => {
        res.send("iam just testing")
    })

// app.listen(5000);

const port = process.env.PORT
const server = app.listen(`${port}` || 5000 ,()=>{
    const ports = server.address().port;
    console.log(`Express Server is running on ${ports} port`)
})


