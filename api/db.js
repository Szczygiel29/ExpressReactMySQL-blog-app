import mysql from 'mysql';
import dotenv from 'dotenv'
dotenv.config();

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.DB_KEY,
    database: "blog",
})

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL database with id ');
});