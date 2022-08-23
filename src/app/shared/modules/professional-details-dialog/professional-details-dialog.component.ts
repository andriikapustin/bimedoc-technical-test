import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { IProfessional } from '../../../models/professional.model';

import { DATA_COLUMNS } from './constants/columns';

const DIALOG_WIDTH = '700px';

@Component({
  templateUrl: './professional-details-dialog.component.html',
  styleUrls: ['./professional-details-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfessionalDetailsDialogComponent implements OnInit {
  public readonly columns = DATA_COLUMNS;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IProfessional,
    private readonly dialogRef: MatDialogRef<ProfessionalDetailsDialogComponent>,
  ) {}

  public ngOnInit(): void {
    this.dialogRef.updateSize(DIALOG_WIDTH);
  }
}
