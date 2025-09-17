class Producto {
    constructor(descripcion, precio, imagen) {
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
    }
}

class Carrito {
    constructor() {
        this.productos = [];
    }

    agregarAlCarrito(producto) {
        this.productos.push(producto);
    }

    eliminarDelCarrito(producto) {
        const index = this.productos.findIndex((prod) => prod === producto);
        if (index !== -1) {
            this.productos.splice(index, 1);
        }
    }

    Subtotal() {
        let precioTotal = 0;
        this.productos.forEach((prod) => {
            precioTotal += prod.precio;
        });
        return precioTotal;
    }

    IVA() {
        let iva = (this.Subtotal() * 0.21);
        return iva;
    }

    Total() {
        let total = (this.Subtotal() + this.IVA());
        return total;
    }
}

let productos = [
    new Producto("Freidora Oster Airfryer Ckstaf75wdssdf 1600 W 7.5 L Gris", 175500, "./assets/airfryer3.jpg"),
    new Producto("Heladera Samsung Family Hub Side by Side Wifi Internet 685 L", 5003099, "./assets/heladera.jpg"),
    new Producto("Lavarropas Automático Inverter SAMSUNG WW70AA46BX 7Kg Gris", 1081969, "./assets/lavarropas.jpg"),
    new Producto("Batidora Eléctrica Thomas Th-910pr Color Rojo Rojo", 229998, "./assets/batidora.jpg"),
    new Producto("Heladera con freezer inverter Samsung RS62R5011M9 color gentle silver con capacidad de 647L", 3887999, "./assets/heladera2.jpg"),
    new Producto("Microondas Samsung 20 Litros", 222300, "./assets/microondas.jpg"),
    new Producto("Freidora Oster Airfryer Ckstaf75wdssdf 1600 W 7.5 L Gris", 339999, "./assets/airfryer2.jpg"),
    new Producto("Grill Th-224 1800w Con Tapa De Vidrio Thomas Color Negro", 89999, "./assets/parrilla electrica.jpg"),
    new Producto("Robot de Cocina Osojimix OM6", 1049990, "./assets/cocina robot.jpg"),
    new Producto("Sandwichera Eléctrica Oster 750w Compacta Ckstsm400 Negro", 59999, "./assets/sandwichera.jpg"),
    new Producto("Licuadora Juguera Blendforce Moulinex, Tecnologia Powerlix", 146347, "./assets/licuadora.jpg"),
    new Producto("Lavasecarropas carga frontal 9/5 KG Color Plateado Diseño compacto", 1449999, "./assets/lavarropas2.jpg"),
    new Producto("Heladera side by side GM57SXM Color Negro 427 L InstaView Door in Door Smart Inverter Compressor Craft Ice", 3999999, "./assets/heladera3.jpg"),
    new Producto("Cafetera Genio S Touch Color Blanco", 98990, "./assets/cafetera de capsula.jpg"),
    new Producto("Licuadora Moulinex Powermix LN289855 1.75 L negra con jarra de vidrio", 74990, "./assets/licuadora2.jpg"),
    new Producto("Horno Microondas 16 Litros Ursus Trotter Classy720 Digita", 249999, "./assets/microondas3.jpg"),
    new Producto("Hervidor Big Edition 2.5l Kitchen-it Color Acero inoxidable", 39990, "./assets/pava electrica.jpg"),
    new Producto("Procesador De Alimentos Ninja Profesional/ 220v / 2,1 Litros Gris Oscuro", 462950, "./assets/procesadora.jpg"),
    new Producto("Heladera LG Gm57sxm Instaview Inverter 418lts Negro Matte", 4859999, "./assets/heladera4.jpg"),
    new Producto("Microondas Thomas Th-25dm 25 Litros", 99990, "./assets/microondas4.jpg"),
    new Producto("Batidora Ninja Tb301 Detect Duo Power Blender Pro", 633519, "./assets/licuadora3.jpg"),
    new Producto("Secador De Pelo Suono Gw-65332 2000w Frío Y Calor Negro", 40744, "./assets/secador.jpg"),
    new Producto("Plancha Vapor Atma Pav1217pi", 53000, "./assets/plancha.jpg"),
    new Producto("Lavavajillas LG", 1499299, "./assets/lavavajillas.jpg")
];

let carrito = new Carrito();







