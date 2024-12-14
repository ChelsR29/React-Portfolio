module.exports = {
  env: {
    browser: true, // This is for the React frontend
    node: true,    // This is for Node.js backend (process, module, etc.)
    es2021: true   // Enable ES2021 features for both frontend and backend
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest', // or 'es2021'
    sourceType: 'module'
  },
  settings: {
    react: {
      version: '18.2'
    }
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react/prop-types': 'off',
  }
};
