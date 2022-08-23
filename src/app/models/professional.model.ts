import { EBimedocClient } from '../enums/bimedoc-client.enum';

export interface IProfessional {
  id: string;
  phone_number: string;
  city: string;
  activity_segment_code: string;
  last_name: string;
  activity_segment_name: string;
  registered_name: string;
  type_contact: string;
  bimedoc_client: EBimedocClient;
  gender: string;
  ident_tech_structure: string;
  first_name: string;
  building_number: string;
  email: string;
  rpps_number: string;
  profession_name: string;
  street: string;
  postcode: string;
  secure_email: string[];
  profession_code: number;
}
