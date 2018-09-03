var app = angular.module('includes', []);
app.controller('ctrl', function($scope, $http,userId){
  // url del proveedor del servicio
  var url = "../json/carrito"+userId+".json";
  // llamando el servicio
  $http.get(url).then(function(response) {
    $scope.factura = response.data;
  });

    $scope.eliminarItem = function(id){


    
    //envio a el server para que lo saque
    check = false
    $.ajax({
        type: "POST", 
        url: "/ReceiveJSON",
        timeout: 2000,
        data: { id, check },

        success: function(data) {
    //buscamos el elemento de factura que tenga el id = m
    for (var i = $scope.factura.length - 1; i >= 0; i--) {
      if ($scope.factura[i].id == id ) {
        indice = i;
      }
    }
    $scope.factura.splice(indice,1);        },
        error: function(jqXHR, textStatus, err) {
            //show error message
            alert('text status ' + textStatus + ', err ' + err)
        }
    });

  };

  $scope.subTotal=function(){
    var total=0.0;
    angular.forEach($scope.factura, function(item,key){
      if (item.cantidad > 0) {
        total += item.cantidad*item.precio;
      }

    });
    return total;
  };

  $scope.envio=function(){
    if ($scope.envi=="1"||$scope.envi=="3") {
      return 50
    }else {
      return 0
    }
  };

  $scope.formaPago=function(){
    if ($scope.pago=='2') {
      return 0.15;
    }else if ($scope.pago=='3') {
      return 0.05;
    } else {
      return 1;
    }
  };
  $scope.Total= function(){
    if ($scope.pago=='2') {
      return ($scope.subTotal()+$scope.envio())-($scope.subTotal()*$scope.formaPago());
    } else if ($scope.pago=='3'){
      return ($scope.subTotal()+$scope.envio())+($scope.subTotal()*$scope.formaPago())
    }else {
      return ($scope.subTotal()+$scope.envio())*$scope.formaPago();
    }
  };
});
