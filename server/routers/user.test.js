const mongoose = require('mongoose');
const supertest = require('supertest');
import '@babel/polyfill';
const app = require('../app');
const api = supertest(app);
const User = require('../models').Users;

const DB_URL = process.env.DB_URL;

const initialUser = {
  username: 'test',
  password: 'test',
};

beforeEach(async () => {
  await mongoose.connect(DB_URL);
  await User.deleteMany({});
  let userObject = new User(initialUser);
  await userObject.save();
});

describe('user tests', () => {
  const initialUser = {
    username: 'test',
    password: 'test',
  };

  test('add user', async () => {
    const newUserObject = {
      username: 'new',
      password: 'new',
    };
    await api
      .post('/api/users')
      .send(newUserObject)
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });

  test('added user should be unique', async () => {
    await api
      .post('/api/users')
      .send(initialUser)
      .expect(400)
      .expect('Content-Type', /application\/json/);
  });
});

afterAll(() => {
  mongoose.connection.close();
});
