<div class="pt-5"></div>
<?php footeAdmin($data); ?>
</div>
<!-- end main content-->

</div>
<!-- END layout-wrapper -->


    <script src="<?= media(); ?>/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="<?= media(); ?>/libs/simplebar/simplebar.min.js"></script>
    <script src="<?= media(); ?>/libs/node-waves/waves.min.js"></script>
    <script src="<?= media(); ?>/libs/feather-icons/feather.min.js"></script>
    <script src="<?= media(); ?>/js/pages/plugins/lord-icon-2.1.0.js"></script>
    <script src="<?= media(); ?>/js/plugins.js"></script>

    <?php if($data['page_name']== "Dashboard"){ ?>
    <script src="<?= media(); ?>/libs/apexcharts/apexcharts.min.js"></script>
    <script src="<?= media(); ?>/libs/jsvectormap/js/jsvectormap.min.js"></script>
    <script src="<?= media(); ?>/libs/jsvectormap/maps/world-merc.js"></script>
    <script src="<?= media(); ?>/js/pages/dashboard-analytics.init.js"></script>
    
    <?php } ?>

    <script src="<?= media(); ?>/js/app.js"></script>
    <script src="<?= media(); ?>/libs/particles.js/particles.js"></script>
    <script src="<?= media(); ?>/js/pages/particles.app.js"></script>

    <script>const base_url = "<?php echo BASE_URL; ?>";</script>
    <script src="<?php echo media(); ?>/app/js/<?= $data['function_js']; ?>"></script>
    
  </body>
</body>

</html>