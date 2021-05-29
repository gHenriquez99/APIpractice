import express from 'express';
const app = express();
import apiRoutes from './apiRoutes.js';

// this is not working. Tried to set up a router from the things.js file
// import * as things from './things.js';
app.get('/', function(req, res){
    res.send("Hello, Emma");
});

app.post('/', function(req, res){
    res.send("This calls a post method at '/'");
});

app.all('/test', function(req, res){
    res.send("This is for all HTTP methods. This is commonly used for defining middleware.");
});

// part of the router that is not working
//app.use('/things', things);
app.use('/api', apiRoutes);

app.listen(3000);