const sequelize = require("./index");
const { DataTypes } = require("sequelize");

const Submission = sequelize.define("CodeSubmission", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preferredCodeLanguage: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    sourceCode: {
        type: DataTypes.TEXT,
        allowNull : true
    },
    stdout: {
        type:DataTypes.TEXT,
        allowNull : true
    },
    standardInput: {
        type: DataTypes.TEXT,
        allowNull: true // Change to false if standard input is required
    },
    sourceCodeTimestamp: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    }
});

module.exports = Submission;
