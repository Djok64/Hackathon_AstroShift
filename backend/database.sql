-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: hackathon003
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `objetssurvie`
--

DROP TABLE IF EXISTS `objetssurvie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `objetssurvie` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `description` text,
  `material` varchar(255) DEFAULT NULL,
  `durability` varchar(50) DEFAULT NULL,
  `weight` decimal(6,2) DEFAULT NULL,
  `imgUrl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `objetssurvie`
--

LOCK TABLES `objetssurvie` WRITE;
/*!40000 ALTER TABLE `objetssurvie` DISABLE KEYS */;
INSERT INTO `objetssurvie` VALUES (41,'Filtre à eau','Filtre portable pour purifier l eau','Charbon actif','Moyen',0.50,'/backend/public/assets/images/itemPictures/FiltreEau.png'),(42,'Tente auto-déployable','Tente pour protection contre les éléments','Nylon','Moyen',4.50,'/backend/public/assets/images/itemPictures/TenteAutoDeployable.png'),(43,'Oxygène Booster','Supplément d oxygène portable','Aluminium','Moyen',1.50,'/backend/public/assets/images/itemPictures/OxygeneBooster.png'),(44,'Kit de nourriture','Nourriture adaptée à la faune locale','Divers','Faible',2.50,'/backend/public/assets/images/itemPictures/KitNourriture.png'),(45,'Lampe solaire','Lampe rechargeable via énergie solaire','Plastique','Moyen',0.80,'/backend/public/assets/images/itemPictures/LampeSolaire.png'),(46,'Couteau multifonction','Outil polyvalent','Acier inoxydable','Élevé',0.30,'/backend/public/assets/images/itemPictures/CouteauMultifonction.png'),(47,'Kit premiers soins','Essentiels médicaux pour urgences','Divers','Faible',1.20,'/backend/public/assets/images/itemPictures/KitPremiersSoins.png'),(48,'Boussole','Navigation','Métal','Moyen',0.10,'/backend/public/assets/images/itemPictures/Boussole.png'),(49,'Cordage','Pour attachements ou pièges','Fibre','Moyen',0.40,'/backend/public/assets/images/itemPictures/Cordage.png'),(50,'Tablette de purification d eau','Pour purifier rapidement l eau','Chimique','Faible',0.05,'/backend/public/assets/images/itemPictures/TablettePurificationEau.png'),(51,'Ventilateur portable','Refroidissement rapide','Plastique','Faible',1.00,'/backend/public/assets/images/itemPictures/VentilateurPortable.png'),(52,'Masque de protection','Protège contre les particules','Fibre filtrante','Moyen',0.20,'/backend/public/assets/images/itemPictures/MasqueDeProtection.png'),(53,'Gourde isotherme','Maintient l eau fraîche','Acier inoxydable','Élevé',0.50,'/backend/public/assets/images/itemPictures/GourdeIsotherme.png'),(54,'Sandales thermiques','Protection des pieds contre la chaleur','Caoutchouc','Moyen',0.70,'/backend/public/assets/images/itemPictures/SandalesThermiques.png'),(55,'Lunettes de protection','Protection contre lumière intense','Plastique polarisé','Moyen',0.10,'/backend/public/assets/images/itemPictures/LunettesDeProtection.png'),(56,'Écran solaire en spray','Protection UV','Divers','Faible',0.30,'/backend/public/assets/images/itemPictures/SpaySolaire.png'),(57,'Tente isolante','Tente réfléchissant la chaleur','Mylar','Moyen',4.80,'/backend/public/assets/images/itemPictures/TenteIsolante.png'),(58,'Douche portable','Rafraîchissement rapide','Plastique','Faible',2.00,'/backend/public/assets/images/itemPictures/DouchePortable.png'),(59,'Cooling Suit','Combinaison refroidissante pour température élevée','Fibres spéciales','Élevé',3.00,'/backend/public/assets/images/itemPictures/collingSuit.png'),(60,'Protection solaire','Crème haute protection','Divers','Faible',0.20,'/backend/public/assets/images/itemPictures/portectionSolaire.png'),(61,'Gants chauffants','Protection contre le froid','Fibres thermiques','Élevé',0.30,'/backend/public/assets/images/itemPictures/gantsChauffants.png'),(62,'Chauffage portable','Réchauffeur pour conditions froides','Aluminium','Moyen',1.80,'/backend/public/assets/images/itemPictures/chauffagePortable.png'),(63,'Vêtement thermique','Vêtement pour température glaciale','Fibres thermiques','Élevé',2.50,'/backend/public/assets/images/itemPictures/vetementThermique.png'),(64,'Lunettes de protection UV','Protection contre réverbération','Plastique polarisé','Moyen',0.10,'/backend/public/assets/images/itemPictures/LunettesDeProtection.png'),(65,'Chaufferettes instantanées','Chaleur d urgence','Chimique','Faible',0.20,'/backend/public/assets/images/itemPictures/chaufferettes.png'),(66,'Couverture thermique','Retient la chaleur corporelle','Mylar','Moyen',0.50,'/backend/public/assets/images/itemPictures/couvertureSurvie.png'),(67,'Stove portable','Cuisson dans conditions froides','Métal','Moyen',1.50,'/backend/public/assets/images/itemPictures/stovePortable.png'),(68,'Pelles à neige compacte','Pour déplacer la neige','Aluminium','Élevé',0.90,'/backend/public/assets/images/itemPictures/pelleNeige.png'),(69,'Chaussures à crampons','Adhérence sur glace','Caoutchouc et acier','Élevé',1.20,'/backend/public/assets/images/itemPictures/chaussuresCrampon.png'),(70,'Lampe frontale','Éclairage dans l obscurité','Plastique','Moyen',0.20,'/backend/public/assets/images/itemPictures/lampeFrontal.png'),(71,'Parapluie solaire','Protection contre le soleil intense','Nylon','Faible',0.80,'/backend/public/assets/images/itemPictures/parapluieSolaire.png'),(72,'Kit d hygiène','Nécessaire pour l hygiène personnelle','Divers','Faible',1.00,'/backend/public/assets/images/itemPictures/kitHygienne.png'),(73,'Protection nasale','Protège de la poussière','Tissu filtrant','Moyen',0.05,'/backend/public/assets/images/itemPictures/protectionNasale.png'),(74,'Crème hydratante','Pour peau sèche','Divers','Faible',0.20,'/backend/public/assets/images/itemPictures/cremeHydratante.png'),(75,'Masque hydratant','Hydratation du visage','Divers','Faible',0.10,'/backend/public/assets/images/itemPictures/masqueHydratant.png'),(76,'Tente d ombre','Fournit de l ombre dans zones ensoleillées','Nylon','Moyen',4.70,'/backend/public/assets/images/itemPictures/tenteOmbre.png'),(77,'Brume rafraîchissante','Rafraîchissement immédiat','Eau & Divers','Faible',0.30,'/backend/public/assets/images/itemPictures/brumeRafrachissante.png'),(78,'Compresse d hydratation','Hydratation par voie cutanée','Chimique','Faible',0.10,'/backend/public/assets/images/itemPictures/compresseHydratation.png'),(79,'Réserve d eau','Stockage d eau pour climats arides','Plastique','Moyen',1.20,'/backend/public/assets/images/itemPictures/reserveEau.png'),(80,'Chapeau solaire','Protection contre le soleil','Tissu','Faible',0.30,'/backend/public/assets/images/itemPictures/chapeauSolaire.png');
/*!40000 ALTER TABLE `objetssurvie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `planet`
--

DROP TABLE IF EXISTS `planet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `planet` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom_planete` varchar(255) NOT NULL,
  `type_planete` varchar(255) DEFAULT NULL,
  `composition_atmosphere` varchar(255) DEFAULT NULL,
  `presence_eau` tinyint(1) DEFAULT NULL,
  `climat` varchar(255) DEFAULT NULL,
  `temperature_moyenne` decimal(5,2) DEFAULT NULL,
  `radiations` varchar(255) DEFAULT NULL,
  `duree_orbitale` decimal(7,2) DEFAULT NULL,
  `gravite` decimal(5,2) DEFAULT NULL,
  `type_faune_flore` varchar(255) DEFAULT NULL,
  `imgUrl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `planet`
--

LOCK TABLES `planet` WRITE;
/*!40000 ALTER TABLE `planet` DISABLE KEYS */;
INSERT INTO `planet` VALUES (1,'Terra Nova','Tellurique','Azote 78%, Oxygène 21%, Autres 1%',1,'Tempéré',25.50,'Faibles',365.25,9.81,'Diversifiée',NULL),(2,'Pyrotopia','Tellurique','Azote 76%, Oxygène 23%, Autres 1%',1,'Tropical',32.75,'Modérées',420.50,9.68,'Exotique',NULL),(3,'Glaciara','Tellurique','Azote 75%, Oxygène 24%, Autres 1%',1,'Froid',-10.20,'Élevées',300.75,10.12,'Simplifiée',NULL),(4,'Terraria','Tellurique','Azote 77%, Oxygène 22%, Autres 1%',1,'Aride',40.00,'Faibles',400.00,9.70,'Minimaliste',NULL);
/*!40000 ALTER TABLE `planet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `planet_has_objetssurvie`
--

DROP TABLE IF EXISTS `planet_has_objetssurvie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `planet_has_objetssurvie` (
  `planet_id` int NOT NULL,
  `objetssurvie_id` int NOT NULL,
  PRIMARY KEY (`planet_id`,`objetssurvie_id`),
  KEY `fk_planet_has_objetssurvie_objetssurvie1_idx` (`objetssurvie_id`),
  KEY `fk_planet_has_objetssurvie_planet_idx` (`planet_id`),
  CONSTRAINT `fk_planet_has_objetssurvie_objetssurvie1` FOREIGN KEY (`objetssurvie_id`) REFERENCES `objetssurvie` (`id`),
  CONSTRAINT `fk_planet_has_objetssurvie_planet` FOREIGN KEY (`planet_id`) REFERENCES `planet` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `planet_has_objetssurvie`
--

LOCK TABLES `planet_has_objetssurvie` WRITE;
/*!40000 ALTER TABLE `planet_has_objetssurvie` DISABLE KEYS */;
INSERT INTO `planet_has_objetssurvie` VALUES (1,41),(1,42),(1,43),(1,44),(1,45),(1,46),(1,47),(1,48),(1,49),(1,50),(2,51),(2,52),(2,53),(2,54),(2,55),(2,56),(2,57),(2,58),(2,59),(2,60),(3,61),(3,62),(3,63),(3,64),(3,65),(3,66),(3,67),(3,68),(3,69),(3,70),(4,71),(4,72),(4,73),(4,74),(4,75),(4,76),(4,77),(4,78),(4,79),(4,80);
/*!40000 ALTER TABLE `planet_has_objetssurvie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `lastname` varchar(45) NOT NULL,
  `firstname` varchar(45) NOT NULL,
  `age` tinyint NOT NULL,
  `home_country` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-07 13:45:27
