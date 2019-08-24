export function cloneDeepRows(thing, {day, index, value}) {
  return thing.map(x => {
    if (day == x.day) {
      return {
        day: x.day,
        key: x.key,
        data: [
          ...x.data.slice(0, index),
          value,
          ...x.data.slice(index + 1),
        ],
      };
    };
    return {
      day: x.day,
      key: x.key,
      data: [...x.data],
    };
  });
}
