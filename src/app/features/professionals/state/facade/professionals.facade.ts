import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { responseMapper } from '../../helpers/response-mapper/response-mapper';
import { ProfessionalsApiService } from '../api/professionals-api.service';
import { ProfessionalsStateService } from '../state/professionals-state.service';

@Injectable()
export class ProfessionalsFacade {
  public readonly professionals$ = this.professionalsStateService.professionals$;
  public readonly professionalsLoading$ = this.professionalsStateService.professionalsLoading$;
  public readonly professionalsLoaded$ = this.professionalsStateService.professionalsLoaded$;

  constructor(
    private readonly professionalsApiService: ProfessionalsApiService,
    private readonly professionalsStateService: ProfessionalsStateService,
  ) {}

  public fetchProfessionals(): void {
    this.professionalsStateService.initProfessionalsLoading();

    this.professionalsApiService.fetchProfessionals().subscribe({
      next: ({ hits }) => this.professionalsStateService.fetchProfessionalsSuccess(responseMapper(hits.hit)),
      error: (error: HttpErrorResponse) => this.professionalsStateService.fetchProfessionalsError(error),
    });
  }
}
