import React, { Fragment, useState } from "react";

const InputRecipe = () => {

    const [description, setDescription] = useState("");
    const [time, setTime] = useState("");
    const [ingredients, setIngredients] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { description, time, ingredients };

            const response = await fetch("http://localhost:5000/my-cookbook", {
                method: "POST",
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
            <h1 className="text-center mt-5">
                Add a recipe to your cookbook
            </h1>
            <form className="mt-5" onSubmit={onSubmitForm}>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <label htmlFor="description">Enter a name for this recipe</label>
                </div>
                <div className="form-floating mb-3">
                    <select
                        className="form-select"
                        id="time"
                        aria-label="Select cooking duration of this recipe"
                        value={time}
                        onChange={e => setTime(e.target.value)}
                    >
                        <option defaultValue> - </option>
                        <option value="10"> 10 minutes </option>
                        <option value="15"> 15 minutes </option>
                        <option value="20"> 20 minutes </option>
                        <option value="25"> 25 minutes </option>
                        <option value="30"> 30 minutes</option>
                    </select>
                    <label htmlFor="time">Enter the cooking duration of this recipe</label>
                </div>
                <div className="form-floating mb-5">
                    <input
                        type="text"
                        className="form-control"
                        id="ingredients"
                        value={ingredients}
                        onChange={e => setIngredients(e.target.value)}
                    />
                    <label htmlFor="ingredients">Enter the ingredients required for this recipe</label>
                </div>
                <div className="text-center">
                    <button className="btn btn-primary center"> Add this recipe </button>
                </div>
            </form>
        </Fragment>
    );
};

export default InputRecipe;
