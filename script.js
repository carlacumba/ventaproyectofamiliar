const venta = [
  {
    id: 1,
    title: "Juego de Sala",
    category: "Muebles",
    price: 200,
    img: "imagenesventa/sala.PNG", // Borré el ".."
    estado: "Bueno",
    desc: `Sala en forma de “L” tapizada en tela. Incluye mesa esquinera con superficie de vidrio, detalles decorativos y espacio interior iluminado.`,
  },
  {
    id: 2,
    title: "Juego de Comedor",
    category: "Muebles",
    price: 600,
    estado: "Bueno",
    img: "imagenesventa/comedor1.png", // Borré el ".."
    desc: `Juego de comedor de 6 sillas moderno hexagonal con tablero de vidrio central y base con espacio de almacenamiento.`,
  },
  {
    id: 3,
    title: "Escritorio",
    category: "Oficina",
    price: 20,
    estado: "Bueno",
    img: "imagenesventa/escritorio.PNG", // Borré el ".."
    desc: `Escritorio moderno de vidrio templado negro y patas de metal gris.`,
  },
  {
    id: 4,
    title: "Altavoz Harman Kardon ONYX STUDIO 7",
    category: "Electronica",
    price: 100,
    estado: "Nuevo",
    img: "imagenesventa/parlante.jpg",
    desc: `Parlante inalámbrico con conexión Bluetooth y potencia de 50W. Ofrece 8 horas de reproducción, batería recargable y micrófono.`,
  },
  {
    id: 5,
    title: "Lampara colgante celeste y dorado",
    category: "Iluminacion",
    price: 15,
    estado: "Nuevo",
    img: "imagenesventa/lamparacelestedorado.jpg",
    desc: `Lámpara colgante campana celeste y dorado de una luz, hecha de metal, con un diámetro de 30 cm, base E27 y una potencia de 110V.`,
  },
  {
    id: 6,
    title: "Lampara colgante negra",
    category: "Iluminacion",
    price: 15,
    estado: "Nuevo",
    img: "imagenesventa/lamparanegra.jpg",
    desc: `Lámpara colgante negra de una luz, hecha de metal, con pantalla de 26 cm de diámetro, base E27 y potencia máxima de 40W.`,
  },
  {
    id: 7,
    title: "Chaqueta Lee Edición Especial ",
    category: "Ropa",
    price: 50,
    estado: "Nuevo",
    img: "imagenesventa/chaquetajean.PNG",
    desc: `Chaqueta original de la marca Lee bordada a mano de Edición Especial Van Gogh y Guayaquil de Talla M.`,
  },
  {
    id: 8,
    title: "Chaqueta Outland Minnesota",
    category: "Ropa",
    price: 35,
    estado: "Bueno",
    img: "imagenesventa/chaquetaroja.PNG",
    desc: `Chaqueta roja Outland Minnesota para el invierno de Talla M.`,
  },
  {
    id: 9,
    title: "Camiseta Ecuador",
    category: "Ropa",
    price: 30,
    estado: "Nuevo",
    img: "imagenesventa/preciado.PNG",
    desc: `Camiseta Oficial Conmebol Copa América USA 2024 - Marathon de Talla L.`,
  },
  {
    id: 10,
    title: "Camiseta Emelec Autografiada",
    category: "Ropa",
    price: 50,
    estado: "Nuevo",
    img: "imagenesventa/emelec.PNG",
    desc: `Camiseta Fútbol Hombre, Adidas Alterna CSE 2025 Autografiada de Talla M.`,
  },
  {
    id: 11,
    title: "Zapatos Bunky",
    category: "Calzado",
    estado: "Nuevo",
    price: 25,
    img: "imagenesventa/bunkycolor.PNG",
    desc: `Zapatos deportivos Bunky Nil, talla 38, con marcadores acrílicos Craft para personalizarlos a tu estilo.`,
  },
  {
    id: 12,
    title: "Zapatos Adidas",
    category: "Calzado",
    estado: "Nuevo",
    price: 15,
    img: "imagenesventa/deportivos1.PNG",
    desc: `Zapatos deportivos marca Adidas de Talla US 7 ½ FR 39 ½.`,
  },
  {
    id: 13,
    title: "Zapatos Casuales",
    category: "Calzado",
    estado: "Bueno",
    price: 15,
    img: "imagenesventa/casual.PNG",
    desc: `Zapato Casual de Talla 38.`,
  },
  {
    id: 14,
    title: "Zapatos Nike",
    category: "Calzado",
    estado: "Regular",
    price: 15,
    img: "imagenesventa/deportivo2.PNG",
    desc: `Zapato deportivo de Talla US 6.5`,
  },
  {
    id: 15,
    title: "Bomba Infladora",
    category: "Automotriz",
    price: 60,
    estado: "Nuevo",
    img: "imagenesventa/infla.PNG",
    desc: `Bomba de aire eléctrica portátil con pantalla digital. Ideal para autos, motos y bicicletas. Batería de 2400 mAh, inflado automático con sensor de presión. `,
  },
  {
    id: 16,
    title: "Kit limpieza y cuidado",
    category: "Automotriz",
    price: 20,
    estado: "Nuevo",
    img: "imagenesventa/kit1.jpeg",
    desc: `Descripcion kit. (nuevo)`,
  },
  {
    id: 17,
    title: "Chaqueta Acolchonada",
    category: "Ropa",
    price: 30,
    estado: "Nuevo",
    img: "imagenesventa/chaquetanegra.png",
    desc: `Chaqueta negra cómoda y ligera ideal para un estilo casual o deportivo de Talla S.`,
  },
  {
    id: 18,
    title: "Pizarra Tiza Líquida Grande",
    category: "Oficina",
    price: 15,
    estado: "Bueno",
    img: "imagenesventa/pizarragrande.jpg",
    desc: `Pizarra de 90 x 60 cm, ideal para usar con rotuladores de tiza líquida.`,
  },
  {
    id: 19,
    title: "Pizarra Tiza Líquida Pequeña",
    category: "Oficina",
    price: 10,
    estado: "Bueno",
    img: "imagenesventa/pizarrachica.jpg",
    desc: `Pizarra de 60 x 40 cm, ideal para el uso de rotuladores de tiza líquida.`,
  },
  {
    id: 20,
    title: "Whisky Something Special",
    category: "Bebidas Alcohólicas",
    price: 20,
    estado: "Nuevo",
    img: "imagenesventa/whisky.PNG",
    desc: `Dos botellas de Whisky Something Special 750 ml c/u - 2 botellas por $38 y 1 botella por $20.`,
  },
  {
    id: 21,
    title: "Ron Bahamas Añejo",
    category: "Bebidas Alcohólicas",
    price: 10,
    estado: "Nuevo",
    img: "imagenesventa/ron.jpeg",
    desc: `Ron Bahamas Añejo 700 ml c/u - 2 botellas por $18 y 1 botella por $10.`,
  },
  {
    id: 22,
    title: "Pilsener Light",
    category: "Bebidas Alcohólicas",
    price: 5,
    estado: "Nuevo",
    img: "imagenesventa/pilsener.PNG",
    desc: `Pilsener Light - 6 latas de 355 ml c/u.`,
  },
  {
    id: 23,
    title: "Bicicleta",
    category: "Otros",
    price: 40,
    estado: "Regular",
    img: "imagenesventa/bici.jpeg",
    desc: `run run bici`,
  },
  {
    id: 24,
    title: "Figura de IronMan",
    category: "Otros",
    price: 12,
    estado: "Bueno",
    img: "imagenesventa/carton.jpeg",
    desc: `Figura de cartón de tamaño de ????.`,
  },
  {
    id: 25,
    title: "Zapatos de Fútbol",
    category: "Calzado",
    price: 50,
    estado: "Bueno",
    img: "imagenesventa/amarillo.PNG",
    desc: `Zapato de Football Brazil Marca Topper - Talla 43 EUR 41 BR.`,
  },
  {
    id: 26,
    title: "Biela",
    category: "Bebidas Alcohólicas",
    price: 15,
    estado: "Nuevo",
    img: "imagenesventa/paquetecerveza.jpg",
    desc: `Paquete de 24 Bielas. Precio original $24, oferta a $15.`,
  },
  {
    id: 27,
    title: "Destapador de Botellas Los Simpson",
    category: "Otros",
    price: 15,
    estado: "Nuevo",
    img: "imagenesventa/destapador.jpg",
    desc: `Destapador de botellas de madera decorado con la cerveza Duff de Los Simpson.`,
  },
];

