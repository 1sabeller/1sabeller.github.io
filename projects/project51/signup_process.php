<?php
  include('config.php');

  $username = $_POST['name'];
  $password = $_POST['password'];

  if(!$username ||!$password){
    header("Location: signup.php?error=missing");
  }else{

    $db = new SQLite3(  $path . '/users.db'  );
    $sql = "SELECT username FROM users WHERE username = :username";
    $statement = $db->prepare($sql);
    $statement->bindValue(':username',$username);
    $result = $statement->execute();
    if($result->fetchArray()){
      header("Location: signup.php?error=taken");
      $db->close();
      unset($db);
    }else{
      $sql = "INSERT INTO users (username, password) VALUES (:username, :password)";
      $statement = $db->prepare($sql);
      $statement->bindValue(':username',$username);
      $statement->bindValue(':password',$password);
      $statement->execute();
      $rows_affected = $db->changes();

      $db->close();
      unset($db);

      header("Location: signup.php?add=success");

    }

  }

  exit();



 ?>
