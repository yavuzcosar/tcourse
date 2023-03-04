<?php
    require_once '../lib/setting.php';
    require_once 'lib/func.php';
?>

<!doctype html>
<html>
<head>
    <title>ADMIN</title>
    <meta charset="UTF8" />

  <style>
      body { padding: 50px 100px; font: 13px/20px Arial; background: #FFF; }
      a, h1, h2 { color: #369; }
      h2 { margin-top: 50px; }
      .aciklama{
        padding:16px;
        display: none
      }
      .admin_cont{
        margin:50px 150px
      }

      .admin_cont > div{
        cursor:pointer;
      }
  </style>


  <script src="../assets/js/jquery-1.11.2.js"></script>
  <script src="assets/js/main.js"></script>
  <link rel="stylesheet" href="../assets/js/semantic-ui/semantic.min.css" />
  <script src="../assets/js/semantic-ui/semantic.min.js"></script>
  <link rel="stylesheet" href="../assets/js/semantic-ui/form.min.css" />
  <script src="../assets/js/semantic-ui/form.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.12.0/components/icon.min.css">

</head>
<body>

<div class="admin_cont">

  <?php
      router();
  ?>

</div>


</body>
</html>
