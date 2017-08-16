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
const todo = [
  { task: 'walk dog' },
  { task: 'do laundry' },
  { task: 'cook meatballs' }
];

// create array for completed tasks
const done = [
  { task: 'eat lunch' }
];

// display to do list
app.get('/', function (req, res) {
  res.render('todo', {
    honeyDo: todo
  });
});

// receive new tasks (form info)
app.post('/', function (req, res) {
  if (
    req.body.task.length != 0
  ) {
    todo.push({
      task: req.body.task
    })
  }

  // render new task item
  res.render('todo', {
    honeyDo: todo,
    success: true
  })
});

// create server
app.listen(3003, function () { // 1024 and below are off limits
  console.log('HOT NOW');
});
