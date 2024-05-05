<?php

  include('config.php');

  $username = $_POST['username'];

  $db = new SQLite3(  $path . '/users.db'  );
  $sql = "SELECT username,password FROM users WHERE username = :username";
  $statement = $db->prepare($sql);
  $statement->bindValue(':username',$username);
  $result = $statement->execute();

  if($array = $result->fetchArray()){
    print "Your Password is: " . $array['password'];
  }else{
    print 'error';
  }
  $db->close();
  unset($db);



 ?>
