import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ItemState } from '../../../../models/item-state.model';
import { IProfessional } from '../../../../models/professional.model';
import { StateService } from '../../../../shared/services/state.service';

export type ProfessionalsState = ItemState<IProfessional[]>;

const initialState: ProfessionalsState = {
  loading: false,
  loaded: false,
  data: [],
  error: null,
};

@Injectable()
export class ProfessionalsStateService extends StateService<ProfessionalsState> {
  public readonly professionals$: Observable<IProfessional[]> = this.select((state) => state.data);
  public readonly professionalsLoading$: Observable<boolean> = this.select((state) => state.loading);
  public readonly professionalsLoaded$: Observable<boolean> = this.select((state) => state.loaded);

  constructor() {
    super(initialState);
  }

  public initProfessionalsLoading(): void {
    this.setState({
      loading: true,
      error: null,
    });
  }

  public fetchProfessionalsSuccess(data: IProfessional[]): void {
    this.setState({
      data,
      loading: false,
      loaded: true,
    });
  }

  public fetchProfessionalsError(error: HttpErrorResponse): void {
    this.setState({
      loading: false,
      error,
    });
  }
}
