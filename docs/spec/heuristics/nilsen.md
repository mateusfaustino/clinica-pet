# Diretrizes de UX — 10 Heurísticas de Nielsen no Oportuniza

## 1. Objetivo e escopo

Este é o documento único de referência para aplicar as 10 Heurísticas de Nielsen no Oportuniza. Ele deve orientar toda criação, alteração e revisão de interfaces dos portais de alunos, empresas e administração.

As regras foram adaptadas ao sistema atual:

- Laravel 10 e PHP;
- Livewire 3 e Blade como tecnologias principais de interface;
- Bootstrap, CSS existente e JavaScript pontual;
- monolito modular orientado por DDD;
- autenticação e autorização com Spatie Permission;
- componentes compartilhados, especialmente `x-list.*`, `x-admin.*`, `x-loading` e layouts existentes.

Antes de criar um componente, procure um equivalente no projeto. Reutilize os componentes, estilos e padrões existentes. Regras de negócio, consultas e autorização não devem ser implementadas nas views.

## 2. Princípios transversais obrigatórios

Toda interface deve:

1. Informar onde o usuário está, o que está acontecendo e qual foi o resultado da ação.
2. Usar a linguagem do domínio: aluno, empresa, vaga, candidatura, unidade, curso, perfil e permissão.
3. Permitir cancelar ou sair de fluxos sem efeitos colaterais inesperados.
4. Ser consistente com páginas equivalentes do Oportuniza.
5. Prevenir dados inválidos e ações acidentais no frontend e no backend.
6. Exibir opções e contexto para não exigir memorização.
7. Atender iniciantes sem impedir a eficiência de usuários frequentes.
8. Exibir apenas informações relevantes para a tarefa atual.
9. Explicar erros em linguagem humana e indicar como corrigi-los.
10. Oferecer ajuda contextual quando a interface não for autoexplicativa.

A interface também deve ser acessível:

- HTML semântico e ordem lógica de leitura;
- operação por teclado e foco visível;
- `label` associado a cada campo;
- nome acessível para botões e ícones;
- contraste suficiente;
- estados que não dependam apenas de cor;
- `aria-live`, `role="status"` ou `role="alert"` quando apropriado;
- respeito a `prefers-reduced-motion` em animações.

## 3. Heurística 1 — Visibilidade do status do sistema

O sistema deve responder rapidamente a cada ação e nunca deixar o usuário em dúvida sobre o estado atual.

### Localização

- Exiba título de página coerente com o menu e a rota.
- Destaque o item ativo no menu lateral ou superior.
- Use `x-admin.breadcrumb` em páginas internas quando houver hierarquia relevante.
- Preserve filtros, ordenação e paginação na URL por meio de propriedades `#[Url]` do Livewire quando isso facilitar retorno e compartilhamento.

### Feedback imediato

- Toda ação de salvar, enviar, importar, exportar, ativar ou desativar deve apresentar feedback imediato.
- Durante requisições Livewire, desabilite o acionador com `wire:loading.attr="disabled"` e delimite `wire:target`.
- Use `x-loading` nas operações que bloqueiam a continuidade da tarefa, com descrição específica, como “Salvando alterações...” ou “Exportando alunos...”.
- Não use “Carregando...” quando for possível informar a operação real.
- Evite cliques duplicados e submissões concorrentes.

### Resultado e progresso

- Após sucesso, mostre mensagem objetiva e mantenha-a visível tempo suficiente para leitura.
- Após falha, preserve os dados digitados e indique a correção necessária.
- Em operações curtas e sem progresso mensurável, use indicador indeterminado.
- Em tarefas longas ou em lote, mostre progresso mensurável, quantidade processada ou estado atual quando tecnicamente disponível.
- Em tabelas, apresente total encontrado, filtros ativos, seleção atual, paginação e estado vazio.
- Mudanças de estado, como conta ativa/inativa ou vaga aberta/encerrada, devem ser explicitadas por texto e tratamento visual.

### Segurança da informação

- Não exponha SQL, stack traces, nomes de classes, IDs internos desnecessários ou detalhes de infraestrutura.
- Registre detalhes técnicos nos logs e apresente ao usuário somente informações úteis para decidir o próximo passo.

## 4. Heurística 2 — Correspondência entre o sistema e o mundo real

A interface deve falar a linguagem dos usuários do SENAI e seguir uma ordem natural de trabalho.

### Linguagem

- Prefira “Buscar alunos” a “Consultar registros de usuários”.
- Prefira “Não foi possível salvar” a mensagens de exceção ou banco de dados.
- Explique siglas menos conhecidas na primeira ocorrência. Siglas consolidadas no contexto, como CPF, PCD e SENAI, podem ser usadas diretamente quando o público as reconhece.
- Use português brasileiro, tom profissional, direto e respeitoso.
- Nunca culpe o usuário pelo erro.

