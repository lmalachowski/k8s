var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var app = express();
app.use(cors());
app.use(bodyParser.json());

var connection = mysql.createConnection({
  host: 'mysql.default.svc.cluster.local',
  user: 'root',
  password: '^T0JesTNapraWDEBAAAARdZ0trUDNEhaslo$',
  database: 'to_do'
});

connection.connect();

app.get('/all', (req, res) => {
  connection.query('SELECT * FROM tasks', function (err, rows, fields) {
    if (err) throw err;

    console.log('getting all todos = ' rows[0]);
  });
});

app.post('/todos', async (req, res) => {
  connection.query('', function (err, rows, fields) {
    if (err) throw err;

    console.log('posting todo');
  });
  //add todo (req.body.todo) to DB
})

app.delete('/todos', async (req, res) => {
  connection.query('', function (err, rows, fields) {
    if (err) throw err;

    console.log('deleting todo');
  });
  //delete todo (req.body.todo) from DB
});

app.listen(5000, err => {
  console.log('Listening');
});
