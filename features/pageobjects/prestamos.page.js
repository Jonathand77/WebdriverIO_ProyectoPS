// features/pageobjects/prestamos.page.js
import Page from './page.js';

class PrestamosPage extends Page {
    get linkLoan() { return $('=Request Loan'); }
    get inputMonto() { return $('input[name="amount"]'); }
    get inputCuotaInicial() { return $('input[name="downPayment"]'); }
    get selectCuenta() { return $('select[name="fromAccountId"]'); }
    get btnAplicar() { return $('input[value="Apply Now"]'); }
    get mensajeResultado() { return $('#rightPanel h1'); }

    async irASolicitudPrestamo() {
        await this.linkLoan.waitForClickable();
        await this.linkLoan.click();
    }

    async solicitarPrestamo(monto, cuota, cuentaIdx = 1) {
        await this.inputMonto.setValue(monto);
        await this.inputCuotaInicial.setValue(cuota);
        await this.selectCuenta.selectByIndex(cuentaIdx); // o por valor si tienes uno específico
        await this.btnAplicar.click();
    }

    async obtenerMensaje() {
        return await this.mensajeResultado.getText();
    }
}

export default new PrestamosPage();

