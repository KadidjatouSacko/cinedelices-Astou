BEGIN;

-- suppression des tables si elles existent déjà

DROP TABLE IF EXISTS "recette_ingredient","recette","categorie","film","ingredient";


-- création de la table categorie

CREATE TABLE categorie (
    "id" SERIAL PRIMARY KEY,
    "nom" VARCHAR(255) NOT NULL
);

-- création de la table film

CREATE TABLE film (
    "id" SERIAL PRIMARY KEY,
    "titre" VARCHAR(255) NOT NULL,
    "annee" INTEGER NOT NULL,
    "realisateur" VARCHAR(255) NOT NULL,
    "genre" VARCHAR(255) NOT NULL
);

-- création de la table ingredient

CREATE TABLE ingredient (
    "id" SERIAL PRIMARY KEY,
    "nom" VARCHAR(255) NOT NULL UNIQUE
);

-- création de la table recette

CREATE TABLE recette (
    "id" SERIAL PRIMARY KEY,
    "nom" VARCHAR(255) NOT NULL, 
    "description" TEXT NOT NULL,
    "duree" INTEGER NOT NULL,
    "difficulte" INTEGER NOT NULL, 
    "image" VARCHAR(255),
    "categorie_id" INTEGER REFERENCES "categorie"("id") ON DELETE CASCADE,
    "film_id" INTEGER REFERENCES "film"("id") ON DELETE CASCADE
);

-- création de la table de liaison recette_ingredient

CREATE TABLE recette_ingredient (
    "recette_id" INTEGER REFERENCES "recette"("id") ON DELETE CASCADE,
    "ingredient_id" INTEGER REFERENCES "ingredient"("id") ON DELETE CASCADE,
    "quantite" FLOAT NOT NULL,
    "unite" VARCHAR(255) NOT NULL, PRIMARY KEY ("recette_id", "ingredient_id")
);

COMMIT;
