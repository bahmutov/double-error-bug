import { Children, isValidElement, ReactNode } from 'react';
import * as ReactIs from 'react-is';

export const isReactFragment = (child: ReactNode) => ReactIs.isFragment(child);

export function isChildReactComponent(child: any) {
  return typeof child?.type === 'function';
}

export function getOnlyValidPropChildren(children: ReactNode) {
  return Children.map(children, element => {
    if (isValidElement(element)) {
      const { children: childChildren } = element.props;
      return childChildren;
    } else {
      return null;
    }
  });
}
