const isDevelopment = process.env.NODE_ENV !== 'production';
module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ],
  plugins: [isDevelopment && 'react-refresh/babel'],
};
