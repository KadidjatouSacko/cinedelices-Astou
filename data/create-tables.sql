BEGIN;

-- Suppression des tables si elles existent déjà
DROP TABLE IF EXISTS 
    "user", "category", "genre", "movie", "ingredient", "difficulty", "recipe",
    "movie_has_genre", "recipe_has_ingredient", "contact", "price", "tool",
    "step", "recipe_has_tool", "recipe_has_step";

-- Table : Degré de difficulté
CREATE TABLE "difficulty" (
    "id" SERIAL PRIMARY KEY,
    "label" TEXT NOT NULL UNIQUE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ
);

-- Table : Type de plats
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ
);

-- Table : Budget
CREATE TABLE "price" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ
);

-- Table : Films rattachés aux recettes
CREATE TABLE "movie" (
    "id" SERIAL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "year" DATE NOT NULL,
    "tmdb_id" INTEGER NOT NULL UNIQUE,
    "image" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ
);

-- Table : Genre du film
CREATE TABLE "genre" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ
);

-- Table : Utilisateurs
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "pseudo" TEXT NOT NULL, 
    "email" VARCHAR(255) UNIQUE NOT NULL,
    "password" TEXT NOT NULL,
    "firstname" TEXT,
    "lastname" TEXT,
    "role" TEXT DEFAULT 'member',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ
);

-- Table : Recettes
CREATE TABLE "recipe" (
    "id" SERIAL PRIMARY KEY, -- Ajout de la clé primaire manquante
    "name" TEXT NOT NULL, 
    "description" TEXT NOT NULL,
    "preparation_time" INTEGER NOT NULL,
    "cooking_duration" INTEGER NOT NULL,
    "image" TEXT,
    "author" INTEGER NOT NULL REFERENCES "user"("id"),
    "difficulty_id" INTEGER NOT NULL REFERENCES "difficulty"("id"),
    "category_id" INTEGER NOT NULL REFERENCES "category"("id"),
    "movie_id" INTEGER NOT NULL REFERENCES "movie"("id"),
    "price_id" INTEGER NOT NULL REFERENCES "price"("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ
);

-- Table : Ingrédients de la recette 
CREATE TABLE "ingredient" (
    "id" SERIAL PRIMARY KEY,
    "label" TEXT NOT NULL UNIQUE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ
);

-- Table : Ustensiles de cuisine
CREATE TABLE "tool" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "quantity" INTEGER,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ
);

-- Table : Étapes des recettes
CREATE TABLE "step" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR(100) NOT NULL,
    "instruction" TEXT NOT NULL UNIQUE,
    "recipe_id" INTEGER NOT NULL REFERENCES "recipe"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ
);

-- Table : Relation films-genres
CREATE TABLE "movie_has_genre" (
    "id" SERIAL PRIMARY KEY,
    "movie_id" INTEGER NOT NULL REFERENCES "movie"("id") ON DELETE CASCADE,
    "genre_id" INTEGER NOT NULL REFERENCES "genre"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ
);

-- Table : Relation recettes-ustensiles
CREATE TABLE "recipe_has_tool" (
    "recipe_id" INTEGER NOT NULL REFERENCES "recipe"("id") ON DELETE CASCADE,
    "tool_id" INTEGER NOT NULL REFERENCES "tool"("id") ON DELETE CASCADE,
    "quantity" INTEGER,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ,
    PRIMARY KEY ("recipe_id", "tool_id") -- Clé composite au lieu d'un id unique
);

-- Table : Relation recettes-étapes
CREATE TABLE "recipe_has_step" (
    "recipe_id" INTEGER NOT NULL REFERENCES "recipe"("id") ON DELETE CASCADE,
    "step_id" INTEGER NOT NULL REFERENCES "step"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ,
    PRIMARY KEY ("recipe_id", "step_id") -- Clé composite
);

-- Table : Relation recettes-ingrédients
CREATE TABLE "recipe_has_ingredient" (
    "recipe_id" INTEGER NOT NULL REFERENCES "recipe"("id") ON DELETE CASCADE,
    "ingredient_id" INTEGER NOT NULL REFERENCES "ingredient"("id") ON DELETE CASCADE,
    "quantity" FLOAT NOT NULL,
    "unity" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ,
    PRIMARY KEY ("recipe_id", "ingredient_id") -- Clé composite
);

-- Table : Contacts
CREATE TABLE "contact" (
    "id" SERIAL PRIMARY KEY,
    "pseudo" VARCHAR(255) NOT NULL,
    "mail" VARCHAR(255) NOT NULL,
    "message" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ
);

COMMIT;