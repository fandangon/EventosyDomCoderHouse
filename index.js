var suma = 0;
const productos = [{

    id: 1,
    Nombre: "Cepillo Dentales Oral B Pro Salud Ultrafino 2un",
    Precio: 208,
    img: './image/oral-b.jpg'
},
{
    id: 2,
    Nombre: "Crema Facial Perpiel Humectante Facial A x 80ml",
    Precio: 674.50,
    img: './image/perpiel.jpg'
},
{
    id: 3,
    Nombre: "Emulsión Humectante Bagovit Reafirmante Efecto Tensor 200 ml",
    Precio: 650.40,
    img: './image/bagovit.jpg'
},
{
    id: 4,
    Nombre: "Crema Corporal Bagovit A Ligth Hipoalergénica 50g",
    Precio: 440.40,
    img: './image/bagovit crema.jpg'
},
{
    id: 5,
    Nombre: "Emulsión Corporal Hidratante Bagovit Efecto Luminoso 200ml",
    Precio: 726.00,
    img: './image/bagovit emulsion.jpg'
},
{
    id: 6,
    Nombre: "Protector Solar Dermaglos Fps 30 Emulsión Piel Sensible 250ml",
    Precio: 883.35,
    img: './image/dermaglos protector.jpg'
},
{
    id: 7,
    Nombre: "Copa Menstrual Evacopa Hipoalergénica Uso Continuo",
    Precio: 965.25,
    img: './image/evacopa.jpg'
},
{
    id: 8,
    Nombre: "Kit Rutina Cicatricure Agua Micelar + Beauty Care + Contorno",
    Precio: 2148.55,
    img: './image/cicatricure kit.jpg'
},
{
    id: 9,
    Nombre: "Ultraflex Colágeno Hidrolizado Para Huesos y Articulaciones",
    Precio: 2475.00,
    img: './image/trb pharma.jpg'
},
{
    id: 10,
    Nombre: "Natures Bounty Vitamina C x 100 Tab",
    Precio: 1371.00,
    img: './image/nature bounty.jpg'
},
{
    id: 11,
    Nombre: "Bagó Simple Vitalidad Minerales Vitaminas 28 Pastillas Goma",
    Precio: 523.50,
    img: './image/bago simple.jpg'
},
{
    id: 12,
    Nombre: "Protector Bucal Makura Toka Junior (Hasta 10 Años) C/ Estuche",
    Precio: 900.00,
    img: './image/makura.jpg'
},
{
    id: 13,
    Nombre: "Simple Calcio + Vitamina D Bagó Arcor 60 Pastillas",
    Precio: 1004.25,
    img: './image/bago arcor.jpg'
},
{
    id: 14,
    Nombre: "Suplemento Dietario Ena Colágeno Sabor Naranja 12g",
    Precio: 172.50,
    img: './image/ena.jpg'
},
{
    id: 15,
    Nombre: "Suplemento Vitamínico Centrum Hombre x 60 Comprimidos",
    Precio: 1478.25,
    img: './image/cemtrum.jpg'
},
{
    id: 16,
    Nombre: "Suplemento Vitamínico Redoxitos Plus 25 Pastillas Masticables",
    Precio: 454.40,
    img: './image/redoxon suplemento.jpg'
},
{
    id: 17,
    Nombre: "Shampoo Aveno Infantil cabello graso 250 ml",
    Precio: 491.25,
    img: './image/aveno shampoo.jpg'
},
{
    id: 18,
    Nombre: "Pomada Bepanthen Baby Hipoalergénica Protectora 30gr",
    Precio: 297.70,
    img: './image/bephanten.jpg'
},
{
    id: 19,
    Nombre: "Bushi Pezonera Siliconada x 2 Unidades",
    Precio: 754.60,
    img: './image/bushi.jpg'
},
{
    id: 20,
    Nombre: "Toallitas Húmedas Pampers Aroma Naturaleza 108 Unidades",
    Precio: 491.25,
    img: './image/pampers.jpg'
},
{
    id: 21,
    Nombre: "Toallitas Húmedas Pampers Recién Nacidos 48 un",
    Precio: 414.00,
    img: './image/pampers toallitas.jpg'
},
{
    id: 22,
    Nombre: "Esterilizador Mamadera Para Microondas San Up Xb 9603",
    Precio: 2324.75,
    img: './image/san up.jpg'
},
{
    id: 23,
    Nombre: "Shampoo Johnson's Baby Ph Balanceado 400 ml",
    Precio: 479.00,
    img: './image/shampoo johnson.jpg'
},
{
    id: 24,
    Nombre: "Chupetes Avent Classic I Love Mamá 6 18m 2un",
    Precio: 1275.30,
    img: './image/baby chupete.jpg'
},
{
    id: 25,
    Nombre: "Crema Hidratante de Noche Ultra Age + 30 Reparadora",
    Precio: 1903.30,
    img: './image/dermaglos hidratante.jpg'
},
{
    id: 26,
    Nombre: "Combo Dermaglos Ultra Age + 30 Contorno Ojos + Hidratante Día",
    Precio: 5435.50,
    img: './image/dermaglos combo.jpg'
},
{
    id: 27,
    Nombre: "Kit Loreal Revitalift Día + Ojo + Agua Micelar Garnier",
    Precio: 2589.30,
    img: './image/loreal dermo.jpg'
},
{
    id: 28,
    Nombre: "Rutina Piel Seca Dermaglos Lociones Rostro",
    Precio: 4837.70,
    img: './image/dermaglos rutina.jpg'
},
{
    id: 29,
    Nombre: "Crema Hidratante Dermaglos De Día Piel Normal 70gr",
    Precio: 1152.20,
    img: './image/dermaglos piel normal.jpg'
},
{
    id: 30,
    Nombre: "Asepxia Mascarilla Balance Efecto Burbujas x 1 Unidad",
    Precio: 295.00,
    img: './image/asepxia mascarilla.jpg'
},
{
    id: 31,
    Nombre: "Acf Máscara Facial Amazing Black Mask",
    Precio: 280.00,
    img: './image/acf mascara.jpg'
},
{
    id: 32,
    Nombre: "Crema Facial Nivea Q10 Plus C Día Fps 15 Anti Age Energ 50ml",
    Precio: 839.00,
    img: './image/nivea facial.jpg'
},
{
    id: 33,
    Nombre: "Combo Tommy Hilfiger Cologne Men Ed5 50 ml + Body Wash",
    Precio: 8767.52,
    img: './image/tommy hilfiger combo.jpg'
},
{
    id: 34,
    Nombre: "Perfume Importado Mujer Cacharel Yes I am Pink Edp",
    Precio: 4992.00,
    img: './image/cacharel perfume.jpg'
},
{
    id: 35,
    Nombre: "Perfume Pepe Jeans Celebrate For Him Edp 100Ml",
    Precio: 4392.00,
    img: './image/pepe jeans.jpg'
},
{
    id: 36,
    Nombre: "Dkny Be Delicius Edp concentracion de 30ml",
    Precio: 9832.00,
    img: './image/dkny.jpg'
},
{
    id: 37,
    Nombre: "Set Perfume Tommy Impact 100 ml + Face Moisturizer + Mini 4ml",
    Precio: 11592.00,
    img: './image/tommy hilfiger set.jpg'
},
{
    id: 38,
    Nombre: "Perfume Pepe Jeans Celebrate For Her Edp 80ml",
    Precio: 3987.00,
    img: './image/pepe jeans perfume.jpg'
},
{
    id: 39,
    Nombre: "Set Perfume Tommy Impact 50 ml + Hair&Body Wash 100ml",
    Precio: 9752.00,
    img: './image/tommy hilfiger impact.jpg'
},
{
    id: 40,
    Nombre: "Cacharel Anais L'original Edt Presentacion 100ml",
    Precio: 7920.00,
    img: './image/cacharel anais.jpg'
},
]

