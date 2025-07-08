// features/pageobjects/pagos.page.js
import Page from './page.js';

class PagosPage extends Page {
    get linkBillPay () { return $('=Bill Pay'); }
    get inputAccountNumber () { return $('input[name="payee.accountNumber"]'); }
    get inputAmount () { return $('input[name="amount"]'); }
    get btnSendPayment () { return $('input[value="Send Payment"]'); }
    get confirmationMessage () { return $('#rightPanel .title'); }

    async irAPagos() {
        await this.linkBillPay.click();
    }

    async hacerPago(cuenta, monto) {
        await this.inputAccountNumber.setValue(cuenta);
        await this.inputAmount.setValue(monto);
        await this.btnSendPayment.click();
    }

    async obtenerMensaje() {
        return await this.confirmationMessage.getText();
    }
}

export default new PagosPage();
