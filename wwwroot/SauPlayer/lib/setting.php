<?php
ob_start();
session_start();
//error_reporting(0);

	$host = "localhost";
	$user = "root";
	$pw   = "root";
	
	$connect = mysql_connect($host,$user,$pw);
		if(!$connect) die("Mysql Fail.");
	
	mysql_select_db("video-stats",$connect) or die("DB Fail.");
	
	mysql_query("SET NAMES utf8");
	mysql_query("SET CHARACTER SET utf8");
	mysql_query("SET COLLATION_CONNECTION='utf8_turkish_ci'");
	
	
	