import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

 private listaProduto!: any[];

constructor() {
  this.listaProduto = []
 }

 get produtos() {
   return this.listaProduto;
 }

 adicionar(produto: any) {
  this.hidratar(produto)
  this.produtos.push(produto);

}

private hidratar(produto: any){
  produto.data = new Date()
}

}
