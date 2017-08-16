// require
const express = require('express');
const mustache = require('mustache-express');
const bodyParser = require('body-parser');

// set up app with express
const app = express();

// confingure mustache
app.engine('mustache', mustache());
app.set('views', './templates');     // where to look for templates
app.set('view engine', 'mustache');  // what do we use to render them?

// configure bodyparse
app.use(bodyParser.urlencoded({ extended: false }));

// create array for tasks on todo liste
const tasks = [
  "walk dog",
  "do laundry",
  "cook meatballs"
];

// display to do list
app.get('/', function (req, req) {
  res.render('todo', {
    honeyDo: tasks
  });
});

// receive new tasks (form info)

// create server
app.listen(3003, function () { // 1024 and below are off limits
  console.log('HOT NOW');
});
