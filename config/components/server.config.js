'use strict';

const joi = require('joi');

/**
 * Generate a validation schema using joi to check the type of your environment variables
 */
const envSchema = joi
  .object({
    NODE_ENV: joi.string().allow(['development', 'production', 'test']),
    PORT: joi.number(),
    API_VERSION: joi.number(),
    CKO_SECRET_KEY: joi.string(),
    CKO_PUBLIC_KEY: joi.string(),
  })
  .unknown()
  .required();

/**
 * Validate the env variables using joi.validate()
 */
const { error, value: envVars } = joi.validate(process.env, envSchema);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  env: envVars.NODE_ENV,
  isTest: envVars.NODE_ENV === 'test',
  isDevelopment: envVars.NODE_ENV === 'development',
  server: {
    port: envVars.PORT || 3000,
    apiVersion: envVars.API_VERSION || 'v1',
    secretKey:
      envVars.CKO_SECRET_KEY || 'sk_test_ba898b6a-3301-4967-b78a-c36350c4bfd0',
    publicKey:
      envVars.CKO_PUBLIC_KEY || 'pk_test_9ab02c90-1ac6-4259-a227-7e398027d0e5',
  },
};

module.exports = config;
