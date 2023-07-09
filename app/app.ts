import {VoucherController} from "./controller/voucherController.js";

const controller = new VoucherController();
const form = document.querySelector('.form');

form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});

