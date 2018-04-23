const express = require('express');

const app = express();

if (!process.env.REDIRECT_TO) {
  throw new Error('Must set REDIRECT_TO env var to a valid URL');
}

app.use((req, res) => {
  res.redirect(process.env.REDIRECT_TO);
  return;
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('Redirector listening on port ' + port))
