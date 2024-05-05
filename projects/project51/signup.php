<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Sign Up Page</title>
    <script src = "helpers.js">

    </script>
    <style media="screen">
      @font-face {
        font-family: black;
        src: url(black.ttf);
      }
      @font-face {
        font-family: bold;
        src: url(bold.ttf);
      }
      @font-face {
        font-family: thin;
        src: url(thin.ttf);
      }
      h1{
        font-family: black;
        text-align: center;
      }
      h4{
        font-family: black;
        text-align: center;
      }
      form{
        position:absolute;
        left:50%;
        transform: translate(-50%);
        font-family: bold;
        font-size: 12px;
      }
      #nickname{
        margin:10px;
        font-family: thin;
      }
      #pw{
        margin:10px;
        font-family: thin;
      }

      #button_signup{
        position:absolute;
        left:50%;
        transform: translate(-50%);
        font-family: bold;
        margin-bottom:10px;
      }
      #login{
        text-align:  center;
      }
      #alert{
        color:white;
        text-align: center;
        font-family: bold;
        background-color: red;
        width:50%;
        margin-left: auto;
        margin-right: auto;
      }

    </style>
  </head>
  <body>
    <h1>Let's Chat</h1>
    <h4>Sign Up</h4>

    <?php

      if($_GET['error'] == 'missing'){
    ?>

      <div id="alert">
        <p>Missing Username or Password!!</p>
      </div>

    <?php
      }else if($_GET['error'] == 'taken'){
    ?>

      <div id="alert">
        <p>Your username has been taken</p>
      </div>

    <?php

      }
      if($_GET['add'] == 'success'){
    ?>

      <div id="alert">
        <p>Successfully Signed Up! <a href = "index.html"> Log In Here!</a></p>
      </div>

    <?php
      
      }

     ?>

    <form action="signup_process.php" method="post">
      Username<br>
      <input type="text" name="name" id='nickname'><br>
      Password<br>
      <input type="text" name="password" id = "pw"><br>
      <input type="submit" id="button_signup" value = "Sign Up"><br>
      <p id ='login'>Already A User? <a href = "index.html">Log In</a></p>
    </form>


  </body>
</html>
