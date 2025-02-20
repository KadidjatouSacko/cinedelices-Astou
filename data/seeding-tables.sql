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
(7, 'Simpson', '2007-01-01')
{
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/gc8PfyTqzqltKPW3X0cIVUGmagz.jpg",
      "genre_ids": [
        18,
        80
      ],
      "id": 1396,
      "origin_country": [
        "US"
      ],
      "original_language": "en",
      "original_name": "Breaking Bad",
      "overview": "Walter White, professeur de chimie dans un lycée d'Albuquerque au Nouveau-Mexique, est atteint d'un cancer pulmonaire en phase terminale. Il s'associe à Jesse Pinkman, un de ses anciens élèves, cancre, toxicomane et dealer mais initier au monde des drogues afin d'assurer l'avenir financier de sa famille après son décès. L'improbable duo va alors synthétiser et commercialiser la plus pure méthamphétamine en cristaux jamais vue aux Amériques.",
      "popularity": 606.716,
      "poster_path": "/tP2wgZfzkZxL18jImD2YXqEUXQA.jpg",
      "first_air_date": "2008-01-20",
      "name": "Breaking Bad",
      "vote_average": 8.9,
      "vote_count": 15067
    },
    {
      "adult": false,
      "backdrop_path": "/7BzmK4MWc0cj4hCxwWURt6TS6UR.jpg",
      "genre_ids": [
        16,
        10765,
        10759,
        35
      ],
      "id": 131378,
      "origin_country": [
        "US"
      ],
      "original_language": "en",
      "original_name": "Adventure Time: Fionna & Cake",
      "overview": "Fionna et Cake - avec l'aide de l'ancien roi des glaces, Simon Petrikov - se lancent dans une aventure à travers les multivers et un voyage à la découverte de soi. Pendant ce temps, un nouvel antagoniste puissant, déterminé à les traquer et à les effacer de l'existence, se cache dans l'ombre.",
      "popularity": 44.772,
      "poster_path": "/fi1b6U1kp73xheECzqwzMn8u3mX.jpg",
      "first_air_date": "2023-08-31",
      "name": "Adventure Time: Fionna & Cake",
      "vote_average": 8.884,
      "vote_count": 207
    },
    {
      "adult": false,
      "backdrop_path": "/wQEW3xLrQAThu1GvqpsKQyejrYS.jpg",
      "genre_ids": [
        16,
        10765,
        18,
        10759
      ],
      "id": 94605,
      "origin_country": [
        "US"
      ],
      "original_language": "en",
      "original_name": "Arcane",
      "overview": "Championnes de leurs villes jumelles et rivales, deux sœurs se battent dans une guerre où font rage des technologies magiques et des perspectives diamétralement opposées.",
      "popularity": 193.629,
      "poster_path": "/ypS7R36Vjcn51zZsXsta5onnaCo.jpg",
      "first_air_date": "2021-11-06",
      "name": "Arcane",
      "vote_average": 8.8,
      "vote_count": 4909
    },
    {
      "adult": false,
      "backdrop_path": "/tuCU2yVRM2iZxFkpqlPUyvd6tSu.jpg",
      "genre_ids": [
        16,
        35,
        10765
      ],
      "id": 94954,
      "origin_country": [
        "US"
      ],
      "original_language": "en",
      "original_name": "Hazbin Hotel",
      "overview": "Charlie Morningstar, la Princesse de l'Enfer, lutte pour convaincre les démons et les anges que n'importe quelle âme peut être rachetée. Venez chanter devant cette comédie musicale animée pour adultes sur la rédemption.",
      "popularity": 81.79,
      "poster_path": "/rXojaQcxVUubPLSrFV8PD4xdjrs.jpg",
      "first_air_date": "2024-01-18",
      "name": "Hazbin Hotel",
      "vote_average": 8.771,
      "vote_count": 1227
    },
    {
      "adult": false,
      "backdrop_path": "/96RT2A47UdzWlUfvIERFyBsLhL2.jpg",
      "genre_ids": [
        16,
        10759,
        10765,
        18
      ],
      "id": 209867,
      "origin_country": [
        "JP"
      ],
      "original_language": "ja",
      "original_name": "葬送のフリーレン",
      "overview": "L’elfe Frieren a vaincu le roi des démons aux côtés du groupe mené par le jeune héros Himmel. Après dix années d’efforts, ils ont ramené la paix dans le royaume. Parce qu’elle est une elfe, Frieren peut vivre plus de mille ans. Elle part seule en voyage, promettant à ses amis qu'elle reviendra les voir. Cinquante ans plus tard, Frieren est de retour, elle n'a pas changé, mais ces retrouvailles sont aussi les derniers instants passés avec Himmel, devenu un vieillard qui s’éteint paisiblement sous ses yeux. Attristée de n’avoir pas passé plus de temps à connaître les gens qu’elle aime, elle décide de reprendre son voyage et de partir à la rencontre de nouvelles personnes...",
      "popularity": 134.365,
      "poster_path": "/7hCBPddegpcd8WGPZdpcj1oVbp7.jpg",
      "first_air_date": "2023-09-29",
      "name": "Frieren",
      "vote_average": 8.769,
      "vote_count": 387
    },
    {
      "adult": false,
      "backdrop_path": "/j67Wi1mzPxPVVybjmaIsvzsqFDH.jpg",
      "genre_ids": [
        16,
        10759,
        35,
        10765
      ],
      "id": 240411,
      "origin_country": [
        "JP"
      ],
      "original_language": "ja",
      "original_name": "ダンダダン",
      "overview": "Entre menaces paranormales, nouveaux super-pouvoirs et histoire d'amour naissante, deux lycéens se mettent au défi de prouver l'existence des fantômes ou des extraterrestres.",
      "popularity": 131.502,
      "poster_path": "/dse3OM0apuA6HZt4gznRMmUirM3.jpg",
      "first_air_date": "2024-10-04",
      "name": "DAN DA DAN",
      "vote_average": 8.743,
      "vote_count": 408
    },
    {
      "adult": false,
      "backdrop_path": "/kU98MbVVgi72wzceyrEbClZmMFe.jpg",
      "genre_ids": [
        16,
        10759,
        10765
      ],
      "id": 246,
      "origin_country": [
        "US"
      ],
      "original_language": "en",
      "original_name": "Avatar: The Last Airbender",
      "overview": "Ang est un jeune Maître de l'Air, mais c'est surtout l'Avatar, un être unique qui maîtrise tous les éléments - Feu, Air, Eau et Terre. Lors d'un terrible orage, il sombre dans la mer et hiberne grâce à ses pouvoirs d'Avatar, pour se réveiller un siècle plus tard dans un monde tyrannisé par la puissante Nation du Feu et où il est le dernier représentant de son peuple. Aidé de ses deux amis de la Tribu de l'Eau, Ang va devoir réveiller l'Avatar en lui, apprendre à contrôler tous les éléments et se battre contre la menace que les Maîtres du Feu font peser sur le monde.",
      "popularity": 79.606,
      "poster_path": "/8RVWqNc0VUX3vh0gIsMxQRBHmnz.jpg",
      "first_air_date": "2005-02-21",
      "name": "Avatar : Le Dernier Maître de l'air",
      "vote_average": 8.737,
      "vote_count": 4241
    },
    {
      "adult": false,
      "backdrop_path": "/4Mt7WHox67uJ1yErwTBFcV8KWgG.jpg",
      "genre_ids": [
        10759,
        35,
        16
      ],
      "id": 37854,
      "origin_country": [
        "JP"
      ],
      "original_language": "ja",
      "original_name": "ワンピース",
      "overview": "Il fut un temps où Gold Roger était le plus grand de tous les pirates, le \"Roi des Pirates\" était son surnom. A sa mort, son trésor d'une valeur inestimable connu sous le nom de \"One Piece\" fut caché quelque part sur \"Grand Line\". De nombreux pirates sont partis à la recherche de ce trésor mais tous sont morts avant même de l'atteindre. Monkey D. Luffy rêve de retrouver ce trésor légendaire et de devenir le nouveau \"Roi des Pirates\". Après avoir mangé un fruit du démon, il possède un pouvoir lui permettant de réaliser son rêve. Il lui faut maintenant trouver un équipage pour partir à l'aventure !",
      "popularity": 186.373,
      "poster_path": "/hJROe7IgKAJPji2K5IBPEnL4yQi.jpg",
      "first_air_date": "1999-10-20",
      "name": "One Piece",
      "vote_average": 8.7,
      "vote_count": 4790
    },
    {
      "adult": false,
      "backdrop_path": "/lJuQBW4w1x6NgD514xDPqZ2Lbpz.jpg",
      "genre_ids": [
        16,
        18,
        9648
      ],
      "id": 220542,
      "origin_country": [
        "JP"
      ],
      "original_language": "ja",
      "original_name": "薬屋のひとりごと",
      "overview": "Formée dès son plus jeune âge par son père apothicaire, Mao Mao est un jour vendue comme servante au palais de l'empereur. Prisonnière dans les arcanes du pouvoir, elle attire l’attention de Jinshi, un séduisant haut fonctionnaire qui la promeut lorsqu’il découvre son talent pour confectionner des potions. Désormais goûteuse, Mao Mao met ses connaissances au service des gens du palais pour les soigner, mais aussi pour déjouer les mystères et les complots qui se trament...",
      "popularity": 224.323,
      "poster_path": "/oU5XLe3Y3Pac1CcnyY4B9hiwMTj.jpg",
      "first_air_date": "2023-10-22",
      "name": "Les Carnets de l'Apothicaire",
      "vote_average": 8.719,
      "vote_count": 244
    },
    {
      "adult": false,
      "backdrop_path": "/t15KHp3iNfHVQBNIaqUGW12xQA4.jpg",
      "genre_ids": [
        80,
        18
      ],
      "id": 60059,
      "origin_country": [
        "US"
      ],
      "original_language": "en",
      "original_name": "Better Call Saul",
      "overview": "Six ans avant de croiser le chemin de Walter White, Saul Goodman, connu sous le nom de Jimmy McGill, est un avocat qui peine à joindre les deux bouts, à Albuquerque, au Nouveau-Mexique. Pour boucler ses fins de mois, il n'aura d'autres choix que se livrer à quelques petites escroqueries. Chemin faisant, il va faire des rencontres qui vont se révéler déterminantes dans son parcours : Nacho Varga, ou encore Mike Ehrmantraut, un criminel spécialisé dans le \"nettoyage\", qui deviendra son futur homme de main.",
      "popularity": 243.746,
      "poster_path": "/7KyuCBjxsr4sNQga16DcN9ccEyf.jpg",
      "first_air_date": "2015-02-08",
      "name": "Better Call Saul",
      "vote_average": 8.691,
      "vote_count": 5456
    },
    {
      "adult": false,
      "backdrop_path": "/uGy4DCmM33I7l86W7iCskNkvmLD.jpg",
      "genre_ids": [
        16,
        35,
        10765,
        10759
      ],
      "id": 60625,
      "origin_country": [
        "US"
      ],
      "original_language": "en",
      "original_name": "Rick and Morty",
      "overview": "Un brillant inventeur et son petit fils un peu à l'Ouest partent à l'aventure...",
      "popularity": 436.1,
      "poster_path": "/kKsdvIOfWhqw5ZfAepi5EZqhrsP.jpg",
      "first_air_date": "2013-12-02",
      "name": "Rick et Morty",
      "vote_average": 8.689,
      "vote_count": 9972
    },
    {
      "adult": false,
      "backdrop_path": "/A6tMQAo6t6eRFCPhsrShmxZLqFB.jpg",
      "genre_ids": [
        10759,
        16,
        10765,
        35
      ],
      "id": 31911,
      "origin_country": [
        "JP"
      ],
      "original_language": "ja",
      "original_name": "鋼の錬金術師 FULLMETAL ALCHEMIST",
      "overview": "Edward Elric et son frère Alphonse Elric sont de jeunes Alchimistes. En tentant de ramener leur mère à la vie, ils ont payé un lourd tribut, et ils tentent désormais de récupérer ce qu'ils ont perdu. Pour cela, Edward est devenu Alchimiste d'État : le Fullmetal Alchemist.\n\nMais au cours de leurs recherches, bien des épreuves attendent les deux frères et des êtres étranges : les Homonculus, les poursuivent.",
      "popularity": 65.999,
      "poster_path": "/vIkH7fUQf8Olo8Apq56FQLGDXOo.jpg",
      "first_air_date": "2009-04-05",
      "name": "Fullmetal Alchemist : Brotherhood",
      "vote_average": 8.688,
      "vote_count": 2127
    },
    {
      "adult": false,
      "backdrop_path": "/20eIP9o5ebArmu2HxJutaBjhLf4.jpg",
      "genre_ids": [
        18
      ],
      "id": 87108,
      "origin_country": [
        "US"
      ],
      "original_language": "en",
      "original_name": "Chernobyl",
      "overview": "L'histoire vraie de la pire catastrophe causée par l'homme et de ceux qui ont sacrifié leur vie pour sauver l'Europe du drame.",
      "popularity": 114.965,
      "poster_path": "/z7vcXBWfA3POvroAFRaTvZgX0HY.jpg",
      "first_air_date": "2019-05-06",
      "name": "Chernobyl",
      "vote_average": 8.7,
      "vote_count": 6602
    },
    {
      "adult": false,
      "backdrop_path": "/jmV6NIzZxGzRoljFPwao6sh4Nny.jpg",
      "genre_ids": [
        18,
        35
      ],
      "id": 259666,
      "origin_country": [
        "MX"
      ],
      "original_language": "es",
      "original_name": "Nadie nos va a extrañar",
      "overview": "Dans le Mexique des années 1990, avant la crise économique, cinq losers sont à la tête d'un commerce illégal dans leur lycée. La vente de devoirs à leurs camarades de classe leur apporte argent et popularité, mais les hormones et une mort inattendue risquent de tout saboter...",
      "popularity": 32.367,
      "poster_path": "/py0s87C9214KRbZ4kWLQfgsE9ET.jpg",
      "first_air_date": "2024-08-09",
      "name": "Nadie nos va a extrañar",
      "vote_average": 8.669,
      "vote_count": 210
    },
    {
      "adult": false,
      "backdrop_path": "/ywQtHG17LZhAFZyZtBflhtFMtJ7.jpg",
      "genre_ids": [
        18,
        10751
      ],
      "id": 70785,
      "origin_country": [
        "CA"
      ],
      "original_language": "en",
      "original_name": "Anne with an E",
      "overview": "Canada, 1890. Anne Shirley, jeune fille de 13 ans maltraitée en orphelinat et par des familles d'accueil, atterrit par erreur dans le foyer d'une vieille dame sans enfant et de son frère. Avec le temps, Anne va illuminer leur vie grâce à son esprit fantasque, sa vive intelligence et son imagination débordante !",
      "popularity": 86.955,
      "poster_path": "/6P6tXhjT5tK3qOXzxF9OMLlG7iz.jpg",
      "first_air_date": "2017-03-19",
      "name": "Anne",
      "vote_average": 8.665,
      "vote_count": 4703
    },
    {
      "adult": false,
      "backdrop_path": "/1nfIEJu02Zhv9omTKkzwHnK8Dji.jpg",
      "genre_ids": [
        99,
        10751
      ],
      "id": 74313,
      "origin_country": [
        "GB"
      ],
      "original_language": "en",
      "original_name": "Blue Planet II",
      "overview": "Bien que recouvrant 70 % de la surface de la planète Terre, les océans restent à ce jour largement méconnus. Cependant, grâce aux toutes dernières technologies d’exploration et de plongée sous-marines, nous pouvons plonger plus longtemps, plus profondément, et les découvrir enfin. Planète bleue propose de descendre dans des profondeurs jamais atteintes auparavant. Une occasion inespérée de comprendre que nous avons bien plus en commun avec cet univers et ses habitants que nous ne l’imaginions...",
      "popularity": 24.993,
      "poster_path": "/hc1uD0zvoouhFj9DA24FVdrEEPC.jpg",
      "first_air_date": "2017-10-29",
      "name": "Planète bleue",
      "vote_average": 8.7,
      "vote_count": 271
    },
    {
      "adult": false,
      "backdrop_path": "/rqbCbjB19amtOtFQbb3K2lgm2zv.jpg",
      "genre_ids": [
        16,
        10765,
        10759
      ],
      "id": 1429,
      "origin_country": [
        "JP"
      ],
      "original_language": "ja",
      "original_name": "進撃の巨人",
      "overview": "Dans un monde ravagé par des titans mangeurs d’homme depuis plus d’un siècle, les rares survivants de l’Humanité n’ont d’autre choix pour survivre que de se barricader dans une cité-forteresse. Le jeune Eren, témoin de la mort de sa mère dévorée par un titan, n’a qu’un rêve : entrer dans le corps d’élite chargé de découvrir l’origine des titans, et les annihiler jusqu’au dernier…",
      "popularity": 120.995,
      "poster_path": "/ssRVaqKvbGF3N7oOQfFjFptinVH.jpg",
      "first_air_date": "2013-04-07",
      "name": "L'Attaque des Titans",
      "vote_average": 8.7,
      "vote_count": 6576
    },
    {
      "adult": false,
      "backdrop_path": "/mGHrUSt2uA5RaIheSmBfRnRHPS8.jpg",
      "genre_ids": [
        16,
        10765,
        18,
        10759,
        35,
        10762
      ],
      "id": 92685,
      "origin_country": [
        "US"
      ],
      "original_language": "en",
      "original_name": "The Owl House",
      "overview": "Luz, une adolescente humaine pleine d’assurance, tombe accidentellement sur un portail permettant d’accéder à un monde magique où elle se liera d’amitié avec une sorcière rebelle, Eda, et un démon guerrier adorable, King. Bien qu’elle ne possède pas de pouvoirs magiques, Luz poursuit son rêve de devenir une sorcière en servant Eda comme apprentie au Manoir de la Chouette et trouve finalement une nouvelle famille dans un environnement improbable.",
      "popularity": 101.344,
      "poster_path": "/1qO9yHz28uZ5g4QAZPJL8vqsLeb.jpg",
      "first_air_date": "2020-01-10",
      "name": "Luz à Osville",
      "vote_average": 8.661,
      "vote_count": 1638
    },
    {
      "adult": false,
      "backdrop_path": "/2w8FaLwwJTWr6ExUMeVgT2Th5YT.jpg",
      "genre_ids": [
        16,
        35,
        18,
        10759
      ],
      "id": 42705,
      "origin_country": [
        "JP"
      ],
      "original_language": "ja",
      "original_name": "はじめの一歩",
      "overview": "Ippo est un jeune lycéen de 16 ans qui n'a pas d'amis car il occupe tous son temps libre à aider sa mère pour tenir son affaire de pêche. Mais il ne sait pas encore qu'un prestigieux destin l'attend ; alors qu'il se faisait martyriser par la bande d'Amezawa, Takamura (un grand boxeur japonais) vient lui porter secours. Les voyous hors d'état de nuire Takamura emmène le jeune lycéen dans son club de boxe. Ippo remis sur pied, Takamura lui proposera de se défouler sur un sac du club avec un dessin de Furyô dessus. Là se révélera une grande force et Ippo se découvrira une passion pour la boxe. Après avoir visionné une cassette et passé le test de Takamura avec brio, il entrera dans le club de boxe de Kamogawa. À la surprise générale il tiendra tête à l'un des génies du club de boxe ce qui va attirer l'attention de l’entraîneur du club.",
      "popularity": 161.69,
      "poster_path": "/umMYjHm7FjsyllUnC8lWDy9rrZQ.jpg",
      "first_air_date": "2000-10-03",
      "name": "Hajime no Ippo : The Fighting",
      "vote_average": 8.66,
      "vote_count": 1095
    },
    {
      "adult": false,
      "backdrop_path": "/lNpkvX2s8LGB0mjGODMT4o6Up7j.jpg",
      "genre_ids": [
        18
      ],
      (1398, "/uNfLO6xN7gE06znva5AcSIz1ZMH.jpg",
      "Les Soprano"),
    }

}

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