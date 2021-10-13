const app = require('./app');

const PORT = process.env.NODE_ENV === 'production' ? process.env.PORT : '3001';

app.listen(PORT, () => {
  console.log('HTTP SERVER ON');
});
