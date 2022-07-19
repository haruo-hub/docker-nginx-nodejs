const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'user',
    password: 'user',
    database:'nodedb'
};

const mysql = require('mysql')

const connectionCreateTable = mysql.createConnection(config)
let sqlCreatePeopleIfNotExists = `create table if not exists people(
    id int primary key auto_increment,
    name varchar(255) not null
)`
connectionCreateTable.query(sqlCreatePeopleIfNotExists)
connectionCreateTable.end()

app.get('/', (req,res) => {
    const connection = mysql.createConnection(config)
  
    const sql = `INSERT INTO people(name) values('Full Cycle Name')`
    connection.query(sql)
    
    let htmlFinal = "<h1>Full Cycle</h1>";
    connection.query("SELECT * FROM people", function (err, result, fields) {
        if (err) throw err;
        result.forEach(element => {
            htmlFinal += "<br>";
            htmlFinal += element.name;
        })
        connection.end()
        res.send(htmlFinal)
    });
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})