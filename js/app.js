$(function() {

  var tbconsulta = $('#tbconsulta').DataTable({
    "aoColumns": [
        { "data": "numDet" },
        { "data": "fecHoraTransmisionDPO" },
        { "data": "anioDep" },
        { "data": "fecHoraArribo" },
        { "data": "numDocPostal" },
        { "data": "desTipoServicio" },
        { "data": "estadoDPO" },
        { "data": "destinacionAduanera" },
        { "data": "puertoEmbarque" },
        { "data": "remitente" },
        { "data": "consignatario" },
        { "data": "direccion" },
        { "data": "ubigeo" },
        { "data": "desMercancia" },
        { "data": "totalBultosManifestado" },
        { "data": "totalPesoManifestado" },
        { "data": "fobVerificado" },
        { "data": "observacion" }
    ]
  });

  $('#btnResult').click(function(){

    tbconsulta.rows().remove().draw();

    var params = {"hdd_opcionConsulta": "2", "sel_tipServicio": "", "tipoBusqueda": "2", "txt_NumeroPostal": "CD189036253JP", "qpages1": "5",
                  "dojo.preventCache": "1467078518970"}

    $.ajax({
        url: "http://www.sunat.gob.pe/ol-ad-itimportafacilmc/DepConsulta.htm?action=consultarDepEstado",
        type: "post",
        data: params ,
        success: function (response) {
          var json = JSON.parse(response);
          var data = json.resultado.lstRpta;
          tbconsulta.rows.add(data).draw();
        },
        error: function(jqXHR, textStatus, errorThrown) {
           console.log(textStatus, errorThrown);
        }
    });

  });

});
