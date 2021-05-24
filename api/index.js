require('dotenv').config();
const express = require('express');
const db = require('./database')

const app = express();

app.use((request, result, next) => {
    result.header("Access-Control-Allow-Origin", `http://localhost:${process.env.APP_PORT}`);
    result.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/", (request, result) => {
    result.json({
        urls: {
            get_all: `localhost:${process.env.API_PORT}/api`,
            get_1: `localhost:${process.env.API_PORT}/api/1`,
            get_2: `localhost:${process.env.API_PORT}/api/2`,
            search: `localhost:${process.env.API_PORT}/api/brownie`
        }
    });
});

app.get("/api", (request, result) => {
    db.getAllRecipes()
        .then(data => {
            result.json(data.results)
        })
        .catch(err => result.status(500).json(err));
})

app.get("/api/:id", (request, result) => {
    const id = request.params.id;

    db.getRecipe(id)
        .then(data => {
            if (data.results.length > 0) {
                result.json(data.results);
            }
            else {
                result.status(404).json({ message: "Not found" });
            }
        })
        .catch(err => result.status(500).json(err));
})

app.listen(process.env.API_PORT, () => console.log(`Listening at port http://localhost:${process.env.API_PORT}`));