const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater');
const mongooseDelete= require('mongoose-delete');



const Caterory = new Schema({
    title: { type: String , required:true,},
    slug:{type: String, slug:'title',Unique:true},
},{
    timestamps:true
});

//add plugin
mongoose.plugin(slug);
Caterory.plugin(mongooseDelete,{
    deletedAt:true,
    overrideMethods:'all'});

module.exports =mongoose.model('Caterory',Caterory);