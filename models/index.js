const Sequelize = require('sequelize');
const { User } = require('../learn-sequelize/models');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Seqeuelize(config.database, config.username, config.password, config);
db.sequelize = sequelize;
db.sequelize = Sequelize;

db.User = User;
db.Comment = Comment;

User.init(sequelize);
Comment.init(sequelize);

User.associate(db);
Comment.associate(db);

module.exports = db;