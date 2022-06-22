module.exports = function(client, DataTypes) {
    return client.define("Abiturients", {
        FIO: {
            type: DataTypes.STRING, //тип - строка
            allowNull: false, //разрешено ли пустое значение - нет
        },
        pasport: {
            type: DataTypes.STRING,
            allowNull: false
        },
        obrazovanie: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sr_bal: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        god_rozh: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gorod: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}