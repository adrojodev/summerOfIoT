function generarPerritos() {
  var perritos = [
    "https://imagenes.milenio.com/YONeZ5-2cQu0TH_W2iPiQ_FkzbM=/958x596/https://www.milenio.com/uploads/media/2018/12/25/quieran-comprar-cachorro-acudir-criaderos.jpg",
    "https://www.dondeir.com/wp-content/uploads/2018/02/can-fest-2018-carrera-esterilizacion-y-gym-canino-02.jpg",
    "https://s.yimg.com/ny/api/res/1.2/oRs63wqnTyfOAexy6BYGhg--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/5f2acfff720e9a2c822eaa0b4f37e3dd",
    "https://images.evisos.co.cr/2017/07/30/perritos-adorables-del-husky-siberiano-para-la-ven_lxxflsu_3.jpg",
    "http://m.aldia.co/sites/default/files/detalleperritomusctecnologia_def.jpg"
  ];

  document.getElementById("imagenes").src =
    perritos[Math.floor(Math.random() * perritos.length)];
}
