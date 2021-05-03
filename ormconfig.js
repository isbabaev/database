// require('dotenv/config');

const database = {
  development: "dev-online-shop",
  production: 'prod-online-shop',
  test: 'test-online-shop'
}

module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: database[process.env.NODE_ENV],
  entities: ['dist/entities/**/*.js'],
  migrations: ['dist/migrations/**/*.js'],
  subscribers: ['dist/subscribers/**/*.js'],
};
