module.exports = function(client, DataTypes) {
    return client.define("Specialities", {
        name: {
            type: DataTypes.STRING, //тип - строка
            allowNull: false, //разрешено ли пустое значение - нет
        },
        code: {
            type: DataTypes.STRING,
            allowNull: false
        },
        opisanie: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    })
}