// Import Express framework as a library
const express = require("express");

// Import CORS package
const cors = require("cors");

// Run Express library
const app = express();

// Import the pool module created in db.js to run queries with Postgres
const pool = require("./db");

// Enable CORS middleware requests
app.use(cors());

// Get request body
app.use(express.json());

// ROUTES //

// Create a recipe
app.post("/my-cookbook", async (req, res) => {
    try {
        const { description } = req.body;
        const { time } = req.body;
        const { ingredients } = req.body;

        // Add data to database
        const newRecipe = await pool.query(
            "INSERT INTO recipes (description, time, ingredients) VALUES($1, $2, $3) RETURNING *",
            [description, time, ingredients]
        );

        // Get inserted data on the database as an output from the API call 
        res.json(newRecipe.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
})

// Get all recipes
app.get("/my-cookbook", async (req, res) => {
    try {
        const allRecipes = await pool.query("SELECT * FROM recipes");
        res.json(allRecipes.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// Get a recipe
app.get("/my-cookbook/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const recipe = await pool.query(
            "SELECT * FROM recipes WHERE recipe_id = $1",
            [id]
        );

        res.json(recipe.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// Edit a recipe
app.put("/my-cookbook/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const { time } = req.body;
        const { ingredients } = req.body;

        const editRecipe = await pool.query(
            "UPDATE recipes SET description = $1, time = $2, ingredients = $3 WHERE recipe_id = $4",
            [description, time, ingredients, id]
        );

        res.json("The recipe was edited successfully");

    } catch (err) {
        console.error(err.message);
    }
});

// Delete a recipe
app.delete("/my-cookbook/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteRecipe = await pool.query(
            "DELETE FROM recipes WHERE recipe_id = $1",
            [id]
        );

        res.json("The recipe was removed from your cookbook");

    } catch (err) {
        console.error(err.message)
    }
});


// Start server in port 5000
app.listen(5000, () => {
    console.log("Server started on port 5000")
});