const productosFarmacia = document.querySelector('.arreglo-productos');
const carrito = document.querySelector('.arreglo-carrito');
const productosCarritos = [];

//Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();


});

function mostrarProductos() {
    for (const items of productos) {
        const divProductos = document.createElement('div');
        divProductos.classList.add('card');
        const imgProducto = document.createElement("img");
        imgProducto.classList.add('imagen-producto');
        imgProducto.src = items.img;
        const tituloProducto = document.createElement("h2");
        tituloProducto.classList.add('titulo-producto');
        tituloProducto.textContent = items.Nombre;
        const PrecioProducto = document.createElement("h2");
        PrecioProducto.classList.add('precio-producto');
        PrecioProducto.textContent = "$ " + items.Precio;
        const btnAgregarCarrito = document.createElement('button');
        btnAgregarCarrito.classList.add('btn-carrito');
        btnAgregarCarrito.textContent = "Agregar al Carrito";
        btnAgregarCarrito.onclick = () => {
            agregarCarrito(items.id)
            sumarVentas(items.Precio)
        };
        divProductos.appendChild(imgProducto);
        divProductos.appendChild(tituloProducto);
        divProductos.appendChild(PrecioProducto);
        divProductos.appendChild(btnAgregarCarrito);
        productosFarmacia.appendChild(divProductos);

    }

}
// funcion para agregar productos al nuevo array del carrito
function agregarCarrito(id) {
    const productoEncontrado = productos.find(productos => productos.id === id);
    productosCarritos.push(productoEncontrado);

}
// funcion para sumar los productos agregador al carrito
function sumarVentas(precio) {
    suma = suma + precio;

}
const divcarrito = document.createElement('div');
const btnCarrito = document.createElement('button');
btnCarrito.classList.add('btn-comprar');
btnCarrito.textContent = "Comprar Carrito";
btnCarrito.onclick = () => {
    swal({
        title: "Forma de Pago",
        buttons: ["Efectivo / Débito", "Crédito"],

    })
        .then((contado) => {
            if (contado) {
                suma = suma * 1.21;
                swal(`La suma de los productos del carrito pagando en Crédito es $${suma.toFixed(2)}`, {
                    icon: "success",
                });
            } else {
                swal(`La suma de los productos del carrito pagando en Efectivo / Debito es $${suma.toFixed(2)}`, {
                    icon: "success",
                });
            }
        });

}

divcarrito.appendChild(btnCarrito)
carrito.appendChild(divcarrito);