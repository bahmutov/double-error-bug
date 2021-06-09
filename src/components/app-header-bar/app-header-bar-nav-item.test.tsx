import React, {Component} from 'react';
import { mount } from '@cypress/react';

import {
  AppHeaderBarNavItem,
  ERROR_TEXT,
} from './app-header-bar-nav-item.component';

class MyErrorBoundary extends Component {
  state = {
    error: null
  }

  static getDerivedStateFromError(error) {
  // Update state so next render shows fallback UI.
  return { error: error };
}

  componentDidCatch(error, info) {
}

  render() {
    if (this.state.error) {
      // You can render any custom fallback UI
      return <p>Something broke</p>;
    }
    return this.props.children;
  }
};

describe('<AppHeaderBarNavItem />', () => {
  // @NOTE: stop all JS uncaught exceptions just for this suite,
  // because we will be using the error messages for assertions below:
  // before(() => {
  //   Cypress.on('uncaught:exception', () => {
  //     // returning false here prevents Cypress from
  //     // failing the test
  //     return false;
  //   });
  // });

  // // @NOTE clear Cypress.on binding once test suite is complete...
  // after(() => {
  //   Cypress.on('uncaught:exception', () => {
  //     return true;
  //   });
  // });

  // ... normally many other tests go in here ...
  it.only('shows the error', () => {
    // cy.on('uncaught:exception', err => {
    //   console.error('error is', err.message)
    //   expect(err.message).to.include(ERROR_TEXT);
    //   console.log('the right error')
    //   return false;
    // });

    mount(
      <AppHeaderBarNavItem testId="nav1">
        <>moo</>
        </AppHeaderBarNavItem>
      ,
    );
  })

  it('should throw error, when a fragment is supplied as children', done => {
    cy.on('uncaught:exception', err => {
      expect(err.message).to.include(ERROR_TEXT);
      done();
      return false;
    });
    mount(
      <AppHeaderBarNavItem testId="nav1">
        <>moo</>
      </AppHeaderBarNavItem>,
    );
  });

  it('should throw error, when a plain DOM element is supplied as children', done => {
    cy.on('uncaught:exception', err => {
      expect(err.message).to.include(ERROR_TEXT);
      done();
      return false;
    });
    mount(
      <AppHeaderBarNavItem testId="nav1">
        <div>moo</div>
      </AppHeaderBarNavItem>,
    );
  });
});
