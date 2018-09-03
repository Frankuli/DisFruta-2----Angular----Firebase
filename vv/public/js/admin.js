function modificarEstado(ventaId, estadoId) {

    console.log(ventaId);
    console.log(estadoId);

    
    $(function() {
        // body...
        $.ajax({
            type: "POST",
            url: "/cambiarestado",
            timeout: 5000,
            data: { ventaId, estadoId },
            success: function(data) {
                alert('estado cambiado con exito')
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert(JSON.stringify(jqXHR));
                alert("AJAX error: " + textStatus + ' : ' + errorThrown);
            }
        });
    })
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
    function(m,key,value) {
      vars[key] = value;
    });
    return "include partials/"+vars[0];
  }