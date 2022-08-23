import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../../../environments/environment';
import { IProfessionalsResponse } from '../../../../models/professionals-response.model';

@Injectable()
export class ProfessionalsApiService {
  constructor(private readonly httpClient: HttpClient) {}

  public fetchProfessionals(): Observable<IProfessionalsResponse> {
    return this.httpClient.get<IProfessionalsResponse>(`${environment.apiUrl}/dev/?q=thomas&size=100`);
  }
}
