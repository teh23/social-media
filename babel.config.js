const isDevelopment =
  process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test';
module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ],
  plugins: [isDevelopment && 'react-refresh/babel'].filter(Boolean),
};
