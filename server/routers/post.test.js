import '@babel/polyfill';
import { anyTypeAnnotation } from '@babel/types';
const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const {
  setData,
  loginUser,
  initialUser,
  initialPost,
  closeMongoose,
} = require('./mock');
const api = supertest(app);
const Post = require('../models').Post;
const User = require('../models').User;

const { DB_URL } = process.env;
const testPost = {
  title: 'test title',
  body: 'test body',
  media: '',
  user: initialUser.username,
};

beforeEach(async () => {
  await mongoose.connect(DB_URL);
  await setData();
});

describe('add post', () => {
  test('add as unauthorized', async () => {
    const username = await User.findOne({ username: initialUser.username });
    await api
      .post('/api/post')
      .send({ ...testPost, user: username._id })
      .expect(401);
  });
  test('add successfully post', async () => {
    const token = await loginUser();
    const username = await User.findOne({ username: initialUser.username });
    const post = await api
      .post('/api/post')
      .set('Authorization', 'bearer ' + token)
      .send({ ...testPost, user: username._id })
      .expect(200);

    expect(post.body).toEqual({
      title: testPost.title,
      body: testPost.body,
      media: testPost.media,
      user: username._id.toString(),
      comments: [],
      _id: expect.any(String),
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
      __v: 0,
    });
  });
  test('invalid title', async () => {
    const token = await loginUser();
    const username = await User.findOne({ username: initialUser.username });
    const post = await api
      .post('/api/post')
      .set('Authorization', 'bearer ' + token)
      .send({ ...testPost, user: username._id, title: '' })
      .expect(400);

    expect(post.body).toEqual({ error: 'invalid title' });
  });
  test.todo('invalid username');
  test.todo('title as number');
});

describe('get post', () => {
  test('get posts as unauthorized', async () => {
    await api
      .get('/api/post')
      .expect(401)
      .expect('Content-Type', /application\/json/);
  });
  test('get all posts', async () => {
    const token = await loginUser();
    const username = await User.findOne({ username: initialUser.username });
    const posts = await api
      .get('/api/post')
      .set('Authorization', 'bearer ' + token)
      .expect(200)
      .expect('Content-Type', /application\/json/);
    expect(posts.body).toEqual([
      {
        title: testPost.title,
        body: testPost.body,
        media: testPost.media,
        user: {
          _id: username._id.toString(),
          username: initialUser.username,
        },
        comments: [],
        _id: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        __v: 0,
      },
    ]);
  });
});

describe('get post by id', () => {
  test.todo(
    'get post by id'
    // ,async () => {
    //   const id = '123';
    //   const posts = await api
    //     .get('/api/post/:id')
    //     .expect(200)
    //     .expect('Content-Type', /application\/json/);
    //   expect(posts.body).toBeEqual({
    //     _id: id,
    //     title: expect.any(String),
    //     body: expect.any(String),
    //     user: expect.any(String),
    //     media: expect.any(String),
    //     comments: expect.any(Array),
    //   });}
  );
});
describe('edit post by id', () => {
  test.todo(
    'edit post by id'
    // , async () => {
    //   const id = '123';
    //   const posts = await api
    //     .get('/api/post/:id')
    //     .expect(200)
    //     .expect('Content-Type', /application\/json/);
    //   expect(posts.body).toBeEqual({
    //     _id: id,
    //     title: expect.any(String),
    //     body: expect.any(String),
    //     user: expect.any(String),
    //     media: expect.any(String),
    //     comments: expect.any(Array),
    //   });
    // }
  );
});

afterAll(() => {
  closeMongoose();
});
