import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencia.models';
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
    this.service.todas().subscribe((produtos: Transferencia[]) => {
      console.table(produtos);
      this.produtos = produtos;
    })
  }

}
