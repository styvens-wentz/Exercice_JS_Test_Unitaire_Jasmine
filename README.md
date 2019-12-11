Consignes :

- Dans le fichier exercice1.spec.js , écrire les deux tests restants pour notre fonction maFonction inclue depuis
le script exercice1.js

- Pour tester, ouvrez dans le navigateur la page exercice.test.html qui inclue le framework jasmine ainsi que notre
code javascript.




 Théorie :

 Cet exercice est une introduction aux tests unitaires en javascript.

 Nous utilisons le framework Jasmine.

 Avec Jasmine, un test commence par le mot clef describe suivi du titre du test puis d'une fonction anonyme contenant
 les différents tests à effectuer.

 Chaque test commence par le mot clef it suivi de 'intitulé du test ( généralement la description du test )
 puis d'une fonction anonyme contenant le test spécifique à executer.


 La méthode expect indique le résultat attendu du test puis l'instruction toBe permet de définir la valeur attendue.


 Il existe de nombreuses autres instructions , vous trouverez la liste détaillée sur cette page :

 https://onechapteraday.fr/javascript-jasmine-unit-tests/