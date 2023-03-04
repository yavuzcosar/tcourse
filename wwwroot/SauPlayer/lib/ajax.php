<?php

if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
	
	include("setting.php");

	$event = $_POST['event'];

	$pos  = $_POST['position'];
	$uid  = (int)$_POST['uid'];
	$date = date("d.m.Y");
	$clock= date("H:i:s"); 

	if ($event == 1 || $event == 2 || $event == 5) { // 1: play ,  2: pause ,   5: on volume

		$qry = mysql_query("insert into events (uid,event,date,clock,videoPosition) VALUES ('{$uid}','{$event}','{$date}','{$clock}','{$pos}') ");

	}else if($event == 3){

		$qry = mysql_query("insert into events (uid,event,date,clock,videoPosition) VALUES ('{$uid}','{$event}','{$date}','{$clock}','{$pos}') ");

	}else if($event == 4 || $event==6){
		$state = $_POST["state"];

		$qry = mysql_query("insert into events (uid,event,date,clock,videoPosition,state) VALUES ('{$uid}','{$event}','{$date}','{$clock}','{$pos}','{$state}') ");


	}
	
}