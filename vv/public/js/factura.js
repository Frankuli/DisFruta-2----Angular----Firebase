function imprimir(){
	boton = document.getElementById('imprimir');
	boton.style.display = 'none';

	setTimeout(function() {	boton.style.display = 'inline';
}, 10000);
	setTimeout(function() {
		  var pdf = new jsPDF('img','pt','a4');
  pdf.addHTML(document.body,function() {
  pdf.save('factura.pdf');});
}, 1000);


}