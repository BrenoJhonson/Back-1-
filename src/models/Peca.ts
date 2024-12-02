import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../END/connection';
import { v7 as uuidv7 } from 'uuid';

export class Peca extends Model {
    public id_peca!: string;
    public nome_peca!: string;
    public categoria!: string;
    public marca!: string;
    public modelo_moto!: string;
    public preco!: number;
    public estoque!: number;
    public data_adicao!: Date;
}

Peca.init({
    id_peca: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: uuidv7
    },
    nome_peca: { type: DataTypes.STRING(255), allowNull: false },
    categoria: { type: DataTypes.STRING(255), allowNull: false },
    marca: { type: DataTypes.STRING(255), allowNull: false },
    modelo_moto: { type: DataTypes.STRING(255), allowNull: false },
    preco: { type: DataTypes.FLOAT, allowNull: false },
    estoque: { type: DataTypes.INTEGER, allowNull: false },
    data_adicao: { type: DataTypes.DATE, allowNull: false }
}, { sequelize, tableName: 'pecas', timestamps: false });