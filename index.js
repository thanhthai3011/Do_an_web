const express = require('express');
const bodyParser = require('body-parser');
const db = require('./queries');

const app = express();
const port = 3000;
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.get('/', (req, res) => {
  res.json({
    info: 'node.js, exprexx and postgres API'
  })
})

app.get('/students', db.getStudents);
app.get('/students/:id', db.getStudentById);
app.post('/students', db.createStudent);
app.put('/students/:id', db.updateStudent);
app.delete('/students/:id', db.deleteStudent);


app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

// const { Client } = require('pg')

// const client = new Client({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'test',
//   password: '301198',
//   port: 5432,
// })
// client.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });


// let query = `
// SELECT * FROM students`;
// client.query(query, (err, res) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(res.rows);
//     client.end();
// });


