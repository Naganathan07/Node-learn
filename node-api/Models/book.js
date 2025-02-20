const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    title:{
        type:String,
        required :[true,'Book title is required'],
        trim:true,
        maxLenght:[100,'Book title can not be more than 100 Characters']
    },
    author:{
        type:String,
        required :[true,'Author name is required'],
        trim:true
    },
    year:{
        type:Number,
        required :[true,'Publication year is required'],
        min:[1000,'Year must be atleast 1000'],
        maxLenght:[new Date().getFullYear(),'Year can not be in the Future']
    },
    createdAt :{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Book',BookSchema);