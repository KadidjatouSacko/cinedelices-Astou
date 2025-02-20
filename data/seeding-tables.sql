BEGIN;

-- Insertion des users, mot de passe = Test123!
INSERT INTO "user" ("id", "pseudo", "firstname", "lastname", "email", "password") VALUES
(1, 'Tatayoyo', 'Tata', 'Yoyo', 'tata@gmail.com', '$argon2id$v=19$m=65536,t=3,p=1$rZQloTOpUJjgWiLATRStPQ$ACnIm2NveHLB67284MsavOIJhqszB/BIYFBDXotFfc'),
(3, 'Trop choupi', 'Mimi', 'Labelle', 'mimi@gmail.com', '$argon2id$v=19$m=65536,t=3,p=1$rZQloTOpUJjgWiLATRStPQ$ACnIm2NveHLB67284MsavOIJhqszB/BIYFBDXotFfc');

-- Insertion des niveaux de difficulté avec IDs explicites
INSERT INTO "difficulty" (id, label) VALUES
(1, 'Débutant'),
(2, 'Facile'),
(3, 'Avancée'),
(4, 'Experte'),
(5, 'Mr Etchebest ?');

-- Insertion des films avec IDs explicites


INSERT INTO "movie" (id, title, year, genre) VALUES
(1, 'Garfield', '2004-01-01', 'Animation'),
(2, 'Charlie et la chocolaterie', '2005-01-01', 'Fantastique'),
(3, 'Le Petit Chaperon Rouge', '2011-01-01', 'Animation'),
(4, 'Kung Fu Panda', '2008-01-01', 'Animation'),
(5, 'La Belle et le Clochard', '1955-01-01', 'Romance'),
(6, 'Ratatouille', '2007-01-01', 'Animation'),
(7, 'Simpson', '2007-01-01', 'Comédie');


-- Insertion des catégories avec IDs explicites
INSERT INTO "category" (id, name) VALUES
(1, 'Entrée'),
(2, 'Plat'),
(3, 'Dessert');


INSERT INTO "genre" (name) VALUES
    ('Action' ),
    ('Comédie'),
    ('Drame'),
    ('Horreur');


-- Insertion des ingrédients avec IDs explicites
INSERT INTO "ingredient" (id, label) VALUES
(1, 'Pâtes à lasagne'),
(2, 'Bœuf haché'),
(3, 'Sauce tomate'),
(4, 'Fromage râpé'),
(5, 'Béchamel'),
(6, 'Chocolat noir'),
(7, 'Œufs'),
(8, 'Sucre'),
(9, 'Beurre'),
(10, 'Farine de sarrasin'),
(11, 'Eau'),
(12, 'Sel'),
(13, 'Jambon'),
(14, 'Nouilles'),
(15, 'Bouillon'),
(16, 'Porc'),
(17, 'Algues'),
(18, 'Soja'),
(19, 'Ciboulette'),
(20, 'Spaghettis'),
(21, 'Ail'),
(22, 'Parmesan'),
(23, 'Courgettes'),
(24, 'Aubergines'),
(25, 'Tomates'),
(26, 'Poivrons'),
(27, 'Huile olive'),
(28, 'Farine'),
(29, 'Levure'),
(30, 'Lait'),
(31, 'Huile');

-- Insertion des recettes avec IDs explicites
INSERT INTO "recipe" (id, name, description, duration, image, difficulty_id, category_id, movie_id) VALUES
(1, 'Lasagnes de Garfield', 'Une délicieuse recette de lasagnes inspirée par Garfield.', 45, 'lasagnes.jpg', 2, 2, 1),
(2, 'Mousse au Chocolat by Charlie', 'Un dessert chocolaté inspiré de Charlie et la chocolaterie.', 15, 'mousseAuChocolat.jpg', 1, 3, 2),
(3, 'Galette du Petit Pouvcet', 'Une galette traditionnelle inspirée du Petit Chaperon Rouge.', 20, 'galette.jpg', 1, 2, 3),
(4, 'Ramens de Naruto', 'Un bol de ramens digne de Naruto.', 40, 'ramen.jpg', 3, 2, 4),
(5, 'Pâtes aux boulettes de Toni', 'Une recette italienne inspirée de La Belle et le Clochard.', 35, 'spaghettisBoulettes.jpg', 2, 2, 5),
(6, 'Ratatouille facçon rat', 'Le célèbre plat provençal inspiré par Ratatouille.', 50, 'ratatouillex45.png', 2, 2, 6),
(7, 'Donuts de Bart', 'Les donuts préférés d''Homer Simpson.', 60, 'donuts.jpg', 2, 3, 7);

-- Insertion des données de la table "user"
INSERT INTO "user" ("id", "firstname", "lastname", "email", "password") VALUES
(1, 'Tata', 'Yoyo', 'tata@gmail.com', 'Tatayoyo123!'),
(3, 'Mimi', 'Labelle', 'mimi@gmail.com', 'MimiLabelle123!');


-- Insertion des relations recette-ingredient (exemple avec Lasagnes)
INSERT INTO "recipe_has_ingredient" (recipe_id, ingredient_id, quantity, unity) VALUES
(1, 1, 6, 'feuilles'), -- Pâtes à lasagne
(1, 2, 500, 'g'), -- Bœuf haché
(1, 3, 400, 'ml'), -- Sauce tomate
(1, 4, 200, 'g'), -- Fromage râpé
(1, 5, 300, 'ml'); -- Béchamel

-- Insertion des genres de films de TMDB
INSERT INTO "movieCategory" (id, name) VALUES
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

INSERT INTO "recipe_has_ingredient" (id, movie_id, movieCategory_id) VALUES
(1, 1, 16),
(2, 2, 14),
(3, 1, 16)

COMMIT;