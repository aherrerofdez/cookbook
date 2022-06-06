import React, { Fragment } from "react";

import './App.css';

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
