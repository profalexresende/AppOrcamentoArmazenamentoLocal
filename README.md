# 📱 Aplicativo de Reserva de Hospedagem – Ionic + Storage

![Ionic](https://img.shields.io/badge/Ionic-Framework-blue)
![Angular](https://img.shields.io/badge/Angular-v14-red)
![License](https://img.shields.io/badge/license-MIT-green)

> Aplicativo desenvolvido em **Ionic com Angular**, permitindo ao usuário realizar simulações de hospedagem, salvar orçamentos localmente e visualizar uma lista de reservas anteriores.

---

## 🧭 Navegação

1. **Tela Inicial**
   - Inserção do valor da diária
   - Seleção da quantidade de dias (usando `ion-range`)
   - Botão para calcular orçamento

2. **Tela de Detalhes**
   - Mostra valor da diária, quantidade de dias e total
   - Botões para voltar ou confirmar

3. **Tela de Confirmação**
   - Mensagem personalizada com valor total
   - Botões para ver lista de orçamentos ou iniciar nova reserva

4. **Tela de Lista de Orçamentos**
   - Lista com todos os orçamentos salvos localmente
   - Botão para excluir cada item
   - Retorno à tela anterior

---

## 🧪 Funcionalidades

- [x] Cálculo de orçamento com base na diária e número de dias
- [x] Armazenamento local usando `@ionic/storage-angular`
- [x] Persistência entre sessões
- [x] Exclusão individual de orçamentos
- [x] Navegação entre múltiplas telas
- [x] Interface mobile amigável

---

## 🛠 Tecnologias Utilizadas

- **[Ionic Framework](https://ionicframework.com/)** v7+
- **Angular** v14+
- **@ionic/storage-angular**
- **TypeScript**
- HTML + CSS (com componentes do Ionic)

---

## 🚀 Como Executar Localmente

### 📦 Pré-requisitos

- Node.js (v18+)
- Ionic CLI (`npm install -g @ionic/cli`)
- Git (opcional)

### ⚙️ Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/ionic-reserva-app.git

# Acesse a pasta do projeto
cd ionic-reserva-app

# Instale as dependências
npm install

# Execute o app no navegador
ionic serve
```
---
## ✨ Autor

**Professor Alex Resende**  
  
🔗 [LinkedIn](https://linkedin.com/in/alexsanderresende)  
💻 [GitHub Professor Alex Sander](https://github.com/profalexresende)

