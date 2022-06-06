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
                                <button className="btn btn-danger" onClick={() => deleteRecipe(recipe.recipe_id)}>
                                    Delete &nbsp;
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                    </svg>
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
