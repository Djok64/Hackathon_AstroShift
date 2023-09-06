// ce fichier est un test de connexion a la base de donnée (database.js est presque comme ce fichier  lui est une reel connexion mais unique sans les pool de connexion )
require("dotenv").config()
const mysql = require("mysql2/promise")

const testConnection = async () => {
  const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env

  // Le mot-clé await est utilisé à l'intérieur d'une fonction async pour attendre qu'une promesse soit résolue ou rejetée. Il met la fonction async en pause et permet à d'autres fonctions ou événements de s'exécuter pendant que la promesse est en attente.

  const connection = await mysql.createConnection({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    multipleStatements: true,
  })

  console.info("Connexion réussie !")
  await connection.end()
}
// après avoir établi une connexion à la base de données et affiché le message "Connexion réussie !", vous appelez await connection.end() pour fermer cette connexion.
testConnection() // execution de la fonction declaré sans ce fichier

// JavaScript est un langage de programmation asynchrone, ce qui signifie que vous pouvez effectuer des opérations sans bloquer le fil d'exécution principal (comme le chargement d'une image pendant que le reste de votre page est toujours en cours d'exécution). Pour gérer cela, JavaScript utilise des promesses (Promises) qui sont un moyen de gérer les opérations asynchrones.

// async :
// Le mot-clé async est utilisé pour déclarer une fonction asynchrone, ce qui signifie que cette fonction renverra une promesse. Lorsque vous appelez cette fonction, elle exécute son corps et, lorsqu'elle se termine, elle renvoie une promesse résolue avec la valeur retournée par cette fonction.

// Exemple :

// async function fetchData() {
//   let response = await fetch('https://api.example.com/data');
//   let data = await response.json();
//   return data;
// }
// Dans l'exemple ci-dessus, fetchData attend que la première promesse (l'appel à fetch) soit résolue avant de passer à la ligne suivante.
