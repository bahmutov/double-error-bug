module.exports = {
  lines: 90,
  functions: 90,
  statements: 90,
  // @TODO: we should ideally be able to enable this, just a bit stuck on
  // getting branch coverage up to 99%
  // branch: 95,
  extends: '@istanbuljs/nyc-config-typescript',
  include: ['src/**/*.ts', 'src/**/*.tsx'],
  exclude: [
    'src/**/*.stories.tsx',
    'src/**/*.test.tsx',
    'story.helpers.ts',
    // @TODO: these files probably dont need to be inlcuded in coverage,
    // they are just stores for design system variables
    'gradients.variables.ts',
    'animation.variables.ts',
  ],
};
