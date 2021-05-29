import express from 'express';
const router = express.Router();

router.get('/helloLiam', async(req, res) => {
    res.send('The endpoint is working correctly');
});

router.get('/hello/:id', function(req, res) {
    res.send('The id you specified is ' + req.params.id);
});

export default router;