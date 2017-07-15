import { ModuleWithProviders }  from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RoverFormComponent } from './rover-form/rover-form.component';
import { PhotosListComponent } from './photos-list/photos-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'rover',
    component: RoverFormComponent
  },
  {
    path: 'photos',
    component: PhotosListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
