import { IProfessional } from './professional.model';

export interface IProfessionalsResponse {
  hits: {
    found: number;
    start: number;
    hit: IProfessionalResponse[];
  };
}

export interface IProfessionalResponse {
  id: string;
  fields: IProfessional;
}
