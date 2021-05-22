class Config {
  #database;
  #rootDir;

  #migrationNodeEnv;
  #nodeEnv;

  constructor() {
    this.#database = {
      development: 'dev-online-shop',
      test: 'test-online-shop',
    };
    this.#rootDir = {
      development: 'dist',
      test: 'src',
    };

    this.#migrationNodeEnv = process.env.MIGRATION_NODE_ENV;
    this.#nodeEnv = process.env.NODE_ENV;
  }

  get database() {
    if (this.#migrationNodeEnv) {
      return this.#database[this.#migrationNodeEnv];
    } else {
      return this.#database[this.#nodeEnv];
    }
  }

  get rootDir() {
    if (this.#migrationNodeEnv) {
      return this.#rootDir.development;
    } else {
      return this.#rootDir[this.#nodeEnv];
    }
  }
}

const config = new Config();

module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: config.database,
  entities: [config.rootDir + '/**/entities/*{.ts,.js}'],
  migrations: [config.rootDir + '/**/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};