### Formatos e convenções

- Exiba datas como `dd/mm/aaaa` e data/hora como `dd/mm/aaaa HH:mm`.
- Exiba CPF, CNPJ, CEP e telefone com máscara; persista os valores normalizados quando essa for a regra do domínio.
- Valores monetários devem seguir o formato brasileiro.
- Use rótulos do negócio, inclusive o `display_name` de roles, com o identificador técnico apenas como fallback.
- Organize formulários na sequência natural da tarefa e agrupe informações relacionadas.

### Semântica visual

- Use vermelho para erro, perigo e ações destrutivas; verde para sucesso ou estado positivo; azul para a ação primária padrão.
- Não dependa apenas da cor: inclua texto, ícone ou rótulo de estado.
- Use ícones convencionais: lupa para busca, lápis para edição, lixeira para exclusão, envelope para e-mail e “X” para fechar.
- Ícones de ação devem ter `aria-label` e `title`; se houver ambiguidade, acompanhe-os de texto.

## 5. Heurística 3 — Controle e liberdade do usuário

O usuário deve poder interromper tarefas, corrigir escolhas e sair de estados indesejados.

### Saídas claras

- Formulários de criação e edição devem ter ação “Cancelar” ou “Voltar” além da ação primária.
- “Cancelar” não pode salvar alterações.
- Modais e painéis laterais devem ter botão visível de fechar, fechar com `Esc` quando adequado e permitir fechamento pelo overlay somente quando isso não causar perda perigosa.
- Preserve o comportamento normal do botão Voltar do navegador.
- Ao fechar filtros sem aplicar, mantenha os filtros anteriormente ativos.

### Reversibilidade

- Prefira desativação, arquivamento ou exclusão lógica quando o domínio permitir recuperação.
- Para ações reversíveis, apresente “Desfazer” quando viável.
- Não implemente exclusão permanente como padrão para entidades importantes.
- Se houver alterações não salvas relevantes, avise antes de abandonar a página.

### Modais

- O foco deve entrar no modal, permanecer nele durante a interação e retornar ao acionador ao fechar, sempre que tecnicamente aplicável.
- Use `role="dialog"`, `aria-modal="true"` e um título acessível.
- O modal deve ficar acima do overlay e dos painéis laterais.
- A ordem de ações deve permanecer consistente: ação neutra primeiro e confirmação por último.

## 6. Heurística 4 — Consistência e padrões

Elementos equivalentes devem parecer e funcionar da mesma forma em todo o Oportuniza.

### Componentes e layout

- Reutilize `x-list.page`, `x-list.action-bar`, `x-list.table`, `x-list.mobile-grid`, `x-list.filter-modal`, `x-list.side-panel`, `x-list.confirmation-modal`, `x-admin.input` e `x-loading` quando aplicáveis.
- Não replique CSS de componentes compartilhados dentro de páginas sem necessidade comprovada.
- Listagens administrativas devem manter a sequência: barra de ações, status/filtros ativos, tabela desktop, cards mobile, paginação, modais e prévia.
- Cabeçalhos e células de tabelas devem possuir a mesma quantidade e ordem. Atualize também `colspan`, cards mobile, prévia e exportação ao adicionar colunas.
- Use o mesmo nome para a mesma ação: “Salvar alterações”, “Cancelar”, “Editar”, “Exportar”, “Ativar usuário” e “Desativar usuário”.

### Comportamento

- Links navegam; botões executam ações.
- A ação primária deve ter estilo primário; ações destrutivas devem usar variante de perigo.
- Campos imutáveis devem usar o padrão visual de somente leitura, não parecer editáveis e possuir indicação acessível de `aria-readonly`.
- Campos obrigatórios e mensagens de validação devem seguir o mesmo padrão em todos os formulários.
- Máscaras e validações do mesmo dado devem ser idênticas entre cadastro, edição, filtro e exibição.

### Stack atual

- Não introduza React, Inertia, Tailwind ou outra biblioteca de UI apenas para implementar uma tela.
- Use Livewire para estado e interação de páginas reativas, Blade para apresentação e Application Services para casos de uso.
- Views não devem executar queries nem conter regras de autorização além das diretivas de apresentação, como `@can`.

## 7. Heurística 5 — Prevenção de erros

É melhor impedir o erro do que apenas apresentar uma boa mensagem depois dele.

### Entradas e validação

