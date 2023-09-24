<pre> <?php

    $title = $_POST['lessonTitle'];
    $lessonPlan = $_POST['lessonPlan'];
    if (!isset($_POST['submit'])) {
        echo 'Thanks for your submission!';
        die();
    }

    $bridge = mysqli_connect(?string $hostname = 'mysql.2223.lakeside-cs.org',
    ?string $username = 'student2223',
    ?string $password = 'm545CS42223',
    ?string $database = '2223playground');


    $query = 'INSERT INTO bentontameling_lessonplans (name, lesson_plans) VALUES ('$title','$lessonPlan')';


?> </pre>