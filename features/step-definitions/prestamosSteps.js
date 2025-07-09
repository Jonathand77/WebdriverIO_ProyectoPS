// features/step-definitions/prestamosSteps.js
import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page.js';
import PrestamosPage from '../pageobjects/prestamos.page.js';
import { expect } from 'chai';

Given('I am on the login page', async () => {
    await browser.url('/');
});

When('I login with {string} and {string}', async (username, password) => {
    await LoginPage.login(username, password);
});

Given('I am on the request loan page', async () => {
    await PrestamosPage.irASolicitudPrestamo();
});

When('I request a loan of {int} with down payment {int}', async (amount, downPayment) => {
    await PrestamosPage.solicitarPrestamo(amount, downPayment);
});
