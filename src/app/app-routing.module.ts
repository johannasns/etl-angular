import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArenaComponent } from './components/arena/arena.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TableComponent } from './components/table/table.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [ {
  component: ArenaComponent,
  path: 'arena'
},{
  component: TableComponent,
  path: 'users'
},{
  component: HomeComponent,
  path: ''
},{
    component: LoginComponent,
    path: 'login'
},{
  component: UserComponent,
  path: 'users/:id'
},{
  component: NotFoundComponent,
  path: '**'
}]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)], // configura il router secondo le regole dell'array vuoto routes
  // il metodo forroot dovrà essere invocato nell'intero applicativo alpiù una volta
  // forroot è un metodo statico perché non istanzia nulla
  exports: [RouterModule]
})
export class AppRoutingModule { }
