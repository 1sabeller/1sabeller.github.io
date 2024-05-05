<?php

  $job = $_POST['job'];
  $food = $_POST['food'];
  $hobby = $_POST['hobby'];
  $fear = $_POST['fear'];

  $homer = 0;
  $lisa = 0;
  $marge = 0;
  $bart = 0;

  //  If the user misses a question the quiz should not be scored and some kind of error message should appear to the user.
  if($job == "select" || $fear=="select" ||$food == "select" ||$hobby=="select"){
    header('Location: index.php?error=missing');
    exit();
  }else{
    //add points
    if($job == "bakery"){
      $marge++;
    }else if ($job="tutor"){
      $bart++;
    }else if($job == "phone"){
      $homer++;
    }else if ($job == "professor"){
      $lisa++;
    }

    if($food == "donut"){
      $homer++;
    }else if($food == "applePie"){
      $marge++;
    }else if ($food == "flakes"){
      $bart++;
    }else if ($food == "anything"){
      $lisa++;
    }

    if($hobby == "tv"){
      $homer++;
    }else if($hobby == "knitting"){
      $marge++;
    }else if($hobby =="skateboarding"){
      $bart++;
    }else if ($hobby == "reading"){
      $lisa++;
    }

    if($fear == "sock"){
      $homer++;
    }else if($fear == "flying"){
      $marge++;
    }else if($fear == "fearless"){
      $bart++;
    }else if($fear == "grade"){
      $lisa++;
    }

    $scores = array($lisa,$marge,$bart,$homer);
    $highest_score = max($scores);
    $character = array_search($highest_score, $scores);
    if($character == 0){
      $char  = 'Lisa';
    }else if ($character == 1){
      $char  = 'Marge';
    }else if($character == 2){
      $char  = 'Bart';
    }else if($character == 3){
      $char  = 'Homer';
    }
    //save data to a file on the server
    $filename = getcwd(). '/results.txt';
    file_put_contents($filename,$char . "\n", FILE_APPEND);
    //set cookie
    setcookie('winner',$char);
    header('Location: index.php');
    exit();
  }


 ?>
