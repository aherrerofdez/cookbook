import React, { Fragment } from "react";

// Import components
import InputRecipe from "./components/inputRecipe";
import ShowRecipes from "./components/showRecipes";


function App() {
    return (
        <Fragment>
            <div className="container">
                <InputRecipe />
                <ShowRecipes />
            </div>
        </Fragment>
    );
};

export default App;
