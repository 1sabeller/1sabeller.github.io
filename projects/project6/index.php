<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Macro07 Assignment </title>
    <style media="screen">
      @font-face {
        font-family: simpson;
        src: url(font.otf);
      }
      select{
        margin-bottom:20px;
        font-family: simpson;
        font-size: 8px;
      }
      body{
        text-align: center;
        font-family: simpson;
      }
      label{
        font-size: 120%;
        color:#2f64d6;
      }
      h1{
        color:#f8db27;
        text-shadow: 3px 3px #9c5b01;
        margin-bottom: 100px;
      }
      .error{
        color:red;
        padding:10px;
        font-size: 150%;
      }
      #results{
        color:#ff81c1;
      }
      #results p{
        font-size: 20px;
        text-shadow: 2.5px 2.5px #9c3368;
      }
      .hr-dashed{
        border: 0;
        border-top: 2px dashed #2f64d6;
      }
      #footer{
        width:100%;
        position:absolute;
        bottom:10px;

      }
      #footer a:link{
          color:#f8db27;
      }
      #footer a:hover{
        color:#f8db27;
        text-shadow: 2px 2px #9c5b01;
      }
      #submit{
        background-color:#f8db27;
        border-color: #9c5b01;
        border-radius: 5px;
        font-family: simpson;
        font-size:5px;
      }
      #submit:hover{
        background-color:#9c5b01;
      }
    </style>
  </head>
  <body>
    <h1>Which Simpson Character Am I?</h1>
    <?php

        if ($_COOKIE['winner']) {
            print "<div id = 'results'>
            <p>You are " . $_COOKIE['winner'] . " !!</p>
            <img src = 'assignment07_images/" . $_COOKIE['winner'] .".png'></img><br>"
    ?>
        <form action="clear_cookie.php" method='POST'>
            <input type="submit" value = "Try Again?" id="submit">
        </form>
        </div>
    <?php

        }

        else {

    ?>
    <form action="processresults.php" method="post">
        <!-- Q1: Ideal job -->
        <label for="job">What is your ideal job?</label><br>
        <select name="job" id = "job">
          <option value="select">Select A Job</option>
          <option value="bakery">Working at a bakery</option>
          <option value="tutor">French Tutor</option>
          <option value="phone">Prank phone call specialist</option>
          <option value="professor">College Professor</option>
        </select><br>

        <!-- Q2: favorite food -->
        <label for="food">What is your favorite food</label><br>
        <select id = "food" name="food">
          <option value="select">Select a Food</option>
          <option value="donut">Donut</option>
          <option value="applePie">Apple Pie</option>
          <option value="flakes">Krusty Flakes</option>
          <option value="anything">Anything Ogranic and locally sourced</option>
        </select><br>

        <!-- Q3: favorite hobby -->
        <label for="hobby">What is your fvorite hobby</label><br>
        <select id="hobby" name="hobby">
          <option value="select">Select a hobby</option>
          <option value="tv">Watching TV</option>
          <option value="knitting">Knitting</option>
          <option value="skateboarding">skateboarding</option>
          <option value="reading">Reading</option>
        </select><br>

        <!-- Q4: biggest fear -->
        <label for="fear">What is your bigeest fear?</label><br>
        <select id="fear" name="fear">
          <option value="select">Select a Fear</option>
          <option value="sock">Sock Puppets</option>
          <option value="flying">Flying</option>
          <option value="fearless">I'm fearless, man</option>
          <option value="grade">Getting anthing below an A in school</option>
        </select><br>

        <!-- submit -->
        <input type="submit" value = "What Simpson Character Am I?" id="submit">
      </form>
    <?php

      if($_GET['error'] == "missing"){

    ?>
      <div class="error">
        Missing Selection !!!
      </div>
    <?php
        }
    ?>

    <?php
        }
    ?>

    <div id="footer">
      <hr class="hr-dashed">
      <a href = "results.php">See Aggregate Results</a>
    </div>

  </body>
</html>
