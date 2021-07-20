- `localhost:3000/` - frames example, `4242 4242 4242 4242 05/28 100` - test card, then copy paste token to `POST localhost:3000/api/v1/payment/(card | 3ds) {"token": your_token }`
- change webhook domain at https://sandbox.checkout.com/settings/channels to see logged response from incoming webhook events (i've left credentials of the account in the task comments)
- payment approved webhook
``` 
{
  id: 'evt_cm2dcakhrfquxe6zr67zubt5d4',
  type: 'payment_approved',
  created_on: '2021-07-20T06:54:40Z',
  data: {
    action_id: 'act_nlntlwuhz422lolewyc7kdmq6i',
    payment_type: 'REGULAR',
    auth_code: '612723',
    response_code: '10000',
    response_summary: 'Approved',
    scheme_id: '280581590680658',
    source: {
      id: 'src_or3zrh3hmwoebghqeefkxgdqla',
      type: 'card',
      billing_address: {},
      expiry_month: 5,
      expiry_year: 2028,
      scheme: 'VISA',
      last_4: '4242',
      fingerprint: '11f7812fd7b02d4cbee8d22f997fe727e9887378d8fcf111cb2da4f861fd12f0',
      bin: '424242',
      card_type: 'Credit',
      card_category: 'Consumer',
      issuer: 'JPMORGAN CHASE BANK NA',
      issuer_country: 'US',
      product_id: 'A',
      product_type: 'Visa Traditional',
      avs_check: 'S',
      cvv_check: 'Y'
    },
    customer: { id: 'cus_5q2acxgv5kjethy3hunosyz6ke', email: 'user@email.com' },
    processing: {
      acquirer_transaction_id: '8777332936',
      retrieval_reference_number: '270321487004'
    },
    amount: 1000,
    metadata: {},
    risk: { flagged: false },
    id: 'pay_nlntlwuhz422lolewyc7kdmq6i',
    currency: 'EUR',
    processed_on: '2021-07-20T06:54:40Z',
    reference: 'ORDER123'
  },
  _links: {
    self: {
      href: 'https://api.sandbox.checkout.com/events/evt_cm2dcakhrfquxe6zr67zubt5d4'
    },
    payment: {
      href: 'https://api.sandbox.checkout.com/payments/pay_nlntlwuhz422lolewyc7kdmq6i'
    }
  }
}
```
- payment captured webhook
```
{
  id: 'evt_4hp7sxazjvyujjcfemxjg32klm',
  type: 'payment_captured',
  created_on: '2021-07-20T06:54:40Z',
  data: {
    action_id: 'act_odnfmihujhbktectzammg6bhb4',
    response_code: '10000',
    response_summary: 'Approved',
    amount: 1000,
    metadata: {},
    processing: {
      acquirer_transaction_id: '2565272232',
      acquirer_reference_number: '824707858398'
    },
    id: 'pay_nlntlwuhz422lolewyc7kdmq6i',
    currency: 'EUR',
    processed_on: '2021-07-20T06:54:40Z',
    reference: 'ORDER123'
  },
  _links: {
    self: {
      href: 'https://api.sandbox.checkout.com/events/evt_4hp7sxazjvyujjcfemxjg32klm'
    },
    payment: {
      href: 'https://api.sandbox.checkout.com/payments/pay_nlntlwuhz422lolewyc7kdmq6i'
    }
  }
} ```
