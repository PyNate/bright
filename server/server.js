import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import router from './router';

const app = express();
const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/', router);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

export default app;
