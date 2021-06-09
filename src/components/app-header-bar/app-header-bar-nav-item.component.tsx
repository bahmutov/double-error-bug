import { cx } from '@emotion/css';
import React, { cloneElement, ReactComponentElement } from 'react';
import {
  isChildReactComponent,
  isReactFragment,
} from '../../helpers/component.helpers';
import { StyledLinkPropTypes } from '../../types';
import { colors } from '../../variables';

export interface AppHeaderBarNavItemPropTypes extends StyledLinkPropTypes {
  // @NOTE: This component is designed to ONLY recieve ReactComponent children.
  // Passing strings, fragments or DOM elements as children is therefore not valid.
  children: ReactComponentElement<any, any>;
  selected?: boolean;
}

export const ERROR_TEXT = `AppHeaderBarNavItem cannot be passed a fragment, a plain DOM element, or plain text as a child.
It can only recieve one single react component as a child.`;

export const AppHeaderBarNavItem = ({
  selected,
  children,
  className,
  fontWeight = 'bold',
  fillColor = selected ? colors.blue[300] : colors.dark[100],
  hoverFillColor = selected ? colors.blue[300] : colors.light[100],
  ...props
}: AppHeaderBarNavItemPropTypes): JSX.Element => {
  if (
    typeof children === 'string' ||
    isReactFragment(children) ||
    !isChildReactComponent(children)
  ) {
    console.error('App throwing an error')
    throw Error(ERROR_TEXT);
  }

  return cloneElement(children as React.ReactElement<any>, {
    ...props,
    className: cx(className),
    fontWeight,
    fillColor,
    hoverFillColor,
  });
};
