import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ControleLivrosService, Livro } from './controle-livros.service';
@Component({selector:'app-root',standalone:true,imports:[CommonModule, FormsModule],templateUrl:'./app.component.html',styleUrls:['./app.component.css']})
export class AppComponent implements OnInit { private controle=inject(ControleLivrosService); livros:Livro[]=[]; novo:Livro={titulo:'',autor:'',preco:0}; ngOnInit(){this.carregar()} carregar(){this.controle.obterLivros().then(r=>this.livros=r)} incluir(){this.controle.incluir(this.novo).then(()=>{this.novo={titulo:'',autor:'',preco:0};this.carregar()})} excluir(id:string){this.controle.excluir(id).then(()=>this.carregar())} }
