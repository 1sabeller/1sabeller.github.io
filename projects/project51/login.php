<?php
  include('config.php');
  $username = $_POST['username'];
  $password = $_POST['password'];

  $db = new SQLite3( $path . '/users.db'   );
  $sql = 'SELECT username,password FROM users WHERE username = :username AND password = :password';
  $statement = $db->prepare($sql);
  $statement->bindValue(':username', $username);
  $statement->bindValue(':password', $password);
  $result = $statement->execute();
  if($result->fetchArray()){
      print "success";
  }else{
      print "error";
  }


  $db->close();
  unset($db);

 ?>
