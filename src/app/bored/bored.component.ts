import { Component, OnDestroy } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { BoredService } from "./bored.service";
import { HttpClient } from "@angular/common/http";
import { BoredResponse } from "./bored.model";
import { Subscription } from "rxjs";

@Component({
    templateUrl: './bored.component.html'
})
export class BoredComponent implements OnDestroy {
    form: FormGroup = new FormGroup({
        type: new FormControl('')
    })
    types = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"];
    activity = '';
    private subscriptions = new Subscription();

    constructor(private boredService: BoredService) { }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    onSubmit() {
        // const type = this.form.value.type;
        const { type } = this.form.value;

        const subscription = this.boredService.getActivity(type)
            .subscribe(
                (activity) => {
                    this.activity = activity;
                },
                (error) => {
                    console.error(error);
                    alert('Error on load response from Bored API')
                }
            );
        this.subscriptions.add(subscription);
    }

}

/*

1. **Definição do Componente**:
   - Este código TypeScript define um componente Angular chamado `BoredComponent`.
   - O decorador `@Component` especifica que este componente usará um modelo definido em um arquivo HTML externo (`bored.component.html`).

2. **Formulário e `FormControl`**:
   - O componente possui um formulário que permite aos usuários selecionar um tipo de atividade.
   - O formulário é criado usando `FormGroup` e contém um único controle chamado `type`.
   - O controle `type` é um `FormControl` que corresponde ao tipo de atividade selecionado pelo usuário.

3. **Tipos de Atividade**:
   - O array `types` contém tipos de atividades predefinidos, como "educação", "recreação", "social", etc.
   - Esses tipos provavelmente correspondem a diferentes categorias de atividades das quais o usuário pode escolher.

4. **Hook de Ciclo de Vida: `ngOnDestroy`**:
   - O método `ngOnDestroy` é um gancho de ciclo de vida que é chamado quando o componente é destruído (por exemplo, ao navegar para outra página).
   - Neste caso, ele cancela a inscrição de qualquer assinatura ativa para evitar vazamentos de memória.

5. **Envio do Formulário: `onSubmit`**:
   - Quando o usuário envia o formulário (por exemplo, clicando em um botão), o método `onSubmit` é chamado.
   - Ele extrai o `type` selecionado do formulário.
   - O método `boredService.getActivity(type)` é chamado para recuperar uma atividade com base no tipo selecionado.
   - Se bem-sucedido, a atividade recuperada é atribuída à propriedade `activity`.
   - Se houver um erro, é exibido um alerta.

6. **Injeção de Dependência**:
   - O construtor do componente injeta uma instância do serviço `BoredService`.
   - O `BoredService` provavelmente lida com a comunicação com uma API externa (como a Bored API) para buscar dados de atividades.

Lembre-se de que esta é apenas uma visão geral de alto nível, e o comportamento real do `BoredComponent` depende dos detalhes de implementação dentro do `BoredService` e do modelo associado (`bored.component.html`).

*/
