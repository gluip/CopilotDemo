import { calculateAge, isChristmasDay,isGenZ,isLeapYear } from './dateFunctions';

test('isChristmasDay returns true for Christmas Day', () => {
  const christmasDay = new Date('2022-12-25');
  expect(isChristmasDay(christmasDay)).toBe(true);
});

test('isChristmasDay returns false for non-Christmas Day', () => {
  const nonChristmasDay = new Date('2022-12-24');
  expect(isChristmasDay(nonChristmasDay)).toBe(false);
});

test('isLeapYear returns true for leap year', () => {
  expect(isLeapYear(2020)).toBe(true);
});

test('isLeapYear returns false for non-leap year', () => {
  expect(isLeapYear(2021)).toBe(false);
});

test('calculateAge returns correct age', () => {
  const birthDate = new Date('2000-01-01');
  const today = new Date('2022-01-01');
  expect(calculateAge(birthDate, today)).toBe(22);
});

test('calculateAge returns correct age for person aged yet', () => {
  const birthDate = new Date('2000-02-01');
  const today = new Date('2022-01-01');
  expect(calculateAge(birthDate, today)).toBe(21);
  
});

test('isGenZ returns true for Gen Z', () => {
  const birthDate = new Date('2005-01-01');
  
  expect(isGenZ(birthDate)).toBe(true);
});