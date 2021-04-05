<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>PHP ICE 2</title>
</head>
<body>
    <ol>
        <?
            $colors = ["red","green","blue"];
            foreach ($colors as $value){
                echo ("<li>$value</li>");
            }
        ?>
    </ol>
    
    <ul>
    <?PHP
        $links = ["RIT"=>"http://www.rit.edu",
   	    "RPI"=>"http://www.rpi.edu",
   	    "MCC"=>"http://www.monroecc.edu"];

        foreach($links as $key=>$value){
   	        echo ("<li><a href='$value'>$key</li>");
        }
    ?>
    </ul>

</body>
</html>