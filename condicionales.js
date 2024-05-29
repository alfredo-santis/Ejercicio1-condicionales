
/*

// 1.Programa para solicitar al usuario que responda a una pregunta

// Función para solicitar al usuario una respuesta

    const respuesta = prompt(pregunta);  // Muestra un cuadro de diálogo para ingresar la respuesta
    return respuesta;
  
  // Función para evaluar la respuesta del usuario
  function evaluarRespuesta(respuesta) {
    if (respuesta.toLowerCase() === "sí" || respuesta.toLowerCase() === "si") {
      console.log("Ciertamente");  // Muestra un mensaje si la respuesta es "sí"
    } else {
      console.log("No te creo");  // Muestra un mensaje si la respuesta no es "sí"
    }
  }
  
  // Solicita al usuario la pregunta
  const preguntaUsuario = preguntar("¿Eres bellisimo/a?");
  
  // Evalúa la respuesta del usuario
  evaluarRespuesta(preguntaUsuario);
  */


  /*
  // 2.Programa para verificar la divisibilidad entre 2

// Función para solicitar un número al usuario

    const numeroString = prompt("Ingrese un número:");
    if (numeroString === null || isNaN(numeroString)) {
      return null; // Indica que el usuario no ingresó un número válido
    }
    return parseFloat(numeroString); // Convierte la cadena a número flotante

  
  //  verificar la divisibilidad entre 2
  function esDivisibleEntreDos(numero) {
    if (numero % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  // principal
  function main() {
    const numero = solicitarNumero();
  
    if (numero === null) {
      console.error("Error: El usuario no ingresó un número válido.");
      return;
    }
  
    const mensaje = numero + (esDivisibleEntreDos(numero) ? " es divisible entre 2" : " no es divisible entre 2");
    console.log(mensaje);
  }
  
  // Ejecución del programa
  main();
 */

/*
// 3.Programa JavaScript para determinar si un número es par o impar

function esPar(numero) {
  return numero % 2 === 0;
}

function mostrarResultado(numero, esPar) {
  const mensaje = `${numero} es ${esPar ? 'par' : 'impar'}`;
  alert(mensaje);
}

function main() {
  const numeroString = prompt("Ingrese un número:");
  if (numeroString === null || isNaN(numeroString)) {
    alert("Error: El usuario no ingresó un número válido.");
    return;
  }

  const numero = parseInt(numeroString);
  const esParValor = esPar(numero);
  mostrarResultado(numero, esParValor);
}

main();

*/

/*
// 4. Programa JavaScript para verificar número de cliente y premio

function verificarPremio(numeroCliente) {
    if (numeroCliente === 1000) {
      console.log("¡Ganaste un premio!");
    } else {
      console.log(`Lo sentimos, ${numeroCliente}, sigue participando.`);
    }
  }
  
  function main() {
    const numeroClienteString = prompt("Ingrese su número de cliente:");
    if (numeroClienteString === null || isNaN(numeroClienteString)) {
      console.error("Error: El usuario no ingresó un número válido.");
      return;
    }
  
    const numeroCliente = parseInt(numeroClienteString);
    verificarPremio(numeroCliente);
  }
  
  main();
  */

  /*
  // 5.Programa JavaScript para comparar dos números

function compararNumeros(numero1, numero2) {
    if (numero1 < numero2) {
      console.log(`${numero1} es menor que ${numero2}`);
    } else if (numero1 > numero2) {
      console.log(`${numero2} es menor que ${numero1}`);
    } else {
      console.log("Los números son iguales.");
    }
  }
  
  function main() {
    const numero1String = prompt("Ingrese el primer número:");
    if (numero1String === null || isNaN(numero1String)) {
      console.error("Error: El primer número no es válido.");
      return;
    }
  
    const numero2String = prompt("Ingrese el segundo número:");
    if (numero2String === null || isNaN(numero2String)) {
      console.error("Error: El segundo número no es válido.");
      return;
    }
  
    const numero1 = parseFloat(numero1String);
    const numero2 = parseFloat(numero2String);
  
    compararNumeros(numero1, numero2);
  }
  
  main();
  */

  /*

  // 6.Programa JavaScript para encontrar el número mayor entre tres

function encontrarMayor(numero1, numero2, numero3) {
    let mayor = numero1;
    if (numero2 > mayor) {
      mayor = numero2;
    }
    if (numero3 > mayor) {
      mayor = numero3;
    }
  
    if (mayor === numero1 && mayor === numero2) {
      console.log("Los números 1 y 2 son los mayores.");
    } else if (mayor === numero1 && mayor === numero3) {
      console.log("Los números 1 y 3 son los mayores.");
    } else if (mayor === numero2 && mayor === numero3) {
      console.log("Los números 2 y 3 son los mayores.");
    } else {
      console.log(`El número mayor es ${mayor}`);
    }
  }
  
  function main() {
    const numero1String = prompt("Ingrese el primer número:");
    if (numero1String === null || isNaN(numero1String)) {
      console.error("Error: El primer número no es válido.");
      return;
    }
  
    const numero2String = prompt("Ingrese el segundo número:");
    if (numero2String === null || isNaN(numero2String)) {
      console.error("Error: El segundo número no es válido.");
      return;
    }
  
    const numero3String = prompt("Ingrese el tercer número:");
    if (numero3String === null || isNaN(numero3String)) {
      console.error("Error: El tercer número no es válido.");
      return;
    }
  
    const numero1 = parseFloat(numero1String);
    const numero2 = parseFloat(numero2String);
    const numero3 = parseFloat(numero3String);
  
    encontrarMayor(numero1, numero2, numero3);
  }
  
  main();
*/  

