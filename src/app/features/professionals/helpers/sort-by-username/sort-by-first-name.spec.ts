import { IProfessional } from '../../../../models/professional.model';

import { sortByFirstName } from './sort-by-first-name';

describe(`sortProfessionalsByUserName()`, () => {
  const professionalsMock = [
    { first_name: 'Thomas' },
    { first_name: 'THOMAS' },
    { first_name: 'thomas' },
    { first_name: 'Andrii' },
    { first_name: 'Nicolas' },
    { first_name: 'Alex' },
  ] as IProfessional[];

  it('should return array', () => {
    expect(sortByFirstName(professionalsMock)).toBeInstanceOf(Array);
  });

  it('should return array with the same length', () => {
    expect(sortByFirstName(professionalsMock).length).toBe(professionalsMock.length);
  });

  it('should return correctly sorted array', () => {
    sortByFirstName(professionalsMock).forEach((current, i, array) => {
      const next = array[i + 1];
      const actual = current.first_name.localeCompare(next?.first_name);

      if (current.first_name === next?.first_name) {
        expect(actual).toBe(0);
      } else {
        expect(actual).toBe(-1);
      }
    });
  });

  it('should match snapshot', () => {
    expect(sortByFirstName(professionalsMock)).toMatchSnapshot();
  });
});
