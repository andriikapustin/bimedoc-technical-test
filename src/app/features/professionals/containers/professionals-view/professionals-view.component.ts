import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map } from 'rxjs/operators';

import { IProfessional } from '../../../../models/professional.model';
import { ProfessionalDetailsDialogComponent } from '../../../../shared/modules/professional-details-dialog/professional-details-dialog.component';
import { filterByEmailAndSecureEmail } from '../../helpers/filter-by-email/filter-by-email';
import { sortByFirstName } from '../../helpers/sort-by-username/sort-by-first-name';
import { ProfessionalsFacade } from '../../state/facade/professionals.facade';

@Component({
  templateUrl: './professionals-view.component.html',
  styleUrls: ['./professionals-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfessionalsViewComponent implements OnInit {
  public readonly professionals$ = this.professionalsFacade.professionals$.pipe(
    map(filterByEmailAndSecureEmail),
    map(sortByFirstName),
  );
  public readonly professionalsLoading$ = this.professionalsFacade.professionalsLoading$;
  public readonly professionalsLoaded$ = this.professionalsFacade.professionalsLoaded$;

  constructor(
    private readonly professionalsFacade: ProfessionalsFacade,
    private readonly dialog: MatDialog,
  ) {}

  public ngOnInit(): void {
    this.professionalsFacade.fetchProfessionals();
  }

  public onOpenProfessionalDetails(professional: IProfessional): void {
    this.dialog.open<ProfessionalDetailsDialogComponent>(ProfessionalDetailsDialogComponent, { data: professional });
  }
}
