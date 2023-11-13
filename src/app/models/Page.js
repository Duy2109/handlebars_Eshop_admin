const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater');
const mongooseDelete= require('mongoose-delete');



const Page = new Schema({
    title: { type: String , required:true,},
    slug:{type: String, slug:'title',Unique:true},
    content:{type: String, required:true,},
    sorting:{type: Number},
},{
    timestamps:true
});

//add plugin
mongoose.plugin(slug);
Page.plugin(mongooseDelete,{
    deletedAt:true,
    overrideMethods:'all'});

module.exports =mongoose.model('Page',Page);