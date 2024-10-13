const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const favicon = require('serve-favicon');

// ====== Midleware ======
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'img', 'favicon.ico')));

// ====== Route =======
app.get('/', (req, res) => {
  res.render('home');
});

// listen
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
