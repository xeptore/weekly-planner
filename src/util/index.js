export const FILTERS = {
  EVEN: 'EVEN',
  ODD: 'ODD',
  ALL: 'ALL',
};

export function cloneDeepRows(rows, { day, index, type, value }) {
  return rows.map(x => {
    if (day === x.name) {
      return {
        name: x.name,
        key: x.key,
        parts: [
          ...x.parts.slice(0, index).map(x => Object.assign({}, x)),
          type === 'ALL' ? Object.assign({}, x.parts[index], {
            'ODD': value,
            'EVEN': value,
            'ALL': value,
          }) :
            Object.assign({}, x.parts[index], { [type]: value }),
          ...x.parts.slice(index + 1).map(x => Object.assign({}, x)),
        ],
      };
    }
    return {
      name: x.name,
      key: x.key,
      parts: x.parts.map(p => Object.assign({}, p)),
    };
  });
}
