-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema hackathon003
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema hackathon003
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `hackathon003` DEFAULT CHARACTER SET utf8 ;
USE `hackathon003` ;

-- -----------------------------------------------------
-- Table `hackathon003`.`objetssurvie`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hackathon003`.`objetssurvie` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(255) NOT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `material` VARCHAR(255) NULL DEFAULT NULL,
  `durability` VARCHAR(50) NULL DEFAULT NULL,
  `weight` DECIMAL(6,2) NULL DEFAULT NULL,
  `imgUrl` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hackathon003`.`planet`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hackathon003`.`planet` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nom_planete` VARCHAR(255) NOT NULL,
  `type_planete` VARCHAR(255) NULL DEFAULT NULL,
  `composition_atmosphere` VARCHAR(255) NULL DEFAULT NULL,
  `presence_eau` TINYINT(1) NULL DEFAULT NULL,
  `climat` VARCHAR(255) NULL DEFAULT NULL,
  `temperature_moyenne` DECIMAL(5,2) NULL DEFAULT NULL,
  `radiations` VARCHAR(255) NULL DEFAULT NULL,
  `duree_orbitale` DECIMAL(7,2) NULL DEFAULT NULL,
  `gravite` DECIMAL(5,2) NULL DEFAULT NULL,
  `type_faune_flore` VARCHAR(255) NULL DEFAULT NULL,
  `imgUrl` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hackathon003`.`planet_has_objetssurvie`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hackathon003`.`planet_has_objetssurvie` (
  `planet_id` INT NOT NULL,
  `objetssurvie_id` INT NOT NULL,
  PRIMARY KEY (`planet_id`, `objetssurvie_id`),
  INDEX `fk_planet_has_objetssurvie_objetssurvie1_idx` (`objetssurvie_id` ASC) VISIBLE,
  INDEX `fk_planet_has_objetssurvie_planet_idx` (`planet_id` ASC) VISIBLE,
  CONSTRAINT `fk_planet_has_objetssurvie_planet`
    FOREIGN KEY (`planet_id`)
    REFERENCES `hackathon003`.`planet` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_planet_has_objetssurvie_objetssurvie1`
    FOREIGN KEY (`objetssurvie_id`)
    REFERENCES `hackathon003`.`objetssurvie` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;




INSERT INTO `hackathon003`.`planet` (`id`, `nom_planete`, `type_planete`, `composition_atmosphere`, `presence_eau`, `climat`, `temperature_moyenne`, `radiations`, `duree_orbitale`, `gravite`, `type_faune_flore`) VALUES ('1', 'Terra Nova', 'Tellurique', 'Azote 78%, Oxygène 21%, Autres 1%', '1', 'Tempéré', '25.50', 'Faibles', '365.25', '9.81', 'Diversifiée');
INSERT INTO `hackathon003`.`planet` (`id`, `nom_planete`, `type_planete`, `composition_atmosphere`, `presence_eau`, `climat`, `temperature_moyenne`, `radiations`, `duree_orbitale`, `gravite`, `type_faune_flore`) VALUES ('2', 'Pyrotopia', 'Tellurique', 'Azote 76%, Oxygène 23%, Autres 1%', '1', 'Tropical', '32.75', 'Modérées', '420.50', '9.68', 'Exotique');
INSERT INTO `hackathon003`.`planet` (`id`, `nom_planete`, `type_planete`, `composition_atmosphere`, `presence_eau`, `climat`, `temperature_moyenne`, `radiations`, `duree_orbitale`, `gravite`, `type_faune_flore`) VALUES ('3', 'Glaciara', 'Tellurique', 'Azote 75%, Oxygène 24%, Autres 1%', '1', 'Froid', '-10.20', 'Élevées', '300.75', '10.12', 'Simplifiée');
INSERT INTO `hackathon003`.`planet` (`id`, `nom_planete`, `type_planete`, `composition_atmosphere`, `presence_eau`, `climat`, `temperature_moyenne`, `radiations`, `duree_orbitale`, `gravite`, `type_faune_flore`) VALUES ('4', 'Terraria', 'Tellurique', 'Azote 77%, Oxygène 22%, Autres 1%', '1', 'Aride', '40.00', 'Faibles', '400.00', '9.70', 'Minimaliste');




INSERT INTO `hackathon003`.`objetssurvie` (`id`, `nom`, `description`, `material`, `durability`, `weight`, `imgUrl`) VALUES ('41', 'Filtre à eau', 'Filtre portable pour purifier l eau', 'Charbon actif', 'Moyen', '0.50', '/backend/public/assets/images/itemPictures/FiltreEau.png');
INSERT INTO `hackathon003`.`objetssurvie` (`id`, `nom`, `description`, `material`, `durability`, `weight`, `imgUrl`) VALUES ('42', 'Tente auto-déployable', 'Tente pour protection contre les éléments', 'Nylon', 'Moyen', '4.50', '/backend/public/assets/images/itemPictures/TenteAutoDeployable.png');
INSERT INTO `hackathon003`.`objetssurvie` (`id`, `nom`, `description`, `material`, `durability`, `weight`, `imgUrl`) VALUES ('43', 'Oxygène Booster', 'Supplément d oxygène portable', 'Aluminium', 'Moyen', '1.50', '/backend/public/assets/images/itemPictures/OxygeneBooster.png');
INSERT INTO `hackathon003`.`objetssurvie` (`id`, `nom`, `description`, `material`, `durability`, `weight`, `imgUrl`) VALUES ('44', 'Kit de nourriture', 'Nourriture adaptée à la faune locale', 'Divers', 'Faible', '2.50', '/backend/public/assets/images/itemPictures/KitNourriture.png');
INSERT INTO `hackathon003`.`objetssurvie` (`id`, `nom`, `description`, `material`, `durability`, `weight`, `imgUrl`) VALUES ('45', 'Lampe solaire', 'Lampe rechargeable via énergie solaire', 'Plastique', 'Moyen', '0.80', '/backend/public/assets/images/itemPictures/LampeSolaire.png');
INSERT INTO `hackathon003`.`objetssurvie` (`id`, `nom`, `description`, `material`, `durability`, `weight`, `imgUrl`) VALUES ('46', 'Couteau multifonction', 'Outil polyvalent', 'Acier inoxydable', 'Élevé', '0.30', '/backend/public/assets/images/itemPictures/CouteauMultifonction.png');
INSERT INTO `hackathon003`.`objetssurvie` (`id`, `nom`, `description`, `material`, `durability`, `weight`, `imgUrl`) VALUES ('47', 'Kit premiers soins', 'Essentiels médicaux pour urgences', 'Divers', 'Faible', '1.20', '/backend/public/assets/images/itemPictures/KitPremiersSoins.png');
INSERT INTO `hackathon003`.`objetssurvie` (`id`, `nom`, `description`, `material`, `durability`, `weight`, `imgUrl`) VALUES ('48', 'Boussole', 'Navigation', 'Métal', 'Moyen', '0.10', '/backend/public/assets/images/itemPictures/Boussole.png');
INSERT INTO `hackathon003`.`objetssurvie` (`id`, `nom`, `description`, `material`, `durability`, `weight`, `imgUrl`) VALUES ('49', 'Cordage', 'Pour attachements ou pièges', 'Fibre', 'Moyen', '0.40', '/backend/public/assets/images/itemPictures/Cordage.png');
INSERT INTO `hackathon003`.`objetssurvie` (`id`, `nom`, `description`, `material`, `durability`, `weight`, `imgUrl`) VALUES ('50', 'Tablette de purification d eau', 'Pour purifier rapidement l eau', 'Chimique', 'Faible', '0.05', '/backend/public/assets/images/itemPictures/TablettePurificationEau.png');
INSERT INTO `hackathon003`.`objetssurvie` (`id`, `nom`, `description`, `material`, `durability`, `weight`, `imgUrl`) VALUES ('51', 'Ventilateur portable', 'Refroidissement rapide', 'Plastique', 'Faible', '1.00', '/backend/public/assets/images/itemPictures/VentilateurPortable.png');
INSERT INTO `hackathon003`.`objetssurvie` (`id`, `nom`, `description`, `material`, `durability`, `weight`, `imgUrl`) VALUES ('52', 'Masque de protection', 'Protège contre les particules', 'Fibre filtrante', 'Moyen', '0.20', '/backend/public/assets/images/itemPictures/MasqueDeProtection.png');
INSERT INTO `hackathon003`.`objetssurvie` (`id`, `nom`, `description`, `material`, `durability`, `weight`, `imgUrl`) VALUES ('53', 'Gourde isotherme', 'Maintient l eau fraîche', 'Acier inoxydable', 'Élevé', '0.50', '/backend/public/assets/images/itemPictures/GourdeIsotherme.png');
INSERT INTO `hackathon003`.`objetssurvie` (`id`, `nom`, `description`, `material`, `durability`, `weight`, `imgUrl`) VALUES ('54', 'Sandales thermiques', 'Protection des pieds contre la chaleur', 'Caoutchouc', 'Moyen', '0.70'), '/backend/public/assets/images/itemPictures/SandalesThermiques.png';
INSERT INTO `hackathon003`.`objetssurvie` (`id`, `nom`, `description`, `material`, `durability`, `weight`, `imgUrl`) VALUES ('55', 'Lunettes de protection', 'Protection contre lumière intense', 'Plastique polarisé', 'Moyen', '0.10', '/backend/public/assets/images/itemPictures/LunettesDeProtection.png');
INSERT INTO `hackathon003`.`objetssurvie` (`id`, `nom`, `description`, `material`, `durability`, `weight`, `imgUrl`) VALUES ('56', 'Écran solaire en spray', 'Protection UV', 'Divers', 'Faible', '0.30', '/backend/public/assets/images/itemPictures/SpaySolaire.png');
INSERT INTO `hackathon003`.`objetssurvie` (`id`, `nom`, `description`, `material`, `durability`, `weight`, `imgUrl`) VALUES ('57', 'Tente isolante', 'Tente réfléchissant la chaleur', 'Mylar', 'Moyen', '4.80', '/backend/public/assets/images/itemPictures/TenteIsolante.png');
INSERT INTO `hackathon003`.`objetssurvie` (`id`, `nom`, `description`, `material`, `durability`, `weight`, `imgUrl`) VALUES ('58', 'Douche portable', 'Rafraîchissement rapide', 'Plastique', 'Faible', '2.00', '/backend/public/assets/images/itemPictures/DouchePortable.png');
INSERT INTO `hackathon003`.`objetssurvie` (`id`, `nom`, `description`, `material`, `durability`, `weight`, `imgUrl`) VALUES ('59', 'Cooling Suit', 'Combinaison refroidissante pour température élevée', 'Fibres spéciales', 'Élevé', '3.00', '/backend/public/assets/images/itemPictures/collingSuit.png');
INSERT INTO `hackathon003`.`objetssurvie` (`id`, `nom`, `description`, `material`, `durability`, `weight`, `imgUrl`) VALUES ('60', 'Protection solaire', 'Crème haute protection', 'Divers', 'Faible', '0.20', `backend/public/assets/images/itemPictures/portectionSolaire.png`);
INSERT INTO `hackathon003`.`objetssurvie` (`id`, `nom`, `description`, `material`, `durability`, `weight`, `imgUrl`) VALUES ('61', 'Gants chauffants', 'Protection contre le froid', 'Fibres thermiques', 'Élevé', '0.30', `backend/public/assets/images/itemPictures/gantsChauffants.png`);
INSERT INTO `hackathon003`.`objetssurvie` (`id`, `nom`, `description`, `material`, `durability`, `weight`, `imgUrl`) VALUES ('62', 'Chauffage portable', 'Réchauffeur pour conditions froides', 'Aluminium', 'Moyen', '1.80', `backend/public/assets/images/itemPictures/chauffagePortable.png`);
INSERT INTO `hackathon003`.`objetssurvie` (`id`, `nom`, `description`, `material`, `durability`, `weight`, `imgUrl`) VALUES ('63', 'Vêtement thermique', 'Vêtement pour température glaciale', 'Fibres thermiques', 'Élevé', '2.50', `backend/public/assets/images/itemPictures/vetementThermique.png`);
INSERT INTO `hackathon003`.`objetssurvie` (`id`, `nom`, `description`, `material`, `durability`, `weight`, `imgUrl`) VALUES ('64', 'Lunettes de protection UV', 'Protection contre réverbération', 'Plastique polarisé', 'Moyen', '0.10', `backend/public/assets/images/itemPictures/LunettesDeProtection.png`);
INSERT INTO `hackathon003`.`objetssurvie` (`id`, `nom`, `description`, `material`, `durability`, `weight`, `imgUrl`) VALUES ('65', 'Chaufferettes instantanées', 'Chaleur d urgence', 'Chimique', 'Faible', '0.20', `backend/public/assets/images/itemPictures/chaufferettes.png`);
INSERT INTO `hackathon003`.`objetssurvie` (`id`, `nom`, `description`, `material`, `durability`, `weight`, `imgUrl`) VALUES ('66', 'Couverture thermique', 'Retient la chaleur corporelle', 'Mylar', 'Moyen', '0.50', `backend/public/assets/images/itemPictures/couvertureSurvie.png`);
INSERT INTO `hackathon003`.`objetssurvie` (`id`, `nom`, `description`, `material`, `durability`, `weight`, `imgUrl`) VALUES ('67', 'Stove portable', 'Cuisson dans conditions froides', 'Métal', 'Moyen', '1.50', `backend/public/assets/images/itemPictures/stovePortable.png`);
INSERT INTO `hackathon003`.`objetssurvie` (`id`, `nom`, `description`, `material`, `durability`, `weight`, `imgUrl`) VALUES ('68', 'Pelles à neige compacte', 'Pour déplacer la neige', 'Aluminium', 'Élevé', '0.90', `backend/public/assets/images/itemPictures/pelleNeige.png`);
INSERT INTO `hackathon003`.`objetssurvie` (`id`, `nom`, `description`, `material`, `durability`, `weight`, `imgUrl`) VALUES ('69', 'Chaussures à crampons', 'Adhérence sur glace', 'Caoutchouc et acier', 'Élevé', '1.20', `backend/public/assets/images/itemPictures/chaussuresCrampon.png`);
INSERT INTO `hackathon003`.`objetssurvie` (`id`, `nom`, `description`, `material`, `durability`, `weight`, `imgUrl`) VALUES ('70', 'Lampe frontale', 'Éclairage dans l obscurité', 'Plastique', 'Moyen', '0.20', `backend/public/assets/images/itemPictures/lampeFrontal.png`);
INSERT INTO `hackathon003`.`objetssurvie` (`id`, `nom`, `description`, `material`, `durability`, `weight`, `imgUrl`) VALUES ('71', 'Parapluie solaire', 'Protection contre le soleil intense', 'Nylon', 'Faible', '0.80', `backend/public/assets/images/itemPictures/parapluieSolaire.png`);
INSERT INTO `hackathon003`.`objetssurvie` (`id`, `nom`, `description`, `material`, `durability`, `weight`, `imgUrl`) VALUES ('72', 'Kit d hygiène', 'Nécessaire pour l hygiène personnelle', 'Divers', 'Faible', '1.00', `backend/public/assets/images/itemPictures/kitHygienne.png`);
INSERT INTO `hackathon003`.`objetssurvie` (`id`, `nom`, `description`, `material`, `durability`, `weight`, `imgUrl`) VALUES ('73', 'Protection nasale', 'Protège de la poussière', 'Tissu filtrant', 'Moyen', '0.05', `backend/public/assets/images/itemPictures/protectionNasale.png`);
INSERT INTO `hackathon003`.`objetssurvie` (`id`, `nom`, `description`, `material`, `durability`, `weight`, `imgUrl`) VALUES ('74', 'Crème hydratante', 'Pour peau sèche', 'Divers', 'Faible', '0.20', `backend/public/assets/images/itemPictures/cremeHydratante.png`);
INSERT INTO `hackathon003`.`objetssurvie` (`id`, `nom`, `description`, `material`, `durability`, `weight`, `imgUrl`) VALUES ('75', 'Masque hydratant', 'Hydratation du visage', 'Divers', 'Faible', '0.10', `backend/public/assets/images/itemPictures/masqueHydratant.png`);
INSERT INTO `hackathon003`.`objetssurvie` (`id`, `nom`, `description`, `material`, `durability`, `weight`, `imgUrl`) VALUES ('76', 'Tente d ombre', 'Fournit de l ombre dans zones ensoleillées', 'Nylon', 'Moyen', '4.70', `backend/public/assets/images/itemPictures/tenteOmbre.png`);
INSERT INTO `hackathon003`.`objetssurvie` (`id`, `nom`, `description`, `material`, `durability`, `weight`, `imgUrl`) VALUES ('77', 'Brume rafraîchissante', 'Rafraîchissement immédiat', 'Eau & Divers', 'Faible', '0.30', `backend/public/assets/images/itemPictures/brumeRafrachissante.png`);
INSERT INTO `hackathon003`.`objetssurvie` (`id`, `nom`, `description`, `material`, `durability`, `weight`, `imgUrl`) VALUES ('78', 'Compresse d hydratation', 'Hydratation par voie cutanée', 'Chimique', 'Faible', '0.10', `backend/public/assets/images/itemPictures/compresseHydratation.png`);
INSERT INTO `hackathon003`.`objetssurvie` (`id`, `nom`, `description`, `material`, `durability`, `weight`, `imgUrl`) VALUES ('79', 'Réserve d eau', 'Stockage d eau pour climats arides', 'Plastique', 'Moyen', '1.20', `backend/public/assets/images/itemPictures/reserveEau.png` );
INSERT INTO `hackathon003`.`objetssurvie` (`id`, `nom`, `description`, `material`, `durability`, `weight`, `imgUrl`) VALUES ('80', 'Chapeau solaire', 'Protection contre le soleil', 'Tissu', 'Faible', '0.30', `backend/public/assets/images/itemPictures/chapeauSolaire.png`);

INSERT INTO `hackathon003`.`planet_has_objetssurvie` (`planet_id`, `objetssurvie_id`) VALUES ('1', '41');
INSERT INTO `hackathon003`.`planet_has_objetssurvie` (`planet_id`, `objetssurvie_id`) VALUES ('1', '42');
INSERT INTO `hackathon003`.`planet_has_objetssurvie` (`planet_id`, `objetssurvie_id`) VALUES ('1', '43');
INSERT INTO `hackathon003`.`planet_has_objetssurvie` (`planet_id`, `objetssurvie_id`) VALUES ('1', '44');
INSERT INTO `hackathon003`.`planet_has_objetssurvie` (`planet_id`, `objetssurvie_id`) VALUES ('1', '45');
INSERT INTO `hackathon003`.`planet_has_objetssurvie` (`planet_id`, `objetssurvie_id`) VALUES ('1', '46');
INSERT INTO `hackathon003`.`planet_has_objetssurvie` (`planet_id`, `objetssurvie_id`) VALUES ('1', '47');
INSERT INTO `hackathon003`.`planet_has_objetssurvie` (`planet_id`, `objetssurvie_id`) VALUES ('1', '48');
INSERT INTO `hackathon003`.`planet_has_objetssurvie` (`planet_id`, `objetssurvie_id`) VALUES ('1', '49');
INSERT INTO `hackathon003`.`planet_has_objetssurvie` (`planet_id`, `objetssurvie_id`) VALUES ('1', '50');
INSERT INTO `hackathon003`.`planet_has_objetssurvie` (`planet_id`, `objetssurvie_id`) VALUES ('2', '51');
INSERT INTO `hackathon003`.`planet_has_objetssurvie` (`planet_id`, `objetssurvie_id`) VALUES ('2', '52');
INSERT INTO `hackathon003`.`planet_has_objetssurvie` (`planet_id`, `objetssurvie_id`) VALUES ('2', '53');
INSERT INTO `hackathon003`.`planet_has_objetssurvie` (`planet_id`, `objetssurvie_id`) VALUES ('2', '54');
INSERT INTO `hackathon003`.`planet_has_objetssurvie` (`planet_id`, `objetssurvie_id`) VALUES ('2', '55');
INSERT INTO `hackathon003`.`planet_has_objetssurvie` (`planet_id`, `objetssurvie_id`) VALUES ('2', '56');
INSERT INTO `hackathon003`.`planet_has_objetssurvie` (`planet_id`, `objetssurvie_id`) VALUES ('2', '57');
INSERT INTO `hackathon003`.`planet_has_objetssurvie` (`planet_id`, `objetssurvie_id`) VALUES ('2', '58');
INSERT INTO `hackathon003`.`planet_has_objetssurvie` (`planet_id`, `objetssurvie_id`) VALUES ('2', '59');
INSERT INTO `hackathon003`.`planet_has_objetssurvie` (`planet_id`, `objetssurvie_id`) VALUES ('2', '60');
INSERT INTO `hackathon003`.`planet_has_objetssurvie` (`planet_id`, `objetssurvie_id`) VALUES ('3', '61');
INSERT INTO `hackathon003`.`planet_has_objetssurvie` (`planet_id`, `objetssurvie_id`) VALUES ('3', '62');
INSERT INTO `hackathon003`.`planet_has_objetssurvie` (`planet_id`, `objetssurvie_id`) VALUES ('3', '63');
INSERT INTO `hackathon003`.`planet_has_objetssurvie` (`planet_id`, `objetssurvie_id`) VALUES ('3', '64');
INSERT INTO `hackathon003`.`planet_has_objetssurvie` (`planet_id`, `objetssurvie_id`) VALUES ('3', '65');
INSERT INTO `hackathon003`.`planet_has_objetssurvie` (`planet_id`, `objetssurvie_id`) VALUES ('3', '66');
INSERT INTO `hackathon003`.`planet_has_objetssurvie` (`planet_id`, `objetssurvie_id`) VALUES ('3', '67');
INSERT INTO `hackathon003`.`planet_has_objetssurvie` (`planet_id`, `objetssurvie_id`) VALUES ('3', '68');
INSERT INTO `hackathon003`.`planet_has_objetssurvie` (`planet_id`, `objetssurvie_id`) VALUES ('3', '69');
INSERT INTO `hackathon003`.`planet_has_objetssurvie` (`planet_id`, `objetssurvie_id`) VALUES ('3', '70');
INSERT INTO `hackathon003`.`planet_has_objetssurvie` (`planet_id`, `objetssurvie_id`) VALUES ('4', '71');
INSERT INTO `hackathon003`.`planet_has_objetssurvie` (`planet_id`, `objetssurvie_id`) VALUES ('4', '72');
INSERT INTO `hackathon003`.`planet_has_objetssurvie` (`planet_id`, `objetssurvie_id`) VALUES ('4', '73');
INSERT INTO `hackathon003`.`planet_has_objetssurvie` (`planet_id`, `objetssurvie_id`) VALUES ('4', '74');
INSERT INTO `hackathon003`.`planet_has_objetssurvie` (`planet_id`, `objetssurvie_id`) VALUES ('4', '75');
INSERT INTO `hackathon003`.`planet_has_objetssurvie` (`planet_id`, `objetssurvie_id`) VALUES ('4', '76');
INSERT INTO `hackathon003`.`planet_has_objetssurvie` (`planet_id`, `objetssurvie_id`) VALUES ('4', '77');
INSERT INTO `hackathon003`.`planet_has_objetssurvie` (`planet_id`, `objetssurvie_id`) VALUES ('4', '78');
INSERT INTO `hackathon003`.`planet_has_objetssurvie` (`planet_id`, `objetssurvie_id`) VALUES ('4', '79');
INSERT INTO `hackathon003`.`planet_has_objetssurvie` (`planet_id`, `objetssurvie_id`) VALUES ('4', '80');





