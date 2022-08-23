import { IProfessional } from '../../../../models/professional.model';

const regExp = /thomas/gi;

export function filterByEmailAndSecureEmail(professionals: IProfessional[]): IProfessional[] {
  return professionals.filter(
    ({ email, secure_email }) => email?.match(regExp) || secure_email?.some((secureEmail) => secureEmail.match(regExp)),
  );
}
