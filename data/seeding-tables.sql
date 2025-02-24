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

INSERT INTO "price" ("id","name") VALUES
(1, 'Eco'),
(2, 'Moyen'),
(3, 'Cher');

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
INSERT INTO "recipe" ("name", "description", "duration", "image", "user","difficulty_id", "category_id", "movie_id", "price_id") VALUES
('Lasagnes de Garfield', 'Une délicieuse recette de lasagnes inspirée par Garfield.', 45, 'lasagnes.jpg',1, 2, 2, 1, 2),
('Mousse au Chocolat by Charlie', 'Un dessert chocolaté inspiré de Charlie et la chocolaterie.', 15, 'mousseAuChocolat.jpg',1, 1, 3, 2, 1),
('Galette du Petit Pouvcet', 'Une galette traditionnelle inspirée du Petit Chaperon Rouge.', 20, 'galette.jpg',1, 1, 2, 3, 1),
('Ramens de Naruto', 'Un bol de ramens digne de Naruto.', 40, 'ramen.jpg',1, 3, 2, 4, 3),
('Pâtes aux boulettes de Toni', 'Une recette italienne inspirée de La Belle et le Clochard.', 35, 'spaghettisBoulettes.jpg',1, 2, 2, 5, 2),
('Ratatouille facçon rat', 'Le célèbre plat provençal inspiré par Ratatouille.', 50, 'ratatouillex45.png',1, 2, 2, 6, 2),
('Donuts de Bart', 'Les donuts préférés d''Homer Simpson.', 60, 'donuts.jpg',1, 2, 3, 7, 3);

-- Insertion des relations recette-ingredient
INSERT INTO "recipe_has_ingredient" ("recipe_id", "ingredient_id", "quantity", "unity") VALUES
(1, 1, 6, 'feuilles'), -- Pâtes à lasagne
(1, 2, 500, 'g'), -- Bœuf haché
(1, 3, 400, 'ml'), -- Sauce tomate
(1, 4, 200, 'g'), -- Fromage râpé
(1, 5, 300, 'ml'); -- Béchamel


INSERT INTO "tool" ("name") VALUES
('Tournebroche'),
('Bain-marie'),
('Barbecue'),
('Casserole'),
('Cocotte'),
('Couscoussier'),
('Crêpière'),
('Cuiseur de riz'),
('Cuit vapeur'),
('Four'),
('Plancha'),
('Poêle'),
('Rotissoire'),
('Salamandre'),
('Sauteuse'),
('Terrine'),
('Thermomètre de cuisson'),
('Wok'),
('Batteur / mixeur'),
('Centrifugeuse'),
('Congélateur'),
('Girafe'),
('Hachoir'),
('Machine à pain'),
('Pétrin'),
('Sorbetière'),
('Ciseaux'),
('Couteau à découper'),
('Couteau office'),
('Couperet'),
('Désosseur'),
('Écailleur'),
('Éminceur'),
('Couteau économe'),
('Hachoir à viande'),
('Mandoline'),
('Râpe'),
('Zesteur'),
('Corne'),
('Coupe-pâte'),
('Douille'),
('Emporte-pièce'),
('Maryse'),
('Moule à gaufres'),
('Moule à manqué'),
('Poche à douilles'),
('Rouleau à pâtisserie'),
('Casse-noix'),
('Chinois'),
('Cul de poule'),
('Égouttoir'),
('Entonnoir'),
('Fouet'),
('Mortier'),
('Presse-purée'),
('Siphon')
;

INSERT INTO "step" ("title", "instruction", "recipe_id") VALUES
('Préparer la crème', 'Dans un saladier, mélanger le beurre mou et le sucre jusqu’à obtenir une texture crémeuse. 
Ajouter la poudre d’amandes, les 2 œufs, l’extrait de vanille et le rhum (si utilisé). Bien mélanger.', 3),
('Assembler la galette', 'Dérouler une première pâte feuilletée sur une plaque de cuisson recouverte de papier sulfurisé.
Étaler la crème frangipane en laissant environ 2 cm de bord sans garniture.
Placer la fève sur un bord pour éviter de la couper au moment du service.
Recouvrir avec la seconde pâte feuilletée et souder les bords en appuyant légèrement avec les doigts.', 3),
('Décoration et cuisson', 'À l’aide d’un couteau, dessiner délicatement des motifs sur la pâte (rosaces, croisillons...).
Dorer la surface avec le jaune d’œuf dilué dans un peu d’eau ou de lait.
Enfourner à 180°C (chaleur tournante) pendant 30 à 35 minutes, jusqu’à ce que la galette soit bien dorée.', 3);



COMMIT;
