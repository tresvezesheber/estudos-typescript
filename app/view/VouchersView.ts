import {Vouchers} from "../model/vouchers.js";

export class VouchersView {
    private elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    template(modelo: Vouchers): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Velocidade</th>
                    <th>Já foi utilizado</th>
                    <th>Data de Criação</th>
                </tr>
            </thead>
            <tbody>
                ${modelo.lista().map(voucher => {
                    return `
                    <tr>
                        <td>${voucher.codigo.toUpperCase()}</td>
                        <td>${voucher.velocidade} MB/s</td>
                        <td>${voucher.foiUsado}</td>
                        <td>${new Intl.DateTimeFormat().format(voucher.dataDeCriacao)}</td>
                    </tr>
                    `;
                }).join('')}
            </tbody>
        </table>
        `;
    }

    update(modelo: Vouchers): void {
        this.elemento.innerHTML = this.template(modelo);
    }
}