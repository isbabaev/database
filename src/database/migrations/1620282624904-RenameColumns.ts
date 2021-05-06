import {MigrationInterface, QueryRunner} from "typeorm";

export class RenameColumns1620282624904 implements MigrationInterface {
    name = 'RenameColumns1620282624904'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" RENAME COLUMN "photoUrls" TO "photo_urls"`);
        await queryRunner.query(`ALTER TABLE "purchases" RENAME COLUMN "purchaseDate" TO "purchase_date"`);
        await queryRunner.query(`ALTER TABLE "accounts" RENAME COLUMN "firstName" TO "first_name"`);
        await queryRunner.query(`ALTER TABLE "accounts" RENAME COLUMN "lastName" TO "last_name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "accounts" RENAME COLUMN "first_name" TO "firstName"`);
        await queryRunner.query(`ALTER TABLE "accounts" RENAME COLUMN "last_name" TO "lastName"`);
        await queryRunner.query(`ALTER TABLE "purchases" RENAME COLUMN "purchase_date" TO "purchaseDate"`);
        await queryRunner.query(`ALTER TABLE "products" RENAME COLUMN "photo_urls" TO "photoUrls"`);
    }

}
