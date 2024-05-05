<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Results</title>

    <style media="screen">
      @import url('https://fonts.googleapis.com/css2?family=Delicious+Handrawn&family=Oswald:wght@500&display=swap');
      @font-face {
        font-family: simpson;
        src: url(font.otf);
      }
      body{

      }
      h1{
        font-family: simpson;
        color:#f8db27;
        text-shadow: 3px 3px #9c5b01;
        margin-bottom: 100px;
        text-align: center;
      }
      h4{
        font-family: simpson;
        text-align: center;
        color:#2f64d6;
      }
      p{
        margin-left: 20px;
      }
      #chart{
        position: absolute;
        left:35%;
        width:100%;
      }
      #homer{
        display:flex;
        font-family: 'Delicious Handrawn', cursive;
        font-size: 150%;
        color:white;
        background-color: #9c5b01;
        height:80px;
      }
      #lisa{
        font-family: 'Delicious Handrawn', cursive;
        font-size: 150%;
        display:flex;
        color:white;
        background-color: #ff81c1;
        height:80px;
      }
      #marge{
        font-family: 'Delicious Handrawn', cursive;
        font-size: 150%;
        display:flex;
        color:white;
        background-color: #f8db27;
        height:80px;
      }
      #bart{
        font-family: 'Delicious Handrawn', cursive;
        font-size: 150%;
        display:flex;
        color:white;
        background-color: #2f64d6;
        height:80px;
      }
      #footer{
          font-family: simpson;
        text-align: center;
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
    </style>
  </head>
  <body>
    <h1>Simpson Quiz Results </h1>
    <?php
        //start by opening the text file
        $filename = getcwd() . "/results.txt";

        $data = file_get_contents($filename);
        $homer = substr_count($data, "Homer");
        $lisa = substr_count($data,"Lisa");
        $bart = substr_count($data,"Bart");
        $marge = substr_count($data, "Marge");

        $total = $homer+$lisa+$bart+$marge;
        $color = "#9c5b01";
        $homerPercent = number_format($homer/$total*100, 2);
        $lisaPercent = number_format($lisa/$total*100, 2);
        $bartPercent = number_format($bart/$total*100, 2);
        $margePercent = number_format($marge/$total*100, 2);
        print "<h4> In total there have been <span style = 'color:#ff81c1;'>" . $total ."</span> quiz submissions.</h4>";
     ?>

     <div id="chart">

    <?php
      print "
      <div id='homer' style = 'width:" . $homerPercent ."%'>
      <img src='assignment07_images/Homer.png'>
      <p>Homer: " . $homerPercent . "%</p>
      </div>";
     ?>
     <?php
       print "

       <div id='marge' style = 'width:" . $margePercent ."%'>
        <img src='assignment07_images/Marge.png'>
       <p>Marge: " . $margePercent . "%</p>
       </div>";
      ?>
    <?php
      print "
      <div id='lisa' style = 'width:" . $lisaPercent ."%'>
      <img src='assignment07_images/Lisa.png'>
      <p>Lisa: " . $lisaPercent . "%</p>
      </div>";
     ?>
      <?php
        print "
        <div id='bart' style = 'width:" . $bartPercent ."%'>
        <img src='assignment07_images/Bart.png'>
        <p>Bart: " . $bartPercent . "%</p>
        </div>";
       ?>
      </div>
      <div id="footer">
        <hr class="hr-dashed">
        <a href = "index.php">Back to Quiz</a>
      </div>
  </body>
</html>
