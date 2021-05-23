// const express = require('express');
// const bodyParser = require('body-parser');
// var connection  = require('express-myconnection'); 
// const mariadb = require('mariadb');

// const app = express();
// app.use(bodyParser.json());

// app.use(
//     connection(mariadb, {
//         host: '127.0.0.1',
//         port: 3306,
//         user: 'root',
//         password: 'trst4r3k',
//         database: 'recipe_app'
//     }, 'single')
// );

// app.post('get_recipes', (request, result) => {
//     connection.query("SELECT * FROM recipes", null, (err, rows) => {
//         if (err) {
//             result.status(400).json('Unable to read from database.');
//             console.log('Error reading: %s', err);
//         }
//         else {
//             result.status(200).json(result.json());
//         }
//     });
// });

// app.listen(3000, () => {
//     console.log("Database connection running");
// })

// // const pool = mariadb.createPool({
// //     host: '127.0.0.1',
// //     port: 3306,
// //     user: 'root',
// //     password: 'trst4r3k',
// //     database: 'recipe_app'
// // });

// // async function getRecipes() {
// //     let connection;

// //     try {
// //         connection = await pool.getConnection();

// //         const rows = await connection.query("SELECT 1 as `val`");
// //         console.log(rows);

// //         const result = await connectionY.query("SELECT * FROM recipe_app.recipes");
// //         console.log(result);
// //     }
// //     catch (err) {
// //         throw err;
// //     }
// //     finally {
// //         if (connection) {
// //             return connection.end();
// //         }
// //     }
// // }