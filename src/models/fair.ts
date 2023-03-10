import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";
import { User } from "./user";

export class Fair extends Model<InferAttributes<Fair>, InferCreationAttributes<Fair>>{
    declare fairId: number;
    declare fairTitle: string;
    declare fairCity: string;
    declare fairState: string;
    declare fairZip: string;
    declare fairStartDate: string;
    declare fairEndDate: string;
    declare fairDescription: string;
    declare username: string;
    declare createdAt?: Date;
    declare updatedAt?: Date;
}

export function FairFactory(sequelize: Sequelize) {
    Fair.init({
        fairId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        fairTitle: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        fairCity: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        fairState: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        fairZip: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        fairStartDate: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        fairEndDate: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        fairDescription: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }
    }, {
        freezeTableName: true,
        tableName: 'fairs',
        sequelize
    });
};

export function AssociateUserFairPost() {
    User.hasMany(Fair, { foreignKey: 'userId' });
    Fair.belongsTo(User, { foreignKey: 'userId' });
};