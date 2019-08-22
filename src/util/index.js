export const indexFromDay = (day) => {
  switch (day) {
    case 'Saturday':
      return 0;
    case 'Sunday':
      return 1;
    case 'Monday':
      return 2;
    case 'Tuesday':
      return 3;
    case 'Wednesday':
      return 4;
    case 'Thursday':
      return 5;
    case 'Friday':
      return 6;
    default:
      return -1;
  }
}