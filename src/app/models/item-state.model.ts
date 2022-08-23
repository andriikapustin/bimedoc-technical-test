import { HttpErrorResponse } from '@angular/common/http';

export interface ItemState<T> {
  data: T;
  loading: boolean;
  loaded: boolean;
  error: HttpErrorResponse | null;
}
