<?php


function main(){

	
	if (isset($_SESSION['s_email'])) {
		echo "Welcome, ". $_SESSION['s_name'] ." ". $_SESSION['s_surname'];
		echo "<br><a href='?page=logout'>[Logout]</a><br><br>";
		
		video();

	}else{

		echo '<div class="ui">
		    <div class="one column row">
		        <div class="ui padded grid">
		            <div class="three column row">
		                <div class="column">
		                    <form class="ui form segment" method="POST" action="?page=login">
		                        <h4 class="ui dividing header">Account Info</h4>
		                        <div class="ui form">
		                            <div class="field">
		                                <label for="email">Username: </label>
		                                <div class="ui icon input">
		                                    <input type="text" placeholder="E-mail" name="email" id="email">
		                                    <i class="user icon"></i>
		                                </div>
		                            </div>
		                            <div class="field">
		                                <label for="password">Password: </label>
		                                <div class="ui icon input">
		                                    <input type="password" placeholder="Password" name="password" id="password">
		                                    <i class="lock icon"></i>
		                                </div>
		                            </div>
		                            <input type="submit" name="submit" class="ui inverted green button">
		                        </div>
		                    </form>

		                </div>
		            </div>
		        </div>
		    </div>';
		}
}




function video(){
	$q = mysql_query("select * from videos");
	$num = mysql_num_rows($q);

	

	if ($num > 0) {

		echo '<h2 class="ui header">
				  <i class="play icon"></i>
				  <div class="content">
				    Videolar
				  </div>
				</h2>';

		echo '<div class="ui animated divided list" style="margin:30px">';

		while ($k = mysql_fetch_array($q)) {
			

			echo '<div class="item">
					    <div class="right floated compact ui button"><a href="?page=watch&videoid='.$k['id'].'">izle</a></div>
					    <img class="ui avatar image" src="assets/img/'.$k['image'].'">
					    <div class="content">
					      <div class="header">
					      	<a  href="?page=watch&videoid='.$k['id'].'">'.$k['name'].'</a>
					      </div>
					    </div>
					</div>';
		}

		echo '</div>';

	}

}


function watch(){

	$q = mysql_query("select * from users where email='".$_SESSION['s_email']."'  ");
	$w = mysql_fetch_array($q);

	echo '<div class="video" id="'.$w['id'].'">
			<div id="video"></div>
		 </div>';
}


function login(){
	$email = htmlentities(strip_tags(trim($_POST['email'])));
	$pw    = md5(htmlentities(strip_tags($_POST['password'])));

	$q = mysql_query("select * from users where email='".$email."' and pw='".$pw."' ");
	$num = mysql_num_rows($q);

	if ($num == 1) {
		$fetch = mysql_fetch_array($q);
		
		$_SESSION['s_id']	   = $fetch['id']; 
		$_SESSION['s_email']   = $fetch['email'];
		$_SESSION['s_name']    = $fetch['name'];
		$_SESSION['s_surname'] = $fetch['surname'];
		
		header('location:index.php');
	}else{
		header('location:index.php');
	}
	
}


function logout(){

	if (isset($_SESSION['s_email'])) {
		session_unset(); 
		session_destroy();
	}

	header('location:index.php');
	

}



function router(){

	$page = isset($_GET['page']) ? $_GET['page'] : "";

	switch ($page) {
		case 'login':
			login();
			break;

		case 'logout':
			logout();
			break;

		case 'watch':
			watch();
			break;
		
		default:
			main();
			break;
	}
}