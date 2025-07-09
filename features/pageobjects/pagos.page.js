// features/pageobjects/pagos.page.js
import Page from './page.js';

class PagosPage extends Page {
    get linkBillPay() { return $('=Bill Pay'); }

    // Campos del formulario de pago
    get inputPayeeName() { return $('input[name="payee.name"]'); }
    get inputAddress() { return $('input[name="payee.address.street"]'); }
    get inputCity() { return $('input[name="payee.address.city"]'); }
    get inputState() { return $('input[name="payee.address.state"]'); }
    get inputZipCode() { return $('input[name="payee.address.zipCode"]'); }
    get inputPhone() { return $('input[name="payee.phoneNumber"]'); }
    get inputAccountNumber() { return $('input[name="payee.accountNumber"]'); }
    get inputVerifyAccount() { return $('input[name="verifyAccount"]'); }
    get inputAmount() { return $('input[name="amount"]'); }
    get selectFromAccount() { return $('select[name="fromAccountId"]'); }

    get btnSendPayment() { return $('input[value="Send Payment"]'); }
    get confirmationMessage() { return $('#rightPanel .title'); }

    async irAPagos() {
        await this.linkBillPay.waitForClickable();
        await this.linkBillPay.click();
    }

    async hacerPago(cuenta, monto) {
        // Valores genéricos para completar el formulario
        await this.inputPayeeName.setValue('Valeria');
        await this.inputAddress.setValue('Provenza');
        await this.inputCity.setValue('Medellin');
        await this.inputState.setValue('Antioquia');
        await this.inputZipCode.setValue('35155');
        await this.inputPhone.setValue('1234567');
        await this.inputAccountNumber.setValue(cuenta);
        await this.inputVerifyAccount.setValue(cuenta);
        await this.inputAmount.setValue(monto);
        await this.selectFromAccount.selectByIndex(1); // o selecciona por valor si lo deseas
        await this.btnSendPayment.click();
    }

    async obtenerMensaje() {
        return await this.confirmationMessage.getText();
    }
}

export default new PagosPage();
