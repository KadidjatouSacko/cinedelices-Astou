const recettes = [
    {
      nom: "Lasagnes",
      auteur: "Jon Arbuckle",
      duree: "45 min",
      difficulte: "Moyenne",
      ingredients: [
        "Pâtes à lasagne",
        "Bœuf haché",
        "Sauce tomate",
        "Fromage râpé",
        "Béchamel"
      ],
      ustensiles: ["Four", "Plat à gratin", "Casserole", "Spatule"],
      etapes: [
        "Préchauffer le four à 180°C.",
        "Faire revenir le bœuf haché avec la sauce tomate.",
        "Préparer une béchamel.",
        "Monter les lasagnes en alternant pâtes, sauce et béchamel.",
        "Enfourner pendant 30 minutes."
      ]
    },
    {
      nom: "Mousse au Chocolat",
      auteur: "Chef Pâtissier",
      duree: "15 min",
      difficulte: "Facile",
      ingredients: ["Chocolat noir", "Œufs", "Sucre", "Beurre"],
      ustensiles: ["Saladier", "Fouet", "Ramequins"],
      etapes: [
        "Faire fondre le chocolat au bain-marie.",
        "Séparer les blancs des jaunes d'œufs.",
        "Mélanger les jaunes avec le chocolat fondu.",
        "Monter les blancs en neige et les incorporer délicatement.",
        "Répartir dans des ramequins et laisser reposer au frais."
      ]
    },
    {
      nom: "Galette",
      auteur: "Grand-Mère Bretonne",
      duree: "20 min",
      difficulte: "Facile",
      ingredients: ["Farine de sarrasin", "Eau", "Sel", "Beurre", "Jambon", "Œuf", "Fromage râpé"],
      ustensiles: ["Poêle", "Spatule"],
      etapes: [
        "Mélanger la farine, l'eau et le sel pour faire la pâte.",
        "Laisser reposer 30 minutes.",
        "Faire chauffer une poêle avec du beurre.",
        "Verser une louche de pâte et cuire une face.",
        "Retourner et ajouter jambon, fromage et œuf.",
        "Replier et servir chaud."
      ]
    },
    {
      nom: "Ramens",
      auteur: "Naruto Uzumaki",
      duree: "40 min",
      difficulte: "Difficile",
      ingredients: ["Nouilles", "Bouillon", "Porc", "Œuf", "Algues", "Soja", "Ciboule"],
      ustensiles: ["Casserole", "Bol", "Baguettes"],
      etapes: [
        "Faire bouillir le bouillon avec les épices.",
        "Cuire les nouilles selon les instructions.",
        "Faire cuire l'œuf mollet.",
        "Trancher le porc en fines lamelles.",
        "Dresser les bols avec nouilles, bouillon et garniture."
      ]
    },
    {
      nom: "Pâtes aux Boulettes",
      auteur: "Mama Italienne",
      duree: "35 min",
      difficulte: "Moyenne",
      ingredients: ["Spaghetti", "Viande hachée", "Sauce tomate", "Ail", "Parmesan"],
      ustensiles: ["Poêle", "Casserole", "Passoire"],
      etapes: [
        "Préparer des boulettes de viande.",
        "Les faire revenir dans une poêle.",
        "Cuire les pâtes al dente.",
        "Mélanger les pâtes avec la sauce tomate et les boulettes.",
        "Servir avec du parmesan râpé."
      ]
    },
    {
      nom: "Ratatouille",
      auteur: "Rémy (le rat)",
      duree: "50 min",
      difficulte: "Moyenne",
      ingredients: ["Courgettes", "Aubergines", "Tomates", "Poivrons", "Ail", "Huile d’olive"],
      ustensiles: ["Poêle", "Couteau", "Plat à gratin"],
      etapes: [
        "Couper tous les légumes en rondelles.",
        "Faire revenir chaque légume séparément dans une poêle.",
        "Les disposer dans un plat en alternant les couches.",
        "Assaisonner et arroser d’huile d’olive.",
        "Cuire au four à 180°C pendant 40 minutes."
      ]
    },
    {
      nom: "Donuts",
      auteur: "Homer Simpson",
      duree: "60 min",
      difficulte: "Moyenne",
      ingredients: ["Farine", "Sucre", "Levure", "Lait", "Œufs", "Beurre", "Chocolat", "Huile"],
      ustensiles: ["Friteuse", "Emporte-pièce", "Saladier"],
      etapes: [
        "Mélanger les ingrédients pour former une pâte.",
        "Laisser reposer 1 heure.",
        "Étaler et découper en forme de donuts.",
        "Faire frire dans l’huile chaude jusqu’à ce qu’ils soient dorés.",
        "Tremper dans du chocolat fondu et ajouter des décorations."
      ]
    }
  ];
  
  export default recettes;
  