var tableRoles;

document.addEventListener("DOMContentLoaded", function() {
    tableRoles = $("#tableRoles").dataTable({
        aProcessing: true,
        aServerSide: true,
        language: {
            url: " " + base_url + "/Assets/libs/dataTable/Spanish.json",
        },
        ajax: {
            url: " " + base_url + "/Roles/getRoles",
            dataSrc: "",
        },
        columns: [
            { data: "idrol" },
            { data: "nombrerol" },
            { data: "descripcion" },
            { data: "nombrestatus" },
            { data: "options" },
        ],
        resonsieve: "true",
        bDestroy: true,
        iDisplayLength: 10,
        order: [
            [0, "desc"]
        ],
    });

    //NUEVO ROL
    var formRol = document.querySelector("#formRol");
    formRol.onsubmit = function(e) {
        e.preventDefault();

        var intIdRol = document.querySelector('#idRol').value;
        var strNombre = document.querySelector("#txtNombre").value;
        var strDescripcion = document.querySelector("#txtDescripcion").value;
        var intStatus = document.querySelector("#listStatus").value;
        if (strNombre == "" || strDescripcion == "" || intStatus == "") {
            swal({
                type: "error",
                title: "Atención",
                text: "Todos los campos son obligatorios.<br><br>",
                /*animation: false,
                        customClass: "animated flipInY",*/
                timer: 4000,
                showConfirmButton: false,
            });
            return false;
        }
        var request = window.XMLHttpRequest ?
            new XMLHttpRequest() :
            new ActiveXObject("Microsoft.XMLHTTP");
        var ajaxUrl = base_url + "/Roles/setRol";
        var formData = new FormData(formRol);
        request.open("POST", ajaxUrl, true);
        request.send(formData);
        request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status == 200) {
                var objData = JSON.parse(request.responseText);
                if (objData.status) {
                    $("#modalFormRol").modal("hide");
                    formRol.reset();
                    swal({
                        type: objData.type,
                        title: "Roles de usuario",
                        text: " " + objData.msg + "<br><br>",
                        /*animation: false,
                                    customClass: "animated fadeInLeft",*/
                        timer: 4000,
                        showConfirmButton: false,
                    });
                    tableRoles.api().ajax.reload(function() {
                        fntRolesStatus();
                        fntEditRol();
                        fntDelRol();
                        fntPermisos();
                    });
                } else {
                    swal({
                        type: objData.type,
                        title: "Error",
                        text: " " + objData.msg + "<br><br>",
                        /*animation: false,
                                    customClass: "animated fadeInLeft",*/
                        timer: 4000,
                        showConfirmButton: false,
                    });
                }
            }
        };
    };
});

$("#tableRoles").DataTable();

function openModal() {
    document.querySelector("#idRol").value = "";
    document.querySelector(".modal-header").classList.replace("bg-soft-success", "bg-soft-primary");
    document.querySelector("#btnActionForm").classList.replace("btn-success", "btn-primary");
    document.querySelector("#btnIcon").classList.replace("ri-restart-line", "ri-save-line");
    document.querySelector("#btnText").innerHTML = "Guardar";
    document.querySelector("#titleModal").innerHTML = "Nuevo Rol";
    document.querySelector("#formRol").reset();
    $("#modalFormRol").modal("show");
}

window.addEventListener(
    "load",
    function() {
        fntRolesStatus();
        fntEditRol();
        fntDelRol();
        fntPermisos();
    },
    false
);

function fntRolesStatus(){
    var ajaxUrl = base_url+'/Roles/getSelectStatus';
    var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    request.open("GET",ajaxUrl,true);
    request.send();

    request.onreadystatechange = function(){
        if(request.readyState == 4 && request.status == 200){
            document.querySelector('#listStatus').innerHTML = request.responseText;
            document.querySelector('#listStatus').value = 1; // seleccionar el primer valor (value = 1)
            $('#listStatus').selectpicker('render'); // Refrescar select
        }
    }

}

