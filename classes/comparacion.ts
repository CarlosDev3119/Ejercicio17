

export class Filtrador {

    constructor(
        public numeros: number[],
    ){
        this.numeros = numeros;
    }

    public filtrarNumerosPares(): number[] {

        return this.numeros.filter((numero) => numero > 20);
    }
}