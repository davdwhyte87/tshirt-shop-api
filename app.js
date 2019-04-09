import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(expressValidator());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});


app.use(bodyParser.urlencoded({ extended: false, limit: '10mb' }));
app.use(bodyParser.json({ limit: '10mb' }));

app.get('/api/v1', (req, res) => {
  res.status(200).send('Hey this is the Tshirt-shop API version 1');
});
app.use('*', (req, res) => res.status(404).send({
  status: 404,
  error: 'This route does not exist. You may navigate to the home route at api/v1',
}));
app.use(morgan('dev'));
export default app;