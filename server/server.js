const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

const PORT = 3001;

app.use(bodyParser.json(), cors({
    origin: 'http://localhost:4200'
}), (req,res) => {
    console.log(req.body);
});

app.listen(PORT, () => {
    console.log(`Server start...`);
})