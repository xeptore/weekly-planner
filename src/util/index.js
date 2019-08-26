import { STORAGE_KEY, FILTERS } from './constants';


function store(data) {
  try {
    const serialized = JSON.stringify(data);
    localStorage.setItem(STORAGE_KEY, serialized);
  } catch (err) {
    console.error(`Error storing state: ${err}`);
  }
}

function clonePart(part) {
  return {
    ALL: {
      value: part.ALL.value,
      enable: part.ALL.enable,
    },
    EVEN: {
      value: part.EVEN.value,
      enable: part.EVEN.enable,
    },
    ODD: {
      value: part.ODD.value,
      enable: part.ODD.enable,
    },
  };
}

function reducePart(part, type, value) {
  const newPart = clonePart(part);
  switch (type) {
  case FILTERS.ALL: {
    newPart.ALL.value = value;
    newPart.EVEN = { value: 'X', enable: false };
    newPart.ODD = { value: 'X', enable: false };
    break;
  }
  case FILTERS.EVEN: {
    newPart.EVEN.value = value;
    newPart.ALL = { value: 'X', enable: false };
    break;
  }
  case FILTERS.ODD: {
    newPart.ODD.value = value;
    newPart.ALL = { value: 'X', enable: false };
    break;
  }
  default: {
    break;
  }
  }
  return newPart;
}

export function cloneDeepRows(rows, { day, index, type, value }) {
  const cloned = rows.map(x => {
    if (day === x.name && x.parts[index][type].value !== value) {
      const newPart = reducePart(x.parts[index], type, value);
      return {
        name: x.name,
        key: x.key,
        parts: [
          ...x.parts.slice(0, index).map(part => clonePart(part)),
          newPart,
          ...x.parts.slice(index + 1).map(part => clonePart(part)),
        ],
      };
    }
    return {
      name: x.name,
      key: x.key,
      parts: x.parts.map(part => clonePart(part)),
    };
  });

  store(cloned);

  return cloned;
}
