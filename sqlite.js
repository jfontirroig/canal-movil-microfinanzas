
var db = openDatabase('movilDB001', '1.0', 'Mobile Database Microfinanzas', 2 * 1024 * 1024);

//
//------------------------------------------------------------------------------------------------------------------
//                                                  CREATE TABLE 
//------------------------------------------------------------------------------------------------------------------

function creaTablaEmpresaMatriz() {
    db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS Movil_EmpresaMatriz (idEmpresaMatriz TEXT, razonSocial TEXT)');
    });
}

function creaTablaEmpresaCliente() {
    db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS Movil_EmpresaCliente (idEmpresaMatriz TEXT, idEmpresaCliente TEXT, razonSocialNombre TEXT)');
     });
}

function creaTablaAsesorPromotor() {
    db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS Movil_AsesorPromotor (idEmpresaMatriz TEXT, idEmpresaCliente TEXT, idAsesorPromotor TEXT, nombreAsesorPromotor TEXT, cargoAsesorPromotor TEXT, passwordAsesorPromotor TEXT)');
        // Datos de ejemplo, deben comentarse para fase de producci�n-------------------------
        tx.executeSql('DELETE FROM Movil_AsesorPromotor');
        tx.executeSql('INSERT INTO Movil_AsesorPromotor (idEmpresaMatriz, idEmpresaCliente, idAsesorPromotor, nombreAsesorPromotor, cargoAsesorPromotor, passwordAsesorPromotor) VALUES ("Paradigma", "Impulsa", "jcallund", "Jonathan Callund", "Asesor Financiero", "12345")');
        //------------------------------------------------------------------------------------
    });
}

function creaTablaSupervisor() {
    db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS Movil_Supervisor (idEmpresaMatriz TEXT, idEmpresaCliente TEXT, idAsesorPromotor TEXT, idSupervisor TEXT, nombreSupervisor TEXT, eMailSupervisor TEXT, numeroTelefonoMovil TEXT, numeroTelefonoFijo TEXT)');
     });
}

function creaTablaAplicacionRecurso() {
    db.transaction(function (tx) {
         tx.executeSql('CREATE TABLE IF NOT EXISTS Movil_AplicacionRecurso (idAplicacionRecurso INTEGER, descripcionAplicacionRecurso TEXT, descripcionAplicacionIngles TEXT, descripcionAplicacionFrances TEXT, descripcionAplicacionPortugues TEXT)');
     });
}

function creaTablaChecklist() {
    db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS Movil_Checklist (idChecklist INTEGER, descripcionChecklist TEXT, descripcionChecklistIngles TEXT, descripcionChecklistFrances TEXT, descripcionChecklistPortugues TEXT)');
    });
}

function creaTablaDatoBasicoAcreditado() {
    db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS Movil_DatoBasicoAcreditado (idEmpresaMatriz TEXT, idEmpresaCliente TEXT, fechaTurno TEXT, idAsesorPromotor TEXT, idServicio INTEGER, idAcreditado TEXT, nombreAcreditado TEXT, paternoAcreditado TEXT, maternoAcreditado TEXT, sexoAcreditado TEXT, direccionAcreditado TEXT, poblacionAcreditado TEXT, ciudadAcreditado TEXT, regionAcreditado TEXT, paisAcreditado TEXT, telefonoFijoAcreditado TEXT, telefonoMovilAcreditado TEXT, eMailAcreditado TEXT, webAcreditado TEXT, idChecklist INTEGER, sincronizado INTEGER)');
    });
}

function creaTablaMoneda() {
    db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS Movil_Moneda (idMoneda TEXT, descripcionMoneda TEXT, defaultMoneda TEXT)');
    });
}

function creaTablaServicio() {
    db.transaction(function (tx) {
         tx.executeSql('CREATE TABLE IF NOT EXISTS Movil_Servicio (idEmpresaMatriz TEXT, idEmpresaCliente TEXT, fechaTurno TEXT, idAsesorPromotor TEXT, idServicio INTEGER, descripcionServicioCastellano TEXT, descripcionServicioIngles TEXT, descripcionServicioFrances TEXT, descripcionServicioPortugues TEXT)');
     });
}

function creaTablaTurno() {
    db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS Movil_Turno (idEmpresaMatriz TEXT, idEmpresaCliente TEXT, idAsesorPromotor TEXT, fechaTurno TEXT, horaInicioTurno TEXT, horaTerminoTurno TEXT, montoRecaudadoTurno NUMERIC, cantidadVerificacionAntecedenteTurno INTEGER, cantidadOperacionDesembolsoTurno INTEGER, montoTotalDesembolsoTurno NUMERIC, cantidadSupervisionesTurno NUMERIC, cantidadRecaudacionTurno NUMERIC, montoTotalProgramadoTurno NUMERIC, montoTotalSimpleTurno NUMERIC, montoTotalRecaudadoTurno NUMERIC)');
    });
}

function creaTablaServicioVerificacionAntecedente() {
    db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS Movil_ServicioVerificacionAntecedente (idEmpresaMatriz TEXT, idEmpresaCliente TEXT, fechaTurno TEXT, idServicio INTEGER, idAsesorPromotor TEXT, idAcreditado TEXT, idTipoSolicitud INTEGER, fechaVisita TEXT, planViabilidadNegocio TEXT, administracion TEXT, antecedentesNegocio TEXT, conclusiones TEXT, riesgos TEXT, numeroEmpleados INTEGER, numeroEmpleadosIMSS INTEGER, justificaCredito TEXT, localizacionLongitud TEXT, localizacionLatitud TEXT, auditoriaFecha TEXT, auditoriaHora TEXT, sincronizado INTEGER )');
    });
}

function creaTablaServicioOperacionCredito() {
    db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS Movil_ServicioOperacionCredito (idEmpresaMatriz TEXT, idEmpresaCliente TEXT, fechaTurno TEXT, idServicio INTEGER, idAsesorPromotor TEXT, idAcreditado TEXT, tipoCredito TEXT, numeroControl INTEGER, referencia TEXT, idTipoSolicitud INTEGER, inicioCredito TEXT, fechaMinistracion TEXT, montoMinistracion NUMERIC, idMoneda TEXT, localizacionLongitud TEXT, localizacionLatitud TEXT, auditoriaFecha TEXT, auditoriaHora TEXT, modificado INTEGER, sincronizado INTEGER)');
    });
}

function creaTablaServicioSupervisionCredito() {
    db.transaction(function (tx) {
         tx.executeSql('CREATE TABLE IF NOT EXISTS Movil_ServicioSupervisionCredito (idEmpresaMatriz TEXT, idEmpresaCliente TEXT, fechaTurno TEXT, idServicio INTEGER, idAsesorPromotor TEXT, idAcreditado TEXT, tipoCredito TEXT, numeroControl INTEGER, fechaObservacion TEXT, identifArtAdqObservacion TEXT, encontraronRecSegunPlanObservacion TEXT, idAplicacionRecursoObservacion INTEGER, cambiosObservacion TEXT, observacionesObservacion TEXT, montoPrestSolicPlanInv NUMERIC, plazoPrestSolicPlanInv TEXT, inversionClientePlanInv NUMERIC, totalPlanInv NUMERIC, idMoneda TEXT, localizacionLongitud TEXT, localizacionLatitud TEXT, auditoriaFecha TEXT, auditoriaHora TEXT, modificado INTEGER)');
    });
}

function creaTablaDetallePlanInversion() {
    db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS Movil_DetallePlanInversion (idEmpresaMatriz TEXT, idEmpresaCliente TEXT, fechaTurno TEXT, idServicio INTEGER, idAsesorPromotor TEXT, idAcreditado TEXT, itemPlanInv INTEGER, descripcionPlanInv TEXT, cantidadPlanInv NUMERIC, importePlanInv NUMERIC, idAplicacionRecurso INTEGER, idMoneda TEXT)');
    });
}

function creaTablaServicioRecuperacionCredito() {
    db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS Movil_ServicioRecuperacionCredito (idEmpresaMatriz TEXT, idEmpresaCliente TEXT, fechaTurno TEXT, idServicio INTEGER, idAsesorPromotor TEXT, idAcreditado TEXT, tipoCredito TEXT, numeroControl INTEGER, montoCredito NUMERIC, fechaAlta TEXT, saldoTotalFecha NUMERIC, saldoGlobal NUMERIC, saldoVencido NUMERIC, fechaVencimientoPago TEXT, montoCancelado NUMERIC, idMoneda TEXT, localizacionLongitud TEXT, localizacionLatitud TEXT, auditoriaFecha TEXT, auditoriaHora TEXT, numeroComprobanteDeposito TEXT, emitioComprobanteDeposito TEXT, modificado INTEGER)');
    });
}

function creaTablaTipoSolicitudCredito() {
    db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS Movil_TipoSolicitudCredito (idTipoSolicitud INTEGER, descripcionTipoSolicitud TEXT)');
    });
}


//------------------------------------------------------------------------------------------------------------------
//                                                     SELECT 
// -----------------------------------------------------------------------------------------------------------------
function leeTablaEmpresaMatriz() {
    db.transaction(function (tx) {
       tx.executeSql('SELECT * FROM Movil_EmpresaMatriz', [], function (tx, results) {
           document.querySelector('#nombreempresamatriz').innerHTML = results.rows.item(0).razonSocial;
        }, null);
    });
}

function leeTablaEmpresaCliente() {
    var id
    db.transaction(function (tx) {
       tx.executeSql('SELECT * FROM Movil_EmpresaMatriz', [], function (tx, results) {
            id = results.rows.item(0).idEmpresaMatriz;
       }, null);
    });
    db.transaction(function (tx) {
       tx.executeSql('SELECT * FROM Movil_EmpresaCliente WHERE idEmpresaMatriz = ?', [id], function (tx, results) {
            document.querySelector('#nombreempresacliente').innerHTML = results.rows.item(0).razonSocialNombre;
       }, null);
    });
}

function leeTablaAsesorPromotor() {
    var idM, idC
    db.transaction(function (tx) {
       tx.executeSql('SELECT * FROM Movil_EmpresaMatriz', [], function (tx, results) {
            idM = results.rows.item(0).idEmpresaMatriz;
       }, null);
    });
    db.transaction(function (tx) {
       tx.executeSql('SELECT * FROM Movil_EmpresaCliente WHERE idEmpresaMatriz = ?', [idM], function (tx, results) {
           idC = results.rows.item(0).idEmpresaCliente;
       }, null);
    }); 
    db.transaction(function (tx) {
       tx.executeSql('SELECT * FROM Movil_AsesorPromotor WHERE idEmpresaMatriz = ? and idEmpresaCliente = ?', [idM,idC], function (tx, results) {
       
             document.querySelector('#nombreasesor').innerHTML = results.rows.item(0).nombreAsesorPromotor;
             document.querySelector('#cargoasesor').innerHTML = results.rows.item(0).cargoAsesorPromotor;
      /*       document.querySelector('#passwordasesor').innerHTML = results.rows.item(0).passwordAsesorPromotor; */
        }, null);
    });
}

function leeTablaSupervisor() {
    var idM, idC, idA
    db.transaction(function (tx) {
       tx.executeSql('SELECT * FROM Movil_EmpresaMatriz', [], function (tx, results) {
            idM = results.rows.item(0).idEmpresaMatriz;
       }, null);
    });
    db.transaction(function (tx) {
       tx.executeSql('SELECT * FROM Movil_EmpresaCliente WHERE idEmpresaMatriz = ?', [idM], function (tx, results) {
           idC = results.rows.item(0).idEmpresaCliente;
       }, null);
    }); 
    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM Movil_AsesorPromotor WHERE idEmpresaMatriz = ? and idEmpresaCliente = ?', [idM,idC], function (tx, results) {
              idA = results.rows.item(0).idAsesorPromotor;
         }, null);
     });    
    db.transaction(function (tx) {
       tx.executeSql('SELECT * FROM Movil_Supervisor WHERE idEmpresaMatriz = ? and idEmpresaCliente = ? and idAsesorPromotor = ?', [idM,idC,idA], function (tx, results) {
           document.querySelector('#nombresupervisor').innerHTML = results.rows.item(0).nombreSupervisor;
           document.querySelector('#correoSupervisor').innerHTML = results.rows.item(0).eMailSupervisor;
           document.querySelector('#telefonoMovil').innerHTML = results.rows.item(0).numeroTelefonoMovil;
           document.querySelector('#telefonoFijo').innerHTML = results.rows.item(0).numeroTelefonoFijo;
       }, null);
    });
}

function leeTablaAplicacionRecurso() {
    db.transaction(function (tx) {
       tx.executeSql('SELECT * FROM Movil_AplicacionRecurso', [], function (tx, results) {
           var len = results.rows.length, i;
           for (i = 0; i < len; i++) {
               document.querySelector('#aplicacionrecurso').innerHTML += '<li>' + results.rows.item(i).idAplicacionRecurso + ' - ' + results.rows.item(i).descripcionAplicacionRecurso + '</li>';
           }
       }, null);
    });
}

function leeTablaChecklist() {
    db.transaction(function (tx) {
       tx.executeSql('SELECT * FROM Movil_Checklist', [], function (tx, results) {
           var len = results.rows.length, i;
           for (i = 0; i < len; i++) {
               document.querySelector('#checklist').innerHTML += '<li>' + results.rows.item(i).idChecklist + ' - ' + results.rows.item(i).descripcionChecklist + '</li>';
           }
       }, null);
    });
}


function leeTablaDatoBasicoAcreditado_VentanaDerecha_1() {
    var fechat = localStorage.getItem('fechaturno'); 
    var servSN =  localStorage.getItem('servicioSN1'); 
    if(servSN=="S") {
      db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM Movil_DatoBasicoAcreditado WHERE idServicio = 1 and fechaTurno=? ORDER BY nombreAcreditado, paternoAcreditado, maternoAcreditado', [fechat], function (tx, results) {
            if(results.rows.length) {
                var len = results.rows.length, i;
                for (i = 0; i < len; i++) {
                    document.querySelector('#clientes1').innerHTML += '<div class="row"><hr style="position:relative; padding:0; height:0; width: 100%; max-size: 1px; line-height:0; border:none; border-bottom: 1px solid #404040;"><img src="images/ic_user.png" style="vertical-align: middle;"> <a href="page2-1.html?id=' + results.rows.item(i).idAcreditado + '" rel="external" class="activadomenuDos">' + results.rows.item(i).nombreAcreditado + ' ' + results.rows.item(i).paternoAcreditado + ' ' + results.rows.item(i).maternoAcreditado + '</a></div>';
                }
            }
        }, null);
      });
    }
}

function leeTablaDatoBasicoAcreditado_VentanaDerecha_2() {
    var fechat = localStorage.getItem('fechaturno');   
    var servSN =  localStorage.getItem('servicioSN2'); 
    if(servSN=="S") {
      db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM Movil_DatoBasicoAcreditado WHERE idServicio = 2 and fechaTurno=? ORDER BY nombreAcreditado, paternoAcreditado, maternoAcreditado', [fechat], function (tx, results) {
            if(results.rows.length) {
                var len = results.rows.length, i;
                for (i = 0; i < len; i++) {
                   document.querySelector('#clientes2').innerHTML += '<div class="row"><hr style="position:relative; padding:0; height:0; width: 100%; max-size: 1px; line-height:0; border:none; border-bottom: 1px solid #404040;"><img src="images/ic_user.png" style="vertical-align: middle;"> <a href="page3-1.html?id=' + results.rows.item(i).idAcreditado + '" rel="external" class="activadomenuDos">' + results.rows.item(i).nombreAcreditado + ' ' + results.rows.item(i).paternoAcreditado + ' ' + results.rows.item(i).maternoAcreditado + '</a></div>';
                }
            }
        }, null);
      });
    }
}

function leeTablaDatoBasicoAcreditado_VentanaDerecha_3() {
    var fechat = localStorage.getItem('fechaturno');       
    var servSN =  localStorage.getItem('servicioSN3'); 
    if(servSN=="S") {
     db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM Movil_DatoBasicoAcreditado WHERE idServicio = 3 and fechaTurno=? ORDER BY nombreAcreditado, paternoAcreditado, maternoAcreditado', [fechat], function (tx, results) {
            if(results.rows.length) {
                var len = results.rows.length, i;
                for (i = 0; i < len; i++) {
                    document.querySelector('#clientes3').innerHTML += '<div class="row"><hr style="position:relative; padding:0; height:0; width: 100%; max-size: 1px; line-height:0; border:none; border-bottom: 1px solid #404040;"><img src="images/ic_user.png" style="vertical-align: middle;"> <a href="page4-1.html?id=' + results.rows.item(i).idAcreditado + '" rel="external" class="activadomenuDos">' + results.rows.item(i).nombreAcreditado + ' ' + results.rows.item(i).paternoAcreditado + ' ' + results.rows.item(i).maternoAcreditado + '</a></div>';
                }
            }
        }, null);
      });
    }
}

function leeTablaDatoBasicoAcreditado_VentanaDerecha_4() {
    var fechat = localStorage.getItem('fechaturno');         
    var servSN =  localStorage.getItem('servicioSN4'); 
    if(servSN=="S") {
     db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM Movil_DatoBasicoAcreditado WHERE idServicio = 4 and fechaTurno=? ORDER BY nombreAcreditado, paternoAcreditado, maternoAcreditado', [fechat], function (tx, results) {
            if(results.rows.length) {
              var len = results.rows.length, i;
                for (i = 0; i < len; i++) {
                    document.querySelector('#clientes4').innerHTML += '<div class="row"><hr style="position:relative; padding:0; height:0; width: 100%; max-size: 1px; line-height:0; border:none; border-bottom: 1px solid #404040;"><img src="images/ic_user.png" style="vertical-align: middle;"> <a href="page5-1.html?id=' + results.rows.item(i).idAcreditado + '" rel="external" class="activadomenuDos">' + results.rows.item(i).nombreAcreditado + ' ' + results.rows.item(i).paternoAcreditado + ' ' + results.rows.item(i).maternoAcreditado + '</a></div>';
                }
            }
        }, null);
      });
    }
}

function leeTablaDatoBasicoAcreditado_VentanaDerecha_7() {
    var fechat = localStorage.getItem('fechaturno');         
    var servSN =  localStorage.getItem('servicioSN6'); 
    if(servSN=="S") {
     db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM Movil_DatoBasicoAcreditado WHERE idServicio = 7 and fechaTurno=? ORDER BY nombreAcreditado, paternoAcreditado, maternoAcreditado', [fechat], function (tx, results) {
            if(results.rows.length) {
              var len = results.rows.length, i;
                for (i = 0; i < len; i++) {
                    document.querySelector('#clientes7').innerHTML += '<div class="row"><hr style="position:relative; padding:0; height:0; width: 100%; max-size: 1px; line-height:0; border:none; border-bottom: 1px solid #404040;"><img src="images/ic_user.png" style="vertical-align: middle;"> <a href="page7-1.html?id=' + results.rows.item(i).idAcreditado + '" rel="external" class="activadomenuDos">' + results.rows.item(i).nombreAcreditado + ' ' + results.rows.item(i).paternoAcreditado + ' ' + results.rows.item(i).maternoAcreditado + '</a></div>';
                }
            }
        }, null);
      });
    }
}

function leeTablaDatoBasicoAcreditado_VentanaDerecha_8() {
    var fechat = localStorage.getItem('fechaturno');         
    var servSN =  localStorage.getItem('servicioSN7'); 
    if(servSN=="S") {
     db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM Movil_DatoBasicoAcreditado WHERE idServicio = 8 and fechaTurno=? ORDER BY nombreAcreditado, paternoAcreditado, maternoAcreditado', [fechat], function (tx, results) {
            if(results.rows.length) {
              var len = results.rows.length, i;
                for (i = 0; i < len; i++) {
                    document.querySelector('#clientes8').innerHTML += '<div class="row"><hr style="position:relative; padding:0; height:0; width: 100%; max-size: 1px; line-height:0; border:none; border-bottom: 1px solid #404040;"><img src="images/ic_user.png" style="vertical-align: middle;"> <a href="page8-1.html?id=' + results.rows.item(i).idAcreditado + '" rel="external" class="activadomenuDos">' + results.rows.item(i).nombreAcreditado + ' ' + results.rows.item(i).paternoAcreditado + ' ' + results.rows.item(i).maternoAcreditado + '</a></div>';
                }
            }
        }, null);
      });
    }
}

