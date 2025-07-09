// features/step-definitions/pagosSteps.js
import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page.js';
import PagosPage from '../pageobjects/pagos.page.js';
import { expect } from 'chai';

Given('I am on the login page', async () => {
    await browser.url('/');
});

When('I login with {string} and {string}', async (username, password) => {
    await LoginPage.login(username, password);
});

Given('I am on the Bill Pay page', async () => {
    await PagosPage.irAPagos();
});

When('I make a payment to account {string} with amount {int}', async (account, amount) => {
    await PagosPage.hacerPago(account, amount);
});
