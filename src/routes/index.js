const homepageRouter=require('./homepage');
const pageRouter=require('./page');
const categoryRouter=require('./category');
const productRouter=require('./product');
const allpageRouter=require('./allpage');
const allcategoryRouter=require('./allcategory');
const allproductRouter=require('./allproduct');

function route(app){
    app.use('/',homepageRouter);
    app.use('/page', pageRouter);
    app.use('/category', categoryRouter);
    app.use('/product', productRouter);
    app.use('/allpage', allpageRouter);
    app.use('/allcategory', allcategoryRouter);
    app.use('/allproduct', allproductRouter);
}

module.exports= route;