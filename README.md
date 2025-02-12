# APPLICATION CINÉ-DÉLICES
Cette application a pour objectif de recenser les recettes de cuisine inspirées de films ou thématiques cinématographique.

## ARCHITECTURE:
Application monolithique codée en MVC.

### APP : 
Dossier comprenant l'ensemble des données de l'application.

. CONTROLLERS : Dossier contenant l'ensemble des controllers. Les controllers sont des méthodes appelées par une route et qui effectueront un traitement particulier avant de renvoyer une vue au navigateur.

. Database : Dossier comprenant les fichiers de configuration Sequelize.

. Middleware : Dossier comprenant l'ensemble des middlewares.

. Models : Dossier contenant tous les fichiers qui servent pour la BDD.

. Views : Dossier reprenant l'ensemble des vues qui seront renvoyées au navigateur.

### PUBLIC : 

. CSS : Dossier contenant les styles des views

. IMG : Dossier contenant les images

. JS : Dossier contenant les scripts js gérant le front de l'application.

. FAVICON : image qui va servir de logo du site sur l'onglet.

### .env :

Fichier privé qui stocke les données sensibles de l'application. Ce fichier ne sera pas versionné.

### .env.example :

Une copie du .env sera versionnée sur github indiquant les données à renseigner pour faire marcher l'application. 

API a rajouter en .env :
ebca9cb1b38d3ceff2bcf1a944092f57
