const { Client } = require('pg');

const client = new Client({
    host: "localhost",
    user: "mohamed",
    port: 5432,
    password: "01127134209",
    database: "task",
})
client.connect();

client.query(`select * form task`, (err, res) => {
    if (!err) {
        console.log(res.rows);
    }
    else {
        console.log(error.message);
    }
    client.end();
})