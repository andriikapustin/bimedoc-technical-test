import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { IProfessional } from '../../../../models/professional.model';
import { DEFAULT_PAGINATION_OPTIONS } from '../../../../shared/constants/default-pagination-options';
import { TABLE_COLUMNS } from '../../constants/table-columns';

@Component({
  selector: 'app-professionals-table',
  templateUrl: './professionals-table.component.html',
  styleUrls: ['./professionals-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfessionalsTableComponent implements OnInit, AfterViewInit {
  @Input() public professionals: IProfessional[];
  @Input() public totalRecords: number;

  public readonly dataSource = new MatTableDataSource<IProfessional>();
  public readonly columns = TABLE_COLUMNS;
  public readonly paginationOptions = DEFAULT_PAGINATION_OPTIONS;

  @Output() private readonly openDetails = new EventEmitter<IProfessional>();

  @ViewChild(MatPaginator) private readonly paginator: MatPaginator;

  public ngOnInit(): void {
    this.dataSource.data = this.professionals;
  }

  public ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  public onRowClick(row: IProfessional): void {
    this.openDetails.emit(row);
  }
}
