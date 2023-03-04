-- phpMyAdmin SQL Dump
-- version 4.3.3
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 21, 2015 at 03:05 PM
-- Server version: 5.5.41-0ubuntu0.12.04.1
-- PHP Version: 5.4.36-1~dotdeb.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `video-stats`
--

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE IF NOT EXISTS `events` (
  `id` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `event` int(11) NOT NULL,
  `date` varchar(40) NOT NULL,
  `clock` text NOT NULL,
  `videoPosition` varchar(40) NOT NULL,
  `state` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `uid`, `event`, `date`, `clock`, `videoPosition`, `state`) VALUES
(1, 1, 1, '21.05.2015', '14:43:25', '0', 0),
(2, 1, 1, '21.05.2015', '14:43:25', '0', 0),
(3, 1, 2, '21.05.2015', '14:43:28', '2.1', 0),
(4, 1, 1, '21.05.2015', '14:44:02', '0', 0),
(5, 1, 1, '21.05.2015', '14:44:02', '0', 0),
(6, 1, 2, '21.05.2015', '14:44:07', '5.1', 0),
(7, 1, 1, '21.05.2015', '14:45:30', '0', 0),
(8, 1, 1, '21.05.2015', '14:45:30', '0', 0),
(9, 1, 2, '21.05.2015', '14:45:31', '0.9', 0),
(10, 1, 1, '21.05.2015', '14:45:32', '0.9', 0),
(11, 1, 3, '21.05.2015', '14:45:32', '0.9', 0),
(12, 1, 1, '21.05.2015', '14:45:33', '0.9', 0),
(13, 1, 2, '21.05.2015', '14:45:33', '15.4', 0),
(14, 1, 5, '21.05.2015', '14:45:42', '15.4', 0),
(15, 1, 6, '21.05.2015', '14:45:44', '15.4', 0),
(16, 1, 4, '21.05.2015', '14:45:46', '15.4', 1),
(17, 1, 4, '21.05.2015', '14:45:48', '15.4', 0),
(18, 1, 3, '21.05.2015', '14:47:13', '15.4', 0),
(19, 1, 1, '21.05.2015', '14:47:13', '15.4', 0),
(20, 1, 1, '21.05.2015', '14:47:14', '15.4', 0),
(21, 1, 2, '21.05.2015', '14:47:16', '31.9', 0),
(22, 1, 3, '21.05.2015', '14:47:33', '31.9', 0),
(23, 1, 1, '21.05.2015', '14:47:33', '31.9', 0),
(24, 1, 1, '21.05.2015', '14:47:34', '31.9', 0),
(25, 1, 2, '21.05.2015', '14:47:36', '48.7', 0),
(26, 1, 1, '21.05.2015', '14:47:45', '48.7', 0),
(27, 1, 3, '21.05.2015', '14:47:45', '48.7', 0),
(28, 1, 1, '21.05.2015', '14:47:45', '48.7', 0),
(29, 1, 2, '21.05.2015', '14:47:55', '73.1', 0),
(30, 1, 3, '21.05.2015', '14:53:00', '73.1', 0),
(31, 1, 1, '21.05.2015', '14:53:00', '73.1', 0),
(32, 1, 1, '21.05.2015', '14:53:00', '73.1', 0),
(33, 1, 2, '21.05.2015', '14:53:02', '86.9', 0),
(34, 1, 1, '21.05.2015', '14:56:37', '0', 0),
(35, 1, 1, '21.05.2015', '14:56:37', '0', 0),
(36, 1, 1, '21.05.2015', '14:57:16', '3.4', 0),
(37, 1, 1, '21.05.2015', '14:57:16', '3.4', 0),
(38, 1, 3, '21.05.2015', '14:57:18', '1.6', 0),
(39, 1, 1, '21.05.2015', '14:57:18', '1.6', 0),
(40, 1, 2, '21.05.2015', '14:57:19', '11.3', 0),
(41, 1, 1, '21.05.2015', '14:59:50', '0', 0),
(42, 1, 1, '21.05.2015', '14:59:50', '0', 0),
(43, 1, 2, '21.05.2015', '14:59:53', '2.4', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `surname` varchar(20) NOT NULL,
  `pw` varchar(32) NOT NULL,
  `email` varchar(32) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `surname`, `pw`, `email`) VALUES
(1, 'Mehmet', 'Seven', 'fcf63b9e0a69435c8449838ee93b829c', 'mehmetseven0@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `videos`
--

CREATE TABLE IF NOT EXISTS `videos` (
  `id` int(32) NOT NULL,
  `name` varchar(60) NOT NULL,
  `image` varchar(32) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `videos`
--

INSERT INTO `videos` (`id`, `name`, `image`) VALUES
(1, 'Trigonometri', 'math.png'),
(2, 'Yer çekimi', 'physics.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=44;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `videos`
--
ALTER TABLE `videos`
  MODIFY `id` int(32) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
