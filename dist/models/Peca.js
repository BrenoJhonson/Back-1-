"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Peca = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = require("../END/connection");
const uuid_1 = require("uuid");
class Peca extends sequelize_1.Model {
}
exports.Peca = Peca;
Peca.init({
    id_peca: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: uuid_1.v7
    },
    nome_peca: { type: sequelize_1.DataTypes.STRING(255), allowNull: false },
    descricao_peca: { type: sequelize_1.DataTypes.STRING(255), allowNull: false },
    preco_peca: { type: sequelize_1.DataTypes.FLOAT, allowNull: false },
    estoque_peca: { type: sequelize_1.DataTypes.INTEGER, allowNull: false }
}, { sequelize: connection_1.sequelize, tableName: 'pecas', timestamps: false });
