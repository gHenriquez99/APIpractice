import express from 'express';
const app = express();
import apiRoutes from './apiRoutes.js';

const staticFolder = 'public';

// all my routes are in a Router in apiRoutes.js to help clean up this page

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(staticFolder));

app.use('/api', apiRoutes);

app.listen(3000);