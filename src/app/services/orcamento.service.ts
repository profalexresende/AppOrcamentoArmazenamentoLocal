import { Injectable } from '@angular/core'; // Importa o decorator Injectable do Angular
import { Storage } from '@ionic/storage-angular'; // Importa o serviço de armazenamento do Ionic
import { Orcamento } from '../models/orcamento'; // Importa o modelo Orcamento

@Injectable({
  providedIn: 'root', // Define que o serviço será singleton e disponível na raiz da aplicação
})
export class OrcamentoService {
  private orcamentos: Orcamento[] = []; // Array para armazenar os orçamentos localmente
  private storageInicializado = false; // Flag para verificar se o storage foi inicializado

  constructor(private storage: Storage) { // Injeta o serviço de storage
    this.init(); // Inicializa o storage ao criar o serviço
  }

  async init() { // Inicializa o storage e carrega os dados salvos
    await this.storage.create(); // Cria/abre o storage
    this.storageInicializado = true; // Marca o storage como inicializado
    const dados = await this.storage.get('orcamentos'); // Busca os orçamentos salvos
    this.orcamentos = dados || []; // Se houver dados, carrega; senão, inicializa vazio
  }

  async adicionar(orcamento: Orcamento) { // Adiciona um novo orçamento
    if (!this.storageInicializado) { // Se o storage não está pronto
      await this.init(); // Inicializa o storage
    }

    // recarrega os dados mais recentes
    const listaAtual = (await this.storage.get('orcamentos')) || []; // Busca a lista atual de orçamentos
    listaAtual.push(orcamento); // Adiciona o novo orçamento à lista
    this.orcamentos = listaAtual; // Atualiza o array local

    return this.storage.set('orcamentos', this.orcamentos); // Salva a lista atualizada no storage
  }

  async listar(): Promise<Orcamento[]> { // Retorna todos os orçamentos
    if (!this.storageInicializado) { // Se o storage não está pronto
      await this.init(); // Inicializa o storage
    }

    this.orcamentos = (await this.storage.get('orcamentos')) || []; // Atualiza o array local com os dados do storage
    return this.orcamentos; // Retorna o array de orçamentos
  }

  async excluir(index: number) { // Exclui um orçamento pelo índice
    this.orcamentos.splice(index, 1); // Remove o orçamento do array local
    return this.storage.set('orcamentos', this.orcamentos); // Salva a lista atualizada no storage
  }

  async limparTudo() { // Remove todos os orçamentos
    this.orcamentos = []; // Limpa o array local
    return this.storage.set('orcamentos', []); // Salva o array vazio no storage
  }
}
