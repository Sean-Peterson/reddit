import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { SportsComponent } from './sports/sports.component';
import { FoodComponent } from './food/food.component';
import { TravelComponent } from './travel/travel.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'news',
    component: NewsComponent
  }, {
    path: 'sports',
    component: SportsComponent
  }, {
    path: 'food',
    component: FoodComponent
  }, {
    path: 'travel',
    component: TravelComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
