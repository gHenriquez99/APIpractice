import express from 'express';
const app = express();

app.get('/', function(req, res){
    res.send("Hello, Emma");
});

app.listen(3000);