import { Component, OnInit } from '@angular/core';
import { OrcamentoService } from '../services/orcamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
  standalone:false,
})
export class ListaPage  {

  orcamentos: any[] = [];

  constructor(private servico: OrcamentoService, private router: Router) {}

  async ionViewWillEnter() {
    this.orcamentos = await this.servico.listar();
  }

  async excluir(index: number) {
    await this.servico.excluir(index);
    this.orcamentos = await this.servico.listar();
  }

  voltar() {
    this.router.navigate(['/confirmacao']);
  }

}
