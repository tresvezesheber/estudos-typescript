import {Voucher} from "../model/voucher.js";
import {Vouchers} from '../model/vouchers.js';

export class VoucherController {
    private inputCodigo: HTMLInputElement;
    private inputVelocidade: HTMLInputElement;
    private vouchers = new Vouchers();

    constructor() {
        this.inputCodigo = document.querySelector('#codigo');
        this.inputVelocidade = document.querySelector('#velocidade');
    }

    adiciona(): void {
        const voucher = this.criaVoucher();
        this.vouchers.adiciona(voucher);
        console.log(this.vouchers.lista());
        this.limpaFormulario();
    }

    criaVoucher(): Voucher {
        const dataDeCriacao = new Date();
        const codigo = this.inputCodigo.value;
        const velocidade = parseFloat(this.inputVelocidade.value);
        return new Voucher(dataDeCriacao, codigo, velocidade, false);
    }

    limpaFormulario(): void {
        this.inputCodigo.value = '';
        this.inputVelocidade.value = '';
    }
}