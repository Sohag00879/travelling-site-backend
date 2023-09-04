const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name:{type: String, required:true},
    location:{type:String,required:true},
    img:{type : String, required:true},
    desc:{type: String, required:true},
    price:{type: String, required:true},
    ratings:{type: String},
    comments:[{
        text:{type:String,required:true},
        author:{type:String, required:true}
    }]
},{versionKey:false})


const services = mongoose.model('services',serviceSchema);

module.exports = services;