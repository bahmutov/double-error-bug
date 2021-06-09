import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ComponentType,
  DetailedHTMLProps,
  MouseEvent,
  ReactNode,
} from 'react';
import {
  NewBaseComponentPropTypes,
  FontStyle,
  FontWeight,
  ResponsiveBreakpoint,
} from './shared.types';

export const buttonSizes = ['normal', 'large'] as const;

export type ButtonSizes = 'normal' | 'large';
export type ButtonKinds =
  | 'ultimate-cta'
  | 'ultimate-launch'
  | 'ultimate-destructive'
  | 'primary'
  | 'secondary'
  | 'tertiary';

export type ReactRouterToObject = {
  pathname?: string;
  search?: string;
  hash?: string;
  state?: { [key: string]: any };
};

type CommonButtonPropTypes = {
  underline?: boolean;
  disabled?: boolean;
};

export interface AnchorDomPropTypes
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}

export interface ButtonDomPropTypes
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export interface HyperLinkPropTypes
  extends NewBaseComponentPropTypes,
    CommonButtonPropTypes {
  target?: string;
  href?: string;
}

export interface HyperLinkPropTypesWithDomProps
  extends HyperLinkPropTypes,
    Omit<AnchorDomPropTypes, 'ref' | 'target'> {}

export interface OnClickButtonPropTypes
  extends NewBaseComponentPropTypes,
    CommonButtonPropTypes {
  onClick?: (ev: MouseEvent<HTMLButtonElement>) => void;
}

export interface OnClickButtonPropTypesWithDomProps
  extends OnClickButtonPropTypes,
    Omit<ButtonDomPropTypes, 'onClick'> {}

export interface StyledLinkPropTypes
  extends HyperLinkPropTypes,
    OnClickButtonPropTypes {
  children: ReactNode;
  fontSize?: any;
  fontStyle?: FontStyle;
  fontWeight?: FontWeight;
  textAlign?: any;
  fillColor?: string;
  fillGradient?: string;
  hoverFillColor?: string;
  hoverFillGradient?: string;
  responsiveFontSize?: ResponsiveBreakpoint[];
  responsiveTextAlign?: ResponsiveBreakpoint[];
  onClick?: (ev: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  TextComponentTag?: ComponentType<any>;
  asButton?: boolean;
  anchorDomProps?: AnchorDomPropTypes;
  buttonDomProps?: ButtonDomPropTypes;
}
