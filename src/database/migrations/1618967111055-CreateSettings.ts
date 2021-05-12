import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSettings1618967111055 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "settings", //nome da tabela
                columns: [ //colunas que irao existir na tabela
                    {
                        name: "id",
                        type: "uuid", //id universal e que nao se repete
                        
                        isPrimary: true //define a primarykey caso relacionemos ela com outra tabela
                    },
                    {
                        name: "username",
                        type: "varchar"
                        
                    },
                    {
                        name: "chat",
                        type: "boolean",
                        default: true
                    },
                    {
                        name: "updated_at",
                        type: "timestamp", // toda vez que um dado for alterado na settings, ele vai alterar automaticamente o horario que tiver acontecido 
                        default: "now()"
                    },
                    {
                        name: "created_at",
                        type:"timestamp",
                        default: "now()"
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("settings")
    }

}
