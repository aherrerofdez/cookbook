import React, { Fragment } from "react";

// Import components
import InputRecipe from "./components/inputRecipe"; // Import the component for adding a new recipe
import ShowRecipes from "./components/showRecipes"; // Import the component for displaying recipes


function App() {
    // Render the InputRecipe and ShowRecipes components within a container
    return (
        <Fragment>
            <div className="container">
                {/* Component for adding a new recipe */}
                <InputRecipe />
                {/* Component for displaying recipes */}
                <ShowRecipes />
            </div>
        </Fragment>
    );
};

export default App;
