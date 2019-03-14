var sequelize = require('sequelize')
var User = require("./user");

let app = {
  createUser: (username, firstname, lastname, email, password) => {
    connection.sync().then(() => {
      User.create({
				username: username,
				firstname: firstname,
				lastname: lastname,
				email: email,
        password: password
      });

      return;
    });
  },

  getUser: (username) => {
    connection.sync().then(() => {
      User.findOne({ where: { username: username } }).then(user => {
        let data = {
          name: user.name,
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password
        }
        return data;
      });
    });
  },
  
}

module.exports = app;