function leeTablaMoneda() {
    db.transaction(function (tx) {
       tx.executeSql('SELECT * FROM Movil_Moneda', [], function (tx, results) {
           var len = results.rows.length, i;
           for (i = 0; i < len; i++) {
               document.querySelector('#moneda').innerHTML += '<li>' + results.rows.item(i).descripcionMoneda + '</li>';
           }
       }, null);
    });
}

function leeTablaMonedaDefault() {
    var mondef="S";
    db.transaction(function (tx) {
       tx.executeSql('SELECT * FROM Movil_Moneda WHERE defaultMoneda = ?', [mondef], function (tx, results) {
               //document.querySelector('#mon').innerHTML = results.rows.item(0).idMoneda';
       }, null);
    });
}

function leeTablaServicio() {
    db.transaction(function (tx) {
       tx.executeSql('SELECT * FROM Movil_Servicio', [], function (tx, results) {
           var len = results.rows.length, i;
           for (i = 0; i < len; i++) {
               document.querySelector('#servicio').innerHTML += '<li>' + results.rows.item(i).descripcionServicio + '</li>';
           }
       }, null);
    });
}


function loginUsuario() {
    var id = document.getElementById("usuario").value; 
    var passw = document.getElementById("clave").value; 
    if (id == ""){
        return false;
    }
    if (passw == ""){
        return false;
    }
    var id2 = document.getElementById("id2").value; 
    var passw2 = document.getElementById("passw2").value; 
    if (id != id2){
        localStorage.removeItem('fechaturno');
        var lengua = localStorage.getItem('idioma');         
        if (lengua==2) {
            alert("User nonexistent")
        }else if(lengua==3){ //frances
            alert("Utilisateur inexistant")
        }else if(lengua==4){ //portugues
            alert("Usuário inexistente")
        }else{               //espa�ol
            alert("Usuario inexistente")
        }
        return false;
    }
    if (passw != passw2){
        var lengua = localStorage.getItem('idioma');         
        if (lengua==2) {
            alert("Password erroneous")
        }else if(lengua==3){ //frances
            alert("Mot de passe erroné")
        }else if(lengua==4){ //portugues
            alert("Senha errada")
        }else{               //espa�ol
           alert("Contraseña errónea")
        }
         return false;
    }
    if (id == id2 && passw == passw2){
        window.open("log-on.html");
    }
	
}

function loginUsuarioXX() {

    db.transaction(function (tx) {
       tx.executeSql('SELECT * FROM Movil_AsesorPromotor', [], function (tx, results) {
             document.getElementById("id2").value = results.rows.item(0).idAsesorPromotor;
             document.getElementById("passw2").value = results.rows.item(0).passwordAsesorPromotor;
       }, null);
    }); 
 
}

function leeTablaTurno() {
    var moneda = "";
    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM Movil_Moneda WHERE defaultMoneda="S"', [], function (tx, results) {
            if(results.rows.length) {
                moneda = results.rows.item(0).idMoneda;
            }
        }, null);         
    }); 
    var fechat = localStorage.getItem('fechaturno');         
    db.transaction(function (tx) {
       tx.executeSql('SELECT * FROM Movil_Turno WHERE fechaTurno=?', [fechat], function (tx, results) {
           if(results.rows.length) {
               document.querySelector('#c1').innerHTML = results.rows.item(0).horaInicioTurno;
               document.querySelector('#c2').innerHTML = results.rows.item(0).horaTerminoTurno;
               //document.querySelector('#c3').innerHTML = results.rows.item(0).montoRecaudadoTurno + ' ' + moneda;
               //document.querySelector('#c4').innerHTML = results.rows.item(0).cantidadVerificacionAntecedenteTurno;
               //document.querySelector('#c5').innerHTML = results.rows.item(0).cantidadOperacionDesembolsoTurno;
               //document.querySelector('#c6').innerHTML = results.rows.item(0).montoTotalDesembolsoTurno + ' ' + moneda;
               //document.querySelector('#c7').innerHTML = results.rows.item(0).cantidadSupervisionesTurno;
               //document.querySelector('#c8').innerHTML = results.rows.item(0).cantidadRecaudacionTurno;
               //document.querySelector('#c9').innerHTML = results.rows.item(0).montoTotalRecaudadoTurno + ' ' + moneda;
           }
        }, null);
    }); 
}



function leeTablaDatoBasicoAcreditado_Page_2() {
    var fechat = localStorage.getItem('fechaturno');         
    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM Movil_DatoBasicoAcreditado, Movil_Checklist WHERE idServicio = 1 and fechaTurno=? and Movil_DatoBasicoAcreditado.idChecklist = Movil_Checklist.idChecklist ORDER BY nombreAcreditado', [fechat], function (tx, results) {
            var len = results.rows.length, i;
            for (i = 0; i < len; i++) {
                document.querySelector('#idpage2').innerHTML += results.rows.item(i).idAcreditado + '<p>';
                document.querySelector('#clientespage2').innerHTML += '<a href="page2-1.html?id=' + results.rows.item(i).idAcreditado + '" rel="external" id="ahrefpage2">' + results.rows.item(i).nombreAcreditado + ' ' + results.rows.item(i).paternoAcreditado + ' ' + results.rows.item(i).maternoAcreditado + '</a><p>'
                var lengua = localStorage.getItem('idioma');         
                if (lengua==2) {
                    document.querySelector('#estadopage2').innerHTML += results.rows.item(i).descripcionChecklistIngles + '<p>';
                }else if(lengua==3){ //frances
                    document.querySelector('#estadopage2').innerHTML += results.rows.item(i).descripcionChecklistFrances + '<p>';
                }else if(lengua==4){ //portugues
                    document.querySelector('#estadopage2').innerHTML += results.rows.item(i).descripcionChecklistPortugues + '<p>';
                }else{               //espa�ol
                    document.querySelector('#estadopage2').innerHTML += results.rows.item(i).descripcionChecklist + '<p>';
                }
            }
        }, null);
     });
    
}


function leeTablaDatoBasicoAcreditado_Page_3() {
    var fechat = localStorage.getItem('fechaturno');         
    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM Movil_DatoBasicoAcreditado, Movil_Checklist WHERE idServicio = 2  and fechaTurno=? and Movil_DatoBasicoAcreditado.idChecklist = Movil_Checklist.idChecklist ORDER BY nombreAcreditado', [fechat], function (tx, results) {
            var len = results.rows.length, i;
            for (i = 0; i < len; i++) {
                document.querySelector('#idpage3').innerHTML += results.rows.item(i).idAcreditado + '<p>';
                document.querySelector('#clientespage3').innerHTML += '<a href="page3-1.html?id=' + results.rows.item(i).idAcreditado + '" rel="external" id="ahrefpage3">' + results.rows.item(i).nombreAcreditado + ' ' + results.rows.item(i).paternoAcreditado + ' ' + results.rows.item(i).maternoAcreditado + '</a><p>'
                var lengua = localStorage.getItem('idioma');         
                if (lengua==2) {
                    document.querySelector('#estadopage3').innerHTML += results.rows.item(i).descripcionChecklistIngles + '<p>';
                }else if(lengua==3){ //frances
                    document.querySelector('#estadopage3').innerHTML += results.rows.item(i).descripcionChecklistFrances + '<p>';
                }else if(lengua==4){ //portugues
                    document.querySelector('#estadopage3').innerHTML += results.rows.item(i).descripcionChecklistPortugues + '<p>';
                }else{               //espa�ol
                    document.querySelector('#estadopage3').innerHTML += results.rows.item(i).descripcionChecklist + '<p>';
                }
              }
        }, null);
     });
    
}

function leeTablaDatoBasicoAcreditado_Page_4() {
    var fechat = localStorage.getItem('fechaturno');         
    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM Movil_DatoBasicoAcreditado, Movil_Checklist WHERE idServicio = 3 and fechaTurno=? and Movil_DatoBasicoAcreditado.idChecklist = Movil_Checklist.idChecklist ORDER BY nombreAcreditado', [fechat], function (tx, results) {
           var len = results.rows.length, i;
            for (i = 0; i < len; i++) {
                document.querySelector('#idpage4').innerHTML += results.rows.item(i).idAcreditado + '<p>';
                document.querySelector('#clientespage4').innerHTML += '<a href="page4-1.html?id=' + results.rows.item(i).idAcreditado + '&modo=1" rel="external" id="ahrefpage4">' + results.rows.item(i).nombreAcreditado + ' ' + results.rows.item(i).paternoAcreditado + ' ' + results.rows.item(i).maternoAcreditado + '</a><p>'
                document.querySelector('#observa4').innerHTML += '<a href="page4-1.html?id=' + results.rows.item(i).idAcreditado + '&modo=2" rel="external" class="tiny button secondary" style="color:#A60000;">Abrir</a>' + '<p>';
                document.querySelector('#plan4').innerHTML += '<a href="page4-2.html?id=' + results.rows.item(i).idAcreditado + '&modo=2" rel="external" class="tiny button secondary" style="color:#A60000;">Abrir</a>' + '<p>';
                var lengua = localStorage.getItem('idioma');         
                if (lengua==2) {
                    document.querySelector('#estadopage4').innerHTML += results.rows.item(i).descripcionChecklistIngles + '<p>';
                }else if(lengua==3){ //frances
                    document.querySelector('#estadopage4').innerHTML += results.rows.item(i).descripcionChecklistFrances + '<p>';
                }else if(lengua==4){ //portugues
                    document.querySelector('#estadopage4').innerHTML += results.rows.item(i).descripcionChecklistPortugues + '<p>';
                }else{               //espa�ol
                    document.querySelector('#estadopage4').innerHTML += results.rows.item(i).descripcionChecklist + '<p>';
                }
             }
        }, null);
     });
    
}

function leeTablaDatoBasicoAcreditado_Page_5() {
    var fechat = localStorage.getItem('fechaturno');         
    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM Movil_DatoBasicoAcreditado, Movil_Checklist WHERE idServicio = 4  and fechaTurno=? and Movil_DatoBasicoAcreditado.idChecklist = Movil_Checklist.idChecklist ORDER BY nombreAcreditado', [fechat], function (tx, results) {
            var len = results.rows.length, i;
            for (i = 0; i < len; i++) {
                document.querySelector('#idpage5').innerHTML += results.rows.item(i).idAcreditado + '<p>';
                document.querySelector('#clientespage5').innerHTML += '<a href="page5-1.html?id=' + results.rows.item(i).idAcreditado + '" rel="external" id="ahrefpage5">' + results.rows.item(i).nombreAcreditado + ' ' + results.rows.item(i).paternoAcreditado + ' ' + results.rows.item(i).maternoAcreditado + '</a><p>';
                var lengua = localStorage.getItem('idioma');         
                if (lengua==2) {
                    document.querySelector('#estadopage5').innerHTML += results.rows.item(i).descripcionChecklistIngles + '<p>';
                }else if(lengua==3){ //frances
                    document.querySelector('#estadopage5').innerHTML += results.rows.item(i).descripcionChecklistFrances + '<p>';
                }else if(lengua==4){ //portugues
                    document.querySelector('#estadopage5').innerHTML += results.rows.item(i).descripcionChecklistPortugues + '<p>';
                }else{               //espa�ol
                    document.querySelector('#estadopage5').innerHTML += results.rows.item(i).descripcionChecklist + '<p>';
                }
            }
        }, null);
     });
    
}

function leeTablaDatoBasicoAcreditado_Page_6() {
    var moneda = "";
    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM Movil_Moneda WHERE defaultMoneda="S"', [], function (tx, results) {
            if(results.rows.length) {
                moneda = results.rows.item(0).idMoneda;
            }
        }, null);         
    });
    var fechat = localStorage.getItem('fechaturno');  
    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM Movil_DatoBasicoAcreditado, Movil_ServicioRecuperacionCredito WHERE (Movil_DatoBasicoAcreditado.idServicio = 4 or Movil_DatoBasicoAcreditado.idServicio = 7 or Movil_DatoBasicoAcreditado.idServicio = 8) and (Movil_DatoBasicoAcreditado.idAcreditado = Movil_ServicioRecuperacionCredito.idAcreditado and Movil_DatoBasicoAcreditado.fechaTurno = Movil_ServicioRecuperacionCredito.fechaTurno and Movil_ServicioRecuperacionCredito.montoCancelado > 0) and Movil_DatoBasicoAcreditado.fechaTurno=? ORDER BY nombreAcreditado', [fechat], function (tx, results) {
            var len = results.rows.length, i;
            for (i = 0; i < len; i++) {
                document.querySelector('#idpage6').innerHTML +=  results.rows.item(i).idAcreditado + '<p>';
                document.querySelector('#clientespage6').innerHTML += results.rows.item(i).nombreAcreditado + ' ' + results.rows.item(i).paternoAcreditado + ' ' + results.rows.item(i).maternoAcreditado + '<p>';
                document.querySelector('#montorecaudado6').innerHTML += results.rows.item(i).montoCancelado + ' ' + moneda + '<p>';
                document.querySelector('#comprobante').innerHTML += '<a href="page6-1.html?id=' + results.rows.item(i).idAcreditado + '" rel="external"  id="ahrefpage6">Comprobante Depósito</a><p>'  
              }
        }, null);
     });
    
}

function leeTablaDatoBasicoAcreditado_Page_7() {
    var fechat = localStorage.getItem('fechaturno');         
    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM Movil_DatoBasicoAcreditado, Movil_Checklist WHERE idServicio = 7  and fechaTurno=? and Movil_DatoBasicoAcreditado.idChecklist = Movil_Checklist.idChecklist ORDER BY nombreAcreditado', [fechat], function (tx, results) {
            var len = results.rows.length, i;
            for (i = 0; i < len; i++) {
                document.querySelector('#idpage7').innerHTML += results.rows.item(i).idAcreditado + '<p>';
                document.querySelector('#clientespage7').innerHTML += '<a href="page7-1.html?id=' + results.rows.item(i).idAcreditado + '" rel="external" id="ahrefpage7">' + results.rows.item(i).nombreAcreditado + ' ' + results.rows.item(i).paternoAcreditado + ' ' + results.rows.item(i).maternoAcreditado + '</a><p>';
                var lengua = localStorage.getItem('idioma');         
                if (lengua==2) {
                    document.querySelector('#estadopage7').innerHTML += results.rows.item(i).descripcionChecklistIngles + '<p>';
                }else if(lengua==3){ //frances
                    document.querySelector('#estadopage7').innerHTML += results.rows.item(i).descripcionChecklistFrances + '<p>';
                }else if(lengua==4){ //portugues
                    document.querySelector('#estadopage7').innerHTML += results.rows.item(i).descripcionChecklistPortugues + '<p>';
                }else{               //espa�ol
                    document.querySelector('#estadopage7').innerHTML += results.rows.item(i).descripcionChecklist + '<p>';
                }
            }
        }, null);
     });
    
}

function leeTablaDatoBasicoAcreditado_Page_8() {
    var fechat = localStorage.getItem('fechaturno');         
    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM Movil_DatoBasicoAcreditado, Movil_Checklist WHERE idServicio = 8  and fechaTurno=? and Movil_DatoBasicoAcreditado.idChecklist = Movil_Checklist.idChecklist ORDER BY nombreAcreditado', [fechat], function (tx, results) {
            var len = results.rows.length, i;
            for (i = 0; i < len; i++) {
                document.querySelector('#idpage8').innerHTML += results.rows.item(i).idAcreditado + '<p>';
                document.querySelector('#clientespage8').innerHTML += '<a href="page8-1.html?id=' + results.rows.item(i).idAcreditado + '" rel="external" id="ahrefpage8">' + results.rows.item(i).nombreAcreditado + ' ' + results.rows.item(i).paternoAcreditado + ' ' + results.rows.item(i).maternoAcreditado + '</a><p>';
                var lengua = localStorage.getItem('idioma');         
                if (lengua==2) {
                    document.querySelector('#estadopage8').innerHTML += results.rows.item(i).descripcionChecklistIngles + '<p>';
                }else if(lengua==3){ //frances
                    document.querySelector('#estadopage8').innerHTML += results.rows.item(i).descripcionChecklistFrances + '<p>';
                }else if(lengua==4){ //portugues
                    document.querySelector('#estadopage8').innerHTML += results.rows.item(i).descripcionChecklistPortugues + '<p>';
                }else{               //espa�ol
                    document.querySelector('#estadopage8').innerHTML += results.rows.item(i).descripcionChecklist + '<p>';
                }
            }
        }, null);
     });
    
}


  
function llenaComboChecklist() {
    var textb, option;
    var lengua = localStorage.getItem('idioma');         
    db.transaction(function (tx) {
       tx.executeSql('SELECT * FROM Movil_Checklist ORDER BY idChecklist', [], function (tx, results) {
            var len = results.rows.length, i;
            for (i = 0; i < len; i++) {
                if (lengua==2) {  //ingles
                    textb = results.rows.item(i).descripcionChecklistIngles;
                }else if(lengua==3){ //frances
                    textb = results.rows.item(i).descripcionChecklistFrances;
                }else if(lengua==4){ //portugues
                    textb = results.rows.item(i).descripcionChecklistPortugues;
                }else{               //espa�ol
                   textb = results.rows.item(i).descripcionChecklist;
                }
                valub = parseInt(results.rows.item(i).idChecklist);
                option = document.createElement("option");
                option.text = textb;
                option.value = valub;
                //Appending a text node to the newly created option with the text value
                //option.appendChild(document.createTextNode(valub));
                //Appending the new option to the select list
                document.forms['form1'].elements['combo2'].appendChild(option);
            }
        }, null);
    }); 

}

function llenaComboAplicacionRecurso() {
    var textb, option;
    var lengua = localStorage.getItem('idioma');         
        db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM Movil_AplicacionRecurso ORDER BY idAplicacionRecurso', [], function (tx, results) {
            var len = results.rows.length, i;
            for (i = 0; i < len; i++) {
                if (lengua==2) {  //ingles
                    textb = results.rows.item(i).descripcionAplicacionIngles;
                }else if(lengua==3){ //frances
                    textb = results.rows.item(i).descripcionAplicacionFrances;
                }else if(lengua==4){ //portugues
                    textb = results.rows.item(i).descripcionAplicacionPortugues;
                }else{               //espa�ol
                    textb = results.rows.item(i).descripcionAplicacionRecurso;
                }
                 valub = results.rows.item(i).idAplicacionRecurso;
                option = document.createElement("option");
                option.text = textb;
                option.value = valub;
                //Appending a text node to the newly created option with the text value
                //option.appendChild(document.createTextNode(valub));
                //Appending the new option to the select list
                document.forms['form1'].elements['combo3'].appendChild(option);
             }
        }, null);
    });               

}

function defaultAplicacionRecurso() {
    var XYZdesc = document.getElementById('XYZdescripcionaplicacionrecurso').value; 
    var dd = document.getElementById('combo3');

    for (var i = 0; i < dd.options.length; i++) {
         if (dd.options[i].text === XYZdesc) {
            dd.selectedIndex = i;
            break;
         }
    }

}


function llenaComboTipoSolicitudCreditoTest() {
    var opt = '[';
    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM Movil_TipoSolicitudCredito ORDER BY idTipoSolicitud', [], function (tx, results) {
            var len = results.rows.length, i;
            for (i = 0; i < len; i++) {
                opt += '{"Text":"' + results.rows.item(i).descripcionTipoSolicitud + '","Value":"' + results.rows.item(i).idTipoSolicitud + '"}';
                if (i < len-1) {
                    opt += ',';
                 }else{
                    opt += ']';
                 }
            }
            for(var i = 0; i < opt.length; i++){
                //Creating a new option
                var option = document.createElement("option");
                //Assigning option's value
                option.value = opt[i].Value;
                //Appending a text node to the newly created option with the text value
                option.appendChild(document.createTextNode(opt[i].Text));
                //Appending the new option to the select list
                document.forms['form1'].elements['combo'].appendChild(option);
            }
        }, null);

        
    });
                  
}

