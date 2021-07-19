'use strict';
const { Checkout } = require('checkout-sdk-node');
const {
  server: { secretKey, publicKey },
} = require('../../config');

const cko = new Checkout(secretKey, { pk: publicKey, timeout: 7000 });

exports.createSofort = async ctx => {
  const response = await cko.payments.request({
    source: {
      type: 'sofort',
    },
    currency: 'EUR',
    amount: 1000,
  });
  ctx.status = 200;
  ctx.body = response;
};

exports.create3DS = async ctx => {
  const payment = await cko.payments.request({
    source: {
      token: ctx.request.body.token,
    },
    '3ds': {
      enabled: true,
    },
    customer: {
      email: 'user@email.com',
      name: 'James Bond',
    },
    currency: 'EUR',
    amount: 1000, // cents
    reference: 'ORDER123',
  });
  ctx.status = 200;
  ctx.boxy = payment;
};

exports.createCard = async ctx => {
  const payment = await cko.payments.request({
    source: {
      token: ctx.request.body.token,
    },
    customer: {
      email: 'user@email.com',
      name: 'James Bond',
    },
    currency: 'EUR',
    amount: 1000, // cents
    reference: 'ORDER123',
  });
  ctx.status = 200;
  ctx.boxy = payment;
};

exports.createHosted = async ctx => {
  const hosted = await cko.hostedPayments.create({
    amount: 10,
    currency: 'USD',
    billing: {
      address: {
        address_line1: 'Checkout.com',
        address_line2: '90 Tottenham Court Road',
        city: 'London',
        state: 'London',
        zip: 'W1T 4TJ',
        country: 'GB',
      },
    },
    success_url: 'https://example.com/success',
    cancel_url: 'https://example.com/cancel',
    failure_url: 'https://example.com/failure',
  });
  ctx.status = 200;
  ctx.boxy = hosted;
};

exports.createLink = async ctx => {
  const linksResponse = await cko.paymentLinks.create({
    amount: 10359,
    currency: 'EUR',
    billing: {
      address: {
        country: 'DE',
      },
    },
    products: [
      {
        name: 'Moonlight blue lightsaber',
        quantity: 2,
        price: 3999,
      },
      {
        name: 'Stainless steel watch strap',
        quantity: 1,
        price: 2361,
      },
    ],
    return_url: 'https://pay.sandbox.checkout.com/link/examples/docs',
  });
  ctx.status = 200;
  ctx.boxy = linksResponse;
};

exports.webhook = async ctx => {
  console.log(ctx.request.body, 'incoming webhook');
  ctx.status = 200;
  ctx.body = {};
};
