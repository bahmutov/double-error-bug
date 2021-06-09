// babel.config.js
module.exports = api => {
  let plugins = [
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-runtime',
  ];

  if (api.env() === 'production') {
    plugins = [
      [
        '@emotion',
        {
          sourceMap: true,
          autoLabel: 'never',
        },
      ],
      ...plugins,
    ];
  } else {
    plugins = [
      [
        '@emotion',
        {
          sourceMap: true,
          autoLabel: 'always',
        },
      ],
      'istanbul',
      ...plugins,
    ];
  }

  return {
    presets: [
      [
        '@babel/preset-react',
        {
          // pragma: 'dom', // default pragma is React.createElement (only in classic runtime)
          // pragmaFrag: 'DomFrag', // default is React.Fragment (only in classic runtime)
          // throwIfNamespace: false, // defaults to true
          // runtime: 'classic', // defaults to classic
          // // "importSource": "custom-jsx-library" // defaults to react (only in automatic runtime)
        },
      ],
      '@babel/preset-env',
      '@babel/preset-typescript',
    ],
    plugins,
  };
};
