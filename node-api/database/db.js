
const mongoose = require('mongoose');

const connectDb = async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/');
        console.log('mongodb is connected successfully');     
        
    } catch (e) {
        console.error('Mongodb connection failed',e);
        process.exit(1)
    }
}

module.exports = connectDb