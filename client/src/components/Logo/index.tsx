import React from 'react';

const Logo = ({ size = '2xl' }) => (
  <div
    className={`dark:text-gray-50 text-gray-900 font-medium font-oswald text-${size}`}
  >
    WYPOK
  </div>
);

export default Logo;
