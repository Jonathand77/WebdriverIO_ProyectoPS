// features/step-definitions/pagosSteps.js
import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page.js';
import PagosPage from '../pageobjects/pagos.page.js';
import { expect } from 'chai';

Given(/^el usuario inicia sesión en Parabank$/, async () => {
    await browser.url('/');
    await LoginPage.login('ElPatoLucas', '12345678'); // cambia si tienes otros credenciales
});

When(/^navega a la sección de pagos$/, async () => {
    await PagosPage.irAPagos();
});

When(/^realiza un pago a la cuenta "([^"]*)" por el monto "([^"]*)"$/, async (cuenta, monto) => {
    await PagosPage.hacerPago(cuenta, monto);
});

Then(/^debería ver un mensaje de confirmación de pago$/, async () => {
    const mensaje = await PagosPage.obtenerMensaje();
    expect(mensaje).to.include('Bill Payment Complete');
});
