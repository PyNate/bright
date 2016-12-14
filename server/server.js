import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import logger from 'morgan';
import router from './router';

const app = express();
const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/', router);

app.get('*', function (req, res) {
  // and drop 'public' in the middle of here
  res.sendFile(path.join(path.dirname(__dirname), 'public', 'index.html'))
})

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

export default app;
