import {Voucher} from "./voucher.js";

export class Vouchers {
    private vouchers: Array<Voucher> = [];

    adiciona(voucher: Voucher) {
        this.vouchers.push(voucher);
    }

    lista(): Array<Voucher> {
        return this.vouchers;
    }
}