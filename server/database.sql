CREATE DATABASE cookbook;

CREATE TABLE recipes(
    recipe_id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    time int,
    ingredients VARCHAR(255)
);