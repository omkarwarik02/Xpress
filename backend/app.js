const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();



app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());


app.get('/', (req, res) => {
  res.send('API running');
});

module.exports = app;
