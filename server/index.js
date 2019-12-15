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

app.get('/api/all', (req, res) => {
  connection.query('SELECT * FROM tasks', function (err, rows, fields) {
    if (err) throw err;

    console.log('getting all todos = ', rows);
    res.send(rows);
  });
});

app.post('/api/todos', async (req, res) => {
  connection.query(`INSERT INTO tasks(${req.body.todo})`, function (err, rows, fields) {
    if (err) throw err;

    console.log('posting todo');
  });
})

app.delete('/api/todos', async (req, res) => {
  connection.query(`DELETE FROM tasks WHERE name = '${req.body.todo}'`, function (err, rows, fields) {
    if (err) throw err;

    console.log('deleting todo');
  });
});

app.listen(5000, err => {
  console.log('Listening');
});
