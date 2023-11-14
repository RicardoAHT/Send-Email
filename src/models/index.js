const EmailCode = require("./EmailCode");
const User = require("./User");

/* Relacion uno a uno */
EmailCode.belongsTo(User)
User.hasOne(EmailCode)