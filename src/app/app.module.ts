import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SobrePageComponent } from './pages/sobre-page/sobre-page.component';
import { GamesPageComponent } from './pages/games-page/games-page.component';
import { RoutingModule } from './app.router';
import { SobreComponent } from './components/sobre/sobre.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { MenuComponent } from './components/menu/menu.component';
import { LogoComponent } from './components/logo/logo.component';
import { CarrosselComponent } from './components/carrossel/carrossel.component';
import { HttpModule } from '@angular/http';
import { GamesPageService } from './pages/games-page/games-page.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SobrePageComponent,
    GamesPageComponent,
    SobreComponent,
    RodapeComponent,
    MenuComponent,
    LogoComponent,
    CarrosselComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    GamesPageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
