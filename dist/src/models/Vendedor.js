"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vendedor = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = require("../END/connection");
const uuid_1 = require("uuid");
class Vendedor extends sequelize_1.Model {
}
exports.Vendedor = Vendedor;
Vendedor.init({
    id_vendedor: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: uuid_1.v7
    },
    nome_vendedor: { type: sequelize_1.DataTypes.STRING(255), allowNull: false },
    email_vendedor: { type: sequelize_1.DataTypes.STRING(255), unique: true, allowNull: false }
}, { sequelize: connection_1.sequelize, tableName: 'vendedores', timestamps: false });
