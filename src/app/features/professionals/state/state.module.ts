import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ProfessionalsApiService } from './api/professionals-api.service';
import { ProfessionalsFacade } from './facade/professionals.facade';
import { ProfessionalsStateService } from './state/professionals-state.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [ProfessionalsApiService, ProfessionalsStateService, ProfessionalsFacade],
})
export class StateModule {}
