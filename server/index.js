const app = require('./app');

const PORT = process.env.NODE_ENV === 'production' ? process.env.PORT : '3001';
app.get('/', (req, res) => {
  res.send('asd');
});

app.listen(PORT, () => {
  console.log('listen');
});
