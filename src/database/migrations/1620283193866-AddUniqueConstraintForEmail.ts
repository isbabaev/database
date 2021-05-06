import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUniqueConstraintForEmail1620283193866 implements MigrationInterface {
    name = 'AddUniqueConstraintForEmail1620283193866'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "accounts" ADD CONSTRAINT "UQ_ee66de6cdc53993296d1ceb8aa0" UNIQUE ("email")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "accounts" DROP CONSTRAINT "UQ_ee66de6cdc53993296d1ceb8aa0"`);
    }

}