/*
// 7.Programa para verificar el día de la semana

function mostrarMensajeDia(dia) {
    switch (dia.toLowerCase()) {
      case "lunes":
        console.log("¡Comienza la semana!");
        break;
      case "viernes":
        console.log("¡Fin de semana!");
        break;
      case "sabado":
      case "domingo":
        console.log("¡Fin de semana!");
        break;
      default:
        console.log("Ese no es un día de la semana válido.");
    }
  }
  
  function main() {
    const diaString = prompt("Ingrese un día de la semana:");
    if (diaString === null || diaString.trim() === "") {
      console.error("Error: El día ingresado está vacío.");
      return;
    }
  
    const dia = diaString.trim();
    mostrarMensajeDia(dia);
  }
  
  main();
  */

/*
// 8. Programa para evaluar una calificación

function evaluarCalificacion(calificacion) {
    if (calificacion < 1 || calificacion > 10) {
      console.error("Error: La calificación debe estar entre 1 y 10.");
      return;
    }
  
    if (calificacion < 6) {
      console.log("Reprobado");
    } else if (calificacion < 8) {
      console.log("Regular");
    } else if (calificacion === 9) {
      console.log("Bien");
    } else {
      console.log("Excelente");
    }
  }
  
  function main() {
    const calificacionString = prompt("Ingrese una calificación (entre 1 y 10):");
    if (calificacionString === null || isNaN(calificacionString)) {
      console.error("Error: La calificación debe ser un número válido.");
      return;
    }
  
    const calificacion = parseInt(calificacionString);
    evaluarCalificacion(calificacion);
  }
  
  main();
  */

/*
// 9.Programa para calcular el precio de un helado con topping

const PRECIO-HELADO-BASE = 50; // Precio del helado sin topping
const TOPPINGS = {
  "oreo": 10, // Precio del topping de oreo
  "kitkat": 15, // Precio del topping de KitKat
  "brownie": 20 // Precio del topping de brownie
};

function calcularPrecioHelado(topping) {
  topping = topping.toLowerCase(); // Convertir el topping a minúsculas

  if (TOPPINGS.hasOwnProperty(topping)) {
    return PRECIO-HELADO-BASE + TOPPINGS[topping];
  } else {
    console.log(`No tenemos este topping, lo sentimos.`);
    return PRECIO-HELADO-BASE;
  }
}

function main() {
  const toppingDeseado = prompt("¿Qué topping deseas (oreo, kitkat, brownie)?");
  if (toppingDeseado === null || toppingDeseado.trim() === "") {
    console.error("Error: El topping no puede estar vacío.");
    return;
  }

  const precioTotal = calcularPrecioHelado(toppingDeseado);
  console.log(`El precio total del helado con topping es de ${precioTotal} MXN.`);
}

main();
*/

