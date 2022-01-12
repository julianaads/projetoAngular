import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.models'


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

 private listaProduto!: any[];
 private url = 'http://localhost:3000/transferencias';

constructor(private httpClient: HttpClient) {
  this.listaProduto = [];
 }

 get produtos() {
   return this.listaProduto;
 }

 todas(): Observable<Transferencia[]> {
   return this.httpClient.get<Transferencia[]>(this.url);
 }

 adicionar(produto: Transferencia): Observable<Transferencia> {
  this.hidratar(produto)
  this.produtos.push(produto);

  return this.httpClient.post<Transferencia>(this.url, produto)

}

private hidratar(produto: any){
  produto.data = new Date()
}

}
