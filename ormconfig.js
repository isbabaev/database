const database = {
  development: 'dev-online-shop',
  test: 'test-online-shop'
}

const rootDir = {
  development: 'dist',
  test: 'src'
}

const currentDatabase = database[process.env.NODE_ENV] || database.development;
const currentRootDir = rootDir[process.env.NODE_ENV] || rootDir.development;

module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: currentDatabase,
  entities: [currentRootDir + '/**/entities/*{.ts,.js}'],
  migrations: [currentRootDir + '/**/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/database/migrations'
  }
};
