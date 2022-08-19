import { formatName } from '../src/two';
 
describe('testing fullname', () => {
  test('there is neither firstname nor lastname', () => {
    expect(formatName({last: '', first: ''})).toBe('');
  });
});

describe('testing fullname', () => {
    test('there is only the last name', () => {
      expect(formatName({ last: '', first: 'Wilson'})).toBe('Wilson');
    });
});


describe('testing fullname', () => {
    test('there is fullname', () => {
      expect(formatName({ last: 'Jeffrey', first: 'Wilson'})).toBe('Jeffrey, Wilson');
    });
});