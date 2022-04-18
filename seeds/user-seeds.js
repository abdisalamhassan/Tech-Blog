const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'Monica',
    password: 'monica123'
  },
  {
    username: 'Willoughway1',
    password: 'william456'
  },
  {
    username: 'Ibrahim',
    password: 'ibrahimtwo'
  },
  {
    username: 'Stacy',
    password: 'stacysdad'
  },
  {
    username: 'DJ',
    password: 'djdrama'
  },
  {
    username: 'Prague',
    password: 'wrknpragress'
  },
  {
    username: 'Pergens',
    password: 'purgatory'
  },
  {
    username: 'Penniell',
    password: 'thornloki'
  },
  {
    username: 'Sabbins',
    password: 'nicsabbin',
  },
  {
    username: 'Macarthur',
    password: 'macbeth56'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
