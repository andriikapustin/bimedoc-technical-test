import { IProfessional } from '../../../../models/professional.model';

import { filterByEmailAndSecureEmail } from './filter-by-email';

describe(`filterByEmailAndSecureEmail()`, () => {
  const professionalsMock = [
    { email: 'Thomas@gmail.com' },
    { secure_email: ['THOMAS@gmail.com'] },
    { email: 'andrii@gmail.com' },
    { email: 'andrii@gmail.com', secure_email: ['thomas@gmail.com'] },
  ] as IProfessional[];

  const expectedMock = [
    { email: 'Thomas@gmail.com' },
    { secure_email: ['THOMAS@gmail.com'] },
    { email: 'andrii@gmail.com', secure_email: ['thomas@gmail.com'] },
  ] as IProfessional[];

  it('should return array', () => {
    expect(filterByEmailAndSecureEmail(professionalsMock)).toBeInstanceOf(Array);
  });

  it('should return correctly filtered array', () => {
    expect(filterByEmailAndSecureEmail(professionalsMock)).toEqual(expectedMock);
  });

  it('should match snapshot', () => {
    expect(filterByEmailAndSecureEmail(professionalsMock)).toMatchSnapshot();
  });
});
