enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean => {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
};

const today = DayOfWeek.Saturday;
const weekend = isWeekend(today);
console.log(`Is today a weekend? ${weekend}`);
