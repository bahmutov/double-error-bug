module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb-typescript',
    'plugin:prettier/recommended',
    // 'prettier/@typescript-eslint',
    // 'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.eslint.json',
  },
  plugins: ['react', 'react-hooks', 'prettier', '@typescript-eslint'],
  settings: {
    react: {
      pragma: 'React', // Pragma to use, default to "React"
      fragment: 'Fragment', // Fragment to use (may be a property of <pragma>), default to "Fragment"
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to "detect" in the future
    },
  },
  rules: {
    'no-unused-expressions': 0,
    'import/prefer-default-export': 0,
    'no-nested-ternary': 0,
    'no-console': 0,
    'no-unused-vars': 0,
    'no-use-before-define': 0,
    'arrow-body-style': 0,
    'no-else-return': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    '@typescript-eslint/no-unused-expressions': 0,
    '@typescript-eslint/no-unused-vars': ['warn', { args: 'none' }],
    '@typescript-eslint/no-use-before-define': 'warn',
    // @NOTE: React 17 should no longer need this:
    'react/jsx-uses-react': 0,
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0,
    'react/button-has-type': 0,
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: 'either',
        depth: 2,
      },
    ],
    // @TODO: HOLY-SH*T ESlint "indent" is a VERY hard rule to get just right!
    // I wish there was a setting here to have it match what prettier
    // does automatically, and leave it at that. :(
    // indent: [
    //   2,
    //   2,
    //   {
    //     SwitchCase: 1,
    //     flatTernaryExpressions: true,
    //     offsetTernaryExpressions: true,
    //   },
    // ],
  },
};
