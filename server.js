const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.status(200).send('This actually worked!!!');
});

if (module === require.main) {
  const server = app.listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
    console.log(`listening on port ${port}`);
  });
}

module.exports = app;