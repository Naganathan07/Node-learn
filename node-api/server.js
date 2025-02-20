require('dotenv').config();

const express = require('express');
const connectDb = require('./database/db');
const bookRoutes = require('./Routes/book-routes')

const app = express();


const PORT =process.env.PORT || 3000;      

//connect to database

connectDb();

//Middleware

app.use(express.json())

//routes here

app.use('/api/books',bookRoutes);


app.listen(PORT,()=>{

    console.log(`server is running on port ${PORT}`);
})

