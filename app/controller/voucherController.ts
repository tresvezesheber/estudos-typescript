import {Voucher} from "../model/voucher.js";
import {Vouchers} from '../model/vouchers.js';
import {VouchersView} from "../view/VouchersView.js";

export class VoucherController {
    private inputCodigo: HTMLInputElement;
    private inputVelocidade: HTMLInputElement;
    private vouchers = new Vouchers();
    private vouchersView = new VouchersView('#vouchersView');

    constructor() {
        this.inputCodigo = document.querySelector('#codigo');
        this.inputVelocidade = document.querySelector('#velocidade');
        this.vouchersView.update(this.vouchers);
    }

    adiciona(): void {
        const voucher = this.criaVoucher();
        this.vouchers.adiciona(voucher);
        this.vouchersView.update(this.vouchers);
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