function fntEditRol() {
    var btnEditRol = document.querySelectorAll(".btnEditRol");
    btnEditRol.forEach(function(btnEditRol) {
        btnEditRol.addEventListener("click", function() {
            document.querySelector("#titleModal").innerHTML = "Actualizar Rol";
            document.querySelector(".modal-header").classList.replace("bg-soft-primary", "bg-soft-success");
            document.querySelector("#btnActionForm").classList.replace("btn-primary", "btn-success");
            document.querySelector("#btnIcon").classList.replace("ri-save-line", "ri-restart-line");
            document.querySelector("#btnText").innerHTML = "Actualizar";

            var idrol = this.getAttribute("rl");
            var request = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
            var ajaxUrl = base_url + "/Roles/getRol/" + idrol;
            request.open("GET", ajaxUrl, true);
            request.send();

            request.onreadystatechange = function() {
                if (request.readyState == 4 && request.status == 200) {
                    var objData = JSON.parse(request.responseText);
                    if (objData.status) {
                        document.querySelector("#idRol").value = objData.data.idrol;
                        document.querySelector("#txtNombre").value = objData.data.nombrerol;
                        document.querySelector("#txtDescripcion").value = objData.data.descripcion;

                        if (objData.data.statusid == 1) {
                            var optionSelect =
                                '<option value="1" selected class="notBlock">Activo</option>';
                        } else {
                            var optionSelect =
                                '<option value="2" selected class="notBlock">Inactivo</option>';
                        }
                        var htmlSelect = `${optionSelect}
                                          <option value="1">Activo</option>
                                          <option value="2">Inactivo</option>
                                        `;

                        /*if (objData.data.idrol == 1) {
                            var optionSelect = '<option value="' + objData.data.idrol + '" selected class="notBlock">' + objData.data.nombrestatus + '</option>';
                        } else {
                            var optionSelect = '<option value="' + objData.data.idrol + '" selected class="notBlock">' + objData.data.nombrestatus + '</option>';
                        }
                        
                        var htmlSelect = `${optionSelect}
                            <option value="` + objData.data.idrol + `">` + objData.data.nombrestatus + `</option>
                            <option value="` + objData.data.idrol + `">` + objData.data.nombrestatus + `</option>
                        `;*/
                                    
                        document.querySelector("#listStatus").innerHTML = htmlSelect;
                        

                        //fntRolesStatus();
                        $("#modalFormRol").modal("show");
                    } else {
                        swal({
                            type: objData.type,
                            title: "Error",
                            text: " " + objData.msg + "<br><br>",
                            timer: 4000,
                            showConfirmButton: false,
                        });
                    }
                }
            };
        });
    });
}


function fntDelRol() {
    var btnDelRol = document.querySelectorAll(".btnDelRol");
    btnDelRol.forEach(function(btnDelRol) {
        btnDelRol.addEventListener('click', function() {
            var idrol = this.getAttribute("rl");
            swal({
                title: 'Eliminar Rol',
                text: '¿Realmente quiere eliminar el Rol?',
                type: '',
                imageUrl: base_url + '/Assets/images/iconos/delete-small.png',
                showCancelButton: true,
                confirmButtonColor: '#4caf50',
                confirmButtonText: 'Si',
                cancelButtonColor: '#f44336',
                cancelButtonText: 'No',
                closeOnConfirm: false,
                closeOnCancel: true
            }).then(function(isConfirm) {
                if (isConfirm) {
                    var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
                    var ajaxUrl = base_url + '/Roles/delRol/';
                    var strData = "idrol=" + idrol;
                    request.open("POST", ajaxUrl, true);
                    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    request.send(strData);
                    request.onreadystatechange = function() {
                        if (request.readyState == 4 && request.status == 200) {
                            var objData = JSON.parse(request.responseText);
                            if (objData.status) {
                                swal({
                                    type: objData.type,
                                    title: "Eliminar!",
                                    text: " " + objData.msg + "<br><br>",
                                    timer: 4000,
                                    showConfirmButton: false,
                                });
                                tableRoles.api().ajax.reload(function() {
                                    fntRolesStatus();
                                    fntEditRol();
                                    fntDelRol();
                                    fntPermisos();
                                });
                            } else {
                                swal({
                                    type: objData.type,
                                    title: "Error",
                                    text: " " + objData.msg + "<br><br>",
                                    timer: 4000,
                                    showConfirmButton: false,
                                });
                            }
                        }
                    }
                }
            });

        });
    });
}

function fntPermisos() {
    var btnPermisosRol = document.querySelectorAll(".btnPermisosRol");
    btnPermisosRol.forEach(function(btnPermisosRol) {
        btnPermisosRol.addEventListener('click', function() {

            var idrol = this.getAttribute("rl");
            var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
            var ajaxUrl = base_url + '/Permisos/getPermisosRol/' + idrol;
            request.open("GET", ajaxUrl, true);
            request.send();

            request.onreadystatechange = function() {
                if (request.readyState == 4 && request.status == 200) {
                    //console.log(request.responseText);
                    document.querySelector('#contentAjax').innerHTML = request.responseText;
                    $('.modalPermisos').modal('show');
                    document.querySelector('#formPermisos').addEventListener('submit', fntSavePermisos, false);
                }
            }

        });
    });
}

function fntSavePermisos(evnet) {
    evnet.preventDefault();
    var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    var ajaxUrl = base_url + '/Permisos/setPermisos';
    var formElement = document.querySelector("#formPermisos");
    var formData = new FormData(formElement);
    request.open("POST", ajaxUrl, true);
    request.send(formData);

    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            var objData = JSON.parse(request.responseText);
            if (objData.status) {
                swal({
                    type: objData.type,
                    title: "Permisos de usuario",
                    text: " " + objData.msg + "<br><br>",
                    timer: 4000,
                    showConfirmButton: false,
                });
            } else {
                swal({
                    type: objData.type,
                    title: "Error",
                    text: " " + objData.msg + "<br><br>",
                    timer: 4000,
                    showConfirmButton: false,
                });
            }
        }
    }

}