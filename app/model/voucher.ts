export class Voucher {
    constructor(
        private _dataDeCriacao: Date,
        private readonly codigo: string,
        private readonly velocidade: number,
        private readonly foiUsado: boolean
    ) {}

    get dataDeCriacao(): Date {
        const dataDecriacao = new Date(this._dataDeCriacao.getTime());
        return dataDecriacao;
    }
}