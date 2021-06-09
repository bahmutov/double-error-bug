import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type BaseDomNodeAccessibilityPropTypes = {
  // @NOTE: The following is to be used ONLY to allow attr's like
  // aria-*, rel, title (tooltips) to be passed through to the
  // mounted dom node(s)
  [key: string]: unknown;
};

export type NewBaseComponentPropTypes = {
  className?: string;
  testId?: string;
  domRef?: any;
};

export interface SectionHeadingPropTypes
  extends NewBaseComponentPropTypes,
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  textAlign?: any;
  fontSize?: any;
  fillColor?: string;
  fillGradient?: string;
}

export type SpacingSizes =
  | '2x-small'
  | 'x-small'
  | 'small'
  | 'medium'
  | 'large'
  | 'x-large'
  | '2x-large'
  | '3x-large'
  | '4x-large'
  | '5x-large'
  | '6x-large'
  | '7x-large'
  | '8x-large'
  | '9x-large';

export type BreakpointSizes =
  | '2x-small'
  | 'x-small'
  | 'small'
  | 'medium'
  | 'large'
  | 'x-large'
  | '2x-large';

// @TODO: With more knowledge of how typing works now, I think we should
// refactor this type to be more specific for each application.
export type ResponsiveBreakpoint = {
  breakpoint: BreakpointSizes;
  textAlign?: any;
  fontSize?: any;
  topSize?: SpacingSizes;
  bottomSize?: SpacingSizes;
  bothSize?: SpacingSizes;
  iconSize?: string;
  assetItemMinWidth?: string;
  gridGap?: string;
  rowGap?: string;
  columnGap?: string;
};

export interface ResponsiveFontSize extends ResponsiveBreakpoint {
  breakpoint: BreakpointSizes;
  fontSize: any;
}

export type FontStyle = 'italic' | 'normal';
export type FontWeight = 'bold' | 'regular';
export type CustomTextFontWeight = 'bold' | 'medium' | 'regular';

export interface TextPropTypes extends NewBaseComponentPropTypes {
  fontSize?: any;
  fontWeight?: FontWeight;
  fontStyle?: FontStyle;
  textAlign?: any;
  fillColor?: string;
  fillGradient?: string;
  responsiveFontSize?: ResponsiveBreakpoint[];
  responsiveTextAlign?: ResponsiveBreakpoint[];
}

export interface SimpleTextPropTypes
  extends TextPropTypes,
    DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  children?: any;
  displayBlock?: boolean;
}

export interface CustomUiTextPropTypes
  extends Omit<TextPropTypes, 'fontWeight'>,
    DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  fontWeight?: CustomTextFontWeight;
}

export interface ParagraphTextPropTypes
  extends TextPropTypes,
    DetailedHTMLProps<
      HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    > {}

export type TestIdProps = {
  'data-testid'?: string;
  testId?: string;
};

export interface HeadingTextPropTypes
  extends NewBaseComponentPropTypes,
    DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  textAlign?: any;
  fontSize?: any;
  fillColor?: string;
  fillGradient?: string;
  responsiveFontSize?: ResponsiveBreakpoint[];
  responsiveTextAlign?: ResponsiveBreakpoint[];
  semanticHeadingIndex?: 1 | 2 | 3 | 4 | 5 | 6;
}
