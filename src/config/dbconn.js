if (!process.env.PG_DB) {
  const fs = require('fs')
  const dotenv = require('dotenv')
  const envConfig = dotenv.parse(fs.readFileSync('.env'))

  for (var k in envConfig) {
    process.env[k] = envConfig[k]
  }

  console.log('[api][sequelize] Loaded database ENV vars from .env file')
}

import Sequelize from 'sequelize';

const sequelize = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
  host: process.env.POSTGRES_HOST,
  dialect: 'postgres'
});

export default sequelize;
