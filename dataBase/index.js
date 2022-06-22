const dataBase = {}

const { Sequelize, Op, DataTypes } = require('sequelize')
dataBase.Operators = Op

const configData = require('./config.js') //подключаем реквизиты и конфигурацию удаленной базы данных

/*Создаем объект, через который будем взаимодествовать с БД
Передаем реквизиты БД и конфигурационные данные для подключения*/
dataBase.client = new Sequelize(
    configData.DB, 
    configData.USER, 
    configData.PASSWORD, 
    {
        host: configData.HOST,
        dialect: configData.DIALECT,
        define: {
          timestamps: false
        }
    }
)

dataBase.Specialities = require('./tables/Specialities.js')(dataBase.client, DataTypes)
dataBase.Groups = require('./tables/Groups.js')(dataBase.client, DataTypes)
dataBase.Abiturients = require('./tables/Abiturients.js')(dataBase.client, DataTypes)

dataBase.Specialities.hasMany(dataBase.Groups, {
	onDelete: 'CASCADE',
	onUpdate: 'CASCADE'
})
dataBase.Groups.belongsTo(dataBase.Specialities)

dataBase.Groups.hasMany(dataBase.Abiturients, {
	onDelete: 'CASCADE',
	onUpdate: 'CASCADE'
})
dataBase.Abiturients.belongsTo(dataBase.Groups)

module.exports = dataBase