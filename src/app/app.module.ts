import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ArenaComponent } from './components/arena/arena.component';
import { HeroComponent } from './components/hero/hero.component';
import { UsersComponent } from './components/users/users.component';
import { TableComponent } from './components/table/table.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ButtonsComponent,
    ArenaComponent,
    HeroComponent,
    UsersComponent,
    TableComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // {
    // provide: UserService,  (token)
    // useClass: UserService  (dipendenza)
    // } 
    // poiché il nome della dipendenza
    // coincide con il nome della classe, si può semplificare cosi:
    // UserService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
