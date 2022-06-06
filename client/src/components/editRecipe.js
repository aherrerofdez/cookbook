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
                Edit &nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                </svg>
            </button>

            <div className="modal fade" id={`id${recipe.recipe_id}`} tabIndex="-1"
                aria-labelledby="editRecipeDialogForm" aria-hidden="true" onClick={() => setDefaultValues(recipe)}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editRecipeDialogForm">Edit recipe</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                onClick={() => setDefaultValues(recipe)} />
                        </div>
                        <div className="modal-body">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="description" value={description}
                                    onChange={e => setDescription(e.target.value)} />
                                <label htmlFor="description">Enter a name for this recipe</label>
                            </div>
                            <div className="form-floating mb-3">
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
                                <label htmlFor="time">Enter the cooking duration of this recipe</label>
                            </div>
                            <div className="form-floating mb-5">
                                <input type="text" className="form-control" id="ingredients" value={ingredients}
                                    onChange={e => setIngredients(e.target.value)} />
                                <label htmlFor="ingredients">Enter the ingredients required for this recipe</label>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal"
                                    onClick={() => setDefaultValues(recipe)}>
                                    Close
                                </button>
                                <button type="button" className="btn btn-warning" onClick={e => editRecipe(e)}>
                                    Save changes
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
