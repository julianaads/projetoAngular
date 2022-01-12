import { Component, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { Transferencia } from "../models/transferencia.models";
import { ProdutoService } from "../services/produto.service";

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

  constructor(private service: ProdutoService) {}

  transferir() {
    console.log('inserir novo produto');

    const incluirProduto: Transferencia = {valor: this.valor, produto: this.produto, descricao: this.descricao}

    this.service.adicionar(incluirProduto).subscribe(resultado => {
      console.log(resultado)
      this.limparCampos
    },
    (error) => console.log(error)
    )
  }

  limparCampos() {
    this.valor = 0 ;
    this.produto = " ";
    this.descricao = " ";
  }

}

