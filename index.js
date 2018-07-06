const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const massive = require('massive');
const products_controller=require('./products_controller');
dotenv.config();

const app = express ();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
}).catch(error=>{
    console.log('----error', error);
});

app.post('/api/product/:id', products_controller.create);
app.get('/api/product/:id', products_controller.getOne);
app.get('/api/products', products_controller.getAll);
app.put('/api/product/:id', products_controller.update);
app.delete('/api/product/:id', products_controller.delete);


const PORT = 3000;
app.listen(PORT, ()=>{
    console.log('server is listening on port' + PORT );  
});