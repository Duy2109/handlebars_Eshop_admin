const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater');
const mongooseDelete= require('mongoose-delete');



const Product = new Schema({
    title: { type: String , required:true,},
    slug:{type: String, slug:'title',Unique:true},
    desc:{type: String, required:true,},
    category:{type: String,required:true,},
    price:{type: Number,required:true,},
    image:{type: String,},
},{
    timestamps:true
});

//add plugin
mongoose.plugin(slug);
Product.plugin(mongooseDelete,{
    deletedAt:true,
    overrideMethods:'all'});

module.exports =mongoose.model('Product',Product);