function llenaComboTipoSolicitudCredito() {
    var textb, valub, option;
    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM Movil_TipoSolicitudCredito ORDER BY idTipoSolicitud', [], function (tx, results) {
            var len = results.rows.length, i;
            for (i = 0; i < len; i++) {
                textb = results.rows.item(i).descripcionTipoSolicitud;
                valub = results.rows.item(i).idTipoSolicitud;
                //valub = ' ';
                option = document.createElement("option");
                option.text = textb;
                option.value = valub;
                //Appending a text node to the newly created option with the text value
                //option.appendChild(document.createTextNode(valub));
                //Appending the new option to the select list
                document.forms['form1'].elements['combo'].appendChild(option);
         }
        }, null);
    });               
}


function getIDPage2_1() {
    localStorage.setItem('servicio', 1);
    if(location.search.substr(1)){
        Variables = location.search.substr(1).split ('&');
        for (i = 0; i < Variables.length; i++) {
          Separ = Variables[i].split('=');
          eval ('var '+Separ[0]+'="'+Separ[1]+'"');
        }
        var fechat = localStorage.getItem('fechaturno');         
        localStorage.setItem('idcliente', id);
        db.transaction(function (tx) {
          tx.executeSql('SELECT * FROM Movil_DatoBasicoAcreditado WHERE idServicio = 1 and idAcreditado = ? and fechaTurno=?', [id, fechat], function (tx, results) {
            document.getElementById('XYZidcliente').value = results.rows.item(0).idAcreditado;
            document.querySelector('#idclientex').innerHTML = results.rows.item(0).idAcreditado;
            document.querySelector('#nombreclientex').innerHTML = results.rows.item(0).nombreAcreditado + ' ' + results.rows.item(0).paternoAcreditado + ' ' + results.rows.item(0).maternoAcreditado;
            document.querySelector('#direccion').innerHTML = '<a href="busqueda.html?id=' + results.rows.item(0).direccionAcreditado + ', ' + results.rows.item(0).ciudadAcreditado + ', ' + results.rows.item(0).paisAcreditado + '" rel="external" id="ahrefpage21"><img src="images/ic_action_location.png" alt="" />' + results.rows.item(0).direccionAcreditado + '</a>';
            document.querySelector('#poblacion').innerHTML = results.rows.item(0).poblacionAcreditado;
            document.querySelector('#ciudad').innerHTML = results.rows.item(0).ciudadAcreditado;
            document.querySelector('#pais').innerHTML = results.rows.item(0).paisAcreditado;
            document.querySelector('#fijo').innerHTML = '<a href="tel:' + results.rows.item(0).telefonoFijoAcreditado + '"  id="ahrefpage21"><img src="images/ic_action_phone_outgoing.png" alt="" />' + results.rows.item(0).telefonoFijoAcreditado + '</a>';
            document.querySelector('#movil').innerHTML = '<a href="sms:' + results.rows.item(0).telefonoMovilAcreditado + '"><img src="images/ic_action_monolog.png" alt="" /></a><a href="tel:' + results.rows.item(0).telefonoMovilAcreditado + '" id="ahrefpage21">' + results.rows.item(0).telefonoMovilAcreditado + '</a>';
            document.querySelector('#email').innerHTML = '<a href="mailto:' + results.rows.item(0).eMailAcreditado + '" id="ahrefpage21"><img src="images/ic_action_mail.png" alt="" />' + results.rows.item(0).eMailAcreditado + '</a>';
            document.querySelector('#web').innerHTML = '<a href="url:' + results.rows.item(0).webAcreditado + '" id="ahrefpage21"><img src="images/ic_action_user.png" alt="" />' + results.rows.item(0).webAcreditado + '</a>'; 
            document.getElementById('XYZdescripcionchecklist').value = results.rows.item(0).descripcionChecklist;
            localStorage.setItem('direccion', results.rows.item(0).direccionAcreditado + ', ' + results.rows.item(0).ciudadAcreditado + ', ' + results.rows.item(0).paisAcreditado);
         }, null);
        }); 
        db.transaction(function (tx) {
          tx.executeSql('SELECT * FROM Movil_ServicioVerificacionAntecedente WHERE idServicio = 1 and idAcreditado = ? and fechaTurno=?', [id, fechat], function (tx, results) {
                  document.getElementById('fechavis').value = results.rows.item(0).fechaVisita;
                  document.querySelector('#textarea1').innerHTML = results.rows.item(0).planViabilidadNegocio;
                  document.querySelector('#textarea2').innerHTML = results.rows.item(0).administracion;
                  document.querySelector('#textarea3').innerHTML = results.rows.item(0).antecedentesNegocio;
                  document.querySelector('#textarea4').innerHTML = results.rows.item(0).conclusiones;
                  document.querySelector('#textarea5').innerHTML = results.rows.item(0).riesgos;
                  document.getElementById("slider1").value = results.rows.item(0).numeroEmpleados;
                  document.getElementById("slider2").value = results.rows.item(0).numeroEmpleadosIMSS;
                  document.getElementById("slider-flip-m").value = results.rows.item(0).justificaCredito;
           }, null);
        }); 
        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM Movil_DatoBasicoAcreditado, Movil_Checklist WHERE idServicio = 1 and idAcreditado=? and fechaTurno=? and Movil_DatoBasicoAcreditado.idChecklist = Movil_Checklist.idChecklist', [id, fechat], function (tx, results) {
                  document.getElementById('XYZdescripcionchecklist').value = results.rows.item(0).descripcionChecklist;
                  var idCheck = results.rows.item(0).idChecklist;
                  var f = document.getElementById("combo2");
                  f.options[idCheck-1].selected = true;
            }, null);
        });
    }
}

function getIDPage2_2() {
    localStorage.setItem('servicio', 1);
    if(location.search.substr(1)){
        Variables = location.search.substr(1).split ('&');
        for (i = 0; i < Variables.length; i++) {
          Separ = Variables[i].split('=');
          eval ('var '+Separ[0]+'="'+Separ[1]+'"');
        }
        var fechat = localStorage.getItem('fechaturno');         
        localStorage.setItem('idcliente', id);
        document.getElementById('XYZidcliente').value = id;
        document.getElementById('fechavis').value = fechat;  
    }
}

function getIDPage3_1() {
    localStorage.setItem('servicio', 2);
    if(location.search.substr(1)){
        Variables = location.search.substr(1).split ('&');
        for (i = 0; i < Variables.length; i++) {
          Separ = Variables[i].split('=');
          eval ('var '+Separ[0]+'="'+Separ[1]+'"');
        }
        var fechat = localStorage.getItem('fechaturno');         
        localStorage.setItem('idcliente', id);

        db.transaction(function (tx) {
          tx.executeSql('SELECT * FROM Movil_DatoBasicoAcreditado WHERE idServicio = 2 and idAcreditado = ? and fechaTurno=?', [id, fechat], function (tx, results) {
            document.getElementById('XYZidcliente').value = results.rows.item(0).idAcreditado;
            document.querySelector('#idclientex').innerHTML = results.rows.item(0).idAcreditado;
            document.querySelector('#nombreclientex').innerHTML = results.rows.item(0).nombreAcreditado + ' ' + results.rows.item(0).paternoAcreditado + ' ' + results.rows.item(0).maternoAcreditado;
            document.querySelector('#direccion').innerHTML = '<a href="busqueda.html?id=' + results.rows.item(0).direccionAcreditado + ',' + results.rows.item(0).ciudadAcreditado + ',' + results.rows.item(0).paisAcreditado + '" rel="external" id="ahrefpage31"><img src="images/ic_action_location.png" alt="" />' + results.rows.item(0).direccionAcreditado + '</a>';
            document.querySelector('#poblacion').innerHTML = results.rows.item(0).poblacionAcreditado;
            document.querySelector('#ciudad').innerHTML = results.rows.item(0).ciudadAcreditado;
            document.querySelector('#pais').innerHTML = results.rows.item(0).paisAcreditado;
            document.querySelector('#fijo').innerHTML = '<a href="tel:' + results.rows.item(0).telefonoFijoAcreditado + '" id="ahrefpage31"><img src="images/ic_action_phone_outgoing.png" alt=""  />' + results.rows.item(0).telefonoFijoAcreditado + '</a>';
            document.querySelector('#movil').innerHTML = '<a href="sms:' + results.rows.item(0).telefonoMovilAcreditado + '"><img src="images/ic_action_monolog.png" alt="" /></a><a href="tel:' + results.rows.item(0).telefonoMovilAcreditado + '" id="ahrefpage31">' + results.rows.item(0).telefonoMovilAcreditado + '</a>';
            document.querySelector('#email').innerHTML = '<a href="mailto:' + results.rows.item(0).eMailAcreditado + '" id="ahrefpage31"><img src="images/ic_action_mail.png" alt="" />' + results.rows.item(0).eMailAcreditado + '</a>';
            document.querySelector('#web').innerHTML = '<a href="url:' + results.rows.item(0).webAcreditado + '" id="ahrefpage31"><img src="images/ic_action_user.png" alt="" />' + results.rows.item(0).webAcreditado + '</a>'; 
            localStorage.setItem('direccion', results.rows.item(0).direccionAcreditado + ', ' + results.rows.item(0).ciudadAcreditado + ', ' + results.rows.item(0).paisAcreditado);
          }, null);
        }); 
        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM Movil_ServicioOperacionCredito, Movil_TipoSolicitudCredito WHERE idServicio = 2 and idAcreditado = ? and fechaTurno=? and Movil_ServicioOperacionCredito.idTipoSolicitud = Movil_TipoSolicitudCredito.idTiposolicitud', [id, fechat], function (tx, results) {
                document.querySelector('#c1').innerHTML = results.rows.item(0).tipoCredito;
                document.querySelector('#c2').innerHTML = results.rows.item(0).numeroControl;
                document.getElementById('c3').value = results.rows.item(0).referencia;
                document.querySelector('#c4').innerHTML = results.rows.item(0).descripcionTipoSolicitud;
                document.querySelector('#c5').innerHTML = results.rows.item(0).inicioCredito;
                document.querySelector('#c6').innerHTML = results.rows.item(0).fechaMinistracion;
                document.querySelector('#c7').innerHTML = results.rows.item(0).montoMinistracion;
                document.querySelector('#c8').innerHTML = results.rows.item(0).idMoneda;
            }, null);
        }); 
        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM Movil_DatoBasicoAcreditado, Movil_Checklist WHERE idServicio = 2 and idAcreditado=? and fechaTurno=? and Movil_DatoBasicoAcreditado.idChecklist = Movil_Checklist.idChecklist', [id, fechat], function (tx, results) {
                  document.getElementById('XYZdescripcionchecklist').value = results.rows.item(0).descripcionChecklist;
                  localStorage.setItem('situacion', results.rows.item(0).idChecklist);
                  document.getElementById('XYZdescripcionchecklist').value = results.rows.item(0).descripcionChecklist;
                  var idCheck = results.rows.item(0).idChecklist;
                  var f = document.getElementById("combo2");
                  f.options[idCheck-1].selected = true;

            }, null);
        });
     }
}

function getIDPage4_1() {
    localStorage.setItem('servicio', 3);
    if(location.search.substr(1)){
        Variables = location.search.substr(1).split ('&');
        for (i = 0; i < Variables.length; i++) {
          Separ = Variables[i].split('=');
          eval ('var '+Separ[0]+'="'+Separ[1]+'"');
        }
        localStorage.setItem('idcliente', id);
        var fechat = localStorage.getItem('fechaturno');         
        db.transaction(function (tx) {
          tx.executeSql('SELECT * FROM Movil_DatoBasicoAcreditado WHERE idServicio = 3 and idAcreditado = ? and fechaTurno=?', [id, fechat], function (tx, results) {
            document.getElementById('XYZidcliente').value = results.rows.item(0).idAcreditado;
            document.querySelector('#idclientex').innerHTML = results.rows.item(0).idAcreditado;
            document.querySelector('#nombreclientex').innerHTML = results.rows.item(0).nombreAcreditado + ' ' + results.rows.item(0).paternoAcreditado + ' ' + results.rows.item(0).maternoAcreditado;
            document.querySelector('#direccion').innerHTML = '<a href="busqueda.html?id=' + results.rows.item(0).direccionAcreditado + ',' + results.rows.item(0).ciudadAcreditado + ',' + results.rows.item(0).paisAcreditado + '" rel="external" id="ahrefpage41"><img src="images/ic_action_location.png" alt="" />' + results.rows.item(0).direccionAcreditado + '</a>';
            document.querySelector('#poblacion').innerHTML = results.rows.item(0).poblacionAcreditado;
            document.querySelector('#ciudad').innerHTML = results.rows.item(0).ciudadAcreditado;
            document.querySelector('#pais').innerHTML = results.rows.item(0).paisAcreditado;
            document.querySelector('#fijo').innerHTML = '<a href="tel:' + results.rows.item(0).telefonoFijoAcreditado + '" id="ahrefpage41"><img src="images/ic_action_phone_outgoing.png" alt=""  />' + results.rows.item(0).telefonoFijoAcreditado + '</a>';
            document.querySelector('#movil').innerHTML = '<a href="sms:' + results.rows.item(0).telefonoMovilAcreditado + '"><img src="images/ic_action_monolog.png" alt="" /></a><a href="tel:' + results.rows.item(0).telefonoMovilAcreditado + '" id="ahrefpage41">' + results.rows.item(0).telefonoMovilAcreditado + '</a>';
            document.querySelector('#email').innerHTML = '<a href="mailto:' + results.rows.item(0).eMailAcreditado + '" id="ahrefpage41"><img src="images/ic_action_mail.png" alt="" />' + results.rows.item(0).eMailAcreditado + '</a>';
            document.querySelector('#web').innerHTML = '<a href="url:' + results.rows.item(0).webAcreditado + '" id="ahrefpage41"><img src="images/ic_action_user.png" alt="" />' + results.rows.item(0).webAcreditado + '</a>'; 
            localStorage.setItem('direccion', results.rows.item(0).direccionAcreditado + ', ' + results.rows.item(0).ciudadAcreditado + ', ' + results.rows.item(0).paisAcreditado);
          }, null);
        }); 
 
        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM Movil_ServicioSupervisionCredito WHERE idServicio = 3 and idAcreditado = ? and fechaTurno=?', [id, fechat], function (tx, results) {
                    document.querySelector('#c1').innerHTML = results.rows.item(0).tipoCredito;
                    document.querySelector('#c2').innerHTML = results.rows.item(0).numeroControl;
                    document.getElementById('c3').value = results.rows.item(0).fechaObservacion;
                    document.getElementById('checkbox-v-2a').value = results.rows.item(0).identifArtAdqObservacion;
                    document.getElementById('checkbox-v-2b').value = results.rows.item(0).encontraronRecSegunPlanObservacion;
                    document.getElementById('c4').value = results.rows.item(0).cambiosObservacion;
                    document.getElementById('c5').value = results.rows.item(0).observacionesObservacion;
                    document.getElementById('XYZdescripcionaplicacionrecurso').value = results.rows.item(0).idAplicacionRecursoObservacion;
                                                           
            }, null);
        }); 
        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM Movil_DatoBasicoAcreditado, Movil_Checklist WHERE idServicio = 3 and idAcreditado=? and fechaTurno=? and Movil_DatoBasicoAcreditado.idChecklist = Movil_Checklist.idChecklist', [id, fechat], function (tx, results) {
                  document.getElementById('XYZdescripcionchecklist').value = results.rows.item(0).descripcionChecklist;
                  localStorage.setItem('situacion', results.rows.item(0).idChecklist);
                  document.getElementById('XYZmodo').value = modo;
           }, null);
        });
    }
}

function getIDPage4_2() {
    localStorage.setItem('servicio', 3);
    if(location.search.substr(1)){
        Variables = location.search.substr(1).split ('&');
        for (i = 0; i < Variables.length; i++) {
          Separ = Variables[i].split('=');
          eval ('var '+Separ[0]+'="'+Separ[1]+'"');
        }
        localStorage.setItem('idcliente', id);
        var fechat = localStorage.getItem('fechaturno');         
        db.transaction(function (tx) {
          tx.executeSql('SELECT * FROM Movil_DatoBasicoAcreditado WHERE idServicio = 3 and idAcreditado = ? and fechaTurno=?', [id, fechat], function (tx, results) {
            document.getElementById('XYZidcliente').value = results.rows.item(0).idAcreditado;
            document.querySelector('#idclientex').innerHTML = results.rows.item(0).idAcreditado;
            document.querySelector('#nombreclientex').innerHTML = results.rows.item(0).nombreAcreditado + ' ' + results.rows.item(0).paternoAcreditado + ' ' + results.rows.item(0).maternoAcreditado;
            document.querySelector('#direccion').innerHTML = '<a href="busqueda.html?id=' + results.rows.item(0).direccionAcreditado + ',' + results.rows.item(0).ciudadAcreditado + ',' + results.rows.item(0).paisAcreditado + '" rel="external" id="ahrefpage41"><img src="images/ic_action_location.png" alt="" />' + results.rows.item(0).direccionAcreditado + '</a>';
            document.querySelector('#poblacion').innerHTML = results.rows.item(0).poblacionAcreditado;
            document.querySelector('#ciudad').innerHTML = results.rows.item(0).ciudadAcreditado;
            document.querySelector('#pais').innerHTML = results.rows.item(0).paisAcreditado;
            document.querySelector('#fijo').innerHTML = '<a href="tel:' + results.rows.item(0).telefonoFijoAcreditado + '" id="ahrefpage41"><img src="images/ic_action_phone_outgoing.png" alt=""  />' + results.rows.item(0).telefonoFijoAcreditado + '</a>';
            document.querySelector('#movil').innerHTML = '<a href="sms:' + results.rows.item(0).telefonoMovilAcreditado + '"><img src="images/ic_action_monolog.png" alt="" /></a><a href="tel:' + results.rows.item(0).telefonoMovilAcreditado + '" id="ahrefpage41">' + results.rows.item(0).telefonoMovilAcreditado + '</a>';
            document.querySelector('#email').innerHTML = '<a href="mailto:' + results.rows.item(0).eMailAcreditado + '" id="ahrefpage41"><img src="images/ic_action_mail.png" alt="" />' + results.rows.item(0).eMailAcreditado + '</a>';
            document.querySelector('#web').innerHTML = '<a href="url:' + results.rows.item(0).webAcreditado + '" id="ahrefpage41"><img src="images/ic_action_user.png" alt="" />' + results.rows.item(0).webAcreditado + '</a>'; 
            localStorage.setItem('direccion', results.rows.item(0).direccionAcreditado + ', ' + results.rows.item(0).ciudadAcreditado + ', ' + results.rows.item(0).paisAcreditado);
          }, null);
        }); 
        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM Movil_ServicioSupervisionCredito WHERE idServicio = 3 and idAcreditado = ? and fechaTurno=?', [id, fechat], function (tx, results) {
                    document.querySelector('#c1').innerHTML = results.rows.item(0).tipoCredito;
                    document.querySelector('#c2').innerHTML = results.rows.item(0).numeroControl;
                    document.getElementById('c3').value = results.rows.item(0).montoPrestSolicPlanInv;
                    document.getElementById('c4').value = results.rows.item(0).plazoPrestSolicPlanInv;
                    document.getElementById('c5').value = results.rows.item(0).inversionClientePlanInv;
                    document.getElementById('c6').value = results.rows.item(0).totalPlanInv;
            }, null);
        }); 
        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM Movil_DetallePlanInversion, Movil_AplicacionRecurso WHERE idServicio = 3 and idAcreditado = ? and fechaTurno=? and Movil_DetallePlanInversion.idAplicacionRecurso = Movil_AplicacionRecurso.idAplicacionRecurso ORDER BY itemPlanInv', [id, fechat], function (tx, results) {
                var len = results.rows.length, i;
                for (i = 0; i < len; i++) {
                    document.querySelector('#c7').innerHTML += results.rows.item(i).itemPlanInv + '<p>';
                    document.querySelector('#c8').innerHTML += results.rows.item(i).descripcionPlanInv + '<p>';
                    document.querySelector('#c9').innerHTML += results.rows.item(i).cantidadPlanInv + '<p>';
                    document.querySelector('#c10').innerHTML += results.rows.item(i).importePlanInv + '<p>';
                    document.querySelector('#c11').innerHTML += results.rows.item(i).descripcionAplicacionRecurso + '<p>';
                    document.querySelector('#c12').innerHTML += '<a href="#" onclick="editarPlanInversion(' + results.rows.item(i).itemPlanInv + ');" rel="external">Editar</a><p>';
                    document.querySelector('#c13').innerHTML += '<a href="#" onclick="eliminarPlanInversion(' + results.rows.item(i).itemPlanInv + ');" rel="external">Eliminar</a><p>';
                }
             }, null);
        }); 
        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM Movil_DatoBasicoAcreditado, Movil_Checklist WHERE idServicio = 3 and idAcreditado=? and fechaTurno=? and Movil_DatoBasicoAcreditado.idChecklist = Movil_Checklist.idChecklist', [id, fechat], function (tx, results) {
                  document.getElementById('XYZdescripcionchecklist').value = results.rows.item(0).descripcionChecklist;
                  localStorage.setItem('situacion', results.rows.item(0).idChecklist);
                  document.getElementById('XYZmodo').value = modo;
           }, null);
        });
    }
}

