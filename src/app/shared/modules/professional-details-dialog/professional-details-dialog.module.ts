import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { FormatPipeModule } from '../../pipes/format-pipe.module';

import { ProfessionalDetailsDialogComponent } from './professional-details-dialog.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatDialogModule, MatIconModule, MatListModule, FormatPipeModule],
  declarations: [ProfessionalDetailsDialogComponent],
})
export class ProfessionalDetailsDialogModule {}
