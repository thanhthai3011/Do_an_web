const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'test',
  password: '301198',
  port: '5432',
});

const getStudents = (req, res) => {
    pool.query('select * from students order by id', (err, results) => {
        if(err){
            throw err;
        }
        res.json(results.rows);
    })
};

const getStudentById = (req, res) => {
    const id = req.params.id;
    pool.query('select * from students where id = $1', [id], (err, results)=> {
        if(err){
            throw err;
        }
        res.json(results.rows);
    })
};

const createStudent = (req, res) => {
    const {
        first_name, 
        last_name, 
        gender, 
        age
    } = req.body;

    pool.query('insert into students (first_name, last_name, gender, age) values ($1, $2, $3, $4)', [first_name, last_name, gender, age], (err, results) => {
        if(err){
            throw err;
        }

        res.send(`Students added with ID: ${results.insertId}`)
    });
};

const updateStudent = (req, res) => {
    const id = req.params.id;
    const {
        first_name, 
        last_name, 
        gender, 
        age
    } = req.body;

    pool.query('update students set first_name=$1, last_name=$2, gender=$3, age=$4 where id = $1', [first_name, last_name, gender, age, id], (err, results) => {
        if(err){
            throw err;
        }
        res.send(`Students updated with ID: ${id}`);
    })
}

const deleteStudent = (req, res) => {
    const id = req.params.id;
    pool.query('delete from students where id = $1', [id], (err, results) => {
        if(err){
            throw err;
        }
        res.send(`Students deleted with ID: ${id}`);
    });
}

module.exports = {
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent,
}