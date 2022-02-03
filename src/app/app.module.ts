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
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForbiddenDirective } from './directives/forbidden.directive';
import { RdfLoginComponent } from './components/rdf-login/rdf-login.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ButtonsComponent,
    ArenaComponent,
    HeroComponent,
    UsersComponent,
    TableComponent,
    HighlightDirective,
    HomeComponent,
    NotFoundComponent,
    UserComponent,
    LoginComponent,
    ForbiddenDirective,
    RdfLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
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
