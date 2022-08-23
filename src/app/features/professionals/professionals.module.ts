import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { ProfessionalDetailsDialogModule } from '../../shared/modules/professional-details-dialog/professional-details-dialog.module';
import { SpinnerModule } from '../../shared/modules/spinner/spinner.module';

import { ProfessionalsTableComponent } from './components/professionals-table/professionals-table.component';
import { ProfessionalsViewComponent } from './containers/professionals-view/professionals-view.component';
import { ProfessionalsRoutingModule } from './professionals-routing.module';
import { StateModule } from './state/state.module';

@NgModule({
  declarations: [ProfessionalsViewComponent, ProfessionalsTableComponent],
  imports: [
    CommonModule,
    ProfessionalsRoutingModule,
    ProfessionalDetailsDialogModule,
    SpinnerModule,
    StateModule,
    MatTableModule,
    MatPaginatorModule,
  ],
})
export class ProfessionalsModule {}
