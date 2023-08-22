module.exports = {
  root: true,
  extends: ['@react-native', 'prettier'],
  plugins: ['prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx', '*.test.tsx|jsx|js|ts'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'jsx-quotes': ['error', 'prefer-single'],
        quotes: [2, 'single', 'avoid-escape'],
        'no-undef': 'off',
        'no-console': 'warn',
        'react-native/no-inline-styles': 'off',
        'prettier/prettier': [
          'error',
          {
            bracketSpacing: true,
            bracketSameLine: true,
            singleQuote: true,
            jsxSingleQuote: true,
            trailingComma: 'all',
            arrowParens: 'avoid',
          },
        ],
      },
    },
  ],
};
