const path = require('path');
const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req,res) => {
  res.send('hello');
})

app.use(express.static(path.resolve(__dirname, '../src')));


app.listen(port, () => {
  console.log(`listenening on port: ${port}`)
});

module.exports = app;