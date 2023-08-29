-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`syndic`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`syndic` (
  `idsyndic` INT NOT NULL AUTO_INCREMENT,
  `syndicName` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` LONGTEXT NOT NULL,
  PRIMARY KEY (`idsyndic`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tenants`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tenants` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` LONGTEXT NOT NULL,
  `syndic_idsyndic` INT NOT NULL,
  PRIMARY KEY (`id`, `syndic_idsyndic`),
  INDEX `fk_tenants_syndic_idx` (`syndic_idsyndic` ASC) VISIBLE,
  CONSTRAINT `fk_tenants_syndic`
    FOREIGN KEY (`syndic_idsyndic`)
    REFERENCES `mydb`.`syndic` (`idsyndic`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


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
  `image` LONGTEXT NOT NULL,
  PRIMARY KEY (`idpersonnel`, `syndic_idsyndic`),
  INDEX `fk_personnels_syndic1_idx` (`syndic_idsyndic` ASC) VISIBLE,
  CONSTRAINT `fk_personnels_syndic1`
    FOREIGN KEY (`syndic_idsyndic`)
    REFERENCES `mydb`.`syndic` (`idsyndic`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`factures`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`factures` (
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
    REFERENCES `mydb`.`syndic` (`idsyndic`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_factures_tenants1`
    FOREIGN KEY (`tenants_id` , `tenants_syndic_idsyndic`)
    REFERENCES `mydb`.`tenants` (`id` , `syndic_idsyndic`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
