const js = require('@eslint/js');

module.exports = [
  {
    ignores: ['node_modules/**', 'coverage/**']
  },

  js.configs.recommended,

  {
    files: ['calculator.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        module: 'readonly',
        require: 'readonly'
      }
    },

    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single']
    }
  },

  {
    files: ['calculator.test.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        test: 'readonly',
        expect: 'readonly',
        require: 'readonly',
        module: 'readonly'
      }
    },

    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single']
    }
  },

  {
    files: ['script.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'script',
      globals: {
        document: 'readonly',
        window: 'readonly',
        console: 'readonly'
      }
    },

    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single']
    }
  },

  {
    files: ['eslint.config.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        require: 'readonly',
        module: 'readonly'
      }
    },

    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single']
    }
  }
];