- Valide sempre no backend, mesmo quando houver validação ou máscara no navegador.
- Use regras Laravel, Form Requests ou validação do componente Livewire conforme a camada de apresentação.
- Restrinja valores a listas permitidas; não confie em IDs, campos bloqueados ou opções enviados pelo navegador.
- Normalize CPF, CNPJ, CEP e telefone antes de persistir.
- Use tipo de input, `inputmode`, `autocomplete`, limites e máscaras apropriados.
- Mantenha `label` visível; placeholder é apenas exemplo, nunca substituto do rótulo.
- Defina valores padrão seguros e não selecione automaticamente opções perigosas.

### Ações críticas

- Antes de excluir, desativar, revogar acesso ou alterar permissões, mostre confirmação com o objeto afetado e as consequências.
- O texto do botão deve nomear a ação, evitando “Sim” ou “OK”.
- Use fricção adicional, como digitação do nome, apenas para ações permanentes e de alto impacto.
- Verifique autorização no servidor imediatamente antes da mutação.
- Use transação para operações que precisam ser atômicas.
- Proteja formulários contra CSRF, enumeração indevida, mass assignment e alterações de campos imutáveis.

### Concorrência e duplicidade

- Desabilite o botão durante o processamento.
- Torne operações idempotentes quando repetição puder gerar registros duplicados ou e-mails múltiplos.
- Ao editar dados potencialmente concorrentes, detecte ou comunique conflitos quando o risco justificar.

## 8. Heurística 6 — Reconhecimento em vez de memorização

O sistema deve mostrar opções, contexto e instruções necessárias no momento do uso.

- Menus devem conter rótulos textuais; não use navegação formada apenas por ícones ambíguos.
- Exiba filtros ativos como chips removíveis.
- Em selects, carregue nomes reconhecíveis, não IDs técnicos.
- Mostre no modal de confirmação o usuário, vaga, empresa ou registro afetado.
- Mantenha `label`, texto de ajuda e exemplo de formato próximos ao campo.
- Pré-preencha dados já conhecidos, sem tornar silenciosamente editável aquilo que vem do SGE ou de outra fonte oficial.
- Em páginas de edição, exiba campos imutáveis necessários para contextualizar o registro.
- Use breadcrumbs, título e subtítulo para preservar contexto entre lista, prévia, detalhe e edição.
- Em estados vazios, explique o motivo provável e ofereça ação relevante, como limpar filtros.
- Use tooltips apenas como complemento; informações essenciais devem permanecer visíveis.

Não adicione históricos, sugestões ou atalhos sem necessidade real do fluxo. Reconhecimento deve reduzir esforço, não criar ruído.

## 9. Heurística 7 — Flexibilidade e eficiência de uso

A interface deve ser simples para iniciantes e eficiente para usuários administrativos frequentes.

### Listagens e tarefas recorrentes

- Ofereça busca, filtros, ordenação, paginação e quantidade por página quando o volume justificar.
- Preserve filtros relevantes na URL.
- Permita seleção e ações em lote somente quando houver caso de uso seguro e autorização adequada.
- Exportações devem respeitar filtros e seleção, deixando claro o escopo exportado.
- Evite recarregar a página inteira quando uma atualização Livewire localizada for suficiente.
- Consultas devem evitar N+1, duplicação de linhas e carregamento de colunas desnecessárias.

### Aceleradores

- Atalhos de teclado podem ser adicionados a ações frequentes, desde que sejam descobríveis, não conflitem com o navegador e tenham alternativa visual.
- `Esc` pode fechar modal/painel; atalhos de salvamento só devem existir se não provocarem submissão acidental.
- Não dependa de gestos, duplo clique ou menu de contexto para ações essenciais.

### Divulgação progressiva

- Mantenha ações frequentes visíveis e agrupe opções avançadas em filtros, menus ou seções expansíveis.
- Mostre controles conforme a permissão e o contexto do registro.
- Não esconda uma ação crítica em menus difíceis de descobrir.

## 10. Heurística 8 — Design estético e minimalista

Cada elemento deve contribuir para a tarefa. Minimalismo significa precisão, não ausência de informação.

- Defina uma ação primária clara por contexto.
- Use hierarquia visual com títulos, agrupamentos, contraste e espaçamento consistente.
- Evite textos introdutórios redundantes, bordas excessivas, ícones decorativos e múltiplas cores sem função semântica.
- Não repita a mesma informação em várias áreas visíveis da tela sem benefício.
- Detalhes secundários devem ficar em prévias, painéis ou seções próprias.
- Tabelas devem conter dados úteis para comparação; informações extensas pertencem ao detalhe.
- Em telas pequenas, use cards ou layout responsivo com os campos essenciais, sem depender de rolagem horizontal como única solução.
- Estados vazios devem ser simples, informativos e acionáveis.
- Mantenha a identidade visual do Oportuniza e os componentes já adotados.
- Envie para a view apenas os dados necessários à renderização atual.

