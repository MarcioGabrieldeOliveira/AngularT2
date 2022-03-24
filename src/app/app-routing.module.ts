import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './views/carrinho/carrinho.component';
import { FaleConoscoComponent } from './views/fale-conosco/fale-conosco.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegistroComponent } from './views/registro/registro.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "fale-conosco",  component: FaleConoscoComponent},
  { path: "login", component: LoginComponent},
  { path: "registro", component: RegistroComponent},
  { path: "carrinho", component: CarrinhoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
