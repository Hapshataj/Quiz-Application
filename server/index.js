const express = require("express");
const mysql = require("mysql");
const cors = require("cors");


const app = express();

app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "register"
})
app.get('/api/quiz/questions', async (req, res) => {
    try {
      
      const [rows, fields] = await connection.query('SELECT * FROM questions');
      connection.end();
      res.json(rows);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Error retrieving questions.' });
    }
  });
  app.post('/api/quiz/results', async (req, res) => {
    try {
      const { name, score } = req.body;
      const connection = await mysql.createConnection(dbConfig);
      const [result] = await connection.query('INSERT INTO results SET ?', { name, score });
      connection.end();
      res.json(result.insertId);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Error saving result.' });
    }
  });
app.post('/register', (req, res) => {
   
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const phone = req.body.phone;

    con.query("INSERT INTO users(username,password,email,phone) VALUES(?, ?, ?,?)", [ username, password,email,phone], 
        (err, result) => {
            if(result){
                res.send(result);
            }else{
                res.send({message: "ENTER CORRECT ASKED DETAILS!"})
            }
        }
    )

})
app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    con.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password], 
        (err, result) => {
            if(err){
                req.setEncoding({err: err});
            }else{
                if(result.length > 0){
                    res.send(result);
                }else{
                    res.send({message: "WRONG USERNAME OR PASSWORD!"})
                }
            }
        }
    )
})
app.post('/api/logout', (req, res) => {
    req.session.destroy(err => {
      if (err) {
        res.status(500).json({ error: 'Server error' });
      } else {
        res.json({ message: 'Logout successful' });
      }
    });
  });
  app.get('/quiz', (req, res) => {
    const sql = 'SELECT * FROM quiz_questions';
    connection.query(sql, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });
app.listen(3300, () => {
    console.log("running backend server");
})