import '@babel/polyfill';

const supertest = require('supertest');
const app = require('../app');
const { setData } = require('./mock');
const api = supertest(app);
const Post = require('../models').Post;
const { findOneUser } = require('../services').users;
const { closeMongoose } = require('./mock');

beforeEach(async () => {
  await setData();
});

describe('post tests', () => {
  test('get all posts', async () => {
    const posts = await api.get('/api/users').expect(404);
    //   .expect('Content-Type', /application\/json/);
    // expect(posts.body).toBeEqual({
    //   title: '',
    //   body: '',
    //   user: '',
    //   media: '',
    //   comments: '',
    // });
  });
});

afterAll(() => {
  closeMongoose();
});
