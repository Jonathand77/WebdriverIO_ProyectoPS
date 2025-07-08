// features/step-definitions/prestamosSteps.js
import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page.js';
import PrestamosPage from '../pageobjects/prestamos.page.js';
import { expect } from 'chai';

Given(/^el usuario accede al sistema Parabank$/, async () => {
    await browser.url('/');
    await LoginPage.login('ElPatoLucas', '12345678');
});

When(/^navega a la sección de préstamos$/, async () => {
    await PrestamosPage.irASolicitudPrestamo();
});

When(/^solicita un préstamo de "([^"]*)" con una cuota inicial de "([^"]*)"$/, async (monto, cuota) => {
    await PrestamosPage.solicitarPrestamo(monto, cuota);
});

Then(/^debería ver un mensaje de confirmación de préstamo$/, async () => {
    const mensaje = await PrestamosPage.obtenerMensaje();
    expect(mensaje).to.include('Loan Request Processed');
});
