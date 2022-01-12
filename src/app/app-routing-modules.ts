import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Routes } from '@angular/router';
import { ListarProdutosComponent } from "./listar-produtos/listar-produtos.component";
import { NovoProdutoComponent } from "./novo-produto/novo-produto.component";

export const routes: Routes = [
  {path: '', redirectTo: 'listarProdutos', pathMatch: 'full'},
  {path: 'listarProdutos', component: ListarProdutosComponent},
  {path: 'novo-produto', component: NovoProdutoComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
