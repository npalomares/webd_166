-- phpMyAdmin SQL Dump
-- version 4.1.6
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 28, 2016 at 01:56 AM
-- Server version: 5.6.16
-- PHP Version: 5.5.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `webd166db`
--

-- --------------------------------------------------------

--
-- Table structure for table `quotes`
--

DROP TABLE IF EXISTS `quotes`;
CREATE TABLE IF NOT EXISTS `quotes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `quote` text NOT NULL,
  `source` varchar(100) NOT NULL,
  `favorite` tinyint(1) unsigned NOT NULL,
  `date_entered` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `quotes`
--

INSERT INTO `quotes` (`id`, `quote`, `source`, `favorite`, `date_entered`) VALUES
(1, 'To Be OR Not To Be', 'William Shakespeare', 0, '2016-11-24 00:39:45'),
(2, 'It ain''t over, till it''s over', 'Yogi Berra', 1, '2016-11-24 00:40:25'),
(3, 'I''m gonna make him an offer he can''t refuse.', 'The Godfather', 1, '2016-11-27 01:32:08'),
(4, 'Toto, I''ve a feeling we''re not in Kansas anymore.', 'The Wizard of Oz', 0, '2016-11-27 01:32:37'),
(5, 'I''ll have what she''s having.', 'When Harry Met Sally', 1, '2016-11-27 01:33:43'),
(6, 'If you build it, he will come.', 'Field of Dreams', 0, '2016-11-27 01:34:25');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
