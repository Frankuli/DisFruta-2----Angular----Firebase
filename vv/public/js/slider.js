$(function(){
  $(".slides").slidesjs({
    play: {
      active: true,
      effect: "slide",
      interval: 3000, //intervalo en milisegundos
      auto: true,//por defecto arranca automatico
      swap: true,
      pauseOnHover: false,
      restartDelay: 2500
    }
  });
});
