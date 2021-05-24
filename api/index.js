require('dotenv').config();

const host = process.env.MARIADB_HOST;
const port = process.env.MARIADB_PORT;
const user = process.env.MARIADB_USER;
const password = process.env.MARIADB_PASSWORD;
const database = process.env.MARIADB_DB;

// const express = require('express');
// const bodyParser = require('body-parser');
// var connection = require('express-myconnection');
var mariadb = require('mariadb');

console.log(`Connecting to database ${database} on ${host}`);

const connect = mariadb.createConnection({
    host: host,
    port: port,
    user: user,
    password: password,
    database: database
});

async function getAllRecipes() {
    const sql = `SELECT * FROM recipe_app.recipes`;
    return read(sql, []);
}

async function getRecipe(id) {
    const sql = `SELECT * FROM recipe_app.recipes WHERE id = ?`;
    return read(sql, [id]);
}

async function read(sql, params) {
    let result;
    return connect.then(connection =>
        connection
            .query(sql, params)
            .then(rows => {
                return { rows };
            })
            .catch(err => {
                return { err, message: "Database read error", results: {}, sql };
            })
            .finally(_ => {
                connection.end();
            })
    )
    .then(result => {
        return result;
    })
    .catch(err => {
        result = { err, message: "Connection error", results: {} };
    })
}

getAllRecipes().then(result => console.log(result));
getRecipe(1).then(result => console.log(result));