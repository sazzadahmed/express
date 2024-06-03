const express = require('express')

// creating express app
const app = express();

// set server port
const port = 3000;

// create a get route
app.get('/', (req, res) => {
    res.end('hello world');
});

// server node server
app.listen(port, () => {
    console.log('server initialization successful');
})