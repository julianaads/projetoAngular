import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projetoAngular';
  produtos: any[] = [];

  incluir($event: any) {
    console.log($event)
    const produto = {...$event, data: new Date()};
    this.produtos.push(produto);

  }



}
