import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphanages1603063641103 implements MigrationInterface {
    //Realizar alterações
    //Criar tabela,criar um novo campo , deletar algum campo.
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'orphnages',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'latitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                
                {
                    name:'about',
                    type:'text',
                },
                {
                    name:'instructions',
                    type:'text',
                },
                {
                    name:'opening_hours',
                    type:'varchar',
                },
                {
                    name:'open_on_weekends',
                    type:'boolean',
                    default:false,
                },

            ],
        }))


    }
    //Desfazer o que foi feito
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orphnages');
    }

}
