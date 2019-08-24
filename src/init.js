import uuid from 'uuid/v4';

import {FILTERS} from './util';

const range = [0, 1, 2, 3, 4, 5, 6];
function buildParts() {
  return range.map(() => ({
                     [FILTERS.ODD]: '-',
                     [FILTERS.EVEN]: '-',
                     [FILTERS.ALL]: '-',
                   }));
}

export function buildInitialRows() {
  return [
    'Saturday',
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
  ].map(d => ({
          name: d,
          parts: buildParts(),
          key: uuid(),
        }));
}

export const INITIAL_FILTER = FILTERS.ALL;
