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

  // Считать, что 

  fs.appendFile(`statistic-${new Date().getDate()}.txt`, `${JSON.stringify(arr[arr.length - 1])}\n`, function (err) {
    if (err) {
      console.log(`${err}`);
      throw err
    }
    console.log('saved!!!');
  })
}