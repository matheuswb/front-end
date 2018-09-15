import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SobrePageComponent } from './pages/sobre-page/sobre-page.component';
import { GamesPageComponent } from './pages/games-page/games-page.component';

const routes: Routes = [
  {
      path: '',
       component: HomePageComponent
  },

  {
      path: 'sobre',
      component: SobrePageComponent
  },

  {
      path: 'games',
      component: GamesPageComponent
  }
];
export const RoutingModule = RouterModule.forRoot(routes);