<?php

    function base_url(){
        return BASE_URL;
    }

    function media(){
        return BASE_URL . "/Assets";
    }

    function headerAdmin($data = ""){
        $view_header = "Views/Template/header.php";
        require_once ($view_header);
    }

    function headAdmin($data = ""){
        $view_head = "Views/Template/inc/head.php";
        require_once ($view_head);
    }

    function navAdmin(){
        $view_nav = "Views/Template/nav.php";
        require_once ($view_nav);
    }

    function footerAdmin($data = ""){
        $view_footer = "Views/Template/footer.php";
        require_once ($view_footer);
    }

    function footeAdmin($data = ""){
        $view_foote = "Views/Template/inc/foote_admin.php";
        require_once ($view_foote);
    }

    function footerLogin($data = ""){
        $view_foote = "Views/Template/inc/footer_login.php";
        require_once ($view_foote);
    }

    function debug($data){
        $format = print_r('<pre>');
        $format .= print_r($data);
        $format .= print_r('</pre>');
        return $format;
    }
