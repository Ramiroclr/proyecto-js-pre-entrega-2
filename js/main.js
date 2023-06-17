// Seleccionar el Producto
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

// Productos seleccionados
let carrito = [];

// Agregar un producto al carrito
function agregarProducto() {
    let nombre = prompt("Ingrese el nombre del producto:");
    let precio = parseInt(prompt("Ingrese el precio del producto:"));

    let producto = new Producto(nombre, precio);
    carrito.push(producto);

    alert(`¡${nombre} ha sido agregado al carrito!`);
}

// Mostrar el carrito
function mostrarCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío");
    } else {
        let mensaje = "Carrito de compras:\n\n";
        let sumaTotal = 0;

        for (let i = 0; i < carrito.length; i++) {
            let producto = carrito[i];
            mensaje += "Producto: " + producto.nombre + " - Precio: $" + producto.precio.toFixed(2) + "\n";
            sumaTotal += producto.precio;
        }

        mensaje += "\nSuma Total: $" + sumaTotal.toFixed(2);
        alert(mensaje);
    }
}

// Finalizar la compra
function salir() {
    alert("Gracias por elegirnos, ¡Te esperamos pronto!");
}

// Mostrar el menú
function mostrarMenu() {
    let opcion;
    do {
        opcion = prompt("Seleccione una opción:\n1. Agregar producto\n2. Mostrar carrito\n3. Salir");
        switch (opcion) {
            case "1":
                agregarProducto();
                break;
            case "2":
                mostrarCarrito();
                break;
            case "3":
                salir();
                break;
            default:
                alert("Opción inválida");
        }
    } while (opcion !== "3");
}

mostrarMenu();
