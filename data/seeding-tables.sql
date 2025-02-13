BEGIN;

-- Insertion des films
INSERT INTO "movie" (title, year) VALUES
('Garfield', '2004-01-01'),
('Charlie et la chocolaterie', '2005-01-01'),
('Le Petit Chaperon Rouge', '2011-01-01'),
('Kung Fu Panda', '2008-01-01'),
('La Belle et le Clochard', '1955-01-01'),
('Ratatouille', '2007-01-01'),
('Simpson', '2007-01-01');

-- Insertion des niveaux de difficulté
INSERT INTO "difficulty" (label) VALUES
('Facile'),
('Moyenne'),
('Difficile');

-- Insertion des catégories
INSERT INTO "category" (name) VALUES
('Entrée');
('Plat principal'),
('Dessert'),

-- Insertion des ingrédients
INSERT INTO "ingredient" (label) VALUES
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
('Ciboule'),
('Spaghetti'),
('Ail'),
('Parmesan'),
('Courgettes'),
('Aubergines'),
('Tomates'),
('Poivrons'),
('Huile d’olive'),
('Farine'),
('Levure'),
('Lait'),
('Huile');

-- Insertion des recettes
INSERT INTO "recipe" (name, description, duration, difficulty_id, category_id, movie_id) VALUES
('Lasagnes', 'Une délicieuse recette de lasagnes inspirée par Garfield.', 45, 2, 1, 1),
('Mousse au Chocolat', 'Un dessert chocolaté inspiré de Charlie et la chocolaterie.', 15, 1, 2, 2),
('Galette', 'Une galette traditionnelle bretonne inspirée du Petit Chaperon Rouge.', 20, 1, 1, 3),
('Ramens', 'Un bol de ramens digne de Kung Fu Panda.', 40, 3, 1, 4),
('Pâtes aux boulettes', 'Une recette italienne inspirée de La Belle et le Clochard.', 35, 2, 1, 5),
('Ratatouille', 'Le célèbre plat provençal inspiré par Ratatouille.', 50, 2, 1, 6),
('Donuts', 'Les donuts préférés d''Homer Simpson.', 60, 2, 2, 7);

-- Insertion des relations recette-ingredient (exemple avec Lasagnes)
INSERT INTO "recipe_has_ingredient" (recipe_id, ingredient_id, quantity, unity) VALUES
(1, 1, 6, 'feuilles'), -- Pâtes à lasagne
(1, 2, 500, 'g'), -- Bœuf haché
(1, 3, 400, 'ml'), -- Sauce tomate
(1, 4, 200, 'g'), -- Fromage râpé
(1, 5, 300, 'ml'); -- Béchamel

COMMIT;