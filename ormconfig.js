const database = {
  development: 'dev-online-shop',
  test: 'test-online-shop'
}

const rootDir = {
  development: 'dist',
  test: 'src'
}

module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: database[process.env.NODE_ENV],
  entities: [rootDir[process.env.NODE_ENV] + '/**/entities/*{.ts,.js}'],
  migrations: [rootDir[process.env.NODE_ENV] + '/**/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/database/migrations'
  }
};
