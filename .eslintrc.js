module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-undef': 'off',
    'react/button-has-type ': 'off',
    'import/no-named-as-default-member ': 'off',
    'linebreak-style': 'off',
    'react/prop-types': 'off',
    'no-undef': 'off',
    'react/destructuring-assignment': 'off',
    'react/button-has-type': 'off',
    'jsx-a11y/img-redundant-alt': 'off',
  },
};
