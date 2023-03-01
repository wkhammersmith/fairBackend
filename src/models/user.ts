import {
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
    Sequelize
} from "sequelize";

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>>{
    declare userId: number;
    declare username: string;
    declare password: string;
    declare userEmail: string;
    declare userCity: string;
    declare userState: string;
    declare userZip: string;
    declare userReferral: string;
    declare createdAt?: Date;
    declare updatedAt?: Date;
};

export function UserFactory(sequelize: Sequelize) {
    User.init({
        userId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userEmail: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        userCity: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userState: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userZip: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userReferral: {
            type: DataTypes.STRING,
            allowNull: false,
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
    },
        {
            freezeTableName: true,
            tableName: 'users',
            sequelize
        })
};