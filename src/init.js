import uuid from 'uuid/v4';

import { FILTERS } from './util';

const range = [0, 1, 2, 3, 4, 5];
function buildParts() {
  return range.map(() => ({
    [FILTERS.ODD]: {
      value: '-',
      enable: true,
    },
    [FILTERS.EVEN]: {
      value: '-',
      enable: true,
    },
    [FILTERS.ALL]: {
      value: '-',
      enable: true,
    },
  }));
}

export function buildInitialRows() {
  return [
    'شنبه',
    'یک‌شنبه',
    'دوشنبه',
    'سه‌شنبه',
    'چهارشنبه',
    'پنج‌شنبه',
    'جمعه',
  ].map(d => ({
    name: d,
    parts: buildParts(),
    key: uuid(),
  }));
}

export const INITIAL_FILTER = FILTERS.ALL;
