import { Filtrador } from "./classes/comparacion";

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 38, 734, 12, -12, 34, 42, 12, 4, 12, 33];

const filtrador = new Filtrador(numeros);

console.log(filtrador.filtrarNumerosPares());