const venta = [
  {
    id: 1,
    title: "Juego de Sala",
    category: "Muebles",
    price: 200,
    img: "../imagenes/desayuno1.webp",
    estado: "Usado",
    desc: `Descripcion juego de sala. (usado)`,
  },
  {
    id: 2,
    title: "Juego de Comedor",
    category: "Muebles",
    price: 600,
    estado: "Usado",
    img: "../imagenes/desayuno1.webp",
    desc: `Descripcion juego de comedor. (usado)`,
  },
  {
    id: 3,
    title: "Escritorio",
    category: "Oficina",
    price: 20,
    estado: "Usado",
    img: "../imagenes/desayuno1.webp",
    desc: `Descripcion escritorio con precio muy barato. (usado)`,
  },
  {
    id: 4,
    title: "Parlante Inalámbrico",
    category: "Electronica",
    price: 100,
    estado: "Nuevo",
    img: "../imagenes/desayuno1.webp",
    desc: `Descripcion parlante. (nuevo)`,
  },
  {
    id: 5,
    title: "Lampara colgante cele",
    category: "Iluminacion",
    price: 100,
    estado: "Nuevo",
    img: "../imagenes/desayuno1.webp",
    desc: `Descripcion lampara celeste. (nuevo)`,
  },
  {
    id: 6,
    title: "Lampara colgante negra",
    category: "Iluminacion",
    price: 100,
    estado: "Nuevo",
    img: "../imagenes/desayuno1.webp",
    desc: `Descripcion lampara celeste. (nuevo)`,
  },
  {
    id: 7,
    title: "Chaqueta jean",
    category: "Ropa",
    price: 100,
    estado: "Nuevo",
    img: "../imagenes/desayuno1.webp",
    desc: `Descripcion chaqueta, evaluar si mejor foto sin ponermela. (nuevo)`,
  },
  {
    id: 8,
    title: "Chaqueta roja",
    category: "Ropa",
    price: 100,
    estado: "Bueno",
    img: "../imagenes/desayuno1.webp",
    desc: `Descripcion chaqueta roja. (nuevo)`,
  },
  {
    id: 9,
    title: "Camiseta Ecuador ",
    category: "Nuevo",
    price: 100,
    estado: "Bueno",
    img: "../imagenes/desayuno1.webp",
    desc: `Descripcion camisa ecuador. (nuevo)`,
  },
  {
    id: 10,
    title: "Camiseta Emelec ",
    category: "Nuevo",
    price: 100,
    estado: "Nuevo",
    img: "../imagenes/desayuno1.webp",
    desc: `Descripcion camisa emelec. (nuevo)`,
  },
  {
    id: 11,
    title: "Zapatos Bunky",
    category: "Calzado",
    estado: "Nuevo",
    price: 100,
    img: "../imagenes/desayuno1.webp",
    desc: `Descripcion zapatos bunky. (nuevo)`,
  },
  {
    id: 12,
    title: "Zapatos Deportivos",
    category: "Calzado",
    estado: "Nuevo",
    price: 100,
    img: "../imagenes/desayuno1.webp",
    desc: `Descripcion zapatos deportivos. (nuevo)`,
  },
  {
    id: 13,
    title: "Zapatos Casuales",
    category: "Calzado",
    estado: "Bueno",
    price: 100,
    img: "../imagenes/desayuno1.webp",
    desc: `Descripcion zapatos casuales. (nuevo)`,
  },
  {
    id: 14,
    title: "Zapatos deportivo tmb",
    category: "Calzado",
    estado: "Regular",
    price: 100,
    img: "../imagenes/desayuno1.webp",
    desc: `Descripcion deportivo doos. (nuevo)`,
  },
  {
    id: 15,
    title: "Bomba inflador de llantas",
    category: "Automotriz",
    price: 100,
    estado: "Nuevo",
    img: "../imagenes/desayuno1.webp",
    desc: `Descripcion infla infla. (nuevo)`,
  },
  {
    id: 16,
    title: "Kit limpieza y cuidado",
    category: "Automotriz",
    price: 100,
    estado: "Nuevo",
    img: "../imagenes/desayuno1.webp",
    desc: `Descripcion kit. (nuevo)`,
  },
  {
    id: 17,
    title: "Kit repara llanta",
    category: "Automotriz",
    price: 100,
    estado: "Nuevo",
    img: "../imagenes/desayuno1.webp",
    desc: `Descripcion kit llanta. (nuevo)`,
  },
  {
    id: 18,
    title: "pizarra grande",
    category: "Oficina",
    price: 100,
    estado: "Bueno",
    img: "../imagenes/desayuno1.webp",
    desc: `Descripcion piz 1. (nuevo)`,
  },
  {
    id: 19,
    title: "pizarra chiquita",
    category: "Oficina",
    price: 100,
    estado: "Bueno",
    img: "../imagenes/desayuno1.webp",
    desc: `Descripcion piz 2. (nuevo)`,
  },
  {
    id: 20,
    title: "whisky wi wi",
    category: "Bebidas Alcohólicas",
    price: 100,
    estado: "Nuevo",
    img: "../imagenes/desayuno1.webp",
    desc: `Descripcion borrachini 1.`,
  },
  {
    id: 21,
    title: "ron w o wo",
    category: "Bebidas Alcohólicas",
    price: 100,
    estado: "Nuevo",
    img: "../imagenes/desayuno1.webp",
    desc: `Descripcion borrachini 2.`,
  },
  {
    id: 22,
    title: "cerveza wa wa",
    category: "Bebidas Alcohólicas",
    price: 100,
    estado: "Nuevo",
    img: "../imagenes/desayuno1.webp",
    desc: `Descripcion borrachini 3.`,
  },
  {
    id: 23,
    title: "bicicleta pues q mas",
    category: "Bicicletas",
    price: 100,
    estado: "Regular",
    img: "../imagenes/desayuno1.webp",
    desc: `run run bici`,
  },
  {
    id: 24,
    title: "cosa de ironman q da miedo",
    category: "Fiestas",
    price: 100,
    estado: "Bueno",
    img: "../imagenes/desayuno1.webp",
    desc: `si nos hizo asustar`,
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
