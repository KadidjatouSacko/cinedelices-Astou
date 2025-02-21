BEGIN;

-- Réinitialisation des tables
TRUNCATE TABLE "user" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "recipe" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "ingredient" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "movie" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "genre" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "category" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "difficulty" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "movie_has_genre" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "recipe_has_ingredient" RESTART IDENTITY CASCADE;

-- Insertion des utilisateurs
INSERT INTO "user" ("pseudo", "firstname", "lastname", "email", "password") VALUES
('Tatayoyo', 'Tata', 'Yoyo', 'tata@gmail.com', '$argon2id$v=19$m=65536,t=3,p=1$rZQloTOpUJjgWiLATRStPQ$ACnIm2NveHLB67284MsavOIJhqszB/BIYFBDXotFfc'),
('Trop choupi', 'Mimi', 'Labelle', 'mimi@gmail.com', '$argon2id$v=19$m=65536,t=3,p=1$rZQloTOpUJjgWiLATRStPQ$ACnIm2NveHLB67284MsavOIJhqszB/BIYFBDXotFfc');

-- Insertion des niveaux de difficulté
INSERT INTO "difficulty" ("label") VALUES
('Débutant'),
('Facile'),
('Avancée'),
('Experte'),
('Mr Etchebest ?');

-- Insertion des catégories de films
INSERT INTO "genre" ("id", "name") VALUES
(28, 'Action'),
(12, 'Aventure'),
(16, 'Animation'),
(35, 'Comédie'),
(80, 'Crime'),
(99, 'Documentaire'),
(18, 'Drame'),
(10751, 'Familial'),
(14, 'Fantastique'),
(36, 'Histoire'),
(27, 'Horreur'),
(10402, 'Musique'),
(9648, 'Mystère'),
(10749, 'Romance'),
(878, 'Science-Fiction'),
(10770, 'Téléfilm'),
(53, 'Thriller'),
(10752, 'Guerre'),
(37, 'Western');

-- Insertion des films
INSERT INTO "movie" ("title", "year", "tmdb_id") VALUES
('Garfield', '2004-01-01', 16),
('Charlie et la chocolaterie', '2005-01-01', 14),
('Le Petit Chaperon Rouge', '2011-01-01', 16),
('Kung Fu Panda', '2008-01-01', 16),
('La Belle et le Clochard', '1955-01-01', 16),
('Ratatouille', '2007-01-01', 16),
('Simpson', '2007-01-01', 35);

-- Insertion des catégories de recettes
INSERT INTO "category" ("name") VALUES
('Entrée'),
('Plat'),
('Dessert');

-- Insertion des ingrédients
INSERT INTO "ingredient" ("label") VALUES
('Pâtes à lasagne'),
('Bœuf haché'),
('Sauce tomate'),
('Fromage râpé'),
('Béchamel'),
('Chocolat noir'),
('Œufs'),
('Sucre'),
('Beurre'),
('Farine de sarrasin'),
('Eau'),
('Sel'),
('Jambon'),
('Nouilles'),
('Bouillon'),
('Porc'),
('Algues'),
('Soja'),
('Ciboulette'),
('Spaghettis'),
('Ail'),
('Parmesan'),
('Courgettes'),
('Aubergines'),
('Tomates'),
('Poivrons'),
('Huile olive'),
('Farine'),
('Levure'),
('Lait'),
('Huile');

-- Association genre et films
INSERT INTO "movie_has_genre" ("movie_id", "genre_id") VALUES
(1, 28),
(1, 12),
(2, 35),
(3, 35),
(4, 35),
(5, 35),
(6, 35),
(7, 35);

-- Insertion des recettes
INSERT INTO "recipe" ("name", "description", "duration", "image", "difficulty_id", "category_id", "movie_id") VALUES
('Lasagnes de Garfield', 'Une délicieuse recette de lasagnes inspirée par Garfield.', 45, 'lasagnes.jpg', 2, 2, 1),
('Mousse au Chocolat by Charlie', 'Un dessert chocolaté inspiré de Charlie et la chocolaterie.', 15, 'mousseAuChocolat.jpg', 1, 3, 2),
('Galette du Petit Pouvcet', 'Une galette traditionnelle inspirée du Petit Chaperon Rouge.', 20, 'galette.jpg', 1, 2, 3),
('Ramens de Naruto', 'Un bol de ramens digne de Naruto.', 40, 'ramen.jpg', 3, 2, 4),
('Pâtes aux boulettes de Toni', 'Une recette italienne inspirée de La Belle et le Clochard.', 35, 'spaghettisBoulettes.jpg', 2, 2, 5),
('Ratatouille facçon rat', 'Le célèbre plat provençal inspiré par Ratatouille.', 50, 'ratatouillex45.png', 2, 2, 6),
('Donuts de Bart', 'Les donuts préférés d''Homer Simpson.', 60, 'donuts.jpg', 2, 3, 7);

-- Insertion des relations recette-ingredient
INSERT INTO "recipe_has_ingredient" ("recipe_id", "ingredient_id", "quantity", "unity") VALUES
(1, 1, 6, 'feuilles'), -- Pâtes à lasagne
(1, 2, 500, 'g'), -- Bœuf haché
(1, 3, 400, 'ml'), -- Sauce tomate
(1, 4, 200, 'g'), -- Fromage râpé
(1, 5, 300, 'ml'); -- Béchamel



COMMIT;
