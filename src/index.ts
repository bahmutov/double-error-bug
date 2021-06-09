import packageData from '../package.json';

// @NOTE: the ordering of these exports is actually SUPER important!
// The most primitive components should be exported first, such that
// the more complex components which extend them come later.

// Expose design system components here:
export * from './components/app-header-bar';

// Expose various design system primitives:
export * from './helpers';
export * from './types';
export * from './variables';
export * from './mocks';

if (process.env.NODE_ENV !== 'test') {
  console.log(`------------------------------------------

  @imtbl/design-system loaded.

  version: ${packageData.version}

------------------------------------------
`);
}