/*
// 10. Programa para calcular el costo de un programa educativo

const PRECIOS = {
    "Curso": 4999,
    "Carrera": 3999,
    "Maestria": 2999
  };
  
  const DURACIONES = {
    "Curso": 2,
    "Carrera": 6,
    "Maestria": 12
  };
  
  const DESCUENTOS = {
    "Facebook": 0.2,
    "Google": 0.15,
    "Jesua": 0.5
  };
  
  function calcularPrecioTotal(programa, beca) {
    // Validar si el programa existe
    if (!PRECIOS.hasOwnProperty(programa)) {
      console.error(`Error: El programa "${programa}" no es válido.`);
      return;
    }
  
    // Validar si la beca existe
    if (beca && !DESCUENTOS.hasOwnProperty(beca)) {
      console.error(`Error: La beca "${beca}" no es válida.`);
      return;
    }
  
    // Calcular precio base
    let precioBase = PRECIOS[programa];
  
    // Aplicar descuento por beca
    if (beca) {
      precioBase *= (1 - DESCUENTOS[beca]);
    }
  
    // Calcular costo total
    const duracion = DURACIONES[programa];
    const costoTotal = precioBase * duracion;
  
    // Mostrar información al usuario
    console.log(`El costo mensual del programa "${programa}" es de ${precioBase.toFixed(2)} MXN.`);
    console.log(`El costo total del programa "${programa}" es de ${costoTotal.toFixed(2)} MXN en ${duracion} meses.`);
  }
  
  function main() {
    const programa = prompt("Elige un programa (Curso, Carrera, Maestria):").toUpperCase();
    if (programa === null || programa.trim() === "") {
      console.error("Error: El programa no puede estar vacío.");
      return;
    }
  
    const beca = prompt("¿Tienes alguna beca? (Facebook, Google, Jesua):").toUpperCase();
  
    calcularPrecioTotal(programa, beca);
  }
  
  main();
  */

  /*
//11. Programa para calcular el total a pagar por un viaje

const PRECIOS_POR_VEHICULO = {
    "COCHE": 0.20,
    "MOTO": 0.10,
    "AUTOBUS": 0.50
  };
  
  function calcularTotalAPagar(tipoVehiculo, kmRecorridos, litConsumidos) {
    // Validar tipo de vehículo
    if (!PRECIOS_POR_VEHICULO.hasOwnProperty(tipoVehiculo.toUpperCase())) {
      console.error(`Error: El tipo de vehículo "${tipoVehiculo}" no es válido.`);
      return;
    }
  
    // Validar distancia recorrida
    if (kmRecorridos <= 0) {
      console.error("Error: La distancia recorrida debe ser un número positivo.");
      return;
    }
  
    // Validar litros consumidos
    if (litConsumidos < 0) {
      console.error("Error: La cantidad de litros consumidos no puede ser negativa.");
      return;
    }
  
    // Calcular precio por kilómetro
    const precioKilometro = PRECIOS_POR_VEHICULO[tipoVehiculo.toUpperCase()];
  
    // Calcular costo base por kilometraje
    const costoBase = precioKilometro * kmsRecorridos;
  
    // Calcular extra por litros consumidos
    let extraLitros = 0;
    if (litConsumidos <= 100) {
      extraLitros = 5;
    } else {
      extraLitros = 10;
    }
  
    // Calcular total a pagar
    const totalAPagar = costoBase + extraLitros;
  
    // Mostrar información al usuario
    console.log(`Tipo de vehículo: ${tipoVehiculo}`);
    console.log(`Kilómetros recorridos: ${kmRecorridos}`);
    console.log(`Litros consumidos: ${litConsumidos}`);
    console.log(`Costo base: ${costoBase.toFixed(2)}`);
    console.log(`Extra por litros: ${extraLitros}`);
    console.log(`Total a pagar: ${totalAPagar.toFixed(2)}`);
  }
  
  function main() {
    const tipoVehiculo = prompt("Ingrese el tipo de vehículo (COCHE, MOTO, AUTOBUS):").toUpperCase();
    if (tipoVehiculo === null || tipoVehiculo.trim() === "") {
      console.error("Error: El tipo de vehículo no puede estar vacío.");
      return;
    }
  
    const kmRecorridos = parseFloat(prompt("Ingrese la distancia recorrida en kilómetros:"));
    if (isNaN(kmRecorridos)) {
      console.error("Error: La distancia recorrida debe ser un número válido.");
      return;
    }
  
    const litrosConsumidos = parseFloat(prompt("Ingrese la cantidad de litros consumidos:"));
    if (isNaN(litConsumidos)) {
      console.error("Error: La cantidad de litros consumidos debe ser un número válido.");
      return;
    }
  
    calcularTotalAPagar(tipoVehiculo, kmRecorridos, litConsumidos);
  }
  
  main();
 */