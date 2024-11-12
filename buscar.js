const peliculas = [
  { nombre: "Mad Max: Fury Road", src: "imagenes/madmaxfuryroad.jpg" },
  { nombre: "John Wick", src: "imagenes/johnwick.jpg" },
  { nombre: "Gladiator", src: "imagenes/gladiator.jpg" },
  { nombre: "The Dark Knight", src: "imagenes/thedarkknight.jpg" },
  { nombre: "Avengers: Endgame", src: "imagenes/avengersendgame.jpg" },
  { nombre: "Mission Impossible: Fallout", src: "imagenes/missionimpossiblefallout.jpg" },
  { nombre: "Die Hard", src: "imagenes/diehard.jpg" },
  { nombre: "Terminator 2", src: "imagenes/terminator2.jpg" },
  { nombre: "The Matrix", src: "imagenes/thematrix.jpg" },
  { nombre: "Deadpool", src: "imagenes/deadpool.jpg" },
  { nombre: "The Raid", src: "imagenes/theraid.jpg" },
  { nombre: "Spider-Man: No Way Home", src: "imagenes/spidermannowayhome.jpg" },
  { nombre: "The Equalizer", src: "imagenes/theequalizer.jpg" },
  { nombre: "The Transporter", src: "imagenes/thetransporter.jpg" },
  { nombre: "Rambo: First Blood", src: "imagenes/rambo.jpg" },
  { nombre: "Toy Story 4", src: "imagenes/toystory4.jpg" },
  { nombre: "Spider-Man: Into the Spider-Verse", src: "imagenes/spidermanintothespiderverse.jpg" },
  { nombre: "Frozen 2", src: "imagenes/frozen2.jpg" },
  { nombre: "Zootopia", src: "imagenes/zootopia.jpg" },
  { nombre: "Coco", src: "imagenes/coco.jpg" },
  { nombre: "Shrek Forever After", src: "imagenes/shrekforeverafter.jpg" },
  { nombre: "Inside Out", src: "imagenes/insideout.jpg" },
  { nombre: "Big Hero 6", src: "imagenes/bighero6.jpg" },
  { nombre: "The Incredibles 2", src: "imagenes/theincredibles2.jpg" },
  { nombre: "Minions", src: "imagenes/minions.jpg" },
  { nombre: "Moana", src: "imagenes/moana.jpg" },
  { nombre: "Cars 3", src: "imagenes/cars3.jpg" },
  { nombre: "Ralph Breaks the Internet", src: "imagenes/ralphbreakstheinternet.jpg" },
  { nombre: "Klaus", src: "imagenes/klaus.jpg" },
  { nombre: "Kung Fu Panda 3", src: "imagenes/kungfupanda3.jpg" },
  { nombre: "El Prestige", src: "imagenes/elprestige.jpg" },
  { nombre: "Shutter Island", src: "imagenes/shutterisland.jpg" },
  { nombre: "Gone Girl", src: "imagenes/gonegirl.jpg" },
  { nombre: "La Caza", src: "imagenes/lacaza.jpg" },
  { nombre: "Prisoners", src: "imagenes/prisoners.jpg" },
  { nombre: "Ex Machina", src: "imagenes/exmachina.jpg" },
  { nombre: "Venom 3 The Last Dance", src: "imagenes/Venom3.png" },
  { nombre: "El Origen De Los Guardianes", src: "imagenes/el origen de los guardianes.png" },
  { nombre: "Hocus Pocus 2", src: "imagenes/Hocus Pocus 2.png" },
  { nombre: "Liga De La Justicia", src: "imagenes/liga de la justicia.png" },
  { nombre: "Robot Salvaje", src: "imagenes/Robot Salvaje.png" },
  { nombre: "Mulan Live Action", src: "imagenes/Mulan.png" }
];

function buscar() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const resultados = peliculas.filter(pelicula => pelicula.nombre.toLowerCase().includes(input));

  if (resultados.length > 0) {
    localStorage.setItem("resultadosBusqueda", JSON.stringify(resultados));
    window.location.href = "resultados.html";
  } else {
    alert("No se encontraron resultados");
  }
}
