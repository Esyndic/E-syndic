-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema e-syndic
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema e-syndic
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `e-syndic` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8mb3 ;
USE `e-syndic` ;

-- -----------------------------------------------------
-- Table `e-syndic`.`syndic`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `e-syndic`.`syndic` (
  `idsyndic` INT NOT NULL AUTO_INCREMENT,
  `syndicName` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` LONGTEXT NOT NULL,
  PRIMARY KEY (`idsyndic`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `e-syndic`.`tenants`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `e-syndic`.`tenants` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` LONGTEXT NOT NULL,
  `syndic_idsyndic` INT NOT NULL,
  `image` LONGTEXT NOT NULL,
  PRIMARY KEY (`id`, `syndic_idsyndic`),
  INDEX `fk_tenants_syndic_idx` (`syndic_idsyndic` ASC) VISIBLE,
  CONSTRAINT `fk_tenants_syndic`
    FOREIGN KEY (`syndic_idsyndic`)
    REFERENCES `e-syndic`.`syndic` (`idsyndic`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `e-syndic`.`personnels`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `e-syndic`.`personnels` (
  `idpersonnel` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `num` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `role` VARCHAR(45) NOT NULL,
  `syndic_idsyndic` INT NOT NULL,
  `image` LONGTEXT NOT NULL,
  PRIMARY KEY (`idpersonnel`, `syndic_idsyndic`),
  INDEX `fk_personnels_syndic1_idx` (`syndic_idsyndic` ASC) VISIBLE,
  CONSTRAINT `fk_personnels_syndic1`
    FOREIGN KEY (`syndic_idsyndic`)
    REFERENCES `e-syndic`.`syndic` (`idsyndic`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `e-syndic`.`factures`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `e-syndic`.`factures` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `rent` DECIMAL(3) NOT NULL,
  `STEG` DECIMAL(3) NOT NULL,
  `SONEDE` DECIMAL(3) NOT NULL,
  `Topnet` DECIMAL(3) NOT NULL,
  `decription` LONGTEXT NULL,
  `syndic_idsyndic` INT NOT NULL,
  `tenants_id` INT NOT NULL,
  `tenants_syndic_idsyndic` INT NOT NULL,
  PRIMARY KEY (`id`, `syndic_idsyndic`, `tenants_id`, `tenants_syndic_idsyndic`),
  INDEX `fk_factures_syndic1_idx` (`syndic_idsyndic` ASC) VISIBLE,
  INDEX `fk_factures_tenants1_idx` (`tenants_id` ASC, `tenants_syndic_idsyndic` ASC) VISIBLE,
  CONSTRAINT `fk_factures_syndic1`
    FOREIGN KEY (`syndic_idsyndic`)
    REFERENCES `e-syndic`.`syndic` (`idsyndic`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_factures_tenants1`
    FOREIGN KEY (`tenants_id` , `tenants_syndic_idsyndic`)
    REFERENCES `e-syndic`.`tenants` (`id` , `syndic_idsyndic`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `e-syndic`.`claims`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `e-syndic`.`claims` (
  `idclaims` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `message` VARCHAR(45) NOT NULL,
  `num` VARCHAR(45) NOT NULL,
  `tenants_id` INT NOT NULL,
  `tenants_syndic_idsyndic` INT NOT NULL,
  `syndic_idsyndic` INT NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idclaims`, `tenants_id`, `tenants_syndic_idsyndic`, `syndic_idsyndic`),
  INDEX `fk_claims_tenants1_idx` (`tenants_id` ASC, `tenants_syndic_idsyndic` ASC) VISIBLE,
  INDEX `fk_claims_syndic1_idx` (`syndic_idsyndic` ASC) VISIBLE,
  CONSTRAINT `fk_claims_tenants1`
    FOREIGN KEY (`tenants_id` , `tenants_syndic_idsyndic`)
    REFERENCES `e-syndic`.`tenants` (`id` , `syndic_idsyndic`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_claims_syndic1`
    FOREIGN KEY (`syndic_idsyndic`)
    REFERENCES `e-syndic`.`syndic` (`idsyndic`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`users` (
  `idusers` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(45) NOT NULL,
  `user_password` VARCHAR(45) NOT NULL,
  `user_mail` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idusers`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`comment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`comment` (
  `idcomment` INT NOT NULL AUTO_INCREMENT,
  `comment_text` VARCHAR(45) NOT NULL,
  `users_idusers` INT NOT NULL,
  PRIMARY KEY (`idcomment`, `users_idusers`),
  INDEX `fk_comment_users1_idx` (`users_idusers` ASC) VISIBLE,
  CONSTRAINT `fk_comment_users1`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `mydb`.`users` (`idusers`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`syndic`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`syndic` (
  `idsyndic` INT NOT NULL AUTO_INCREMENT,
  `syndicName` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idsyndic`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`factures`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`factures` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `location` DECIMAL(3,0) NOT NULL,
  `STEG` DECIMAL(3,0) NOT NULL,
  `SONEDE` DECIMAL(3,0) NOT NULL,
  `Topnet` DECIMAL(3,0) NOT NULL,
  `decription` LONGTEXT NULL DEFAULT NULL,
  `syndic_idsyndic` INT NOT NULL,
  PRIMARY KEY (`id`, `syndic_idsyndic`),
  INDEX `fk_factures_syndic1_idx` (`syndic_idsyndic` ASC) VISIBLE,
  CONSTRAINT `fk_factures_syndic1`
    FOREIGN KEY (`syndic_idsyndic`)
    REFERENCES `mydb`.`syndic` (`idsyndic`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`personnels`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`personnels` (
  `idpersonnel` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `num` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `role` VARCHAR(45) NOT NULL,
  `syndic_idsyndic` INT NOT NULL,
  `image` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idpersonnel`, `syndic_idsyndic`),
  INDEX `fk_personnels_syndic1_idx` (`syndic_idsyndic` ASC) VISIBLE,
  CONSTRAINT `fk_personnels_syndic1`
    FOREIGN KEY (`syndic_idsyndic`)
    REFERENCES `mydb`.`syndic` (`idsyndic`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`post`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`post` (
  `idpost` INT NOT NULL AUTO_INCREMENT,
  `post_photo` LONGTEXT NOT NULL,
  `post_text` VARCHAR(45) NOT NULL,
  `comment_idcomment` INT NOT NULL,
  `users_idusers` INT NOT NULL,
  PRIMARY KEY (`idpost`, `comment_idcomment`, `users_idusers`),
  INDEX `fk_post_comment1_idx` (`comment_idcomment` ASC) VISIBLE,
  INDEX `fk_post_users1_idx` (`users_idusers` ASC) VISIBLE,
  CONSTRAINT `fk_post_comment1`
    FOREIGN KEY (`comment_idcomment`)
    REFERENCES `mydb`.`comment` (`idcomment`),
  CONSTRAINT `fk_post_users1`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `mydb`.`users` (`idusers`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`tenants`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tenants` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` LONGTEXT NOT NULL,
  `syndic_idsyndic` INT NOT NULL,
  `factures_id` INT NOT NULL,
  `factures_syndic_idsyndic` INT NOT NULL,
  PRIMARY KEY (`id`, `syndic_idsyndic`, `factures_id`, `factures_syndic_idsyndic`),
  INDEX `fk_tenants_syndic_idx` (`syndic_idsyndic` ASC) VISIBLE,
  INDEX `fk_tenants_factures1_idx` (`factures_id` ASC, `factures_syndic_idsyndic` ASC) VISIBLE,
  CONSTRAINT `fk_tenants_factures1`
    FOREIGN KEY (`factures_id` , `factures_syndic_idsyndic`)
    REFERENCES `mydb`.`factures` (`id` , `syndic_idsyndic`),
  CONSTRAINT `fk_tenants_syndic`
    FOREIGN KEY (`syndic_idsyndic`)
    REFERENCES `mydb`.`syndic` (`idsyndic`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
