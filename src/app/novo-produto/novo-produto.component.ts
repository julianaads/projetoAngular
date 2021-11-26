import { Component, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
    selector:'app-novo-produto',
    templateUrl:'./novo-produto.component.html',
    styleUrls:['./novo-produto.component.scss']
})

export class NovoProdutoComponent{

  @Output() aoIncluir = new EventEmitter<any>();

  valor: number = 0;
  produto: string = "";
  descricao: string = "";

  transferir() {
    console.log('inserir novo produto');
    const incluirProduto = {valor: this.valor, produto: this.produto, descricao: this.descricao}
    this.aoIncluir.emit(incluirProduto);
    this.limparCampos();

  }

  limparCampos() {
    this.valor = 0 ;
    this.produto = " ";
    this.descricao = " ";
  }

}

