import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeAccountIdType1621666295492 implements MigrationInterface {
    name = 'ChangeAccountIdType1621666295492'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_425ee27c69d6b8adc5d6475dcfe"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "seller_id"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "seller_id" character varying`);
        await queryRunner.query(`ALTER TABLE "purchases" DROP CONSTRAINT "FK_a3886ad6e415bce0b2f25c136bc"`);
        await queryRunner.query(`ALTER TABLE "accounts" DROP CONSTRAINT "PK_5a7a02c20412299d198e097a8fe"`);
        await queryRunner.query(`ALTER TABLE "accounts" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "accounts" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "accounts" ADD CONSTRAINT "PK_5a7a02c20412299d198e097a8fe" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "purchases" DROP COLUMN "buyer_id"`);
        await queryRunner.query(`ALTER TABLE "purchases" ADD "buyer_id" character varying`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_425ee27c69d6b8adc5d6475dcfe" FOREIGN KEY ("seller_id") REFERENCES "accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "purchases" ADD CONSTRAINT "FK_a3886ad6e415bce0b2f25c136bc" FOREIGN KEY ("buyer_id") REFERENCES "accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "purchases" DROP CONSTRAINT "FK_a3886ad6e415bce0b2f25c136bc"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_425ee27c69d6b8adc5d6475dcfe"`);
        await queryRunner.query(`ALTER TABLE "purchases" DROP COLUMN "buyer_id"`);
        await queryRunner.query(`ALTER TABLE "purchases" ADD "buyer_id" integer`);
        await queryRunner.query(`ALTER TABLE "accounts" DROP CONSTRAINT "PK_5a7a02c20412299d198e097a8fe"`);
        await queryRunner.query(`ALTER TABLE "accounts" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "accounts" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "accounts" ADD CONSTRAINT "PK_5a7a02c20412299d198e097a8fe" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "purchases" ADD CONSTRAINT "FK_a3886ad6e415bce0b2f25c136bc" FOREIGN KEY ("buyer_id") REFERENCES "accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "seller_id"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "seller_id" integer`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_425ee27c69d6b8adc5d6475dcfe" FOREIGN KEY ("seller_id") REFERENCES "accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
