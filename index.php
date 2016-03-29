<?php
date_default_timezone_set('America/Sao_Paulo');

require __DIR__ . '/vendor/autoload.php';

// Montando a Pagina Principal
$objSmarty = new Smarty;
$objSmarty->template_dir = 'templates/';
$objSmarty->compile_dir  = 'templates_c/';

//$objSmarty->assign('APP', $_APP);
$objSmarty->display('index.tpl');


