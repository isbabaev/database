import {MigrationInterface, QueryRunner} from "typeorm";

export class RenamePhotoUrlsColumn1622039217273 implements MigrationInterface {
    name = 'RenamePhotoUrlsColumn1622039217273'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" RENAME COLUMN "photo_urls" TO "photo_uris"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" RENAME COLUMN "photo_uris" TO "photo_urls"`);
    }

}
