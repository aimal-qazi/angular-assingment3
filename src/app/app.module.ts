import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'vehicle',
      },
      {
        path: 'vehicle',
        loadChildren: () =>
          import('./vehicle/vehicle.module').then((a) => a.VehicleModule),
      },
      {
        path: 'category',
        loadChildren: () =>
          import('./category/category.module').then((a) => a.CategoryModule),
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