function getIDPage5_1() {
    localStorage.setItem('servicio', 4);
    if(location.search.substr(1)){
        Variables = location.search.substr(1).split ('&');
        for (i = 0; i < Variables.length; i++) {
          Separ = Variables[i].split('=');
          eval ('var '+Separ[0]+'="'+Separ[1]+'"');
        }
        var fechat = localStorage.getItem('fechaturno');         
        localStorage.setItem('idcliente', id); 
        var sexoAcre, nombreAcre;
        var lengua = localStorage.getItem('idioma');         
        db.transaction(function (tx) {
          tx.executeSql('SELECT * FROM Movil_DatoBasicoAcreditado WHERE idServicio = 4 and idAcreditado = ? and fechaTurno=?', [id, fechat], function (tx, results) {
            document.getElementById('XYZidcliente').value = results.rows.item(0).idAcreditado;
            document.getElementById('hmovil').value = results.rows.item(0).telefonoMovilAcreditado;
			if (lengua==2) {
				if (results.rows.item(0).sexoAcreditado=="1"){
				   sexoAcre = "Estimated";
				}else{
				   sexoAcre = "Estimated";
				}
			}else if(lengua==3){ //frances
				if (results.rows.item(0).sexoAcreditado=="1"){
				   sexoAcre = "Estimation";
				}else{
				   sexoAcre = "Cher";
				}
			}else if(lengua==4){ //portugues
				if (results.rows.item(0).sexoAcreditado=="1"){
				   sexoAcre = "Estimado";
				}else{
				   sexoAcre = "Caro";
				}
			}else{               //español
				if (results.rows.item(0).sexoAcreditado=="1"){
				   sexoAcre = "Estimado";
				}else{
				   sexoAcre = "Estimada";
				}
			}
            nombreAcre = results.rows.item(0).nombreAcreditado + ' ' + results.rows.item(0).paternoAcreditado + ' ' + results.rows.item(0).maternoAcreditado;
            document.getElementById('hmensaje').value = results.rows.item(0).telefonoMovilAcreditado;
            document.querySelector('#idclientex').innerHTML = results.rows.item(0).idAcreditado;
            document.querySelector('#nombreclientex').innerHTML = results.rows.item(0).nombreAcreditado + ' ' + results.rows.item(0).paternoAcreditado + ' ' + results.rows.item(0).maternoAcreditado;
            document.querySelector('#direccion').innerHTML = '<a href="busqueda.html?id=' + results.rows.item(0).direccionAcreditado + ',' + results.rows.item(0).ciudadAcreditado + ',' + results.rows.item(0).paisAcreditado + '" rel="external" id="ahrefpage51"><img src="images/ic_action_location.png" alt="" />' + results.rows.item(0).direccionAcreditado + '</a>';
            document.querySelector('#poblacion').innerHTML = results.rows.item(0).poblacionAcreditado;
            document.querySelector('#ciudad').innerHTML = results.rows.item(0).ciudadAcreditado;
            document.querySelector('#pais').innerHTML = results.rows.item(0).paisAcreditado;
            document.querySelector('#fijo').innerHTML = '<a href="tel:' + results.rows.item(0).telefonoFijoAcreditado + '" id="ahrefpage51"><img src="images/ic_action_phone_outgoing.png" alt=""  />' + results.rows.item(0).telefonoFijoAcreditado + '</a>';
            document.querySelector('#movil').innerHTML = '<a href="sms:' + results.rows.item(0).telefonoMovilAcreditado + '"><img src="images/ic_action_monolog.png" alt="" /></a><a href="tel:' + results.rows.item(0).telefonoMovilAcreditado + '" id="ahrefpage51">' + results.rows.item(0).telefonoMovilAcreditado + '</a>';
            document.querySelector('#email').innerHTML = '<a href="mailto:' + results.rows.item(0).eMailAcreditado + '" id="ahrefpage51"><img src="images/ic_action_mail.png" alt="" />' + results.rows.item(0).eMailAcreditado + '</a>';
            document.querySelector('#web').innerHTML = '<a href="url:' + results.rows.item(0).webAcreditado + '" id="ahrefpage51"><img src="images/ic_action_user.png" alt="" />' + results.rows.item(0).webAcreditado + '</a>'; 
            localStorage.setItem('direccion', results.rows.item(0).direccionAcreditado + ', ' + results.rows.item(0).ciudadAcreditado + ', ' + results.rows.item(0).paisAcreditado);
         }, null);
        }); 
        var moneda = "";
        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM Movil_Moneda WHERE defaultMoneda="S"', [], function (tx, results) {
                if(results.rows.length) {
                    moneda = results.rows.item(0).idMoneda;
                }
            }, null);         
        });
        db.transaction(function (tx) {
             tx.executeSql('SELECT * FROM Movil_ServicioRecuperacionCredito WHERE idServicio = 4 and idAcreditado = ? and fechaTurno=?', [id, fechat], function (tx, results) {
         			 document.querySelector('#c1').innerHTML = results.rows.item(0).tipoCredito;
                     document.querySelector('#c2').innerHTML = results.rows.item(0).numeroControl;
                     document.querySelector('#c3').innerHTML = results.rows.item(0).montoCredito + ' ' + moneda;
                     document.querySelector('#c4').innerHTML = results.rows.item(0).fechaAlta;
                     document.querySelector('#c5').innerHTML = results.rows.item(0).saldoTotalFecha + ' ' + moneda;
                     document.querySelector('#c6').innerHTML = results.rows.item(0).saldoGlobal + ' ' + moneda;
                     document.querySelector('#c7').innerHTML = results.rows.item(0).saldoVencido + ' ' + moneda;
                     document.querySelector('#c8').innerHTML = results.rows.item(0).fechaVencimientoPago;
					 if (lengua==2) {
					 document.getElementById('hmensaje').value = sexoAcre + ' ' + nombreAcre + ', ' + 'pay your balance due date ' + results.rows.item(0).fechaVencimientoPago + ' is ' + results.rows.item(0).saldoVencido + ' ' + moneda + '.';
					 }else if(lengua==3){ //frances
					 document.getElementById('hmensaje').value = sexoAcre + ' ' + nombreAcre + ', ' + "payer votre date d'exigibilité du solde " + results.rows.item(0).fechaVencimientoPago + ' est ' + results.rows.item(0).saldoVencido + ' ' + moneda + '.';
					 }else if(lengua==4){ //portugues
					 document.getElementById('hmensaje').value = sexoAcre + ' ' + nombreAcre + ', ' + 'pagar o saldo da sua data de vencimento ' + results.rows.item(0).fechaVencimientoPago + ' é ' + results.rows.item(0).saldoVencido + ' ' + moneda + '.';
					 }else{               //español
					 document.getElementById('hmensaje').value = sexoAcre + ' ' + nombreAcre + ', ' + 'su saldo a pagar con fecha de vencimiento ' + results.rows.item(0).fechaVencimientoPago + ' es de ' + results.rows.item(0).saldoVencido + ' ' + moneda + '.';
					 }
             }, null);
         }); 
         db.transaction(function (tx) {
             tx.executeSql('SELECT * FROM Movil_DatoBasicoAcreditado, Movil_Checklist WHERE idServicio = 4 and idAcreditado=? and fechaTurno=? and Movil_DatoBasicoAcreditado.idChecklist = Movil_Checklist.idChecklist', [id, fechat], function (tx, results) {
                   document.getElementById('XYZdescripcionchecklist').value = results.rows.item(0).descripcionChecklist;
                   localStorage.setItem('situacion', results.rows.item(0).idChecklist);
             }, null);
         });
    }
}

function getIDPage5_2() {
        localStorage.setItem('servicio', 4);
        var fechat = localStorage.getItem('fechaturno');         
        var id = localStorage.getItem('idcliente'); 
        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM Movil_DatoBasicoAcreditado WHERE idServicio = 4 and idAcreditado = ? and fechaTurno=?', [id, fechat], function (tx, results) {
              document.getElementById('XYZidcliente').value = results.rows.item(0).idAcreditado;
              document.querySelector('#idclientex').innerHTML = results.rows.item(0).idAcreditado;
              document.querySelector('#nombreclientex').innerHTML = results.rows.item(0).nombreAcreditado + ' ' + results.rows.item(0).paternoAcreditado + ' ' + results.rows.item(0).maternoAcreditado;
             }, null);
          }); 
        var moneda = "";
        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM Movil_Moneda WHERE defaultMoneda="S"', [], function (tx, results) {
                if(results.rows.length) {
                    moneda = results.rows.item(0).idMoneda;
                }
            }, null);         
        });
        db.transaction(function (tx) {
             tx.executeSql('SELECT * FROM Movil_ServicioRecuperacionCredito WHERE idServicio = 4 and idAcreditado = ? and fechaTurno=?', [id, fechat], function (tx, results) {
                     document.querySelector('#c2').innerHTML = results.rows.item(0).numeroControl;
                     document.querySelector('#c7').innerHTML = results.rows.item(0).saldoVencido + ' ' + moneda;
                     document.querySelector('#c8').innerHTML = results.rows.item(0).fechaVencimientoPago;
                     document.getElementById('pago').value = results.rows.item(0).montoCancelado;
                     document.getElementById('saldo').value = results.rows.item(0).saldoVencido;
             }, null);
         }); 
}


function getIDPage7_1() {
    localStorage.setItem('servicio', 7);
    if(location.search.substr(1)){
        Variables = location.search.substr(1).split ('&');
        for (i = 0; i < Variables.length; i++) {
          Separ = Variables[i].split('=');
          eval ('var '+Separ[0]+'="'+Separ[1]+'"');
        }
        var fechat = localStorage.getItem('fechaturno');         
        localStorage.setItem('idcliente', id); 
        var sexoAcre, nombreAcre;
        var lengua = localStorage.getItem('idioma');         
        db.transaction(function (tx) {
          tx.executeSql('SELECT * FROM Movil_DatoBasicoAcreditado WHERE idServicio = 7 and idAcreditado = ? and fechaTurno=?', [id, fechat], function (tx, results) {
            document.getElementById('XYZidcliente').value = results.rows.item(0).idAcreditado;
            document.getElementById('hmovil').value = results.rows.item(0).telefonoMovilAcreditado;
			if (lengua==2) {
				if (results.rows.item(0).sexoAcreditado=="1"){
				   sexoAcre = "Estimated";
				}else{
				   sexoAcre = "Estimated";
				}
			}else if(lengua==3){ //frances
				if (results.rows.item(0).sexoAcreditado=="1"){
				   sexoAcre = "Estimation";
				}else{
				   sexoAcre = "Cher";
				}
			}else if(lengua==4){ //portugues
				if (results.rows.item(0).sexoAcreditado=="1"){
				   sexoAcre = "Estimado";
				}else{
				   sexoAcre = "Caro";
				}
			}else{               //español
				if (results.rows.item(0).sexoAcreditado=="1"){
				   sexoAcre = "Estimado";
				}else{
				   sexoAcre = "Estimada";
				}
			}
            nombreAcre = results.rows.item(0).nombreAcreditado + ' ' + results.rows.item(0).paternoAcreditado + ' ' + results.rows.item(0).maternoAcreditado;
            document.getElementById('hmensaje').value = results.rows.item(0).telefonoMovilAcreditado;
            document.querySelector('#idclientex').innerHTML = results.rows.item(0).idAcreditado;
            document.querySelector('#nombreclientex').innerHTML = results.rows.item(0).nombreAcreditado + ' ' + results.rows.item(0).paternoAcreditado + ' ' + results.rows.item(0).maternoAcreditado;
            document.querySelector('#direccion').innerHTML = '<a href="busqueda.html?id=' + results.rows.item(0).direccionAcreditado + ',' + results.rows.item(0).ciudadAcreditado + ',' + results.rows.item(0).paisAcreditado + '" rel="external" id="ahrefpage51"><img src="images/ic_action_location.png" alt="" />' + results.rows.item(0).direccionAcreditado + '</a>';
            document.querySelector('#poblacion').innerHTML = results.rows.item(0).poblacionAcreditado;
            document.querySelector('#ciudad').innerHTML = results.rows.item(0).ciudadAcreditado;
            document.querySelector('#pais').innerHTML = results.rows.item(0).paisAcreditado;
            document.querySelector('#fijo').innerHTML = '<a href="tel:' + results.rows.item(0).telefonoFijoAcreditado + '" id="ahrefpage51"><img src="images/ic_action_phone_outgoing.png" alt=""  />' + results.rows.item(0).telefonoFijoAcreditado + '</a>';
            document.querySelector('#movil').innerHTML = '<a href="sms:' + results.rows.item(0).telefonoMovilAcreditado + '"><img src="images/ic_action_monolog.png" alt="" /></a><a href="tel:' + results.rows.item(0).telefonoMovilAcreditado + '" id="ahrefpage51">' + results.rows.item(0).telefonoMovilAcreditado + '</a>';
            document.querySelector('#email').innerHTML = '<a href="mailto:' + results.rows.item(0).eMailAcreditado + '" id="ahrefpage51"><img src="images/ic_action_mail.png" alt="" />' + results.rows.item(0).eMailAcreditado + '</a>';
            document.querySelector('#web').innerHTML = '<a href="url:' + results.rows.item(0).webAcreditado + '" id="ahrefpage51"><img src="images/ic_action_user.png" alt="" />' + results.rows.item(0).webAcreditado + '</a>'; 
            localStorage.setItem('direccion', results.rows.item(0).direccionAcreditado + ', ' + results.rows.item(0).ciudadAcreditado + ', ' + results.rows.item(0).paisAcreditado);
         }, null);
        }); 
        var moneda = "";
        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM Movil_Moneda WHERE defaultMoneda="S"', [], function (tx, results) {
                if(results.rows.length) {
                    moneda = results.rows.item(0).idMoneda;
                }
            }, null);         
        });
        db.transaction(function (tx) {
             tx.executeSql('SELECT * FROM Movil_ServicioRecuperacionCredito WHERE idServicio = 7 and idAcreditado = ? and fechaTurno=?', [id, fechat], function (tx, results) {
                     document.querySelector('#c2').innerHTML = results.rows.item(0).numeroControl;
                     document.querySelector('#c3').innerHTML = results.rows.item(0).montoCredito + ' ' + moneda;
                     document.querySelector('#c8').innerHTML = results.rows.item(0).fechaVencimientoPago;
					 if (lengua==2) {
					 document.getElementById('hmensaje').value = sexoAcre + ' ' + nombreAcre + ', ' + 'pay your mount due date ' + results.rows.item(0).fechaVencimientoPago + ' is ' + results.rows.item(0).saldoVencido + ' ' + moneda + '.';
					 }else if(lengua==3){ //frances
					 document.getElementById('hmensaje').value = sexoAcre + ' ' + nombreAcre + ', ' + "payer votre date d'exigibilité du solde " + results.rows.item(0).fechaVencimientoPago + ' est ' + results.rows.item(0).saldoVencido + ' ' + moneda + '.';
					 }else if(lengua==4){ //portugues
					 document.getElementById('hmensaje').value = sexoAcre + ' ' + nombreAcre + ', ' + 'pagar o saldo da sua data de vencimento ' + results.rows.item(0).fechaVencimientoPago + ' é ' + results.rows.item(0).saldoVencido + ' ' + moneda + '.';
					 }else{               //español
					 document.getElementById('hmensaje').value = sexoAcre + ' ' + nombreAcre + ', ' + 'su monto a pagar con fecha de vencimiento ' + results.rows.item(0).fechaVencimientoPago + ' es de ' + results.rows.item(0).saldoVencido + ' ' + moneda + '.';
					 }
             }, null);
         }); 
         db.transaction(function (tx) {
             tx.executeSql('SELECT * FROM Movil_DatoBasicoAcreditado, Movil_Checklist WHERE idServicio = 7 and idAcreditado=? and fechaTurno=? and Movil_DatoBasicoAcreditado.idChecklist = Movil_Checklist.idChecklist', [id, fechat], function (tx, results) {
                   document.getElementById('XYZdescripcionchecklist').value = results.rows.item(0).descripcionChecklist;
                   localStorage.setItem('situacion', results.rows.item(0).idChecklist);
             }, null);
         });
    }
}

function getIDPage7_2() {
        localStorage.setItem('servicio', 7);
        var fechat = localStorage.getItem('fechaturno');         
        var id = localStorage.getItem('idcliente'); 
        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM Movil_DatoBasicoAcreditado WHERE idServicio = 7 and idAcreditado = ? and fechaTurno=?', [id, fechat], function (tx, results) {
              document.getElementById('XYZidcliente').value = results.rows.item(0).idAcreditado;
              document.querySelector('#idclientex').innerHTML = results.rows.item(0).idAcreditado;
              document.querySelector('#nombreclientex').innerHTML = results.rows.item(0).nombreAcreditado + ' ' + results.rows.item(0).paternoAcreditado + ' ' + results.rows.item(0).maternoAcreditado;
             }, null);
          }); 
        var moneda = "";
        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM Movil_Moneda WHERE defaultMoneda="S"', [], function (tx, results) {
                if(results.rows.length) {
                    moneda = results.rows.item(0).idMoneda;
                }
            }, null);         
        });
        db.transaction(function (tx) {
             tx.executeSql('SELECT * FROM Movil_ServicioRecuperacionCredito WHERE idServicio = 7 and idAcreditado = ? and fechaTurno=?', [id, fechat], function (tx, results) {
                     document.querySelector('#c2').innerHTML = results.rows.item(0).numeroControl;
                     document.querySelector('#c7').innerHTML = results.rows.item(0).saldoVencido + ' ' + moneda;
                     document.querySelector('#c8').innerHTML = results.rows.item(0).fechaVencimientoPago;
                     document.getElementById('pago').value = results.rows.item(0).montoCancelado;
                     document.getElementById('saldo').value = results.rows.item(0).saldoVencido;
             }, null);
         }); 
}



