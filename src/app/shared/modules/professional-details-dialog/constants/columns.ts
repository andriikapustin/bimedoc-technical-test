import { IColumn } from '../../../../models/column.model';
import { IProfessional } from '../../../../models/professional.model';
import { BIMEDOC_CLIENT_SETTINGS } from '../../../../shared/constants/bimedoc-client-settings';

export const DATA_COLUMNS: IColumn<IProfessional>[][] = [
  [
    { label: 'first_name', name: 'first_name' },
    { label: 'gender', name: 'gender' },
    { label: 'profession_name', name: 'profession_name' },
    { label: 'postcode', name: 'postcode' },
    {
      label: 'secure_email',
      name: 'secure_email',
      formatter: ({ secure_email }: IProfessional) => secure_email?.join(' '),
    },
  ],
  [
    { label: 'last_name', name: 'last_name' },
    { label: 'rpps_number', name: 'rpps_number' },
    { label: 'street', name: 'street' },
    { label: 'city', name: 'city' },
    { label: 'email', name: 'email' },
    {
      label: 'bimedoc_client',
      name: 'bimedoc_client',
      formatter: ({ bimedoc_client }: IProfessional) => BIMEDOC_CLIENT_SETTINGS[bimedoc_client],
    },
    { label: 'ident_tech_structure', name: 'ident_tech_structure' },
  ],
];
