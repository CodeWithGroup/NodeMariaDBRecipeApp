require('dotenv').config();

const host = process.env.MARIADB_HOST;
const port = process.env.MARIADB_PORT;
const user = process.env.MARIADB_USER;
const password = process.env.MARIADB_PASSWORD;
const database = process.env.MARIADB_DB;

var mariadb = require('mariadb');

const pool = mariadb.createPool({
    connectionLimit: 2,
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
    return pool
        .query(sql, params)
        .then(rows => {
            return { results: rows, sql };
        })
        .catch(err => {
            return { err, message: "Database read error", results: {}, sql };
        });
}

module.exports = {
    getAllRecipes,
    getRecipe
}
