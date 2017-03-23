CREATE DATABASE  IF NOT EXISTS `ssdb` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `ssdb`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: ssdb
-- ------------------------------------------------------
-- Server version	5.7.17-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `attachments`
--

DROP TABLE IF EXISTS `attachments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `attachments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `location` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `summary_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_attachments_summaries_idx` (`summary_id`),
  CONSTRAINT `fk_attachments_summaries` FOREIGN KEY (`summary_id`) REFERENCES `summaries` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `documents`
--

DROP TABLE IF EXISTS `documents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `documents` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `closed_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `title` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `status` varchar(45) NOT NULL,
  `document_number` varchar(45) NOT NULL,
  `problem_description` varchar(45) NOT NULL,
  `problem_status` varchar(45) NOT NULL,
  `attributes` varchar(45) NOT NULL,
  `brand` varchar(45) NOT NULL,
  `field_impact` tinyint(4) DEFAULT '0',
  `field_actions` varchar(255) DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `archived_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `owners`
--

DROP TABLE IF EXISTS `owners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `owners` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `supplier` varchar(255) DEFAULT NULL,
  `location` varchar(45) DEFAULT NULL,
  `subtier` tinyint(1) DEFAULT NULL,
  `representative` varchar(255) DEFAULT NULL,
  `design_origin` varchar(255) DEFAULT NULL,
  `ss_document_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_owners_documents_idx` (`ss_document_id`),
  CONSTRAINT `fk_owners_documents` FOREIGN KEY (`ss_document_id`) REFERENCES `documents` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `products_affected`
--

DROP TABLE IF EXISTS `products_affected`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products_affected` (
  `id` int(11) NOT NULL,
  `part_number` varchar(45) NOT NULL,
  `part_number_code` varchar(45) DEFAULT NULL,
  `model_type_number` varchar(45) NOT NULL,
  `machine_code_name` varchar(45) DEFAULT NULL,
  `fru_part_number` varchar(45) DEFAULT NULL,
  `asm` varchar(45) DEFAULT NULL,
  `ffbm_part_number` varchar(45) DEFAULT NULL,
  `feature_code` varchar(45) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `ss_document_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_products_affected_documents_idx` (`ss_document_id`),
  CONSTRAINT `fk_products_affected_documents` FOREIGN KEY (`ss_document_id`) REFERENCES `documents` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `summaries`
--

DROP TABLE IF EXISTS `summaries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `summaries` (
  `id` int(11) NOT NULL,
  `create_at` datetime NOT NULL,
  `update_at` varchar(45) DEFAULT NULL,
  `summary` longblob NOT NULL,
  `ss_document_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_summaries_document_idx` (`ss_document_id`),
  CONSTRAINT `fk_summaries_document` FOREIGN KEY (`ss_document_id`) REFERENCES `documents` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `transactions`
--

DROP TABLE IF EXISTS `transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `transactions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `transaction_type` varchar(45) NOT NULL,
  `ss_document_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fd_transaction_type_documents_idx` (`ss_document_id`),
  CONSTRAINT `fd_transaction_type_documents` FOREIGN KEY (`ss_document_id`) REFERENCES `documents` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-03-17  9:24:45
