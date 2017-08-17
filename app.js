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
  // { task: 'walk dog', Completed: false, id:1 },
  // { task: 'do laundry', Completed: false, id:2 },
  // { task: 'cook meatballs', Completed: true, id:3 }
];

let counter = 0;

// display to do list
app.get('/', function (req, res) {
  res.render('todo', {
    honeyDo: todo
  });
});

// receive new tasks (form info)
app.post('/', function (req, res) {
  counter += 1
    todo.push({
      task: req.body.task,
      Completed: false,
      id: counter
    })
    // render new task item
    res.render('todo', {
      success: true,
      honeyDo: todo
    });
});

// send post request to server to update array
app.post('/:id', function (req, res) {
  console.log(req.params.id);

  for (let i = 0; i < todo.length; i++) {
    console.log("todo index");
    console.log(todo[i].id);
    if (parseFloat(todo[i].id) === parseFloat(req.params.id)) {
      console.log('that just happened');
      todo[i].Completed = true;
    }
    console.log("new todo index");
    console.log(todo[i].Completed);
  }
});

// create server
app.listen(3003, function () { // 1024 and below are off limits
  console.log("It's fine, everything is fine");
});