function getIDPage8_1() {
    localStorage.setItem('servicio', 8);
    if(location.search.substr(1)){
        Variables = location.search.substr(1).split ('&');
        for (i = 0; i < Variables.length; i++) {
          Separ = Variables[i].split('=');
          eval ('var '+Separ[0]+'="'+Separ[1]+'"');
        }
        var fechat = localStorage.getItem('fechaturno');         
        localStorage.setItem('idcliente', id); 
        var sexoAcre, nombreAcre;
        var lengua = localStorage.getItem('idioma');         
        db.transaction(function (tx) {
          tx.executeSql('SELECT * FROM Movil_DatoBasicoAcreditado WHERE idServicio = 8 and idAcreditado = ? and fechaTurno=?', [id, fechat], function (tx, results) {
            document.getElementById('XYZidcliente').value = results.rows.item(0).idAcreditado;
            document.getElementById('hmovil').value = results.rows.item(0).telefonoMovilAcreditado;
			if (lengua==2) {
				if (results.rows.item(0).sexoAcreditado=="1"){
				   sexoAcre = "Estimated";
				}else{
				   sexoAcre = "Estimated";
				}
			}else if(lengua==3){ //frances
				if (results.rows.item(0).sexoAcreditado=="1"){
				   sexoAcre = "Estimation";
				}else{
				   sexoAcre = "Cher";
				}
			}else if(lengua==4){ //portugues
				if (results.rows.item(0).sexoAcreditado=="1"){
				   sexoAcre = "Estimado";
				}else{
				   sexoAcre = "Caro";
				}
			}else{               //español
				if (results.rows.item(0).sexoAcreditado=="1"){
				   sexoAcre = "Estimado";
				}else{
				   sexoAcre = "Estimada";
				}
			}
            nombreAcre = results.rows.item(0).nombreAcreditado + ' ' + results.rows.item(0).paternoAcreditado + ' ' + results.rows.item(0).maternoAcreditado;
            document.getElementById('hmensaje').value = results.rows.item(0).telefonoMovilAcreditado;
            document.querySelector('#idclientex').innerHTML = results.rows.item(0).idAcreditado;
            document.querySelector('#nombreclientex').innerHTML = results.rows.item(0).nombreAcreditado + ' ' + results.rows.item(0).paternoAcreditado + ' ' + results.rows.item(0).maternoAcreditado;
            document.querySelector('#direccion').innerHTML = '<a href="busqueda.html?id=' + results.rows.item(0).direccionAcreditado + ',' + results.rows.item(0).ciudadAcreditado + ',' + results.rows.item(0).paisAcreditado + '" rel="external" id="ahrefpage51"><img src="images/ic_action_location.png" alt="" />' + results.rows.item(0).direccionAcreditado + '</a>';
            document.querySelector('#poblacion').innerHTML = results.rows.item(0).poblacionAcreditado;
            document.querySelector('#ciudad').innerHTML = results.rows.item(0).ciudadAcreditado;
            document.querySelector('#pais').innerHTML = results.rows.item(0).paisAcreditado;
            document.querySelector('#fijo').innerHTML = '<a href="tel:' + results.rows.item(0).telefonoFijoAcreditado + '" id="ahrefpage51"><img src="images/ic_action_phone_outgoing.png" alt=""  />' + results.rows.item(0).telefonoFijoAcreditado + '</a>';
            document.querySelector('#movil').innerHTML = '<a href="sms:' + results.rows.item(0).telefonoMovilAcreditado + '"><img src="images/ic_action_monolog.png" alt="" /></a><a href="tel:' + results.rows.item(0).telefonoMovilAcreditado + '" id="ahrefpage51">' + results.rows.item(0).telefonoMovilAcreditado + '</a>';
            document.querySelector('#email').innerHTML = '<a href="mailto:' + results.rows.item(0).eMailAcreditado + '" id="ahrefpage51"><img src="images/ic_action_mail.png" alt="" />' + results.rows.item(0).eMailAcreditado + '</a>';
            document.querySelector('#web').innerHTML = '<a href="url:' + results.rows.item(0).webAcreditado + '" id="ahrefpage51"><img src="images/ic_action_user.png" alt="" />' + results.rows.item(0).webAcreditado + '</a>'; 
            localStorage.setItem('direccion', results.rows.item(0).direccionAcreditado + ', ' + results.rows.item(0).ciudadAcreditado + ', ' + results.rows.item(0).paisAcreditado);
         }, null);
        }); 
        var moneda = "";
        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM Movil_Moneda WHERE defaultMoneda="S"', [], function (tx, results) {
                if(results.rows.length) {
                    moneda = results.rows.item(0).idMoneda;
                }
            }, null);         
        });
        db.transaction(function (tx) {
             tx.executeSql('SELECT * FROM Movil_ServicioRecuperacionCredito WHERE idServicio = 8 and idAcreditado = ? and fechaTurno=?', [id, fechat], function (tx, results) {
                     document.querySelector('#c2').innerHTML = results.rows.item(0).numeroControl;
					 if (lengua==2) {
					 document.getElementById('hmensaje').value = sexoAcre + ' ' + nombreAcre + ', ' + 'pay your mount due date ' + results.rows.item(0).fechaVencimientoPago + ' is ' + results.rows.item(0).saldoVencido + ' ' + moneda + '.';
					 }else if(lengua==3){ //frances
					 document.getElementById('hmensaje').value = sexoAcre + ' ' + nombreAcre + ', ' + "payer votre date d'exigibilité du solde " + results.rows.item(0).fechaVencimientoPago + ' est ' + results.rows.item(0).saldoVencido + ' ' + moneda + '.';
					 }else if(lengua==4){ //portugues
					 document.getElementById('hmensaje').value = sexoAcre + ' ' + nombreAcre + ', ' + 'pagar o saldo da sua data de vencimento ' + results.rows.item(0).fechaVencimientoPago + ' é ' + results.rows.item(0).saldoVencido + ' ' + moneda + '.';
					 }else{               //español
					 document.getElementById('hmensaje').value = sexoAcre + ' ' + nombreAcre + ', ' + 'su monto a pagar con fecha de vencimiento ' + results.rows.item(0).fechaVencimientoPago + ' es de ' + results.rows.item(0).saldoVencido + ' ' + moneda + '.';
					 }
             }, null);
         }); 
         db.transaction(function (tx) {
             tx.executeSql('SELECT * FROM Movil_DatoBasicoAcreditado, Movil_Checklist WHERE idServicio = 8 and idAcreditado=? and fechaTurno=? and Movil_DatoBasicoAcreditado.idChecklist = Movil_Checklist.idChecklist', [id, fechat], function (tx, results) {
                   document.getElementById('XYZdescripcionchecklist').value = results.rows.item(0).descripcionChecklist;
                   localStorage.setItem('situacion', results.rows.item(0).idChecklist);
             }, null);
         });
    }
}

function getIDPage8_2() {
        localStorage.setItem('servicio', 8);
        var fechat = localStorage.getItem('fechaturno');         
        var id = localStorage.getItem('idcliente'); 
        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM Movil_DatoBasicoAcreditado WHERE idServicio = 8 and idAcreditado = ? and fechaTurno=?', [id, fechat], function (tx, results) {
              document.getElementById('XYZidcliente').value = results.rows.item(0).idAcreditado;
              document.querySelector('#idclientex').innerHTML = results.rows.item(0).idAcreditado;
              document.querySelector('#nombreclientex').innerHTML = results.rows.item(0).nombreAcreditado + ' ' + results.rows.item(0).paternoAcreditado + ' ' + results.rows.item(0).maternoAcreditado;
             }, null);
          }); 
        var moneda = "";
        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM Movil_Moneda WHERE defaultMoneda="S"', [], function (tx, results) {
                if(results.rows.length) {
                    moneda = results.rows.item(0).idMoneda;
                }
            }, null);         
        });
        db.transaction(function (tx) {
             tx.executeSql('SELECT * FROM Movil_ServicioRecuperacionCredito WHERE idServicio = 8 and idAcreditado = ? and fechaTurno=?', [id, fechat], function (tx, results) {
                     document.querySelector('#c2').innerHTML = results.rows.item(0).numeroControl;
                     document.getElementById('pago').value = results.rows.item(0).montoCancelado;
             }, null);
         }); 
}



function getIDPage6_1() {
    localStorage.setItem('servicio', 5);
    if(location.search.substr(1)){
        Variables = location.search.substr(1).split ('&');
        for (i = 0; i < Variables.length; i++) {
          Separ = Variables[i].split('=');
          eval ('var '+Separ[0]+'="'+Separ[1]+'"');
        }
        var fechat = localStorage.getItem('fechaturno');         
        db.transaction(function (tx) {
          tx.executeSql('SELECT * FROM Movil_DatoBasicoAcreditado WHERE idServicio = 4 and idAcreditado = ? and fechaTurno=?', [id, fechat], function (tx, results) {
            document.getElementById('XYZidcliente').value = results.rows.item(0).idAcreditado;
            document.querySelector('#idclientex').innerHTML = results.rows.item(0).idAcreditado;
            document.querySelector('#nombreclientex').innerHTML = results.rows.item(0).nombreAcreditado + ' ' + results.rows.item(0).paternoAcreditado + ' ' + results.rows.item(0).maternoAcreditado;
         }, null);
        }); 
    }
}

function leeTablaEmpresaMatrizID() {
    db.transaction(function (tx) {
       tx.executeSql('SELECT * FROM Movil_EmpresaMatriz', [], function (tx, results) {
           document.getElementById('XYZidempresamatriz').value = results.rows.item(0).idEmpresaMatriz;
        }, null);
    });
}

function leeTablaEmpresaClienteID() {
    var id
    db.transaction(function (tx) {
       tx.executeSql('SELECT * FROM Movil_EmpresaMatriz', [], function (tx, results) {
            id = results.rows.item(0).idEmpresaMatriz;
       }, null);
    });
    db.transaction(function (tx) {
       tx.executeSql('SELECT * FROM Movil_EmpresaCliente WHERE idEmpresaMatriz = ?', [id], function (tx, results) {
           document.getElementById('XYZidempresacliente').value = results.rows.item(0).idEmpresaCliente;
       }, null);
    });
}

function leeTablaAsesorPromotorID() {
    var idM, idC
    db.transaction(function (tx) {
       tx.executeSql('SELECT * FROM Movil_EmpresaMatriz', [], function (tx, results) {
            idM = results.rows.item(0).idEmpresaMatriz;
       }, null);
    });
    db.transaction(function (tx) {
       tx.executeSql('SELECT * FROM Movil_EmpresaCliente WHERE idEmpresaMatriz = ?', [idM], function (tx, results) {
           idC = results.rows.item(0).idEmpresaCliente;
       }, null);
    }); 
    db.transaction(function (tx) {
       tx.executeSql('SELECT * FROM Movil_AsesorPromotor WHERE idEmpresaMatriz = ? and idEmpresaCliente = ?', [idM,idC], function (tx, results) {
           document.getElementById('XYZidasesorpromotor').value = results.rows.item(0).idAsesorPromotor;
     }, null);
    });
}


