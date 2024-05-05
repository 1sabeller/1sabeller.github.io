<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Find Password</title>
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
    input{
      font-family: bold;
    }
    #login{
      margin-top: 80px;
      font-family: bold;
      text-align: center;
      font-size: 12px;
    }
    #results{
      color:red;
      margin-top: 100px;
      font-family: bold;
      text-align: center;
    }
    </style>
  </head>
  <body>
    <h1>Let's Chat!</h1>

    <h4>Find Your Password</h4>


    <form action="find_process.php" method="post">
      Your Username<br>
      <input id = "username"type="text" name="username">
      <input type="submit" id = "findpw" value = 'Find'>
    </form>
    <div id = 'login'>
      <p>Go Back and <a href = 'index.html'> Log In </a> </p>
    </div>
    <div id='results'>

    </div>
    <script type="text/javascript">

      const results = document.querySelector("#results");

      document.querySelector("#findpw").onclick = function(e){
        e.preventDefault();
        let name = document.querySelector("#username").value;
        performFetch({
          url: 'find_process.php',
          method: 'post',
          data:{
            username:name
          },
          success: function(data){
            if(data == 'error'){
              results.innerHTML = "Cannot find your username";
            }else{
              results.innerHTML = data;
            }
            console.log(data);
          },
          error: function(error){
            console.log("error");
          }
        })
      }

    </script>

  </body>
</html>
