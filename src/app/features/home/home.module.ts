import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { HomeViewComponent } from './containers/home-view/home-view.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeViewComponent],
  imports: [CommonModule, HomeRoutingModule, MatButtonModule],
})
export class HomeModule {}