const contenedor = document.querySelector(".container");
const footer = document.querySelector(".footer")


function mostrarTarjetas() {
    contenedor.innerHTML = "";

    const row = document.createElement("div");
    row.classList.add("row");

    productos.forEach((producto) => {
        const col = document.createElement("div");
        col.classList.add("col-md-3", "mb-4");

        const card = document.createElement("div");
        card.classList.add("card", "h-100");

        const img = document.createElement("img");
        img.src = producto.imagen;
        img.alt = producto.descripcion;
        img.classList.add("card-img-top");

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body", "d-flex", "flex-column");

        const h5 = document.createElement("h5");
        h5.classList.add("card-title");
        h5.textContent = producto.descripcion;

        const p = document.createElement("p");
        p.classList.add("card-text");
        p.textContent = `$${producto.precio.toLocaleString()}`;

        const btn = document.createElement("button");
        btn.classList.add("btn", "btn-primary");
        btn.textContent = "AÑADIR";
        btn.addEventListener("click", () => {
            carrito.agregarAlCarrito(producto);
            renderizarCarrito();
        });

        cardBody.append(h5, p, btn);
        card.append(img, cardBody);
        col.appendChild(card);
        row.appendChild(col);
    });

    contenedor.appendChild(row);
}













function renderizarCarrito() {
    const carritoDiv = document.getElementById("carrito");
    carritoDiv.innerHTML = "";

    const container = document.createElement("div");
    container.classList.add("container");

    const row = document.createElement("div");
    row.classList.add("row");

    // Columna 1: Productos en el carrito
    const col1 = document.createElement("div");
    col1.classList.add("col-7");

    carrito.productos.forEach(producto => {
        const row1 = document.createElement("div");
        row1.classList.add("row", "mb-3", "align-items-center");
        row1.style.border = "1px solid #e3e3e3ff";
        row1.style.padding = "10px";

        const colimg = document.createElement("div");
        colimg.classList.add("col-5");
        const img = document.createElement("img");
        img.src = producto.imagen;
        img.alt = producto.descripcion;

        img.style.maxHeight = "100px";
        img.style.maxWidth = "100px";

        colimg.appendChild(img);

        const coltext = document.createElement("div");
        coltext.classList.add("col-7");
        const h6 = document.createElement("h6");
        h6.textContent = producto.descripcion;
        const p = document.createElement("p");
        p.textContent = `$${producto.precio.toLocaleString()}`;
        const eliminar = document.createElement("button");
        eliminar.classList.add("btn", "btn-danger");
        eliminar.textContent = "Eliminar";
        eliminar.addEventListener("click", () => {
            carrito.eliminarDelCarrito(producto);
            renderizarCarrito();

        })



        coltext.append(h6, p, eliminar);

        row1.append(colimg, coltext);
        col1.appendChild(row1);
    });

    // Columna 2: Subtotal, IVA y Total

    const col2 = document.createElement("div");
    col2.classList.add("col-5");



    const subtotal = carrito.Subtotal();
    const iva = carrito.IVA();
    const total = carrito.Total();

    const pSubtotal = document.createElement("p");
    pSubtotal.innerHTML = `<strong>Subtotal:</strong> $${subtotal.toLocaleString()}`;
    const pIVA = document.createElement("p");
    pIVA.innerHTML = `<strong>IVA (21%):</strong> $${iva.toLocaleString()}`;
    const pTotal = document.createElement("h4");
    pTotal.innerHTML = `<strong>Total:</strong> $${total.toLocaleString()}`;

    const imprimir = document.createElement("button");
    imprimir.classList.add("btn", "btn-success", "ms-2");
    imprimir.textContent = "Imprimir";
    imprimir.addEventListener("click", () => {
        contenedor.style.display = "none";
        footer.style.display = "none";
        carritoDiv.style.position = "absolute";
        carritoDiv.style.top = "0";
        carritoDiv.style.left = "0";
        carritoDiv.style.width = "100%";
        carritoDiv.style.margin = "0";
        window.print();
    });


    if (carrito.productos.length === 0) {
        imprimir.style.display = "none";
    }


    col2.append(pSubtotal, pIVA, pTotal, imprimir);

    row.append(col1, col2);
    container.appendChild(row);
    carritoDiv.appendChild(container);
}

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




mostrarTarjetas();
renderizarCarrito();