import express from 'express';

const app = express();

app.get('*', (req, res) => {
  res.send({ hello: 'express' });
});

app.listen(3000, (error) => {
  error ? console.log(error) : console.log('Server running on 3000 port');
});
