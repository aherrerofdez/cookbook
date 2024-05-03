import React, { Fragment, useState } from "react";

const EditRecipe = ({ recipe }) => {

    // State variables to manage form inputs
    const [description, setDescription] = useState(recipe.description);
    const [time, setTime] = useState(recipe.time);
    const [ingredients, setIngredients] = useState(recipe.ingredients);

    // Function to set default values when opening the modal dialog
    const setDefaultValues = (recipe) => {
        setDescription(recipe.description);
        setIngredients(recipe.ingredients);
    };

    // Function to handle editing of recipe details
    const editRecipe = async (e) => {
        e.preventDefault();

        try {
            // Prepare data to be sent to the server
            const body = { description, time, ingredients };
            // Make a PUT request to update the recipe
            const response = await fetch(`http://localhost:5000/my-cookbook/${recipe.recipe_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            // Redirect to home page after successful update
            window.location = "/";

        } catch (err) {
            // Log any errors that occur during the request
            console.error(err.message);
        }
    };

    return (
        <Fragment>
            {/* Button to trigger the modal dialog */}
            <button type="button" className="btn btn-warning" data-bs-toggle="modal"
                data-bs-target={`#id${recipe.recipe_id}`}>
                <i class="bi bi-pencil-fill"></i>
                &nbsp; Edit
            </button>

            {/* Modal dialog for editing the recipe */}
            <div className="modal fade" id={`id${recipe.recipe_id}`} tabIndex="-1"
                aria-labelledby="editRecipeDialogForm" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* Modal title */}
                            <h5 className="modal-title" id="editRecipeDialogForm">Edit recipe</h5>
                            {/* Button to close the modal */}
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                onClick={() => setDefaultValues(recipe)} />
                        </div>
                        <div className="modal-body">
                            {/* Form for editing recipe details */}
                            <form>
                                {/* Input for recipe name */}
                                <div className="form-group form-floating mb-3">
                                    <input type="text" className="form-control" id="description" value={description}
                                        onChange={e => setDescription(e.target.value)} />
                                    <label for="description">Enter a name for this recipe</label>
                                </div>
                                {/* Select for cooking duration */}
                                <div className="form-group form-floating mb-3">
                                    <select className="form-select" id="time"
                                        aria-label="Select cooking duration of this recipe"
                                        value={time}
                                        onChange={e => setTime(e.target.value)}
                                    >
                                        <option value="10"> 10 minutes </option>
                                        <option value="15"> 15 minutes </option>
                                        <option value="20"> 20 minutes </option>
                                        <option value="25"> 25 minutes </option>
                                        <option value="30"> 30 minutes</option>
                                    </select>
                                    <label for="time">Enter the cooking duration of this recipe</label>
                                </div>
                                {/* Input for ingredients */}
                                <div className="form-group form-floating mb-5">
                                    <input type="text" className="form-control" id="ingredients" value={ingredients}
                                        onChange={e => setIngredients(e.target.value)} />
                                    <label for="ingredients">Enter the ingredients required for this recipe</label>
                                </div>
                            </form>
                            {/* Modal footer with buttons for closing and saving changes */}
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal"
                                    onClick={() => setDefaultValues(recipe)}>
                                    <i class="bi bi-x-square"></i>
                                    &nbsp; Close
                                </button>
                                <button type="button" className="btn btn-success" onClick={e => editRecipe(e)}>
                                    <i class="bi bi-check-square"></i>
                                    &nbsp; Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default EditRecipe;
