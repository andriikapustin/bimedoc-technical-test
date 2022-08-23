import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root-view',
  templateUrl: './root-view.component.html',
  styleUrls: ['./root-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RootViewComponent {}