const sectionCenter=document.querySelector(".section-center");
const filterButtons=document.querySelectorAll(".filter-btn")

window.addEventListener("DOMContentLoaded",function(){
    displayventaItems(venta)
});

filterButtons.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const category=e.currentTarget.dataset.id;
        const ventaCategory=venta.filter(function(ventaItem){
            if (ventaItem.category===category){
                return ventaItem
            }
        });
        if (category === "Todo"){
            displayventaItems(venta)
        }
        else{
            displayventaItems(ventaCategory)
        }
    });
});

function displayventaItems(ventaItems){
    let displayventa=ventaItems.map(function(item){
        return `<article class="venta-item">
            <img src=${item.img} />
            <div class="item-info">
                <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">$${item.price}</h4>
                </header>
                <p class="item-text">
                    ${item.desc}
                 </p>
          </div>
        </article>`;
   });
   displayventa=displayventa.join("")
   sectionCenter.innerHTML=displayventa
}



const categoryBtns = document.querySelectorAll(".filter-btn");
const estadoBtns = document.querySelectorAll(".estado-btn");

let selectedCategory = "Todo";
let selectedEstado = null;

function displayFilteredItems() {
  let filtered = venta;

  if (selectedCategory !== "Todo") {
    filtered = filtered.filter(item => item.category === selectedCategory);
  }

  if (selectedEstado) {
    filtered = filtered.filter(item => item.estado === selectedEstado);
  }

  displayventaItems(filtered);
}


categoryBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    // Quitar 'active' de TODAS las categorías
    categoryBtns.forEach(b => b.classList.remove("active"));
    // Activar la categoría seleccionada
    this.classList.add("active");

    // Guardar categoría seleccionada
    selectedCategory = this.dataset.id;

    // ⚡ Resetear estado
    estadoBtns.forEach(c => c.classList.remove("active"));
    selectedEstado = null;

    // Mostrar con filtro
    displayFilteredItems();
  });
});

// Manejar estado
estadoBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    // Quitar 'active' de TODOS los estados
    estadoBtns.forEach(b => b.classList.remove("active"));
    // Activar el estado seleccionado
    this.classList.add("active");

    // Guardar estado seleccionado
    selectedEstado = this.dataset.id;

    // Mostrar con filtro
    displayFilteredItems();
  });
});
