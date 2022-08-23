import { IProfessional } from '../../../../models/professional.model';
import { IProfessionalResponse } from '../../../../models/professionals-response.model';

export function responseMapper(response: IProfessionalResponse[]): IProfessional[] {
  return response.map(({ fields }) => fields);
}
