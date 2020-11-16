import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RulesComponent } from './rules/rules.component';
import { GameComponent } from './game/game.component';
import { GameTokenComponent } from './game/game-token/game-token.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RulesComponent,
    GameComponent,
    GameTokenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
