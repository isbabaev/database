import { createConnection, getConnection } from 'typeorm';

const connection = {
  async clear() {
    const connection = getConnection();
    const entities = connection.entityMetadatas;

    for (const entity of entities) {
      const repository = connection.getRepository(entity.name);
      await repository.query(`DELETE FROM ${entity.tableName}`);
    }
  },
};
export default connection;
