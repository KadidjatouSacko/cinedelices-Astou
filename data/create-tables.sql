BEGIN;


DROP TABLE IF EXISTS "user", "category", "genre", "price","movie", "ingredient", "difficulty", "recipe", "movie_has_genre", "recipe_has_ingredient", "contact","tool","step";

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "pseudo" text NOT NULL, 
    "email" varchar(255) UNIQUE NOT NULL,
    "password" text NOT NULL,
    "firstname" text,
    "lastname" text,
    "role" text DEFAULT 'member',
    "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamptz
);

CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "genre" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "price" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "movie" (
    "id" SERIAL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "year" DATE NOT NULL,
    "tmdb_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ
);


CREATE TABLE "ingredient" (
    "id" SERIAL PRIMARY KEY,
    "label" TEXT NOT NULL UNIQUE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "difficulty" (
    "id" SERIAL PRIMARY KEY,
    "label" TEXT NOT NULL UNIQUE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "recipe" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL, 
    "description" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "image" TEXT,
    "user" INTEGER NOT NULL REFERENCES "user"("id"),
    "difficulty_id" INTEGER NOT NULL REFERENCES "difficulty"("id"),
    "category_id" INTEGER NOT NULL REFERENCES "category"("id"),
    "price_id" INTEGER NOT NULL REFERENCES "price"("id"),
    "movie_id" INTEGER NOT NULL REFERENCES "movie"("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "movie_has_genre" (
    "id" SERIAL PRIMARY KEY,
    "movie_id" INTEGER NOT NULL REFERENCES "movie" ("id") ON DELETE CASCADE,
    "genre_id" INTEGER NOT NULL REFERENCES "genre" ("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "recipe_has_ingredient" (
    "id" SERIAL PRIMARY KEY,
    "recipe_id" INTEGER NOT NULL REFERENCES "recipe"("id") ON DELETE CASCADE,
    "ingredient_id" INTEGER NOT NULL REFERENCES "ingredient"("id") ON DELETE CASCADE,
    "quantity" FLOAT NOT NULL,
    "unity" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ,
    UNIQUE("recipe_id", "ingredient_id")
);

CREATE TABLE "contact" (
    "id" SERIAL PRIMARY KEY,
    "pseudo" VARCHAR(255) NOT NULL,
    "mail" VARCHAR(255) NOT NULL,
    "text" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ
);


CREATE TABLE "tool" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "quantity" INTEGER,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "step" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR(100) NOT NULL,
    "instruction" TEXT NOT NULL UNIQUE,
    "recipe_id" INTEGER NOT NULL REFERENCES "recipe"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ
);




COMMIT;