function guardarVerificacionAntecedentes() {
     var XYZidclie = document.getElementById('XYZidcliente').value; 
     var XYZidcli2 = document.getElementById('XYZidcliente').value; 
     var XYZidemma = document.getElementById('XYZidempresamatriz').value; 
     var XYZidemcl = document.getElementById('XYZidempresacliente').value; 
     var XYZidases = document.getElementById('XYZidasesorpromotor').value; 
     XYZfechat = localStorage.getItem('fechaturno'); 
     var XYZservic = parseInt("1");
     var e = document.getElementById("combo");
     var XYXtiposo = parseInt(e.options[e.selectedIndex].value);
     var XYZfechav = document.getElementById('fechavis').value; 
     var XYZplanvi = document.getElementById('textarea1').value; 
     var XYZadmini = document.getElementById('textarea2').value; 
     var XYZantece = document.getElementById('textarea3').value; 
     var XYZconclu = document.getElementById('textarea4').value; 
     var XYZriesgo = document.getElementById('textarea5').value; 
     var XYZnumemp = parseInt(document.getElementById("slider1").value); 
     var XYZemimss = parseInt(document.getElementById("slider2").value); 
     var XYZjustif = document.getElementById("slider-flip-m").value;     
     var f = document.getElementById("combo2");
     var XYXcheckl = parseInt(f.options[f.selectedIndex].value);

     var d = new Date();
     var dia = d.getDate();
     var mes = d.getMonth();
     var ano = d.getFullYear();
     if (dia < 10 && mes < 10) {
         var fecha = '0' + dia.toString() + '/0' + mes.toString() + '/' + ano.toString();
     }else if (dia < 10 && mes >= 10){   
         var fecha = '0' + dia.toString() + '/' + mes.toString() + '/' + ano.toString();
     }else if (dia >= 10 && mes < 10){
         var fecha = dia.toString() + '/0' + mes.toString() + '/' + ano.toString();
     }else{
         var fecha = dia.toString() + '/' + mes.toString() + '/' + ano.toString();
     }

     var hora = d.getHours();
     var min = d.getMinutes();
     if (hora < 10 && min < 10) {
         var time = '0' + hora.toString() + ':0' + min.toString();
     }else if (hora < 10 && min >= 10){   
         var time = '0' + hora.toString() + ':' + min.toString();
     }else if (hora >= 10 && min < 10){
         var time = hora.toString() + ':0' + min.toString();
     }else{
         var time = hora.toString() + ':' + min.toString();
     }     

     var latitud = "xx";
     var longitud = "xx";
     //navigator.geolocation.getCurrentPosition(onSuccess, onError);
     db.transaction(function(ctx) {
       ctx.executeSql("SELECT * FROM Movil_ServicioVerificacionAntecedente WHERE idServicio = 1 and idAcreditado = ? and fechaTurno = ?", [XYZidclie, XYZfechat], function(tx,checkres) {
            if(checkres.rows.length) {
                tx.executeSql("UPDATE Movil_ServicioVerificacionAntecedente SET idEmpresaMatriz=?,idEmpresaCliente=?,fechaTurno=?, idServicio=?,idAsesorPromotor=?,idAcreditado=?, idTipoSolicitud=?,fechaVisita=?,planViabilidadNegocio=?, administracion=?,antecedentesNegocio=?,conclusiones=?, riesgos=?,numeroEmpleados=?,numeroEmpleadosIMSS=?,justificaCredito=?, localizacionLongitud=?, localizacionLatitud=?, auditoriaFecha=?, auditoriaHora=?, sincronizado=0  WHERE idServicio = 1 and idAcreditado = ? and fechaTurno = ?", [XYZidemma, XYZidemcl, XYZfechat, XYZservic, XYZidases, XYZidcli2, XYXtiposo, XYZfechav, XYZplanvi, XYZadmini, XYZantece, XYZconclu, XYZriesgo, XYZnumemp, XYZemimss, XYZjustif, longitud, latitud, fecha, time, XYZidcli2, XYZfechat], okUpdatePage2, onErrorDB);
                tx.executeSql("UPDATE Movil_DatoBasicoAcreditado SET idChecklist=?, sincronizado=0 WHERE idServicio=1 AND idAcreditado=? and fechaTurno=?", [XYXcheckl, XYZidclie, XYZfechat], okUpdateChecklist, onErrorDB);
                //tx.executeSql("COMMIT",[]);
            } else {
                tx.executeSql("UPDATE Movil_DatoBasicoAcreditado SET idChecklist=?, sincronizado=0 WHERE idServicio=1 AND idAcreditado=? and fechaTurno=?", [XYXcheckl, XYZidclie, XYZfechat], okUpdatePage2, onErrorDB);
                tx.executeSql("INSERT INTO Movil_ServicioVerificacionAntecedente (idEmpresaMatriz, idEmpresaCliente, fechaTurno, idServicio, idAsesorPromotor, idAcreditado, idTipoSolicitud, fechaVisita, planViabilidadNegocio, administracion, antecedentesNegocio, conclusiones, riesgos, numeroEmpleados, numeroEmpleadosIMSS, justificaCredito, localizacionLongitud, localizacionLatitud, auditoriaFecha, auditoriaHora, sincronizado) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [XYZidemma, XYZidemcl, XYZfechat, XYZservic, XYZidases, XYZidcli2, XYXtiposo, XYZfechav, XYZplanvi, XYZadmini, XYZantece, XYZconclu, XYZriesgo, XYZnumemp, XYZemimss, XYZjustif, longitud, latitud, fecha, time, 0], okInsertPage2, onErrorDB);
              //tx.executeSql("COMMIT",[]);
           }
        });

     });  

}

function guardarNuevo() {
     var XYZidentificacion = document.getElementById('identificacion').value; 
     var XYZnombres = document.getElementById('nombres').value; 
     var XYZpaterno = document.getElementById('paterno').value; 
     var XYZmaterno = document.getElementById('materno').value; 
     var XYZdireccion = document.getElementById('direccion').value; 
     var XYZpoblacion = document.getElementById('poblacion').value; 
     var XYZciudad = document.getElementById('ciudad').value; 
     var XYZpais = document.getElementById('pais').value; 
     var XYZfijo = document.getElementById('fijo').value; 
     var XYZmovil = document.getElementById('movil').value; 
     var XYZemail = document.getElementById('email').value; 
     var XYZweb = document.getElementById('web').value; 
     var XYZidclie = document.getElementById('identificacion').value; 
     var XYZidcli2 = document.getElementById('identificacion').value; 
     var XYZidemma = document.getElementById('XYZidempresamatriz').value; 
     var XYZidemcl = document.getElementById('XYZidempresacliente').value; 
     var XYZidases = document.getElementById('XYZidasesorpromotor').value; 
     var XYZfechat = localStorage.getItem('fechaturno'); 
     var XYZservic = parseInt("1");
     var e = document.getElementById("combo");
     var XYXtiposo = parseInt(e.options[e.selectedIndex].value);
     //var XYZfechav = document.getElementById('fechavis').value; 
     var XYZfechav = localStorage.getItem('fechaturno'); 
     var XYZplanvi = document.getElementById('textarea1').value; 
     var XYZadmini = document.getElementById('textarea2').value; 
     var XYZantece = document.getElementById('textarea3').value; 
     var XYZconclu = document.getElementById('textarea4').value; 
     var XYZriesgo = document.getElementById('textarea5').value; 
     var XYZnumemp = parseInt(document.getElementById("slider1").value); 
     var XYZemimss = parseInt(document.getElementById("slider2").value); 
     var XYZjustif = document.getElementById("slider-flip-m").value;     
     var XYZsexo = "xx";     
     var XYZregion = "xx";     
     var f = document.getElementById("combo2");
     //var XYXcheckl = parseInt(f.options[f.selectedIndex].value);
     var XYXcheckl = 8;

     var d = new Date();
     var dia = d.getDate();
     var mes = d.getMonth();
     var ano = d.getFullYear();
     if (dia < 10 && mes < 10) {
         var fecha = '0' + dia.toString() + '/0' + mes.toString() + '/' + ano.toString();
     }else if (dia < 10 && mes >= 10){   
         var fecha = '0' + dia.toString() + '/' + mes.toString() + '/' + ano.toString();
     }else if (dia >= 10 && mes < 10){
         var fecha = dia.toString() + '/0' + mes.toString() + '/' + ano.toString();
     }else{
         var fecha = dia.toString() + '/' + mes.toString() + '/' + ano.toString();
     }

     var hora = d.getHours();
     var min = d.getMinutes();
     if (hora < 10 && min < 10) {
         var time = '0' + hora.toString() + ':0' + min.toString();
     }else if (hora < 10 && min >= 10){   
         var time = '0' + hora.toString() + ':' + min.toString();
     }else if (hora >= 10 && min < 10){
         var time = hora.toString() + ':0' + min.toString();
     }else{
         var time = hora.toString() + ':' + min.toString();
     } 
     var latitud = "xx";
     var longitud = "xx";

     if (XYZidentificacion == "" | XYZnombres == "" | XYZpaterno == "") {
        alert("Faltan datos básicos, debe ingresarlos antes de guardar");
        return false;
     } else {        
       //navigator.geolocation.getCurrentPosition(onSuccess, onError);
       db.transaction(function(ctx) {
          ctx.executeSql("SELECT * FROM Movil_ServicioVerificacionAntecedente WHERE idServicio = 1 and idAcreditado = ? and fechaTurno = ?", [XYZidclie, XYZfechat], function(tx,checkres) {
              if(checkres.rows.length) {
                   //tx.executeSql("COMMIT",[]);
              } else {
                   tx.executeSql("INSERT INTO Movil_DatoBasicoAcreditado (idEmpresaMatriz, idEmpresaCliente, fechaTurno, idServicio, idAsesorPromotor, idAcreditado, nombreAcreditado, paternoAcreditado, maternoAcreditado, direccionAcreditado, poblacionAcreditado, ciudadAcreditado, paisAcreditado, telefonoFijoAcreditado, telefonoMovilAcreditado, eMailAcreditado, webAcreditado, idChecklist, sexoAcreditado, regionAcreditado, sincronizado) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [XYZidemma, XYZidemcl, XYZfechat, XYZservic, XYZidases, XYZidentificacion, XYZnombres, XYZpaterno, XYZmaterno, XYZdireccion, XYZpoblacion, XYZciudad, XYZpais, XYZfijo, XYZmovil, XYZemail, XYZweb, XYXcheckl, XYZsexo, XYZregion, 0], okInsertPage2N, onErrorDB);
                   tx.executeSql("INSERT INTO Movil_ServicioVerificacionAntecedente (idEmpresaMatriz, idEmpresaCliente, fechaTurno, idServicio, idAsesorPromotor, idAcreditado, idTipoSolicitud, fechaVisita, planViabilidadNegocio, administracion, antecedentesNegocio, conclusiones, riesgos, numeroEmpleados, numeroEmpleadosIMSS, justificaCredito, localizacionLongitud, localizacionLatitud, auditoriaFecha, auditoriaHora, sincronizado) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [XYZidemma, XYZidemcl, XYZfechat, XYZservic, XYZidases, XYZidcli2, XYXtiposo, XYZfechav, XYZplanvi, XYZadmini, XYZantece, XYZconclu, XYZriesgo, XYZnumemp, XYZemimss, XYZjustif, longitud, latitud, fecha, time, 0], okInsertPage2, onErrorDB);
                   //tx.executeSql("COMMIT",[]);
              }
          });
       }); 
     } 
}

function guardarOperacionCredito() {
    var XYZidclie = document.getElementById('XYZidcliente').value; 
    var XYZidcli2 = document.getElementById('XYZidcliente').value; 
    var XYZfechat = localStorage.getItem('fechaturno'); 
    var XYZservic = parseInt("2");
    var XYZrefere = document.getElementById('c3').value; 
    var XYZfecmin = document.getElementById('c6').value; 
    var f = document.getElementById("combo2");
    var XYXcheckl = parseInt(f.options[f.selectedIndex].value);

    var d = new Date();
    var dia = d.getDate();
    var mes = d.getMonth();
    var ano = d.getFullYear();
    if (dia < 10 && mes < 10) {
        var fecha = '0' + dia.toString() + '/0' + mes.toString() + '/' + ano.toString();
    }else if (dia < 10 && mes >= 10){   
        var fecha = '0' + dia.toString() + '/' + mes.toString() + '/' + ano.toString();
    }else if (dia >= 10 && mes < 10){
        var fecha = dia.toString() + '/0' + mes.toString() + '/' + ano.toString();
    }else{
        var fecha = dia.toString() + '/' + mes.toString() + '/' + ano.toString();
    }

    var hora = d.getHours();
    var min = d.getMinutes();
    if (hora < 10 && min < 10) {
        var time = '0' + hora.toString() + ':0' + min.toString();
    }else if (hora < 10 && min >= 10){   
        var time = '0' + hora.toString() + ':' + min.toString();
    }else if (hora >= 10 && min < 10){
        var time = hora.toString() + ':0' + min.toString();
    }else{
        var time = hora.toString() + ':' + min.toString();
    }     

    var latitud = "xx";
    var longitud = "xx";
    //navigator.geolocation.getCurrentPosition(onSuccess, onError);
    db.transaction(function(tx) {
       tx.executeSql("UPDATE Movil_ServicioOperacionCredito SET referencia=?, fechaMinistracion=?, localizacionLongitud=?, localizacionLatitud=?, auditoriaFecha=?, auditoriaHora=?, modificado=1, sincronizado=0  where idServicio = 2 and idAcreditado = ? and fechaTurno = ?", [XYZrefere, XYZfecmin, longitud, latitud, fecha, time, XYZidcli2, XYZfechat], okUpdatePage2, onErrorDB);
        tx.executeSql("UPDATE Movil_DatoBasicoAcreditado SET idChecklist=?, sincronizado=0 WHERE idServicio=2 AND idAcreditado=? and fechaTurno=?", [XYXcheckl, XYZidclie, XYZfechat], okUpdateChecklist, onErrorDB);
    });  

}

function guardarSupervisionCreditoObservacion() {
    var XYZidclie = document.getElementById('XYZidcliente').value; 
    var XYZidcli2 = document.getElementById('XYZidcliente').value; 
    var XYZfechat = localStorage.getItem('fechaturno'); 
    var XYZservic = parseInt("3");
    var XYZfecobs = document.getElementById('c3').value; 
    var XYZcheck1 = document.getElementById('checkbox-v-2a').value; 
    var XYZcheck2 = document.getElementById('checkbox-v-2b').value; 
    var XYZcambio = document.getElementById('c4').value; 
    var f = document.getElementById("combo3");
    var XYXaplrec = parseInt(f.options[f.selectedIndex].value);
    var XYZobserv = document.getElementById('c5').value; 
    var f = document.getElementById("combo2");
    var XYXchelis = parseInt(f.options[f.selectedIndex].value);

    var d = new Date();
    var dia = d.getDate();
    var mes = d.getMonth();
    var ano = d.getFullYear();
    if (dia < 10 && mes < 10) {
        var fecha = '0' + dia.toString() + '/0' + mes.toString() + '/' + ano.toString();
    }else if (dia < 10 && mes >= 10){   
        var fecha = '0' + dia.toString() + '/' + mes.toString() + '/' + ano.toString();
    }else if (dia >= 10 && mes < 10){
        var fecha = dia.toString() + '/0' + mes.toString() + '/' + ano.toString();
    }else{
        var fecha = dia.toString() + '/' + mes.toString() + '/' + ano.toString();
    }

    var hora = d.getHours();
    var min = d.getMinutes();
    if (hora < 10 && min < 10) {
        var time = '0' + hora.toString() + ':0' + min.toString();
    }else if (hora < 10 && min >= 10){   
        var time = '0' + hora.toString() + ':' + min.toString();
    }else if (hora >= 10 && min < 10){
        var time = hora.toString() + ':0' + min.toString();
    }else{
        var time = hora.toString() + ':' + min.toString();
    }     

    var latitud = "xx";
    var longitud = "xx";
    //navigator.geolocation.getCurrentPosition(onSuccess, onError);
    db.transaction(function(tx) {
       tx.executeSql("UPDATE Movil_ServicioSupervisionCredito SET fechaObservacion=?, identifArtAdqObservacion=?, encontraronRecSegunPlanObservacion=?, cambiosObservacion=?, idAplicacionRecursoObservacion=?, observacionesObservacion=?, localizacionLongitud=?, localizacionLatitud=?, auditoriaFecha=?, auditoriaHora=?, modificado=1  where idServicio = 3 and idAcreditado = ? and fechaTurno = ?", [XYZfecobs, XYZcheck1, XYZcheck2, XYZcambio, XYXaplrec, XYZobserv, longitud, latitud, fecha, time, XYZidcli2, XYZfechat], okUpdatePage2, onErrorDB);
       tx.executeSql("UPDATE Movil_DatoBasicoAcreditado SET idChecklist=?, sincronizado=0 WHERE idServicio=3 AND idAcreditado=? and fechaTurno=?", [XYXchelis, XYZidclie, XYZfechat], okUpdateChecklist, onErrorDB);
    });  

}

function guardarSupervisionCreditoPlanInversion() {
    var XYZidclie = document.getElementById('XYZidcliente').value; 
    var XYZidcli2 = document.getElementById('XYZidcliente').value; 
    var XYZfechat = localStorage.getItem('fechaturno'); 
    var XYZservic = parseInt("3");
    var XYZmopres = document.getElementById('c3').value; 
    var XYZmepres = document.getElementById('c4').value; 
    var XYZinvcli = document.getElementById('c5').value; 
    var XYZtotinv = document.getElementById('c6').value; 
    var f = document.getElementById("combo2");
    var XYXchelis = parseInt(f.options[f.selectedIndex].value);

    var d = new Date();
    var dia = d.getDate();
    var mes = d.getMonth();
    var ano = d.getFullYear();
    if (dia < 10 && mes < 10) {
        var fecha = '0' + dia.toString() + '/0' + mes.toString() + '/' + ano.toString();
    }else if (dia < 10 && mes >= 10){   
        var fecha = '0' + dia.toString() + '/' + mes.toString() + '/' + ano.toString();
    }else if (dia >= 10 && mes < 10){
        var fecha = dia.toString() + '/0' + mes.toString() + '/' + ano.toString();
    }else{
        var fecha = dia.toString() + '/' + mes.toString() + '/' + ano.toString();
    }

    var hora = d.getHours();
    var min = d.getMinutes();
    if (hora < 10 && min < 10) {
        var time = '0' + hora.toString() + ':0' + min.toString();
    }else if (hora < 10 && min >= 10){   
        var time = '0' + hora.toString() + ':' + min.toString();
    }else if (hora >= 10 && min < 10){
        var time = hora.toString() + ':0' + min.toString();
    }else{
        var time = hora.toString() + ':' + min.toString();
    }     

    var latitud = "xx";
    var longitud = "xx";
    //navigator.geolocation.getCurrentPosition(onSuccess, onError);
    db.transaction(function(tx) {
       tx.executeSql("UPDATE Movil_ServicioSupervisionCredito SET montoPrestSolicPlanInv=?, plazoPrestSolicPlanInv=?, inversionClientePlanInv=?, totalPlanInv=?, localizacionLongitud=?, localizacionLatitud=?, auditoriaFecha=?, auditoriaHora=?, modificado=1  where idServicio = 3 and idAcreditado = ? and fechaTurno = ?", [XYZmopres, XYZmepres, XYZinvcli, XYZtotinv, longitud, latitud, fecha, time, XYZidcli2, XYZfechat], okUpdatePage2, onErrorDB);
       tx.executeSql("UPDATE Movil_DatoBasicoAcreditado SET idChecklist=?, sincronizado=0 WHERE idServicio=3 AND idAcreditado=? and fechaTurno=?", [XYXchelis, XYZidclie, XYZfechat], okUpdateChecklist, onErrorDB);
    });  

}

function guardarRecuperacionCredito() {
    var saldoVenc = document.getElementById('saldo').value; 
    var montoCanc = document.getElementById('pago').value; 
	if (montoCanc > saldoVenc) {
       var lengua = localStorage.getItem('idioma');         
       if (lengua==2) {  //ingles
          alert('Error: Amount paid is greater than balance due');
	   }else if(lengua==3){ //frances
          alert('Erreur: montant payé est supérieur solde');
	   }else if(lengua==4){ //portugues
          alert('Erro: Valor pago é maior do saldo devedor');
	   }else{               //español
          alert('Error: Monto pagado es mayor que saldo vencido');
       }	
	   return false
    }	
    var XYZidcli2 = document.getElementById('XYZidcliente').value; 
    var XYZfechat = localStorage.getItem('fechaturno'); 
    var XYZservic = parseInt("4");
    var XYZpago = document.getElementById('pago').value; 
    var f = document.getElementById("combo2");
    var XYXchelis = parseInt(f.options[f.selectedIndex].value);

    var d = new Date();
    var dia = d.getDate();
    var mes = d.getMonth();
    var ano = d.getFullYear();
    if (dia < 10 && mes < 10) {
        var fecha = '0' + dia.toString() + '/0' + mes.toString() + '/' + ano.toString();
    }else if (dia < 10 && mes >= 10){   
        var fecha = '0' + dia.toString() + '/' + mes.toString() + '/' + ano.toString();
    }else if (dia >= 10 && mes < 10){
        var fecha = dia.toString() + '/0' + mes.toString() + '/' + ano.toString();
    }else{
        var fecha = dia.toString() + '/' + mes.toString() + '/' + ano.toString();
    }

    var hora = d.getHours();
    var min = d.getMinutes();
    if (hora < 10 && min < 10) {
        var time = '0' + hora.toString() + ':0' + min.toString();
    }else if (hora < 10 && min >= 10){   
        var time = '0' + hora.toString() + ':' + min.toString();
    }else if (hora >= 10 && min < 10){
        var time = hora.toString() + ':0' + min.toString();
    }else{
        var time = hora.toString() + ':' + min.toString();
    }     

    var latitud = "xx";
    var longitud = "xx";

    //navigator.geolocation.getCurrentPosition(onSuccess, onError);
    db.transaction(function(tx) {
       tx.executeSql("UPDATE Movil_ServicioRecuperacionCredito SET montoCancelado=?, localizacionLongitud=?, localizacionLatitud=?, auditoriaFecha=?, auditoriaHora=?, modificado=1  where idServicio = 4 and idAcreditado = ? and fechaTurno = ?", [XYZpago, longitud, latitud, fecha, time, XYZidcli2, XYZfechat], okUpdatePage2, onErrorDB);
       tx.executeSql("UPDATE Movil_DatoBasicoAcreditado SET idChecklist=?, sincronizado=0 WHERE idServicio=4 AND idAcreditado=? and fechaTurno=?", [XYXchelis, XYZidcli2, XYZfechat], okUpdateChecklist, onErrorDB);
    });  

}

function guardarAhorroProgramado() {
    var saldoVenc = document.getElementById('saldo').value; 
    var montoCanc = document.getElementById('pago').value; 
	if (montoCanc < saldoVenc) {
       var lengua = localStorage.getItem('idioma');         
       if (lengua==2) {  //ingles
          alert('Error: Amount paid is less than the installment due');
	   }else if(lengua==3){ //frances
          alert('Erreur: Montant payé est inférieur au versement dû');
	   }else if(lengua==4){ //portugues
          alert('Erro: Valor pago é menor que a parcela devida');
	   }else{               //español
          alert('Error: Monto pagado es menor que la cuota vencida');
       }	
	   return false
    }	
    var XYZidcli2 = document.getElementById('XYZidcliente').value; 
    var XYZfechat = localStorage.getItem('fechaturno'); 
    var XYZservic = parseInt("7");
    var XYZpago = document.getElementById('pago').value; 
    var f = document.getElementById("combo2");
    var XYXchelis = parseInt(f.options[f.selectedIndex].value);
    var d = new Date();
    var dia = d.getDate();
    var mes = d.getMonth();
    var ano = d.getFullYear();
    if (dia < 10 && mes < 10) {
        var fecha = '0' + dia.toString() + '/0' + mes.toString() + '/' + ano.toString();
    }else if (dia < 10 && mes >= 10){   
        var fecha = '0' + dia.toString() + '/' + mes.toString() + '/' + ano.toString();
    }else if (dia >= 10 && mes < 10){
        var fecha = dia.toString() + '/0' + mes.toString() + '/' + ano.toString();
    }else{
        var fecha = dia.toString() + '/' + mes.toString() + '/' + ano.toString();
    }
 
    var hora = d.getHours();
    var min = d.getMinutes();
    if (hora < 10 && min < 10) {
        var time = '0' + hora.toString() + ':0' + min.toString();
    }else if (hora < 10 && min >= 10){   
        var time = '0' + hora.toString() + ':' + min.toString();
    }else if (hora >= 10 && min < 10){
        var time = hora.toString() + ':0' + min.toString();
    }else{
        var time = hora.toString() + ':' + min.toString();
    }     

    var latitud = "xx";
    var longitud = "xx";
     //navigator.geolocation.getCurrentPosition(onSuccess, onError);
    db.transaction(function(tx) {
       tx.executeSql("UPDATE Movil_ServicioRecuperacionCredito SET montoCancelado=?, localizacionLongitud=?, localizacionLatitud=?, auditoriaFecha=?, auditoriaHora=?, modificado=1  where idServicio = 7 and idAcreditado = ? and fechaTurno = ?", [XYZpago, longitud, latitud, fecha, time, XYZidcli2, XYZfechat], okUpdatePage2, onErrorDB);
       tx.executeSql("UPDATE Movil_DatoBasicoAcreditado SET idChecklist=?, sincronizado=0 WHERE idServicio=7 AND idAcreditado=? and fechaTurno=?", [XYXchelis, XYZidcli2, XYZfechat], okUpdateChecklist, onErrorDB);
        
    });  

}

function guardarAhorroSimple() {
    var montoCanc = document.getElementById('pago').value; 
    var XYZidcli2 = document.getElementById('XYZidcliente').value; 
    var XYZfechat = localStorage.getItem('fechaturno'); 
    var XYZservic = parseInt("7");
    var XYZpago = document.getElementById('pago').value; 
    var f = document.getElementById("combo2");
    var XYXchelis = parseInt(f.options[f.selectedIndex].value);

    var d = new Date();
    var dia = d.getDate();
    var mes = d.getMonth();
    var ano = d.getFullYear();
    if (dia < 10 && mes < 10) {
        var fecha = '0' + dia.toString() + '/0' + mes.toString() + '/' + ano.toString();
    }else if (dia < 10 && mes >= 10){   
        var fecha = '0' + dia.toString() + '/' + mes.toString() + '/' + ano.toString();
    }else if (dia >= 10 && mes < 10){
        var fecha = dia.toString() + '/0' + mes.toString() + '/' + ano.toString();
    }else{
        var fecha = dia.toString() + '/' + mes.toString() + '/' + ano.toString();
    }

    var hora = d.getHours();
    var min = d.getMinutes();
    if (hora < 10 && min < 10) {
        var time = '0' + hora.toString() + ':0' + min.toString();
    }else if (hora < 10 && min >= 10){   
        var time = '0' + hora.toString() + ':' + min.toString();
    }else if (hora >= 10 && min < 10){
        var time = hora.toString() + ':0' + min.toString();
    }else{
        var time = hora.toString() + ':' + min.toString();
    }     

    var latitud = "xx";
    var longitud = "xx";

    //navigator.geolocation.getCurrentPosition(onSuccess, onError);
    db.transaction(function(tx) {
       tx.executeSql("UPDATE Movil_ServicioRecuperacionCredito SET montoCancelado=?, localizacionLongitud=?, localizacionLatitud=?, auditoriaFecha=?, auditoriaHora=?, modificado=1  where idServicio = 8 and idAcreditado = ? and fechaTurno = ?", [XYZpago, longitud, latitud, fecha, time, XYZidcli2, XYZfechat], okUpdatePage2, onErrorDB);
       tx.executeSql("UPDATE Movil_DatoBasicoAcreditado SET idChecklist=?, sincronizado=0 WHERE idServicio=8 AND idAcreditado=? and fechaTurno=?", [XYXchelis, XYZidcli2, XYZfechat], okUpdateChecklist, onErrorDB);
    });  
}

function agregarPlanInversion() {
    var XYZmodo12 = document.getElementById('XYZmodo').value; 
    var XYZidclie = document.getElementById('XYZidcliente').value; 
    var XYZidcli2 = document.getElementById('XYZidcliente').value; 
    var XYZidemma = document.getElementById('XYZidempresamatriz').value; 
    var XYZidemcl = document.getElementById('XYZidempresacliente').value; 
    var XYZidases = document.getElementById('XYZidasesorpromotor').value; 
    var XYZfechat = localStorage.getItem('fechaturno'); 
    var XYZservic = parseInt("3");
    var XYZdescri = document.getElementById('desc').value; 
    var XYZcantid = document.getElementById('cant').value; 
    var XYZimport = document.getElementById('impo').value; 
    var f = document.getElementById("combo3");
    var XYXstatus = parseInt(f.options[f.selectedIndex].value);
    var XYZitem = 0
    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM Movil_DetallePlanInversion WHERE idServicio = 3 and idAcreditado = ? and fechaTurno=? ORDER BY itemPlanInv', [XYZidclie, XYZfechat], function (tx, results) {
            var len = results.rows.length, i;
            for (i = 0; i < len; i++) {
                XYZitem = results.rows.item(i).itemPlanInv 
             }
             XYZitem = XYZitem + 1

         }, null);
    }); 
    if (XYZitem == 0) {
        XYZitem = 1
    }
    db.transaction(function (tx) {
         tx.executeSql("INSERT INTO Movil_DetallePlanInversion (idEmpresaMatriz, idEmpresaCliente, fechaTurno, idServicio, idAsesorPromotor, idAcreditado, itemPlanInv, descripcionPlanInv, cantidadPlanInv, importePlanInv, idAplicacionRecurso, idMoneda) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [XYZidemma, XYZidemcl, XYZfechat, XYZservic, XYZidases, XYZidcli2, XYZitem, XYZdescri, XYZcantid, XYZimport, XYXstatus, null], okInsertPage2, onErrorDB);
    });  

}

function eliminarPlanInversion(item) {
    var XYZitem   = parseInt(item);
    var XYZmodo12 = document.getElementById('XYZmodo').value; 
    var XYZidclie = document.getElementById('XYZidcliente').value; 
    var XYZfechat = localStorage.getItem('fechaturno'); 
    db.transaction(function (tx) {
         tx.executeSql("DELETE FROM Movil_DetallePlanInversion WHERE idAcreditado=? AND fechaTurno=? AND itemPlanInv=?", [XYZidclie, XYZfechat, XYZitem], okDetelePage2, onErrorDB);
   });  

}

