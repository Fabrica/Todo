<?php

namespace Todo;

Template::temp('index');

Template::v()->tasks = \Todo\Task::all();

Template::render();

exit;
/*

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Todo list</title>
        <link type="text/css" href="media/css/ui-lightness/jquery-ui-1.8.23.custom.css" rel="stylesheet" />
        <link type="text/css" href="media/css/bootstrap-responsive.min.css" rel="stylesheet" />
        <link type="text/css" href="media/css/bootstrap.min.css" rel="stylesheet" />
        <link type="text/css" href="media/css/style.css" rel="stylesheet" />
        <script type="text/javascript" src="media/js/jquery-1.8.2.min.js"></script>
        <script type="text/javascript" src="media/js/jquery-ui-1.8.23.custom.min.js"></script>
        <script type="text/javascript" src="media/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="media/js/body.js"></script>
    </head>
    <body>

        <div class="container">

            <input id="username" name="username" <?php if ( isset($_COOKIE['username']) ) echo 'value="'.$_COOKIE['username'].'" '; ?>placeholder="Имя пользователя" />
            <h1>ToDo Lists!</h1>

            <form class="makeNew">
                <p>Добавить: <input id="makeNewInput" style="width:500px;"></p>
            </form>

            <hr id="afterThis" />

<?php

require_once 'inc.php';
$list = Tasks::find('all', array('order' => 'datetime desc'));
foreach ( $list as $k => $v ) {
    echo htmlOneTask($v);
}

?>

        </div>

    </body>
</html>


*/