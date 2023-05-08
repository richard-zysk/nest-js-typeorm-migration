import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNewName1683550692509 implements MigrationInterface {
    name = 'AddNewName1683550692509'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
    }

}
