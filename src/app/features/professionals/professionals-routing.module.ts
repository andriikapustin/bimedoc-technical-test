import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfessionalsViewComponent } from './containers/professionals-view/professionals-view.component';

const routes: Routes = [
  {
    path: '',
    component: ProfessionalsViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfessionalsRoutingModule {}
