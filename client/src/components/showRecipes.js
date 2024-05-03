import React, { Fragment, useEffect, useState } from "react";
import EditRecipe from "./editRecipe";

const ShowRecipes = () => {

    const [recipes, setRecipes] = useState([]);

    // Delete recipe from database
    const deleteRecipe = async (id) => {
        try {
            const deleteRecipe = await fetch(`http://localhost:5000/my-cookbook/${id}`, {
                method: "DELETE"
            });

            // Remove the deleted recipes from the view
            setRecipes(recipes.filter(recipe => recipe.recipe_id !== id));

        } catch (err) {
            console.error(err.message);
        }
    };

    // Get recipes from database
    const getRecipes = async () => {
        try {
            const response = await fetch("http://localhost:5000/my-cookbook");
            const jsonData = await response.json();

            setRecipes(jsonData);

        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getRecipes();
    }, []);

    return (
        <Fragment>
            <h1 className="text-center mt-5"> Your cookbook </h1>
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
                    {recipes.map(recipe => (
                        <tr key={recipe.recipe_id}>
                            <td>{recipe.description}</td>
                            <td>{recipe.time}</td>
                            <td>{recipe.ingredients}</td>
                            <td>
                                <EditRecipe recipe={recipe} />
                            </td>
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
