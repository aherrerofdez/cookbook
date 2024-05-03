import React, { Fragment, useEffect, useState } from "react";
import EditRecipe from "./editRecipe";

const ShowRecipes = () => {

    // State variable to store recipes fetched from the database
    const [recipes, setRecipes] = useState([]);

    // Function to delete a recipe from the database
    const deleteRecipe = async (id) => {
        try {
            // Send a DELETE request to the server
            const deleteRecipe = await fetch(`http://localhost:5000/my-cookbook/${id}`, {
                method: "DELETE"
            });

            // Remove the deleted recipe from the view
            setRecipes(recipes.filter(recipe => recipe.recipe_id !== id));

        } catch (err) {
            // Log any errors that occur during the request
            console.error(err.message);
        }
    };

    // Function to get recipes from the database
    const getRecipes = async () => {
        try {
            // Send a GET request to the server
            const response = await fetch("http://localhost:5000/my-cookbook");
            // Parse the response as JSON
            const jsonData = await response.json();

            // Update the state with the fetched recipes
            setRecipes(jsonData);

        } catch (err) {
            // Log any errors that occur during the request
            console.error(err.message);
        }
    };

    // Fetch recipes from the database when the component mounts
    useEffect(() => {
        getRecipes();
    }, []);

    return (
        <Fragment>
            {/* Title for the list of recipes */}
            <h1 className="text-center mt-5"> Your cookbook </h1>
            {/* Table to display recipes */}
            <table className="table mt-3">
                <thead>
                    <tr>
                        <th scope="col"> Recipe </th>
                        <th scope="col"> Time </th>
                        <th scope="col"> Ingredients </th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {/* Map through recipes and display each one */}
                    {recipes.map(recipe => (
                        <tr key={recipe.recipe_id}>
                            <td>{recipe.description}</td>
                            <td>{recipe.time}</td>
                            <td>{recipe.ingredients}</td>
                            {/* Button to edit the recipe */}
                            <td>
                                <EditRecipe recipe={recipe} />
                            </td>
                            {/* Button to delete the recipe */}
                            <td>
                                <button className="btn btn-danger align-vertical" onClick={() => deleteRecipe(recipe.recipe_id)}>
                                    <i class="bi bi-trash-fill"></i>
                                    &nbsp; Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
};

export default ShowRecipes;