function editarPlanInversion(item) {
    var XYZitem   = parseInt(item);
    var XYZmodo12 = document.getElementById('XYZmodo').value; 
    var XYZidclie = document.getElementById('XYZidcliente').value; 
    var XYZfechat = localStorage.getItem('fechaturno'); 

    //FALTA EDICION PLAN INVERSION---------------------

}

function onErrorDB(tx, error) {
    alert(error.message);
}

function okUpdatePage2(tx, error) {
    //var lengua = localStorage.getItem('idioma');         
    //if (lengua==2) {
    //    alert("Modified data");
    //}else if(lengua==3){ //frances
    //    alert("Données Modifiées");
    //}else if(lengua==4){ //portugues
    //    alert("Dados Modificados");
    //}else{               //espa�ol
    //    alert("Datos Modificados");
    //}    
}

function okUpdateChecklist(tx, error) {
    var lengua = localStorage.getItem('idioma');         
    if (lengua==2) {
        alert("Modified data");
    }else if(lengua==3){ //frances
        alert("Données Modifiées");
    }else if(lengua==4){ //portugues
        alert("Dados Modificados");
    }else{               //espa�ol
        alert("Datos Modificados");
    }    
    //window.history.go(-1);
}

function okInsertPage2N(tx, error) {
    return false;  
}

function okInsertPage2(tx, error) {
    var lengua = localStorage.getItem('idioma');         
    if (lengua==2) {
        alert("Entered data");
    }else if(lengua==3){ //frances
        alert("Les données Saisies");
    }else if(lengua==4){ //portugues
        alert("Dados Inseridos");
    }else{               //espa�ol
        alert("Datos Ingresados");
    }    
    //window.history.go(-1);
}


function okDetelePage2(tx, error) {
    var lengua = localStorage.getItem('idioma');         
    if (lengua==2) {
        alert("Removed data");
    }else if(lengua==3){ //frances
        alert("Suppressions");
    }else if(lengua==4){ //portugues
        alert("Dados Retirados");
    }else{               //espa�ol
        alert("Datos Eliminados");
    }    
    //window.history.back();
 }

function fechaTurno() {
    fechat = localStorage.getItem('fechaturno');
    if (fechat == null) {
        var d = new Date();
        var dia = d.getDate();
        var mes = d.getMonth();
        var ano = d.getFullYear();
        if (dia < 10 && mes < 10) {
            var fecha = '0' + dia.toString() + '/0' + mes.toString() + '/' + ano.toString();
        }else if (dia < 10 && mes >= 10){   
            var fecha = '0' + dia.toString() + '/' + mes.toString() + '/' + ano.toString();
        }else if (dia >= 10 && mes < 10){
            var fecha = dia.toString() + '/0' + mes.toString() + '/' + ano.toString();
        }else{
            var fecha = dia.toString() + '/' + mes.toString() + '/' + ano.toString();
        }
    }else{
        var fecha = fechat;
    }
    document.getElementById('ParadigFecha').value = fecha;
}

function guardarFechaTurno(){
        creaTablaServicio(); 
        localStorage.setItem('servicioSN', "N"); 
        localStorage.setItem('servicioLEN', 0); 
        localStorage.setItem('servicioSN1', "N"); 
        localStorage.setItem('servicioSN2', "N"); 
        localStorage.setItem('servicioSN3', "N"); 
        localStorage.setItem('servicioSN4', "N");        
        localStorage.setItem('servicioSN6', "N");        
        localStorage.setItem('servicioSN7', "N");        
        var fecha = document.getElementById("ParadigFecha").value;     
        db.transaction(function(ctx) {
            ctx.executeSql("SELECT * FROM Movil_Servicio WHERE fechaTurno=?", [fecha], function(tx,checkres) {
                if(checkres.rows.length) {
                    var len = checkres.rows.length, i, j;
                    localStorage.setItem('servicioLEN', checkres.rows.length); 
                    localStorage.setItem('servicioSN', "S"); 
                    for (i = 0; i < len; i++) {
                        j = i + 1
                        localStorage.setItem('servicioID' + j, checkres.rows.item(i).idServicio); 
                        if (checkres.rows.item(i).idServicio==1) {
                            localStorage.setItem('servicioSN1', "S"); 
                        }else if (checkres.rows.item(i).idServicio==2) {
                            localStorage.setItem('servicioSN2', "S"); 
                        }else if (checkres.rows.item(i).idServicio==3) {
                            localStorage.setItem('servicioSN3', "S"); 
                        }else if (checkres.rows.item(i).idServicio==4) {
                            localStorage.setItem('servicioSN4', "S"); 
                        }else if (checkres.rows.item(i).idServicio==7) {
                            localStorage.setItem('servicioSN6', "S"); 
                        }else if (checkres.rows.item(i).idServicio==8) {
                            localStorage.setItem('servicioSN7', "S"); 
                        }
                        var lengua = localStorage.getItem('idioma');         
                        if (lengua==2) {
                            localStorage.setItem('servicioDES'+ j, checkres.rows.item(i).descripcionServicioIngles); 
                        }else if (lengua==3){
                            localStorage.setItem('servicioDES'+ j, checkres.rows.item(i).descripcionServicioFrances); 
                        }else if (lengua==4){
                            localStorage.setItem('servicioDES'+ j, checkres.rows.item(i).descripcionServicioPortugues); 
                        }else{
                            localStorage.setItem('servicioDES'+ j, checkres.rows.item(i).descripcionServicioCastellano); 
                        }     
                    }
                    localStorage.setItem('fechaturno', fecha); 
                    creaTablaTurno();
                    leeTablaTurno();
                    estadisticasTurno();
                    location.href="log-on.html";  
                    //llenaMenuIzquierdo();
                    //llenaMenuDerecha1();
                    //leeTablaDatoBasicoAcreditado_VentanaDerecha_1();
                    //llenaMenuDerecha2();
                    //leeTablaDatoBasicoAcreditado_VentanaDerecha_2();
                    //llenaMenuDerecha3();
                    //leeTablaDatoBasicoAcreditado_VentanaDerecha_3();
                    //llenaMenuDerecha4();
                    //leeTablaDatoBasicoAcreditado_VentanaDerecha_4();
                    
                } else {
                    localStorage.removeItem('fechaturno');
                    localStorage.setItem('servicioSN', "N"); 
                    localStorage.setItem('servicioLEN', 0); 
                    var lengua = localStorage.getItem('idioma');         
                    if (lengua==2) {
                         alert("Date does not contain data, nonexistent shift")
                    }else if(lengua==3){ //frances
                        alert("Date ne contient pas de données, shift inexistant")
                    }else if(lengua==4){ //portugues
                        alert("Data nao contém dados, deslocamento inexistente")
                    }else{               //espa�ol
                         alert("Fecha no contiene datos, Turno inexistente")
                    }
                    location.href="log-on.html";  
                    //window.location.href = 'page.htm';                     
                }
            }, null);
        });

}

//onSuccess Geolocation
//
function onSuccess(position) {
    var latitud =  position.coords.latitude;
    var longitud = position.coords.longitude;
}

// La funci�n 'callback' onError recibe un objeto `PositionError`.
//

function onError(error) {
    alert('c�digo: '    + error.code    + '\n' +
          'mensaje: ' + error.message + '\n');
}

function estadisticasTurno() {
    var moneda = "";
    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM Movil_Moneda WHERE defaultMoneda="S"', [], function (tx, results) {
            if(results.rows.length) {
                moneda = results.rows.item(0).idMoneda;
            }
        }, null);         
    }); 
    var fechat = localStorage.getItem('fechaturno');         
    db.transaction(function (tx) {
       tx.executeSql('SELECT SUM(montoCancelado) as mcan FROM Movil_ServicioRecuperacionCredito WHERE fechaTurno=?', [fechat], function (tx, results) {
           if (results.rows.item(0).mcan==null) {
                document.querySelector('#c3').innerHTML = '0' + ' ' + moneda;
           }else{    
               document.querySelector('#c3').innerHTML = results.rows.item(0).mcan + ' ' + moneda;
           }
       }, null);
    }); 
    db.transaction(function (tx) {
        tx.executeSql('SELECT count(idEmpresaMatriz) as mver FROM Movil_ServicioVerificacionAntecedente WHERE fechaTurno=?', [fechat], function (tx, results) {
           if (results.rows.item(0).mver==null) {
               document.querySelector('#c4').innerHTML = '0';
           }else{    
               document.querySelector('#c4').innerHTML = results.rows.item(0).mver;
           }
         }, null);
     }); 
    db.transaction(function (tx) {
        tx.executeSql('SELECT SUM(modificado) as mver FROM Movil_ServicioOperacionCredito WHERE fechaTurno=?', [fechat], function (tx, results) {
           if (results.rows.item(0).mver==null) {
               document.querySelector('#c5').innerHTML = '0';
           }else{    
               document.querySelector('#c5').innerHTML = results.rows.item(0).mver;
           }
        }, null);
     }); 

    db.transaction(function (tx) {
        tx.executeSql('SELECT SUM(montoMinistracion) as mver FROM Movil_ServicioOperacionCredito WHERE fechaTurno=? and modificado=1', [fechat], function (tx, results) {
           if (results.rows.item(0).mver==null) {
               document.querySelector('#c6').innerHTML = '0' + ' ' + moneda;
           }else{    
               document.querySelector('#c6').innerHTML = results.rows.item(0).mver + ' ' + moneda;
           }
        }, null);
     }); 
    
    db.transaction(function (tx) {
        tx.executeSql('SELECT SUM(modificado) as mver FROM Movil_ServicioSupervisionCredito WHERE fechaTurno=?', [fechat], function (tx, results) {
           if (results.rows.item(0).mver==null) {
               document.querySelector('#c7').innerHTML = '0';
           }else{    
               document.querySelector('#c7').innerHTML = results.rows.item(0).mver;
           }
        }, null);
     }); 

    db.transaction(function (tx) {
        tx.executeSql('SELECT SUM(modificado) as mver FROM Movil_ServicioRecuperacionCredito WHERE fechaTurno=?', [fechat], function (tx, results) {
           if (results.rows.item(0).mver==null) {
                document.querySelector('#c8').innerHTML = '0';
           }else{    
               document.querySelector('#c8').innerHTML = results.rows.item(0).mver;
           }
        }, null);
     }); 

    db.transaction(function (tx) {
        tx.executeSql('SELECT SUM(montoCancelado) as mver FROM Movil_ServicioRecuperacionCredito', [], function (tx, results) {
           if (results.rows.item(0).mver==null) {
                document.querySelector('#c9').innerHTML = '0' + ' ' + moneda;
           }else{    
               document.querySelector('#c9').innerHTML = results.rows.item(0).mver + ' ' + moneda;
           }
        }, null);
     }); 
}

function estadisticaPorcentajeTotalRecaudado() {
    var montoCanc = 0;
	var saldoVenc = 0;
    var resultado = 0;
    db.transaction(function (tx) {
        tx.executeSql('SELECT SUM(montoCancelado) as mver FROM Movil_ServicioRecuperacionCredito', [], function (tx, results) {
           if (results.rows.item(0).mver==null) {
               montoCanc = 0;
          }else{    
               montoCanc = results.rows.item(0).mver;
           }
        }, null);
     }); 
    db.transaction(function (tx) {
        tx.executeSql('SELECT SUM(saldoVencido) as mver FROM Movil_ServicioRecuperacionCredito', [], function (tx, results) {
           if (results.rows.item(0).mver==null) {
                saldoVenc = 0;
           }else{    
               saldoVenc = results.rows.item(0).mver;
           }
           resultado = (montoCanc * 100) / saldoVenc;
 		   resultado = resultado.toFixed(2);
           document.querySelector('#porcentaje').innerHTML = '<div class="bar-percentage" data-percentage="' + resultado + '"></div>';
		   $('.bar-percentage[data-percentage]').each(function () {
				 var percentage = Math.ceil($(this).attr('data-percentage')) + '%';
				 $(this).text(percentage) && $(this).siblings().children().css('width',percentage);
		   });
		}, null);
	}); 
}

function searchBoton() {
    llenaSearch1();
    leeTablaDatoBasicoAcreditado_Search_1();
    llenaSearch2();
    leeTablaDatoBasicoAcreditado_Search_2();
    llenaSearch3();
    leeTablaDatoBasicoAcreditado_Search_3();
    llenaSearch4();
    leeTablaDatoBasicoAcreditado_Search_4();
    llenaSearch7();
    leeTablaDatoBasicoAcreditado_Search_7();
    llenaSearch8();
    leeTablaDatoBasicoAcreditado_Search_8();
}

function llenaSearch1() {
    var XYZfechat = localStorage.getItem('fechaturno'); 
    var lengua = localStorage.getItem('idioma');         
    var servSN =  localStorage.getItem('servicioSN1'); 
    var servicioDES = localStorage.getItem('servicioDES1'); 
    var buscax = '%' + document.getElementById("searchx").value + '%';     
    if(servSN=="S" && buscax != '%%') {
        document.querySelector('#ulMenuDerecha').innerHTML = '<li>' + '<h2>' + servicioDES + '</li>' + '</h2>';
        document.querySelector('#ulMenuDerecha').innerHTML += '<li id="clientes1" name="clientes1"></li>';
    }     
}

function llenaSearch2() {
    var XYZfechat = localStorage.getItem('fechaturno'); 
    var lengua = localStorage.getItem('idioma');         
    var servSN =  localStorage.getItem('servicioSN2'); 
    var servicioDES = localStorage.getItem('servicioDES2'); 
    var buscax = '%' + document.getElementById("searchx").value + '%';     
    if(servSN=="S" && buscax != '%%') {
        document.querySelector('#ulMenuDerecha').innerHTML += '<li>' + '<h2>' + servicioDES + '</li>' + '</h2>';
        document.querySelector('#ulMenuDerecha').innerHTML += '<li id="clientes2" name="clientes2"></li>';
    }     
}

function llenaSearch3() {
    var XYZfechat = localStorage.getItem('fechaturno'); 
    var lengua = localStorage.getItem('idioma');         
    var servSN =  localStorage.getItem('servicioSN3'); 
    var servicioDES = localStorage.getItem('servicioDES3'); 
    var buscax = '%' + document.getElementById("searchx").value + '%';     
    if(servSN=="S" && buscax != '%%') {
         document.querySelector('#ulMenuDerecha').innerHTML += '<li>' + '<h2>' + servicioDES + '</li>' + '</h2>';
        document.querySelector('#ulMenuDerecha').innerHTML += '<li id="clientes3" name="clientes3"></li>';
    }     
}

function llenaSearch4() {
    var XYZfechat = localStorage.getItem('fechaturno'); 
    var lengua = localStorage.getItem('idioma');         
    var servSN =  localStorage.getItem('servicioSN4'); 
    var servicioDES = localStorage.getItem('servicioDES4'); 
    var buscax = '%' + document.getElementById("searchx").value + '%';     
    if(servSN=="S" && buscax != '%%') {
        document.querySelector('#ulMenuDerecha').innerHTML += '<li>' + '<h2>' + servicioDES + '</li>' + '</h2>';
        document.querySelector('#ulMenuDerecha').innerHTML += '<li id="clientes4" name="clientes4"></li>';
    }     
}

function llenaSearch7() {
    var XYZfechat = localStorage.getItem('fechaturno'); 
    var lengua = localStorage.getItem('idioma');         
    var servSN =  localStorage.getItem('servicioSN6'); 
    var servicioDES = localStorage.getItem('servicioDES6'); 
    var buscax = '%' + document.getElementById("searchx").value + '%';     
    if(servSN=="S" && buscax != '%%') {
        document.querySelector('#ulMenuDerecha').innerHTML += '<li>' + '<h2>' + servicioDES + '</li>' + '</h2>';
        document.querySelector('#ulMenuDerecha').innerHTML += '<li id="clientes7" name="clientes7"></li>';
    }     
}

function llenaSearch8() {
    var XYZfechat = localStorage.getItem('fechaturno'); 
    var lengua = localStorage.getItem('idioma');         
    var servSN =  localStorage.getItem('servicioSN7'); 
    var servicioDES = localStorage.getItem('servicioDES7'); 
    var buscax = '%' + document.getElementById("searchx").value + '%';     
    if(servSN=="S" && buscax != '%%') {
        document.querySelector('#ulMenuDerecha').innerHTML += '<li>' + '<h2>' + servicioDES + '</li>' + '</h2>';
        document.querySelector('#ulMenuDerecha').innerHTML += '<li id="clientes8" name="clientes8"></li>';
    }     
}

function leeTablaDatoBasicoAcreditado_Search_1() {
    var fechat = localStorage.getItem('fechaturno'); 
    var servSN =  localStorage.getItem('servicioSN1'); 
    var buscax = '%' + document.getElementById("searchx").value + '%';     
    if(servSN=="S" && buscax != '%%') {
      db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM Movil_DatoBasicoAcreditado WHERE idServicio = 1 and fechaTurno=? and (nombreAcreditado LIKE ? or paternoAcreditado LIKE ? or maternoAcreditado LIKE ?) ORDER BY nombreAcreditado', [fechat, buscax, buscax, buscax], function (tx, results) {
            if(results.rows.length) {
                var len = results.rows.length, i;
                for (i = 0; i < len; i++) {
                    document.querySelector('#clientes1').innerHTML += '<div class="row"><hr style="position:relative; padding:0; height:0; width: 100%; max-size: 1px; line-height:0; border:none; border-bottom: 1px solid #404040;"><a href="page2-1.html?id=' + results.rows.item(i).idAcreditado + '" rel="external">' + results.rows.item(i).nombreAcreditado + ' ' + results.rows.item(i).paternoAcreditado + ' ' + results.rows.item(i).maternoAcreditado + '</a></div>';
                }
            }
            document.querySelector('#clientes1').innerHTML += '<div class="row"><hr style="position:relative; padding:0; height:0; width: 100%; max-size: 1px; line-height:0; border:none; border-bottom: 1px solid #404040;"></a></div>';
        }, null);
      });
    }
}

function leeTablaDatoBasicoAcreditado_Search_2() {
    var fechat = localStorage.getItem('fechaturno'); 
    var servSN =  localStorage.getItem('servicioSN2'); 
    var buscax = '%' + document.getElementById("searchx").value + '%';     
    if(servSN=="S" && buscax != '%%') {
      db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM Movil_DatoBasicoAcreditado WHERE idServicio = 2 and fechaTurno=? and (nombreAcreditado LIKE ? or paternoAcreditado LIKE ? or maternoAcreditado LIKE ?) ORDER BY nombreAcreditado', [fechat, buscax, buscax, buscax], function (tx, results) {
            if(results.rows.length) {
                var len = results.rows.length, i;
                for (i = 0; i < len; i++) {
                    document.querySelector('#clientes2').innerHTML += '<div class="row"><hr style="position:relative; padding:0; height:0; width: 100%; max-size: 1px; line-height:0; border:none; border-bottom: 1px solid #404040;"><a href="page3-1.html?id=' + results.rows.item(i).idAcreditado + '" rel="external">' + results.rows.item(i).nombreAcreditado + ' ' + results.rows.item(i).paternoAcreditado + ' ' + results.rows.item(i).maternoAcreditado + '</a></div>';
                }
            }
            document.querySelector('#clientes2').innerHTML += '<div class="row"><hr style="position:relative; padding:0; height:0; width: 100%; max-size: 1px; line-height:0; border:none; border-bottom: 1px solid #404040;"></a></div>';
        }, null);
      });
    }
}

