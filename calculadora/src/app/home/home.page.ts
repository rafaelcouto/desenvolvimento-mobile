import { Component } from '@angular/core';
import { isNumber } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  public operacoes = ['+', '-', '*', '/'];

  public numeroAnterior: string = null;
  public numeroAtual: string = null;
  public operacaoAtual: string = null;

  public limparResultadoProximoNumero: boolean = false;

  constructor() { }

  definirOperacao(operacao) {

    if (this.operacaoAtual) {
      
      if (this.numeroAnterior && this.numeroAtual) {
        this.calcular();
        this.definirOperacao(operacao);
      } else {
        if (this.numeroAnterior) {
          this.operacaoAtual = operacao;
        }
      }

      return;
    }

    this.numeroAnterior = this.numeroAtual;
    this.operacaoAtual = operacao;
    this.numeroAtual = null;
  }

  definirNumero(numero) {

    if (this.numeroAtual === null || this.numeroAtual == "0" || this.limparResultadoProximoNumero) {
      this.numeroAtual = "";
    }

    this.numeroAtual = this.numeroAtual + "" + numero;
    this.limparResultadoProximoNumero = false;
  }

  calcular() {

    if (!this.numeroAtual || !this.numeroAnterior || !this.operacaoAtual) {
      return;
    }

    let expressao = this.tratarNumero(this.numeroAnterior) + this.operacaoAtual + this.tratarNumero(this.numeroAtual);
    let resultado = eval(expressao);

    if (!isFinite(resultado)) {
      alert('Operação inválida');
      this.limpar();
      return;
    }

    this.numeroAtual = this.formatarNumero(resultado);
    this.numeroAnterior = null;
    this.operacaoAtual = null;
    this.limparResultadoProximoNumero = true;
  }

  tratarNumero(numero) {
    return numero.toString().replace(",", ".");
  }

  formatarNumero(numero) {
    return numero.toString().replace(".", ",");
  }

  definirSeparador() {

    if (!this.numeroAtual || this.limparResultadoProximoNumero) {
      this.numeroAtual = "0,";
      this.limparResultadoProximoNumero = false;
      return;
    }

    if (this.numeroAtual.slice(-1) == "," || this.numeroAtual.includes(",")) {
      return;
    }

    this.numeroAtual += ",";
  }

  limpar() {
    this.numeroAtual = null;
    this.numeroAnterior = null;
    this.operacaoAtual = null;
    this.limparResultadoProximoNumero = false;
  }

}
