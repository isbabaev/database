import {MigrationInterface, QueryRunner} from "typeorm";

export class NullablePassword1623131994979 implements MigrationInterface {
    name = 'NullablePassword1623131994979'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "accounts" ALTER COLUMN "password" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "accounts" ALTER COLUMN "password" SET NOT NULL`);
    }

}
