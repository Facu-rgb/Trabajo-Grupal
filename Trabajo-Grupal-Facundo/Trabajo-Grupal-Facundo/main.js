const diapositivas = [
  {
    fondo: "https://www.aparici.com/storage/vulcano-cocina-industrial-moderna-oscura.jpg",
    productos: [
      { imagen: "https://whirlpoolarg.vtexassets.com/arquivos/ids/165114-800-auto?v=638582053452970000&width=800&height=auto&aspect=true", nombre: "Heladera Frost Inox Whirpol 386 Lts", precio: "$250.000" },
      { imagen: "https://www.pngarts.com/files/3/Microwave-Oven-PNG-Transparent-Image.png", nombre: "Microondas pudding daewoo kor7blk", precio: "$85.000" },
      { imagen: "https://fagsistems.com.ar/westinghouse/wp-content/uploads/2025/02/WH-TM1400-05-01.png", nombre: "Tostadora westinghouse 8utn", precio: "$25.000" }
    ]
  },
  {
    fondo: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?cs=srgb&dl=pexels-pixabay-276724.jpg&fm=jpg",
    productos: [
      { imagen: "https://static.vecteezy.com/system/resources/thumbnails/026/676/325/small/3d-rendering-of-flat-screen-tv-png.png", nombre: "Televisor Samsung 4k HD", precio: "$300.000" },
      { imagen: "https://static.vecteezy.com/system/resources/thumbnails/038/348/649/small_2x/ai-generated-black-bookshelf-speaker-png.png", nombre: "Parlante static audio envolvente", precio: "$50.000" },
      { imagen: "https://www.ikahogar.cl/wp-content/uploads/2023/04/1-1.png", nombre: "Aire Acondicionado inverter Btu", precio: "$400.000" }
    ]
  },
  {
    fondo: "https://www.hola.com/horizon/landscape/82f1e48f3304-cuarto-lavado-6t-t.jpg",
    productos: [
      { imagen: "https://static.vecteezy.com/system/resources/thumbnails/045/831/963/small_2x/washing-machine-isolated-on-transparent-background-png.png", nombre: "Lavarropas gris Galanz ", precio: "$320.000" },
      { imagen: "https://kanji.com.ar/wp-content/uploads/2025/02/KJH-PL1603.png", nombre: "Plancha a Vapor Kaiji", precio: "$15.000" },
      { imagen: "https://images.philips.com/is/image/philipsconsumer/c642d541679f4aa592a3ae7d014dcebf?wid=700&hei=700&$pnglarge$", nombre: "Secadora Pro HPS920", precio: "$280.000" }
    ]
  }
];

let indiceActual = 0;
const fondo1 = document.getElementById("fondo1");
const fondo2 = document.getElementById("fondo2");
const contenedorTarjetas = document.getElementById("contenedor-tarjetas");
let mostrandoFondo1 = true;

function mostrarDiapositiva(indice) {
  const diapositiva = diapositivas[indice];

  // Cambiar fondo con transición suave
  const fondoActivo = mostrandoFondo1 ? fondo2 : fondo1;
  const fondoInactivo = mostrandoFondo1 ? fondo1 : fondo2;
  fondoActivo.style.backgroundImage = `url(${diapositiva.fondo})`;
  fondoActivo.classList.add("activo");
  fondoInactivo.classList.remove("activo");
  mostrandoFondo1 = !mostrandoFondo1;

  // Cambiar tarjetas con animación
  contenedorTarjetas.innerHTML = "";
  diapositiva.productos.forEach((p, i) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    tarjeta.innerHTML = `
          <img src="${p.imagen}" alt="${p.nombre}">
          <p>${p.nombre}</p>
          <div class="precio">${p.precio}</div>
          <button class="boton-comprar" onclick="comprarProducto('${p.nombre}', '${p.precio}')">Comprar</button>
        `;
    contenedorTarjetas.appendChild(tarjeta);

    setTimeout(() => {
      tarjeta.classList.add("mostrar");
    }, i * 150);
  });
}

function siguienteDiapositiva() {
  indiceActual = (indiceActual + 1) % diapositivas.length;
  mostrarDiapositiva(indiceActual);
}

function anteriorDiapositiva() {
  indiceActual = (indiceActual - 1 + diapositivas.length) % diapositivas.length;
  mostrarDiapositiva(indiceActual);
}

function comprarProducto(nombre, precio) {
  alert(`Has comprado ${nombre} por ${precio}`);
}

mostrarDiapositiva(indiceActual);