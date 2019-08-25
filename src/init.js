import uuid from 'uuid/v4';

import { FILTERS, STORAGE_KEY } from './util/constants';

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


function readStatesFromStorage() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return JSON.parse(data);
  } catch (err) {
    return undefined;
  }
}

function isInitialStatesValid(states) {
  return true && states;
}

function buildInitialRows() {
  return [
    'شنبه',
    'یک‌شنبه',
    'دوشنبه',
    'سه‌شنبه',
    'چهارشنبه',
    'پنج‌شنبه',
  ].map(d => ({
    name: d,
    parts: buildParts(),
    key: uuid(),
  }));
}


export function getInitialStates() {
  const initialStates = readStatesFromStorage();
  console.log('states:', !initialStates);
  if (!initialStates || !isInitialStatesValid(initialStates)) {
    console.error('Error reading initial states from storage.');
    console.error('Using default values.');
    return buildInitialRows();
  }
  return initialStates;
}

export const INITIAL_FILTER = FILTERS.ALL;
