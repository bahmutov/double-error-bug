/* eslint import/no-extraneous-dependencies: "off" */

import React from 'react';
import { RouterContext } from 'next/dist/next-server/lib/router-context';
import { NextRouter } from 'next/dist/next-server/lib/router/router';

type GenericMethodStub = () => { catch: () => void };
const genericRouterMethodStub: GenericMethodStub = (...props) => {
  return { catch: () => {} };
};
type GenericPromiseStub<T> = () => Promise<T>;

const genericRouterBoolPromiseStub: GenericPromiseStub<boolean> = () =>
  new Promise<boolean>(res => res(true));
const genericRouterVoidPromiseStub: GenericPromiseStub<void> = () =>
  new Promise<void>(res => res());

type QueryParmas = {
  [key: string]: string | string[];
};

export function MockNextRouter({
  children,
  router,
  route = '/',
  pathname = '/',
  asPath = '/',
  basePath = '',
  query = {},
  pushStub = genericRouterBoolPromiseStub,
  replaceStub = genericRouterBoolPromiseStub,
  reloadStub = genericRouterVoidPromiseStub,
  backStub = genericRouterVoidPromiseStub,
  prefetchStub = genericRouterVoidPromiseStub,
  beforePopStateStub = genericRouterMethodStub,
  onEventStub = genericRouterMethodStub,
  offEventStub = genericRouterMethodStub,
  emitEventStub = genericRouterMethodStub,
}: {
  children?: any;
  router?: any;
  route?: string;
  pathname?: string;
  asPath?: string;
  basePath?: string;
  query?: QueryParmas;
  pushStub?: GenericPromiseStub<boolean>;
  replaceStub?: GenericPromiseStub<boolean>;
  reloadStub?: GenericPromiseStub<void>;
  backStub?: GenericPromiseStub<void>;
  prefetchStub?: GenericPromiseStub<void>;
  beforePopStateStub?: GenericMethodStub;
  onEventStub?: GenericMethodStub;
  offEventStub?: GenericMethodStub;
  emitEventStub?: GenericMethodStub;
}) {
  const mockRouter: NextRouter = {
    basePath,
    pathname,
    route,
    asPath,
    query,
    push: pushStub,
    replace: replaceStub,
    reload: reloadStub,
    back: backStub,
    prefetch: prefetchStub,
    beforePopState: beforePopStateStub,
    events: {
      on: onEventStub,
      off: offEventStub,
      emit: emitEventStub,
    },
    isFallback: false,
    isLocaleDomain: false,
    isReady: true,
    isPreview: false,
  };
  return (
    <RouterContext.Provider value={{ ...mockRouter, ...router }}>
      {children}
    </RouterContext.Provider>
  );
}
