import { Component, Input, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  produtos: any[] = [];

  constructor(private service: ProdutoService) { }

  ngOnInit(): void {
    this.produtos = this.service.produtos;
  }

}
