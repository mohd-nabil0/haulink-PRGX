import {
  CommonActions,
  NavigationContainerRef,
} from '@react-navigation/native';
import React from 'react';
import { RootStackParamsList } from './types';

export const navigationRef =
  React.createRef<NavigationContainerRef<RootStackParamsList>>();

export function getCurrentRoute() {
  const route = navigationRef?.current?.getCurrentRoute() as { name: string } | undefined;
  return route?.name;
}

export function navigateToLogin() {
  navigationRef?.current?.dispatch(
    CommonActions.reset({ index: 0, routes: [{ name: 'SelectRole' }] }),
  );
}
