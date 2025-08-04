import { Component, OnInit } from '@angular/core'; // Importa Component e OnInit do Angular
import { Router } from '@angular/router'; // Importa o serviço de navegação do Angular
import { OrcamentoService } from '../services/orcamento.service'; // Importa o serviço de orçamentos

@Component({
  selector: 'app-confirmacao', // Define o seletor do componente
  templateUrl: './confirmacao.page.html', // Define o template HTML do componente
  styleUrls: ['./confirmacao.page.scss'], // Define os estilos do componente
  standalone:false, // Indica que o componente não é standalone
})
export class ConfirmacaoPage  {

  orcamento: any; // Propriedade para armazenar o orçamento recebido

  constructor(private router: Router, private servico: OrcamentoService) { // Injeta o serviço de navegação e de orçamentos
    const nav = this.router.getCurrentNavigation(); // Obtém a navegação atual
    this.orcamento = nav?.extras.state?.['orcamento']; // Recupera o orçamento passado via navegação
    this.servico.adicionar(this.orcamento); // Adiciona o orçamento ao serviço
  }

  novaReserva() { // Navega para a página inicial
    this.router.navigate(['/home']);
  }

  verLista() { // Navega para a página de lista de orçamentos
    this.router.navigate(['/lista']);
  }

}
