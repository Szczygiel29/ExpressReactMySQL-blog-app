import mysqgl from 'mysql';

export const db = mysqgl.createConnection({
    host:"localhost",
    user:"root",
    password:"Hewlett123!@",
    database:"blog",
})