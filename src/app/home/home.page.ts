import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

}

/*

1. **Importações e Configurações Iniciais**:
   - As primeiras linhas do código importam as classes `NgModule` e `RouterModule` do pacote `@angular/core` e `@angular/router`, respectivamente.
   - Esses módulos são essenciais para configurar o roteamento em um aplicativo Angular.

2. **Configuração das Rotas**:
   - A constante `routes` é um array de objetos de rota.
   - Neste caso, há apenas uma rota definida:
     - O caminho vazio (`''`) corresponde à rota padrão para a `HomePage`.
     - Quando o usuário navega para a URL raiz (por exemplo, `https://seu-app.com/`), o componente `HomePage` será exibido.

3. **Configuração do NgModule**:
   - O `HomePageRoutingModule` é um módulo Angular específico para o roteamento relacionado à `HomePage`.
   - Dentro do array `imports`, incluímos o `RouterModule.forChild(routes)`. Isso registra as rotas definidas para este módulo.
   - O array `exports` exporta o módulo de roteamento configurado para que ele possa ser usado em outras partes do aplicativo.

O roteamento no Angular permite navegar entre diferentes visualizações (componentes) com base na URL. Ao definir rotas, você cria uma experiência de usuário contínua à medida que os usuários se movem pelas diferentes partes do seu aplicativo.

*/
