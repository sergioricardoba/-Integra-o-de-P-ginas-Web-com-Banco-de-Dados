import { Injectable } from '@angular/core';
export interface Livro { _id?: string; titulo: string; autor: string; preco: number; }
@Injectable({providedIn:'root'}) export class ControleLivrosService { private baseURL='http://localhost:3030/livros'; obterLivros():Promise<Livro[]>{return fetch(this.baseURL).then(r=>r.json())} incluir(livro:Livro){return fetch(this.baseURL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(livro)}).then(r=>r.json())} excluir(codigo:string){return fetch(`${this.baseURL}/${codigo}`,{method:'DELETE'}).then(r=>r.json())} }
