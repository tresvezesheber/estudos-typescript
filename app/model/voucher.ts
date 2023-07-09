export class Voucher {
    constructor(
        private _dataDeCriacao: Date,
        public readonly codigo: string,
        public readonly velocidade: number,
        public readonly foiUsado: boolean
    ) {}

    get dataDeCriacao(): Date {
        const dataDecriacao = new Date(this._dataDeCriacao.getTime());
        return dataDecriacao;
    }
}