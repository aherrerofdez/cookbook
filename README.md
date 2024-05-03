# PERN Stack Cookbook App

This project allows you to add, view, edit, and delete recipes stored in a PostgreSQL database using a React front-end and Node.js/Express back-end.

## Features

- Add new recipes with a name, cooking time, and list of ingredients.
- View a list of all recipes stored in the database.
- Edit existing recipes to update their details.
- Delete recipes that are no longer needed.

## Technologies Used

- **Front-end:** React.js
- **Back-end:** Node.js, Express.js
- **Database:** PostgreSQL
- **ORM:** Sequelize
- **Styling:** Bootstrap (for client-side)

## Folder Structure

- **client:** Contains the front-end React application.
- **server:** Contains the back-end Node.js/Express application.

## Getting Started

To run this project locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the `server` folder and install dependencies using `npm install`.
3. Set up your PostgreSQL database by executing the SQL script provided in `server/database.sql`.
4. Create a `.env` file in the `server` folder and configure the database connection settings (DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME).
5. Start the server by running `npm start` in the `server` folder.
6. Navigate to the `client` folder and install dependencies using `npm install`.
7. Start the React development server by running `npm start` in the `client` folder.
8. Access the application in your browser at `http://localhost:3000`.

## API Endpoints

The back-end server exposes the following API endpoints:

- `GET /recipes`: Get all recipes from the database.
- `POST /recipes`: Add a new recipe to the database.
- `PUT /recipes/:id`: Update an existing recipe.
- `DELETE /recipes/:id`: Delete a recipe from the database.
