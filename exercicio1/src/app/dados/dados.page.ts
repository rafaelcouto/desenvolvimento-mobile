import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../Pessoa';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.page.html',
  styleUrls: ['./dados.page.scss'],
})
export class DadosPage implements OnInit {

  private pessoa : Pessoa;

  constructor() { 

    let pessoa = new Pessoa();
    
    pessoa.nome = 'Rafael Couto';
    pessoa.idade = 27;
    pessoa.email = 'meuemail@gmail.com';
    pessoa.telefone = '(99) 99999-9999';

    this.pessoa = pessoa;

  }

  ngOnInit() {
  }

}
