import { IProfessional } from '../../../../models/professional.model';

export function sortByFirstName(professionals: IProfessional[]): IProfessional[] {
  return professionals.sort((a, b) => a.first_name.localeCompare(b.first_name));
}
