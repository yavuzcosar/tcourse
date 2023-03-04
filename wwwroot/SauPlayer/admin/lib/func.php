<?php


function main(){
	$q = mysql_query("select * from users");
	$num = mysql_num_rows($q);


	if ($num > 0) {
		echo '<h2 class="ui header">
				  <i class="user icon"></i>
				  <div class="content">
				    Kullanıcılar
				  </div>
				</h2>';

		echo '<div class="ui animated divided list" style="margin:30px">';

		while ($k = mysql_fetch_array($q)) {

			echo '<div class="item">
					    <div class="right floated compact ui button"><a href="?page=review&user='.$k['id'].'">incele</a></div>
					    <div class="content">
					      <div class="header">
					      	<a  href="?page=review&user='.$k['id'].'">'.$k['name'].'</a>
					      </div>
					    </div>
					</div>';
		}

		echo '</div>';

	}
}


function review(){	

	$id= (int)$_GET['user'];

	$q = mysql_query("select * from users where id='{$id}' ");
	$w = mysql_fetch_array($q);

	echo '<h2 class="ui header">
			<i class="user icon"></i>
			<div class="content">';
			echo $w['name'] ." ". $w['surname'];

	echo'</div></h2>';

	echo '<h5 class="ui top attached header">
			  Etkinlikler
			</h5>';


	$eventQuery = mysql_query("select * from events where uid='{$id}'");
	while ($w = mysql_fetch_array($eventQuery)) {

		
		if($w['event'] == 4 || $w['event']==6){

			$icon = events($w['event'])[$w['state']]['icon'];
			$desc = events($w['event'])[$w['state']]['desc'];

		}else{
			$icon = events($w['event'])['icon'];
			$desc = events($w['event'])['desc'];
		}

		
		$pos  = $w['videoPosition'];



		echo"<div class='ui attached segment'>
			<i class=' {$icon} icon'></i>
			{$desc}   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>[ {$pos} ]</b>
			<span style='float:right'>".$w['clock']."</span>
		</div>";

		echo "<div class='aciklama'>
			
			<table class='ui definition table'>
			    <tbody>
			      <tr>
			        <td class='two wide column'>Size</td>
			        <td>1 x 2</td>
			      </tr>
			      <tr>
			        <td>Weight</td>
			        <td>6 ounces</td>
			      </tr>
			      <tr>
			        <td>Color</td>
			        <td>Yellowish</td>
			      </tr>
			      <tr>
			        <td>Odor</td>
			        <td>Not Much Usually</td>
			      </tr>
			    </tbody>
			  </table>

		</div>";

	}


	echo'<div class="ui bottom attached warning message">
		<i class="warning icon"></i>
		Başka bir işlem görünmüyor..
	</div>';


}


function events($e){

	$events = array(

		1 => array(
				'name' => 'play',
				'icon' => 'play',
				'desc' => 'Oynattı'
			 ),

		2 => array(
				'name' => 'pause',
				'icon' => 'pause',
				'desc' => 'Durdurdu'
			 ),

		3 => array(
				'name' => 'forward',
				'icon' => 'forward',
				'desc' => 'İlerletti'
			),

		4 => array(
				array(
						'name' => 'mini screen',
						'icon' => 'compress',
						'desc' => 'Mini ekran yaptı'
					),
				array(
						'name' => 'full',
						'icon' => 'maximize',
						'desc' => 'Tam ekran yaptı'
					)
			),

		5 => array(
				'name' => 'on volume',
				'icon' => 'volume down',
				'desc' => 'Ses seviyesini değiştirdi'
			),

		6 => array(
				array(
						'name' => 'mute',
						'icon' => 'mute',
						'desc' => 'Ses kapatıldı'
					),
				array(
						'name' => 'full',
						'icon' => 'unmute',
						'desc' => 'Ses açıldı'
					)
			),
	);

	return $events[$e];

}



function router(){

	$page = isset($_GET['page']) ? $_GET['page'] : "";

	switch ($page) {
		case 'review':
			review();
			break;
		
		default:
			main();
			break;
	}
}