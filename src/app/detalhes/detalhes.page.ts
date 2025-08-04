import { Component, OnInit } from '@angular/core'; // Importa Component e OnInit do Angular
import { Router } from '@angular/router'; // Importa o serviço de navegação do Angular

@Component({
  selector: 'app-detalhes', // Define o seletor do componente
  templateUrl: './detalhes.page.html', // Define o template HTML do componente
  styleUrls: ['./detalhes.page.scss'], // Define os estilos do componente
  standalone:false, // Indica que o componente não é standalone
})
export class DetalhesPage  {

  diaria = 0; // Valor da diária
  dias = 0; // Quantidade de dias
  total = 0; // Valor total do orçamento

  constructor(private router: Router) { // Injeta o serviço de navegação
    const nav = this.router.getCurrentNavigation(); // Obtém a navegação atual
    const state = nav?.extras.state; // Recupera o estado passado via navegação
    if (state) { // Se existe estado
      this.diaria = state['diaria']; // Recupera o valor da diária
      this.dias = state['dias']; // Recupera a quantidade de dias
      this.total = this.diaria * this.dias; // Calcula o valor total
    }
  }

  confirmar() { // Função chamada ao confirmar o orçamento
    const orcamento = { // Cria o objeto orçamento
      diaria: this.diaria, // Valor da diária
      dias: this.dias, // Quantidade de dias
      total: this.total, // Valor total
      data: new Date().toLocaleString(), // Data e hora da confirmação
    };
    this.router.navigate(['/confirmacao'], { state: { orcamento } }); // Navega para a página de confirmação, passando o orçamento
  }

  voltar() { // Função chamada ao voltar para a página inicial
    this.router.navigate(['/home']); // Navega para a página inicial
  }

}
