import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeProductPriceType1622183212816 implements MigrationInterface {
    name = 'ChangeProductPriceType1622183212816'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "price" numeric(12,2) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "price" integer NOT NULL`);
    }

}
