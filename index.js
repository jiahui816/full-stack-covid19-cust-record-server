const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
require('dotenv').config();
const logs = require('./api/logs');
const app = express();

mongoose.connect(
  'mongodb+srv://jiahui816_2:liou970921@cluster0.oe1k7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.once('open', () => {
  console.log('MongoDB Connection Established');
});

app.use(morgan('common'));
app.use(helmet());
app.use(
  cors({
    origin: 'https://wb-covid19-resgistration.netlify.app/',
  })
);
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World - Customer Covid 19 Registration',
  });
});

app.use('/api/logs', logs);

const port = process.env.PORT || 3003;
console.log(port);
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
