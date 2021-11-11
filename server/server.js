const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const fs = require('fs')
const stackLogger = [];

const PORT = 3001;

app.use(bodyParser.json(), cors({
  origin: 'http://localhost:4200'
}), (req, res) => {
  stackLogger.push(req.body)
  console.log(stackLogger);
  sorter(stackLogger);
});

app.listen(PORT, () => {
  console.log(`Server start...`);
})

function sorter(arr) {
  if (arr.length >= 3) {
    fs.appendFile('statistic.txt', `${arr}`, function (err) {
      if (err) {
        throw err
      }
      console.log('saved');
    })
  }
}