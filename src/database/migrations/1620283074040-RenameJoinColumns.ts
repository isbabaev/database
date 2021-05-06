import {MigrationInterface, QueryRunner} from "typeorm";

export class RenameJoinColumns1620283074040 implements MigrationInterface {
    name = 'RenameJoinColumns1620283074040'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_e40a1dd2909378f0da1f34f7bd6"`);
        await queryRunner.query(`ALTER TABLE "purchases" DROP CONSTRAINT "FK_22533450a1d627dc3ae071f22ae"`);
        await queryRunner.query(`ALTER TABLE "products" RENAME COLUMN "sellerId" TO "seller_id"`);
        await queryRunner.query(`ALTER TABLE "purchases" RENAME COLUMN "buyerId" TO "buyer_id"`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_425ee27c69d6b8adc5d6475dcfe" FOREIGN KEY ("seller_id") REFERENCES "accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "purchases" ADD CONSTRAINT "FK_a3886ad6e415bce0b2f25c136bc" FOREIGN KEY ("buyer_id") REFERENCES "accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "purchases" DROP CONSTRAINT "FK_a3886ad6e415bce0b2f25c136bc"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_425ee27c69d6b8adc5d6475dcfe"`);
        await queryRunner.query(`ALTER TABLE "purchases" RENAME COLUMN "buyer_id" TO "buyerId"`);
        await queryRunner.query(`ALTER TABLE "products" RENAME COLUMN "seller_id" TO "sellerId"`);
        await queryRunner.query(`ALTER TABLE "purchases" ADD CONSTRAINT "FK_22533450a1d627dc3ae071f22ae" FOREIGN KEY ("buyerId") REFERENCES "accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_e40a1dd2909378f0da1f34f7bd6" FOREIGN KEY ("sellerId") REFERENCES "accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
