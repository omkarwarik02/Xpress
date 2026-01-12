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


app.use('/auth', require('./routes/auth.routes'));
app.use('/refresh', require('./routes/refresh.routes'));

module.exports = app;
