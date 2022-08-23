import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { RootViewComponent } from './containers/root-view/root-view.component';

@NgModule({
  imports: [BrowserAnimationsModule, BrowserModule, AppRoutingModule],
  declarations: [RootViewComponent],
  bootstrap: [RootViewComponent],
})
export class AppModule {}
