const express = require('express');
const fakeRequest = require('./fakeRequest');

const app = express();
const port = 3333;

app.get('/', async (req, res) => {
  let payment = 'teste';

  fakeRequest.start(payment);

  res.json({
    hello: 'world'
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})