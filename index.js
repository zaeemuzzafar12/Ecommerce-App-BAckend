const express = require('express');
const app = express()
const databaseConnection = require('./databaseConnection');
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const categoryRoutes = require('./routes/categoryRoutes')
const cartRoutes = require('./routes/cartRoutes')
const orderRoutes = require('./routes/orderRoutes')

require("dotenv/config");
  app.use(express.json());

  
    // Database Connectivity function start here
        databaseConnection()
    // Database Connectivity function end here

    app.use("/api/user",userRoutes)
    app.use("/api/product",productRoutes)
    app.use("/api/category",categoryRoutes)
    app.use("/api/cart",cartRoutes)
    app.use("/api/order",orderRoutes)

  
const port = process.env.PORT
app.listen(port || 5000 ,()=>{
    console.log(`Server is running on ${port} port`)
})