const express = require('express');
const app = express()
const databaseConnection = require('./databaseConnection');

// importing Routes for Apis start here
    const userRoutes = require('./routes/userRoutes')
    const productRoutes = require('./routes/productRoutes')
    const categoryRoutes = require('./routes/categoryRoutes')
    const cartRoutes = require('./routes/cartRoutes')
    const orderRoutes = require('./routes/orderRoutes')
// importing Routes for Apis end here

require("dotenv/config");
  app.use(express.json());

  
    // Database Connectivity function start here
        databaseConnection()
    // Database Connectivity function end here

    // Usage for Routes start here
        app.use("/api/user",userRoutes)
        app.use("/api/product",productRoutes)
        app.use("/api/category",categoryRoutes)
        app.use("/api/cart",cartRoutes)
        app.use("/api/order",orderRoutes)
    //Usage for Routes end here
  
const port = process.env.PORT
app.listen(port || 5000 ,()=>{
    console.log(`Server is running on ${port} port`)
})