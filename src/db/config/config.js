module.exports = {
  development: {
    url: process.env.DATABASE_URL || 'postgresql://devuser:devpass@localhost:5432/devdb',
    dialect: 'postgres'
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }
  }
};
