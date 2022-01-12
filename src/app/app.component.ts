import { Component } from '@angular/core';
import { ProdutoService } from './services/produto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projetoAngular';

  constructor(private service: ProdutoService) {

  }

}
