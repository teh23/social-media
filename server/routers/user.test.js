import '@babel/polyfill';

const supertest = require('supertest');
const app = require('../app');
const { closeMongoose } = require('./mock');
const api = supertest(app);
const User = require('../models').User;
const { setData } = require('./mock');
const { DB_URL } = process.env;
const { initialUser } = require('./mock');
beforeEach(async () => {
  await setData();
});

describe('user api tests', () => {
  it('add user and return username', async () => {
    const newUserObject = {
      username: 'new',
      password: 'new',
    };

    const user = await api
      .post('/api/user')
      .send(newUserObject)
      .expect(200)
      .expect('Content-Type', /application\/json/);
    expect(user.body).toStrictEqual({ username: newUserObject.username });
  });

  test('added username should be unique', async () => {
    const user = await api
      .post('/api/user')
      .send(initialUser)
      .expect(400)
      .expect('Content-Type', /application\/json/);

    expect(user.body).toBe('User already in database');
  });
  test.todo('get all user posts');
});

describe('testing login', () => {
  test('correct credentials', async () => {
    const user = await api
      .post('/api/user/login')
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
      .post('/api/user/login')
      .send({ username: '-1;', password: '-1' })
      .expect(400)
      .expect('Content-Type', /application\/json/);
    expect(user.body).toBe('invalid login');
  });

  test('incorrect password', async () => {
    const user = await api
      .post('/api/user/login')
      .send({ username: initialUser.username, password: '-1' })
      .expect(400)
      .expect('Content-Type', /application\/json/);
    expect(user.body).toBe('invalid password');
  });
});

afterAll(() => {
  closeMongoose();
});
