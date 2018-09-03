
var shopApp = angular.module('Shop', []);

shopApp.controller('obtenerCompra', function($scope, $http,userId) {
    // url del proveedor del servicio
  var url = "../json/carrito"+userId+".json";
    // llamando el servicio
    $http.get(url).then(function(response) {
        $scope.carrito = response.data;
    });
});


function sendItems(valor, check = true, userId) {

    var boton = document.getElementsByName(valor)
    id = (valor.indexOf('button') != -1 ? valor.split('button')[1].toString() : valor)
    caja = document.getElementsByName('item' + id)
    console.log(caja);
    nombre = caja[0].childNodes[7].innerHTML;
    precio = parseInt(caja[0].childNodes[10].innerHTML.split('$ ')[1])

    console.log("id " + id);
    console.log(check);
    console.log("nombre "+ nombre);
    console.log("precio " + precio);

    $(function() {
        // body...
        $.ajax({
            type: "POST",
            url: "/receivejson",
            timeout: 2000,
            data: { userId, id, check, nombre, precio },
            success: function(data) {
                console.log("agregada");
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert(JSON.stringify(jqXHR));
                alert("AJAX error: " + textStatus + ' : ' + errorThrown);
            }
        });
    })
}

function checkCarrito(userId) {
  var url = "../json/carrito"+userId+".json";
        $.ajax({
            'global': false,
            'url': url,
            'dataType': "json",
            'success': function(data) {
                    for (var i = data.length - 1; i >= 0; i--) {
        console.log(i + ": i veces");

        nombreBoton = "button" + data[i].id;
        console.log(nombreBoton);
        if (document.getElementsByName(nombreBoton)) {
            boton = document.getElementsByName(nombreBoton)[0];
            boton.checked = true;

        }
        else{
            console.log("no encontro el boton");
        }
    }
            }
        })

}