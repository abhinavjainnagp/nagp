const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 8080;

// MySQL connection configuration
const connection = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  password: 'root',
  database: 'mysql'
});

// Check MySQL connection
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId);
});

// Define API routes
app.get('/', (req, res) => {
  connection.query('SELECT * FROM NAGPDATA', (error, results, fields) => {
    if (error) {
      console.error('Error querying database: ' + error.stack);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.send(results);
  });
});

// Start the API server
app.listen(port, () => {
  console.log(`API service listening at http://localhost:${port}`);
});

