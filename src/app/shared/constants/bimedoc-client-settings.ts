import { EBimedocClient } from '../../enums/bimedoc-client.enum';

export const BIMEDOC_CLIENT_SETTINGS: Record<EBimedocClient, string> = {
  [EBimedocClient.Yes]: 'Yes',
  [EBimedocClient.No]: 'No',
};
