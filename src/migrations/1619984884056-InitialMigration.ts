import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1619984884056 implements MigrationInterface {
    name = 'InitialMigration1619984884056'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product_entity" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "photoUrls" text array NOT NULL, "price" integer NOT NULL, "sellerId" integer, CONSTRAINT "PK_6e8f75045ddcd1c389c765c896e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "account_entity" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_b482dad15becff9a89ad707dcbe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "purchase_entity" ("id" SERIAL NOT NULL, "purchaseDate" TIMESTAMP NOT NULL, "buyerId" integer, CONSTRAINT "PK_a11b7b019f7eef6ff53f963c1f9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "product_entity" ADD CONSTRAINT "FK_76891dffc20e4764045d48a9444" FOREIGN KEY ("sellerId") REFERENCES "account_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "purchase_entity" ADD CONSTRAINT "FK_205401c30a8eadd8e0d1a396984" FOREIGN KEY ("buyerId") REFERENCES "account_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "purchase_entity" DROP CONSTRAINT "FK_205401c30a8eadd8e0d1a396984"`);
        await queryRunner.query(`ALTER TABLE "product_entity" DROP CONSTRAINT "FK_76891dffc20e4764045d48a9444"`);
        await queryRunner.query(`DROP TABLE "purchase_entity"`);
        await queryRunner.query(`DROP TABLE "account_entity"`);
        await queryRunner.query(`DROP TABLE "product_entity"`);
    }

}
