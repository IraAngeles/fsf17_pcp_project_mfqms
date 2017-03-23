-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema ssdb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ssdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ssdb` DEFAULT CHARACTER SET utf8 ;
USE `ssdb` ;

-- -----------------------------------------------------
-- Table `ssdb`.`documents`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ssdb`.`documents` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `closed_at` DATETIME NOT NULL,
  `updated_at` DATETIME NULL DEFAULT NULL,
  `created_at` DATETIME NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `owner` VARCHAR(255) NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  `document_number` VARCHAR(45) NOT NULL,
  `problem_description` VARCHAR(45) NULL DEFAULT NULL,
  `problem_status` VARCHAR(45) NULL DEFAULT NULL,
  `attributes` VARCHAR(45) NULL DEFAULT NULL,
  `brand` VARCHAR(45) NULL DEFAULT NULL,
  `field_impact` TINYINT(4) NULL DEFAULT '0',
  `field_actions` VARCHAR(255) NULL DEFAULT NULL,
  `deleted_at` DATETIME NULL DEFAULT NULL,
  `archived_at` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `ssdb`.`summaries`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ssdb`.`summaries` (
  `id` INT(11) NOT NULL,
  `create_at` DATETIME NOT NULL,
  `update_at` VARCHAR(45) NULL DEFAULT NULL,
  `summary` LONGBLOB NOT NULL,
  `ss_document_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_summaries_document_idx` (`ss_document_id` ASC),
  CONSTRAINT `fk_summaries_document`
    FOREIGN KEY (`ss_document_id`)
    REFERENCES `ssdb`.`documents` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `ssdb`.`attachments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ssdb`.`attachments` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `location` VARCHAR(255) NOT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NULL DEFAULT NULL,
  `summary_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_attachments_summaries_idx` (`summary_id` ASC),
  CONSTRAINT `fk_attachments_summaries`
    FOREIGN KEY (`summary_id`)
    REFERENCES `ssdb`.`summaries` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `ssdb`.`owners`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ssdb`.`owners` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NULL DEFAULT NULL,
  `supplier` VARCHAR(255) NULL DEFAULT NULL,
  `location` VARCHAR(45) NULL DEFAULT NULL,
  `subtier` TINYINT(1) NULL DEFAULT NULL,
  `representative` VARCHAR(255) NULL DEFAULT NULL,
  `design_origin` VARCHAR(255) NULL DEFAULT NULL,
  `ss_document_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_owners_documents_idx` (`ss_document_id` ASC),
  CONSTRAINT `fk_owners_documents`
    FOREIGN KEY (`ss_document_id`)
    REFERENCES `ssdb`.`documents` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `ssdb`.`products_affected`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ssdb`.`products_affected` (
  `id` INT(11) NOT NULL,
  `part_number` VARCHAR(45) NOT NULL,
  `part_number_code` VARCHAR(45) NULL DEFAULT NULL,
  `model_type_number` VARCHAR(45) NOT NULL,
  `machine_code_name` VARCHAR(45) NULL DEFAULT NULL,
  `fru_part_number` VARCHAR(45) NULL DEFAULT NULL,
  `asm` VARCHAR(45) NULL DEFAULT NULL,
  `ffbm_part_number` VARCHAR(45) NULL DEFAULT NULL,
  `feature_code` VARCHAR(45) NULL DEFAULT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NULL DEFAULT NULL,
  `ss_document_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_products_affected_documents_idx` (`ss_document_id` ASC),
  CONSTRAINT `fk_products_affected_documents`
    FOREIGN KEY (`ss_document_id`)
    REFERENCES `ssdb`.`documents` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `ssdb`.`users_profiles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ssdb`.`users_profiles` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `brand` VARCHAR(45) NOT NULL,
  `role` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `ssdb`.`transactions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ssdb`.`transactions` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NOT NULL,
  `transaction_type` VARCHAR(45) NOT NULL,
  `ss_document_id` INT(11) NOT NULL,
  `ss_users_profiles_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fd_transaction_type_documents_idx` (`ss_document_id` ASC),
  INDEX `fk_transactions_users_profiles_idx` (`ss_users_profiles_id` ASC),
  CONSTRAINT `fk_transactions_documents`
    FOREIGN KEY (`ss_document_id`)
    REFERENCES `ssdb`.`documents` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_transactions_users_profiles`
    FOREIGN KEY (`ss_users_profiles_id`)
    REFERENCES `ssdb`.`users_profiles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
