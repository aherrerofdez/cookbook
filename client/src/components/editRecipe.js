import React, { Fragment, useState } from "react";

const EditRecipe = ({ recipe }) => {

    const [description, setDescription] = useState(recipe.description);
    const [time, setTime] = useState(recipe.time);
    const [ingredients, setIngredients] = useState(recipe.ingredients);

    // Show values stored on database when opening the modal dialog
    const setDefaultValues = (recipe) => {
        setDescription(recipe.description);
        setIngredients(recipe.ingredients);
    };
    // Edit recipe details
    const editRecipe = async (e) => {
        e.preventDefault();

        try {
            const body = { description, time, ingredients };
            console.log(time);
            const response = await fetch(`http://localhost:5000/my-cookbook/${recipe.recipe_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            window.location = "/";

        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <Fragment>
            <button type="button" className="btn btn-warning" data-bs-toggle="modal"
                data-bs-target={`#id${recipe.recipe_id}`}>
                <i class="bi bi-pencil-fill"></i>
                &nbsp; Edit
            </button>

            <div className="modal fade" id={`id${recipe.recipe_id}`} tabIndex="-1"
                aria-labelledby="editRecipeDialogForm" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editRecipeDialogForm">Edit recipe</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                onClick={() => setDefaultValues(recipe)} />
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group form-floating mb-3">
                                    <input type="text" className="form-control" id="description" value={description}
                                        onChange={e => setDescription(e.target.value)} />
                                    <label for="description">Enter a name for this recipe</label>
                                </div>
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
                                <div className="form-group form-floating mb-5">
                                    <input type="text" className="form-control" id="ingredients" value={ingredients}
                                        onChange={e => setIngredients(e.target.value)} />
                                    <label for="ingredients">Enter the ingredients required for this recipe</label>
                                </div>
                            </form>
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
