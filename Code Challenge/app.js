const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const https = require('https');
const port = 3000;
const router = require('./routes/router');

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());

// view engine
app.set('view engine', 'ejs');

// ssl
const httpsOptions =  {
  cert: fs.readFileSync(path.join(__dirname, 'ssl', 'server.crt')),
  key: fs.readFileSync(path.join(__dirname, 'ssl', 'server.key'))
}

// start server
https.createServer(httpsOptions, app)
.listen(port, () => {
    console.log(`Server is up at https://localhost:${port}`);
});

// routes
app.get('/', (req, res) => res.render('home'));
app.use(router);