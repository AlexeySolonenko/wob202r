const express = require('express')
const app = express();
const port = 3000;
const path = require('path');
//app.get('/', (req, res) => res.send('Hello !'+path.resolve(__dirname,"../build/")));
//app.get('/', (req, res) => res.send('Hello !'+path.resolve("../build/")));
//app.get('/', (req, res) => res.send('Hello !'));
app.use(express.static(path.join(__dirname, '../build')))
app.listen(port,() => console.log(`Example app listening on port ${port}!`));
