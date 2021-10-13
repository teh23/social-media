const mongoose = require('mongoose');
const supertest = require('supertest');
import '@babel/polyfill';
const app = require('../app');
const api = supertest(app);
const User = require('../models').Users;
const bcrypt = require('bcrypt');

const DB_URL = process.env.DB_URL;

const initialUser = {
  username: 'test',
  password: 'test',
};

beforeEach(async () => {
  await mongoose.connect(DB_URL);
  await User.deleteMany({});
  let userObject = new User({
    username: initialUser.username,
    password: await bcrypt.hash(initialUser.password, 10),
  });
  await userObject.save();
});

describe('user api tests', () => {
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

describe('testing login', () => {
  test('correct credentials', async () => {
    const user = await api
      .post('/api/users/login')
      .send(initialUser)
      .expect(200)
      .expect('Content-Type', /application\/json/);

    expect(user.body).toEqual({
      username: initialUser.username,
      token: expect.any(String),
    });
  });

  test('incorrect login', async () => {
    const user = await api
      .post('/api/users/login')
      .send({ username: '-1;', password: '-1' })
      .expect(400)
      .expect('Content-Type', /application\/json/);
    expect(user.body).toBe('invalid login');
  });

  test('incorrect password', async () => {
    const user = await api
      .post('/api/users/login')
      .send({ username: initialUser.username, password: '-1' })
      .expect(400)
      .expect('Content-Type', /application\/json/);
    expect(user.body).toBe('invalid password');
  });
});

afterAll(() => {
  mongoose.connection.close();
});
