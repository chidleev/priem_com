module.exports = function(client, DataTypes) {
    return client.define("Groups", {
        name: {
            type: DataTypes.STRING, //тип - строка
            allowNull: false, //разрешено ли пустое значение - нет
        }
    })
}