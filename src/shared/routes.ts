/**
 * Note: these routes should be kept in sync with `public/sitemap.xml`.
 */
import { trimEnd } from 'lodash';

export function ask() {
  return '/ask';
}

export function howItWorks() {
  return '/how';
}

export function landing() {
  return '/';
}

export function privacy() {
  return '/privacy';
}

export function profile(action = ':action') {
  return trimEnd(`/profile/${action}`, '/');
}

export function story() {
  return '/story';
}