function leeTablaDatoBasicoAcreditado_Search_3() {
    var fechat = localStorage.getItem('fechaturno'); 
    var servSN =  localStorage.getItem('servicioSN3'); 
    var buscax = '%' + document.getElementById("searchx").value + '%';     
    if(servSN=="S" && buscax != '%%') {
      db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM Movil_DatoBasicoAcreditado WHERE idServicio = 3 and fechaTurno=? and (nombreAcreditado LIKE ? or paternoAcreditado LIKE ? or maternoAcreditado LIKE ?) ORDER BY nombreAcreditado', [fechat, buscax, buscax, buscax], function (tx, results) {
            if(results.rows.length) {
                var len = results.rows.length, i;
                for (i = 0; i < len; i++) {
                    document.querySelector('#clientes3').innerHTML += '<div class="row"><hr style="position:relative; padding:0; height:0; width: 100%; max-size: 1px; line-height:0; border:none; border-bottom: 1px solid #404040;"> <a href="page4-1.html?id=' + results.rows.item(i).idAcreditado + '" rel="external">' + results.rows.item(i).nombreAcreditado + ' ' + results.rows.item(i).paternoAcreditado + ' ' + results.rows.item(i).maternoAcreditado + '</a></div>';
                }
            }
            document.querySelector('#clientes3').innerHTML += '<div class="row"><hr style="position:relative; padding:0; height:0; width: 100%; max-size: 1px; line-height:0; border:none; border-bottom: 1px solid #404040;"></a></div>';
        }, null);
      });
    }
}

function leeTablaDatoBasicoAcreditado_Search_4() {
    var fechat = localStorage.getItem('fechaturno'); 
    var servSN =  localStorage.getItem('servicioSN4'); 
    var buscax = '%' + document.getElementById("searchx").value + '%';     
    if(servSN=="S" && buscax != '%%') {
      db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM Movil_DatoBasicoAcreditado WHERE idServicio = 4 and fechaTurno=? and (nombreAcreditado LIKE ? or paternoAcreditado LIKE ? or maternoAcreditado LIKE ?) ORDER BY nombreAcreditado', [fechat, buscax, buscax, buscax], function (tx, results) {
            if(results.rows.length) {
                var len = results.rows.length, i;
                for (i = 0; i < len; i++) {
                    document.querySelector('#clientes4').innerHTML += '<div class="row"><hr style="position:relative; padding:0; height:0; width: 100%; max-size: 1px; line-height:0; border:none; border-bottom: 1px solid #404040;"><a href="page5-1.html?id=' + results.rows.item(i).idAcreditado + '" rel="external">' + results.rows.item(i).nombreAcreditado + ' ' + results.rows.item(i).paternoAcreditado + ' ' + results.rows.item(i).maternoAcreditado + '</a></div>';
                }
            }
            document.querySelector('#clientes4').innerHTML += '<div class="row"><hr style="position:relative; padding:0; height:0; width: 100%; max-size: 1px; line-height:0; border:none; border-bottom: 1px solid #404040;"></a></div>';
        }, null);
      });
    }
}

function leeTablaDatoBasicoAcreditado_Search_7() {
    var fechat = localStorage.getItem('fechaturno'); 
    var servSN =  localStorage.getItem('servicioSN6'); 
    var buscax = '%' + document.getElementById("searchx").value + '%';     
    if(servSN=="S" && buscax != '%%') {
      db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM Movil_DatoBasicoAcreditado WHERE idServicio = 7 and fechaTurno=? and (nombreAcreditado LIKE ? or paternoAcreditado LIKE ? or maternoAcreditado LIKE ?) ORDER BY nombreAcreditado', [fechat, buscax, buscax, buscax], function (tx, results) {
            if(results.rows.length) {
                var len = results.rows.length, i;
                for (i = 0; i < len; i++) {
                    document.querySelector('#clientes7').innerHTML += '<div class="row"><hr style="position:relative; padding:0; height:0; width: 100%; max-size: 1px; line-height:0; border:none; border-bottom: 1px solid #404040;"><a href="page7-1.html?id=' + results.rows.item(i).idAcreditado + '" rel="external">' + results.rows.item(i).nombreAcreditado + ' ' + results.rows.item(i).paternoAcreditado + ' ' + results.rows.item(i).maternoAcreditado + '</a></div>';
                }
            }
            document.querySelector('#clientes7').innerHTML += '<div class="row"><hr style="position:relative; padding:0; height:0; width: 100%; max-size: 1px; line-height:0; border:none; border-bottom: 1px solid #404040;"></a></div>';
        }, null);
      });
    }
}

function leeTablaDatoBasicoAcreditado_Search_8() {
    var fechat = localStorage.getItem('fechaturno'); 
    var servSN =  localStorage.getItem('servicioSN7'); 
    var buscax = '%' + document.getElementById("searchx").value + '%';     
    if(servSN=="S" && buscax != '%%') {
      db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM Movil_DatoBasicoAcreditado WHERE idServicio = 8 and fechaTurno=? and (nombreAcreditado LIKE ? or paternoAcreditado LIKE ? or maternoAcreditado LIKE ?) ORDER BY nombreAcreditado', [fechat, buscax, buscax, buscax], function (tx, results) {
            if(results.rows.length) {
                var len = results.rows.length, i;
                for (i = 0; i < len; i++) {
                    document.querySelector('#clientes8').innerHTML += '<div class="row"><hr style="position:relative; padding:0; height:0; width: 100%; max-size: 1px; line-height:0; border:none; border-bottom: 1px solid #404040;"><a href="page8-1.html?id=' + results.rows.item(i).idAcreditado + '" rel="external">' + results.rows.item(i).nombreAcreditado + ' ' + results.rows.item(i).paternoAcreditado + ' ' + results.rows.item(i).maternoAcreditado + '</a></div>';
                }
            }
            document.querySelector('#clientes8').innerHTML += '<div class="row"><hr style="position:relative; padding:0; height:0; width: 100%; max-size: 1px; line-height:0; border:none; border-bottom: 1px solid #404040;"></a></div>';
        }, null);
      });
    }
}

function cerrarTurno() {
    var idioma = localStorage.getItem('idioma');         
    var fecha = localStorage.getItem('fechaturno');
    var c1= document.getElementById('s1').value;
    var c2= document.getElementById('s2').value;
    var c3= document.getElementById('s3').value;
    var c4= document.getElementById('s4').value;
    var c5= document.getElementById('s5').value;
    var c6= document.getElementById('s6').value;
    var c7= document.getElementById('s7').value;
    var c8= document.getElementById('s8').value;
    db.transaction(function(ctx) {
        ctx.executeSql("SELECT * FROM Movil_Turno WHERE fechaTurno=?", [fecha], function(tx,checkres) {
            if(checkres.rows.length) {
                tx.executeSql("UPDATE Movil_Turno SET cantidadVerificacionAntecedenteTurno=?, cantidadOperacionDesembolsoTurno=?, cantidadSupervisionesTurno=?, cantidadRecaudacionTurno=?, montoTotalDesembolsoTurno=?, montoRecaudadoTurno=?, montoTotalRecaudadoTurno=?, montoTotalProgramadoTurno=?, montoTotalSimpleTurno=? WHERE fechaTurno=?", [c1,c2,c3,c4,c5,c6,c6,c7,c8,fecha], okUpdateChecklist, onErrorDB);
                //tx.executeSql("COMMIT",[]);
            }
        }, null);
    });
    if (idioma==2) {
        alert("Shift has been closed")
    }else if(idioma==3){ //frances
        alert("Maj a été fermé")
    }else if(idioma==4){ //portugues
        alert("Mudança foi fechado")
    }else{               //español
        alert("Turno ha sido cerrado")
    }
}

function spanBarra1() {
    var fecha = localStorage.getItem('fechaturno');
    var cantverant, totverant, resultado;
    db.transaction(function (tx) {
        tx.executeSql('SELECT count(idEmpresaMatriz) as mver FROM Movil_DatoBasicoAcreditado WHERE idServicio = 1 and fechaTurno=?', [fecha], function (tx, results) {
           if (results.rows.item(0).mver == null) {
               totverant = 0;
           } else {
               totverant = results.rows.item(0).mver;
           }
        }, null);
        tx.executeSql('SELECT count(idEmpresaMatriz) as mver FROM Movil_ServicioVerificacionAntecedente WHERE fechaTurno=?', [fecha], function (tx, results) {
           if (results.rows.item(0).mver == null) {
               cantverant = 0;
           } else {
               cantverant = results.rows.item(0).mver;
           }
           if (cantverant==0 && totverant==0) {
               resultado = 0;
           } else {
               resultado = (cantverant * 100) / totverant;
           }
            document.querySelector('#barra1').innerHTML = '<span style="width: ' + resultado + '%"></span>';
            document.getElementById('s1').value = cantverant;
        }, null);
     }); 
}

function spanBarra2() {
    var fecha = localStorage.getItem('fechaturno');
    var cantverant, totverant, resultado;
    db.transaction(function (tx) {
        tx.executeSql('SELECT count(idEmpresaMatriz) as mver FROM Movil_DatoBasicoAcreditado WHERE idServicio = 2 and fechaTurno=?', [fecha], function (tx, results) {
           if (results.rows.item(0).mver == null) {
               totverant = 0;
           } else {
               totverant = results.rows.item(0).mver;
           }
        }, null);
        tx.executeSql('SELECT SUM(modificado) as mver FROM Movil_ServicioOperacionCredito WHERE fechaTurno=?', [fecha], function (tx, results) {
           if (results.rows.item(0).mver == null) {
               cantverant = 0;
           } else {
               cantverant = results.rows.item(0).mver;
           }
           if (cantverant==0 && totverant==0) {
               resultado = 0;
           } else {
               resultado = (cantverant * 100) / totverant;
           }
           document.querySelector('#barra2').innerHTML = '<span style="width: ' + resultado + '%"></span>';
           document.getElementById('s2').value = cantverant;
        }, null);
        tx.executeSql('SELECT SUM(montoMinistracion) as mver FROM Movil_ServicioOperacionCredito WHERE fechaTurno=? and modificado=1', [fecha], function (tx, results) {
           if (results.rows.item(0).mver==null) {
               document.getElementById('s5').value = 0;
           }else{    
               document.getElementById('s5').value = results.rows.item(0).mver;
           }
        }, null);
     }); 
}

function spanBarra3() {
    var fecha = localStorage.getItem('fechaturno');
    var cantverant, totverant, resultado;
    db.transaction(function (tx) {
        tx.executeSql('SELECT count(idEmpresaMatriz) as mver FROM Movil_DatoBasicoAcreditado WHERE idServicio = 3 and fechaTurno=?', [fecha], function (tx, results) {
           if (results.rows.item(0).mver == null) {
               totverant = 0;
           } else {
               totverant = results.rows.item(0).mver;
           }
        }, null);
        tx.executeSql('SELECT SUM(modificado) as mver FROM Movil_ServicioSupervisionCredito WHERE fechaTurno=?', [fecha], function (tx, results) {
           if (results.rows.item(0).mver == null) {
               cantverant = 0;
           } else {
               cantverant = results.rows.item(0).mver;
           }
           if (cantverant==0 && totverant==0) {
               resultado = 0;
           } else {
               resultado = (cantverant * 100) / totverant;
           }
           document.querySelector('#barra3').innerHTML = '<span style="width: ' + resultado + '%"></span>';
           document.getElementById('s3').value = cantverant;
        }, null);
     }); 
}

function spanBarra4() {
    var fecha = localStorage.getItem('fechaturno');
    var cantverant, totverant, resultado;
    db.transaction(function (tx) {
        tx.executeSql('SELECT count(idEmpresaMatriz) as mver FROM Movil_DatoBasicoAcreditado WHERE idServicio = 4 and fechaTurno=?', [fecha], function (tx, results) {
           if (results.rows.item(0).mver == null) {
               totverant = 0;
           } else {
               totverant = results.rows.item(0).mver;
           }
        }, null);
        tx.executeSql('SELECT SUM(modificado) as mver FROM Movil_ServicioRecuperacionCredito WHERE fechaTurno=?', [fecha], function (tx, results) {
           if (results.rows.item(0).mver == null) {
               cantverant = 0;
           } else {
               cantverant = results.rows.item(0).mver;
           }
           if (cantverant==0 && totverant==0) {
               resultado = 0;
           } else {
               resultado = (cantverant * 100) / totverant;
           }
           document.querySelector('#barra4').innerHTML = '<span style="width: ' + resultado + '%"></span>';
           document.getElementById('s4').value = cantverant;
        }, null);
        tx.executeSql('SELECT SUM(montoCancelado) as mcan FROM Movil_ServicioRecuperacionCredito WHERE fechaTurno=?', [fecha], function (tx, results) {
           if (results.rows.item(0).mver==null) {
               document.getElementById('s6').value = 0;
           }else{    
               document.getElementById('s6').value = results.rows.item(0).mcan;
           }
        }, null);
     }); 
}

function articleBarra1() {
    var fecha = localStorage.getItem('fechaturno');
    var cantverant, totverant, resultado;
    db.transaction(function (tx) {
        tx.executeSql('SELECT count(idEmpresaMatriz) as mver FROM Movil_DatoBasicoAcreditado WHERE idServicio = 1 and fechaTurno=?', [fecha], function (tx, results) {
           if (results.rows.item(0).mver == null) {
               totverant = 0;
           } else {
               totverant = results.rows.item(0).mver;
           }
        }, null);
        tx.executeSql('SELECT count(idEmpresaMatriz) as mver FROM Movil_ServicioVerificacionAntecedente WHERE fechaTurno=?', [fecha], function (tx, results) {
           if (results.rows.item(0).mver == null) {
               cantverant = 0;
           } else {
               cantverant = results.rows.item(0).mver;
           }
           if (cantverant==0 && totverant==0) {
               resultado = 0;
           } else {
               resultado = (cantverant * 100) / totverant;
			   resultado = resultado.toFixed(2)
           }
            document.querySelector('#c4').innerHTML = cantverant + '/' + totverant + ' (' + resultado + '%)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp';
        }, null);
     }); 
}

function articleBarra2() {
    var fecha = localStorage.getItem('fechaturno');
    var cantverant, totverant, resultado;
    db.transaction(function (tx) {
        tx.executeSql('SELECT count(idEmpresaMatriz) as mver FROM Movil_DatoBasicoAcreditado WHERE idServicio = 2 and fechaTurno=?', [fecha], function (tx, results) {
           if (results.rows.item(0).mver == null) {
               totverant = 0;
           } else {
               totverant = results.rows.item(0).mver;
           }
        }, null);
        tx.executeSql('SELECT SUM(modificado) as mver FROM Movil_ServicioOperacionCredito WHERE fechaTurno=?', [fecha], function (tx, results) {
           if (results.rows.item(0).mver == null) {
               cantverant = 0;
           } else {
               cantverant = results.rows.item(0).mver;
           }
           if (cantverant==0 && totverant==0) {
               resultado = 0;
           } else {
               resultado = (cantverant * 100) / totverant;
			   resultado = resultado.toFixed(2)
           }
            document.querySelector('#c5').innerHTML = cantverant + '/' + totverant + ' (' + resultado + '%)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp';
        }, null);
     }); 
}

function articleBarra3() {
    var fecha = localStorage.getItem('fechaturno');
    var cantverant, totverant, resultado;
    db.transaction(function (tx) {
        tx.executeSql('SELECT count(idEmpresaMatriz) as mver FROM Movil_DatoBasicoAcreditado WHERE idServicio = 3 and fechaTurno=?', [fecha], function (tx, results) {
           if (results.rows.item(0).mver == null) {
               totverant = 0;
           } else {
               totverant = results.rows.item(0).mver;
           }
        }, null);
        tx.executeSql('SELECT SUM(modificado) as mver FROM Movil_ServicioSupervisionCredito WHERE fechaTurno=?', [fecha], function (tx, results) {
           if (results.rows.item(0).mver == null) {
               cantverant = 0;
           } else {
               cantverant = results.rows.item(0).mver;
           }
           if (cantverant==0 && totverant==0) {
               resultado = 0;
           } else {
               resultado = (cantverant * 100) / totverant;
 			   resultado = resultado.toFixed(2)
          }
            document.querySelector('#c6').innerHTML = cantverant + '/' + totverant + ' (' + resultado + '%)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp';
        }, null);
     }); 
}

function articleBarra4() {
    var fecha = localStorage.getItem('fechaturno');
    var cantverant, totverant, resultado;
    db.transaction(function (tx) {
        tx.executeSql('SELECT count(idEmpresaMatriz) as mver FROM Movil_DatoBasicoAcreditado WHERE idServicio = 4 and fechaTurno=?', [fecha], function (tx, results) {
           if (results.rows.item(0).mver == null) {
               totverant = 0;
           } else {
               totverant = results.rows.item(0).mver;
           }
        }, null);
        tx.executeSql('SELECT SUM(modificado) as mver FROM Movil_ServicioRecuperacionCredito WHERE fechaTurno=?', [fecha], function (tx, results) {
           if (results.rows.item(0).mver == null) {
               cantverant = 0;
           } else {
               cantverant = results.rows.item(0).mver;
           }
           if (cantverant==0 && totverant==0) {
               resultado = 0;
           } else {
               resultado = (cantverant * 100) / totverant;
			   resultado = resultado.toFixed(2)
           }
            document.querySelector('#c7').innerHTML = cantverant + '/' + totverant + ' (' + resultado + '%)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp';
        }, null);
     }); 
}

function reporteTablaTurnos() {
    var fecha = localStorage.getItem('fechaturno');
    var pagina = localStorage.getItem('paginaReporteTurno');
	localStorage.setItem('paginaTopeReporteTurno', 0); 
    db.transaction(function(ctx) {
        ctx.executeSql("SELECT * FROM Movil_Turno ORDER BY fechaTurno DESC" , [], function(tx,checkres) {
            if(checkres.rows.length) {
              document.querySelector('#fechaturno').innerHTML = checkres.rows.item(pagina-1).fechaTurno;
              document.querySelector('#verificacion').innerHTML = checkres.rows.item(pagina-1).cantidadVerificacionAntecedenteTurno;
              document.querySelector('#operacion').innerHTML = checkres.rows.item(pagina-1).cantidadOperacionDesembolsoTurno;
              document.querySelector('#desembolsado').innerHTML = checkres.rows.item(pagina-1).cantidadSupervisionesTurno;
              document.querySelector('#recaudo').innerHTML = checkres.rows.item(pagina-1).cantidadRecaudacionTurno;
              document.querySelector('#supervision').innerHTML = checkres.rows.item(pagina-1).montoTotalDesembolsoTurno;
              document.querySelector('#recaudado').innerHTML = checkres.rows.item(pagina-1).montoRecaudadoTurno;
              document.querySelector('#programado').innerHTML = checkres.rows.item(pagina-1).montoTotalProgramadoTurno;
              document.querySelector('#simple').innerHTML = checkres.rows.item(pagina-1).montoTotalSimpleTurno;
            }
        }, null);
        ctx.executeSql("SELECT COUNT(fechaTurno) as mver FROM Movil_Turno" , [], function(tx,checkres) {
            if(checkres.rows.length) {
              document.querySelector('#pagina').innerHTML = pagina + '/' + checkres.rows.item(0).mver;
			  localStorage.setItem('paginaTopeReporteTurno', checkres.rows.item(0).mver); 
			 if (pagina < checkres.rows.item(0).mver) {
				 document.querySelector('#paginasiguiente').innerHTML = '<a href="#" onclick="irDerechaListarTurno();"><img src="images/arrow_right.png"></a>';
             }
			 if (pagina > 1) {
				 document.querySelector('#paginaanterior').innerHTML = '<a href="#" onclick="irIzquierdaListarTurno();"><img src="images/arrow_left.png"></a>';
             }
          }
        }, null);
    });
 }
 
 function irIzquierdaListarTurno() {
    var pagina = localStorage.getItem('paginaReporteTurno');
    pagina = pagina - 1;
	if (pagina > 0) {
	    localStorage.setItem('paginaReporteTurno', pagina); 
        window.open("listarturnos.html");
	    //$.mobile.changePage("listarturnos.html");
	}
}

function irDerechaListarTurno() {
    var pagina = localStorage.getItem('paginaReporteTurno');
    var tope = localStorage.getItem('paginaTopeReporteTurno');
    var unidad = 1;
    pagina = parseInt(pagina) + parseInt(unidad);
	if (pagina <= tope) {
	    localStorage.setItem('paginaReporteTurno', pagina); 
        window.open("listarturnos.html");
	    //$.mobile.changePage("listarturnos.html");
	}
}

