var miAplicacion = angular.module( 'includes' , [] );
miAplicacion.controller('obtenerItems', function($scope, $http) {
  // url del proveedor del servicio
  var url = "../myjsonfile.json";
  // llamando el servicio
  $http.get(url).then(function(response) {
    $scope.items = response.data.RestResponse.result;
  });
});
var compra = angular.module( 'includes' , [] )
compra.controller ( 'obtenerItems' , [ '$scope' , function($scope){
  $scope.seleccion = function(){
    $scope.caja = "selec";
  };
}]);


function ok(valor) {
  console.log(valor);
  var boton = document.getElementById('button'+ valor)
  console.log(document.getElementById('button'+ valor));
  boton.style="color:black;"
}


var miAplicacion = angular.module( 'includes' , [] );
miAplicacion.controller('obtenerItems', function($scope, $http) {
  // url del proveedor del servicio
  var url = "json/myjsonfile.json";
  // llamando el servicio
  $http.get(url).then(function(response) {
      $scope.items = response.data;
  })
});
function verFrutas() {
  var fru = document.getElementsByName('item');
}


var carrito = []
function AgregarCarrito(valor,check) {
}


function borrarCarrito(){
  carrito = []
}
function verCarrito(){
  return carrito
}

function  enviarItems() {
  alert("hola")
  console.log(a + "hola");
}
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
