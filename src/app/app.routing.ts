import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RoverFormComponent } from './rover-form/rover-form.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'rover',
    component: RoverFormComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
