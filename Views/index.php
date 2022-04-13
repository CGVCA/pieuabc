<!doctype html>
<html lang="en" data-layout="vertical" data-sidebar-size="lg">

<?php headAdmin($data); ?>

<body>

    <div class="auth-page-wrapper pt-5">
        <!-- auth page bg -->
        <div class="auth-one-bg-position auth-one-bg" id="auth-particles">
            <div class="bg-overlay"></div>

            <div class="shape">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1440 120">
                        <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z "></path>
                    </svg>
            </div>
        </div>

        <!-- auth page content -->
        <div class="auth-page-content ">
            <div class="container ">
                <div class="row ">
                    <div class="col-lg-12 ">
                        <div class="text-center mt-sm-5 mb-4 text-white">
                            <div>
                                <h1 class="d-inline-block auth-logo text-sombra">
                                    C G V C A
                                </h1>
                            </div>
                            <p class="mt-3 fs-15 fw-medium text-sombra">Coordinación General de Vinculación y Cooperación Académica</p>
                        </div>
                    </div>
                </div>
                <!-- end row -->

                <div class="row justify-content-center ">
                    <div class="col-md-8 col-lg-6 col-xl-5 ">
                        <div class="card mt-4 sombra">

                            <div class="card-body p-4 ">
                                <div class="text-center mt-2">
                                    <h5 class="text-verde">Bienvenido de nuevo !</h5>
                                    <lord-icon src="https://cdn.lordicon.com/rqqkvjqf.json" trigger="loop" colors="primary:#dd971a,secondary:#007846" style="width:90px;height:90px"></lord-icon>
                                    <p class="mt-1">Inicia sesi&oacute;n para continuar</p>
                                </div>
                                <div class="p-2 mt-4 ">
                                    <form action="#">

                                        <div class="mb-3 ">
                                            <label for="usuario" class="form-label ">Usuario <span class="text-danger">*</span></label>
                                            <input type="text " class="form-control " id="usuario" placeholder="Introduzca su usuario ">
                                        </div>

                                        <div class="mb-3 ">
                                            <div class="float-end ">
                                                <a href="auth-pass-reset-basic.html " class="text-muted ">¿Se te olvidó tu contraseña?</a>
                                            </div>
                                            <label class="form-label " for="password-input ">Contraseña <span class="text-danger">*</span></label>
                                            <div class="position-relative auth-pass-inputgroup mb-3">
                                                <input type="password" class="form-control pe-5" placeholder="Introduzca su contraseña" id="password-input">
                                                <button class="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted" type="button" id="password-addon"><i class="ri-eye-fill align-middle"></i></button>
                                            </div>
                                        </div>

                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="auth-remember-check">
                                            <label class="form-check-label " for="auth-remember-check ">Recuérdame</label>
                                        </div>

                                        <div class="mt-4 ">
                                            <button class="btn btn-success btn-round-1-5 w-100 " type="submit ">Iniciar sesión</button>
                                        </div>

                                        <div class="mt-4 text-center ">
                                            <div class="signin-other-title ">
                                                <h5 class="fs-13 mb-4 title ">Inicia sesión con</h5>
                                            </div>
                                            <div>
                                                <button type="button " class="btn btn-primary btn-icon waves-effect waves-light "><i class="ri-facebook-fill fs-16 "></i></button>
                                                <button type="button " class="btn btn-danger btn-icon waves-effect waves-light "><i class="ri-google-fill fs-16 "></i></button>
                                                <button type="button " class="btn btn-info btn-icon waves-effect waves-light "><i class="ri-twitter-fill fs-16 "></i></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <!-- end card body -->
                        </div>
                        <!-- end card -->

                        <div class="mt-4 text-center ">
                            <p class="mb-0 ">
                                ¿No tienes una cuenta?
                                <a href="auth-signup-basic.html " class="fw-semibold text-decoration-underline "> Inscribirse </a>
                            </p>
                        </div>

                    </div>
                </div>
                <!-- end row -->
            </div>
            <!-- end container -->
        </div>
        <!-- end auth page content -->

        <?php footerLogin($data); ?>
    </div>
    <!-- end auth-page-wrapper -->

    <!-- JAVASCRIPT -->
    <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js "></script>
    <script src="assets/libs/simplebar/simplebar.min.js "></script>
    <script src="assets/libs/node-waves/waves.min.js "></script>
    <script src="assets/libs/feather-icons/feather.min.js "></script>
    <script src="assets/js/pages/plugins/lord-icon-2.1.0.js "></script>
    <script src="assets/js/plugins.js "></script>


    <script src="assets/libs/particles.js/particles.js "></script>
    <script src="assets/js/pages/particles.app.js "></script>

    <!-- password-addon init -->
    <script src="assets/js/pages/password-addon.init.js "></script>
</body>


</html>