BEGIN;

-- Insertion des niveaux de difficulté avec IDs explicites
INSERT INTO "difficulty" (id, label) VALUES
(1, 'Débutant'),
(2, 'Facile'),
(3, 'Avancée'),
(4, 'Experte'),
(5, 'Mr Etchebest ?');

-- Insertion des films avec IDs explicites
INSERT INTO "movie" (id, title, year) VALUES
(1, 'Garfield', '2004-01-01'),
(2, 'Charlie et la chocolaterie', '2005-01-01'),
(3, 'Le Petit Chaperon Rouge', '2011-01-01'),
(4, 'Kung Fu Panda', '2008-01-01'),
(5, 'La Belle et le Clochard', '1955-01-01'),
(6, 'Ratatouille', '2007-01-01'),
(7, 'Simpson', '2007-01-01');

-- Insertion des catégories avec IDs explicites
INSERT INTO "category" (id, name) VALUES
(1, 'Entrée'),
(2, 'Plat'),
(3, 'Dessert');


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

-- Insertion des relations recette-ingredient (exemple avec Lasagnes)
INSERT INTO "recipe_has_ingredient" (recipe_id, ingredient_id, quantity, unity) VALUES
(1, 1, 6, 'feuilles'), -- Pâtes à lasagne
(1, 2, 500, 'g'), -- Bœuf haché
(1, 3, 400, 'ml'), -- Sauce tomate
(1, 4, 200, 'g'), -- Fromage râpé
(1, 5, 300, 'ml'); -- Béchamel

COMMIT;