## 11. Heurística 9 — Reconhecer, diagnosticar e recuperar-se de erros

Erros devem ser perceptíveis, compreensíveis e recuperáveis.

### Apresentação

- Exiba erros de campo junto ao respectivo input e um resumo no topo apenas quando ajudar em formulários extensos.
- Use vermelho, ícone ou rótulo e texto; nunca somente cor.
- Use `role="alert"` para falhas que exigem atenção imediata.
- Mova o foco para o primeiro erro ou para o resumo quando uma submissão falhar, se isso melhorar a navegação por teclado.

### Conteúdo

Uma boa mensagem informa:

1. o que não foi concluído;
2. por que, quando essa informação for segura e conhecida;
3. como corrigir ou tentar novamente.

Exemplo: “Não foi possível salvar o telefone. Informe 10 ou 11 números.”

- Não exiba “Erro 500”, stack trace, SQL ou mensagem bruta de exceção ao usuário final.
- Não use mensagens vagas como “Entrada inválida” quando o campo e a regra são conhecidos.
- Não afirme sucesso se o caso de uso retornou falha parcial.
- Preserve os valores válidos já preenchidos.
- Para falha temporária, forneça “Tentar novamente”.
- Para acesso negado, explique a limitação e ofereça retorno seguro, sem revelar dados protegidos.
- Páginas 404 e estados sem resultado devem oferecer caminhos úteis para voltar, limpar filtros ou acessar a área inicial.

## 12. Heurística 10 — Ajuda e documentação

O sistema deve ser utilizável sem manual sempre que possível, mas oferecer ajuda no contexto quando a tarefa exigir conhecimento específico.

### Ajuda contextual

- Use textos curtos junto a campos de formato incomum, ações de alto impacto ou regras de negócio não evidentes.
- Tooltips devem explicar ícones ou termos, funcionar com foco e não conter informação indispensável.
- Modais de confirmação devem explicar consequências, não apenas pedir confirmação.
- Mensagens de erro devem incluir a orientação necessária para recuperação.
- Onboarding e avisos de novidades devem ser curtos, dispensáveis e acessíveis novamente por um local previsível.

### Documentação extensa

Quando uma funcionalidade exigir documentação:

- organize por tarefa do usuário, não pela estrutura técnica do sistema;
- use título claro, passos numerados e exemplos reais do Oportuniza;
- mantenha o conteúdo pesquisável e dividido por aluno, empresa e administração;
- inclua capturas de tela somente quando agregarem compreensão, com texto alternativo;
- informe pré-requisitos e permissões necessárias em linguagem de negócio;
- mantenha a documentação sincronizada com a interface.

Ajuda não deve compensar um fluxo confuso. Primeiro simplifique a interface; depois documente o que ainda exigir orientação.

## 13. Critérios para revisão de uma alteração de interface

Antes de considerar uma implementação concluída, verifique:

- [ ] A página informa localização, processamento, sucesso, erro e estado vazio?
- [ ] O texto usa linguagem do domínio e formatos brasileiros?
- [ ] Existe forma segura de cancelar, fechar ou voltar?
- [ ] Foram reutilizados componentes e padrões existentes?
- [ ] Cabeçalhos, células, cards, prévia e exportação estão na mesma ordem?
- [ ] Há validação e autorização no backend, além dos auxílios do frontend?
- [ ] Ações destrutivas explicam consequências e exigem confirmação?
- [ ] Campos têm labels persistentes, ajuda contextual e nomes acessíveis?
- [ ] O fluxo funciona com teclado, foco visível e sem depender somente de cor?
- [ ] O loading está limitado à ação correta e impede submissão duplicada?
- [ ] Erros preservam dados e indicam como recuperar?
- [ ] Desktop e mobile exibem as informações essenciais?
- [ ] A interface não expõe detalhes técnicos ou dados sem permissão?
- [ ] Testes cobrem estados relevantes: sucesso, validação, autorização, vazio e falha?
- [ ] A alteração foi comparada visualmente com telas equivalentes do sistema?

## 14. Regra de decisão para a IA

Ao implementar uma interface, a IA deve primeiro inspecionar componentes e telas equivalentes no repositório. Se duas heurísticas entrarem em tensão, priorize nesta ordem:

1. segurança, autorização e prevenção de perda de dados;
2. clareza do estado e possibilidade de recuperação;
3. acessibilidade;
4. consistência com o sistema;
5. eficiência e minimalismo.

Registre detalhes técnicos nos logs, mantenha regras de negócio nos módulos e apresente ao usuário uma experiência clara, previsível e orientada à tarefa.
