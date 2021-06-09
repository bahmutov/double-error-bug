import React from 'react';
import { mount } from '@cypress/react';

import {
  AppHeaderBarNavItem,
} from './app-header-bar-nav-item.component';

describe('<AppHeaderBarNavItem />', () => {
  it('shows the error', () => {
    mount(
      <AppHeaderBarNavItem testId="nav1">
        <>moo</>
      </AppHeaderBarNavItem>
    );
  })
});
