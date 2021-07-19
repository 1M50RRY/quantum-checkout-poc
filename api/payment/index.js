'use strict';

const controller = require('./payment.controller');

module.exports = Router => {
  const router = new Router({
    prefix: `/payment`,
  });

  router.post('/card', controller.createCard);
  router.post('/webhook', controller.webhook);
  router.post('/3ds', controller.create3DS);

  return router;
};
