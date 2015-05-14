<?php 
$db_host = "localhost";
$db_username = "837823";
$db_pass = "xuehai5177";
$db_name = "837823";

//run the actual connection
mysql_connect("$db_host", "$db_username", "$db_pass") or die("could not connect to mysql");
mysql_select_db("$db_name") or die("no database");
?>