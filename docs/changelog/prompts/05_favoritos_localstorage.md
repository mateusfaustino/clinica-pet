<goal>
  Implementar no vetPerto a persistência dos estabelecimentos favoritos do cliente no `localStorage`, mantendo o estado dos corações sincronizado em toda a aplicação e disponibilizando uma visão dos locais salvos.
</goal>

<role>
  Engenheiro de Software Fullstack especializado em JavaScript Vanilla, HTML5 semântico, CSS3 moderno, persistência no navegador e interfaces mobile-first acessíveis.
</role>

<context>
  O vetPerto é uma aplicação web estática para localizar clínicas veterinárias, petshops e serviços de banho & tosa em Fortaleza - CE.
  Os estabelecimentos são carregados de `places.js` e exibidos em cards e no modal de detalhes. Cada card possui um botão de coração `.favorite`, e o modal possui o botão `#modal-favorite-btn`.
  Atualmente, `toggleFavorite()` alterna apenas o estado visual do coração durante a sessão. Ao atualizar ou reabrir a página, a seleção é perdida. A navegação inferior também possui o item "Favoritos", mas ainda não oferece uma visão funcional dos estabelecimentos salvos.
  O cliente deve poder adicionar ou remover um estabelecimento dos favoritos em qualquer ponto da interface, manter essa escolha no mesmo navegador e consultar os locais favoritos em uma página interna da aplicação.
</context>

<instructions>
  1. Antes de implementar, analise:
     - As diretrizes de usabilidade em `docs\spec\heuristics\nilsen.md`.
     - As diretrizes de qualidade em `docs\spec\architecture\clean_code.md`.
     - A estrutura atual de `index.html`, `styles.css`, `script.js`, `appointments.js` e `places.js`.
     - A implementação existente de `toggleFavorite()`, a renderização dos cards, o modal de detalhes e a navegação entre Início e Agendamentos.

  2. Implemente uma camada única e versionada de persistência de favoritos:
     - Usar uma chave explícita, por exemplo `vetperto:favorites:v1`.
     - Persistir somente os identificadores dos estabelecimentos, evitando duplicar os objetos completos de `places.js`.
     - Representar o conjunto sem IDs duplicados e manter uma ordenação determinística.
     - Validar o conteúdo lido do storage, aceitando apenas IDs existentes em `window.PLACES_DATA`.
     - Ignorar valores inválidos ou referências inexistentes sem interromper a aplicação.
     - Tratar JSON corrompido, indisponibilidade e quota excedida do `localStorage` com recuperação segura e mensagem amigável.
     - Não armazenar HTML, credenciais, dados pessoais ou outras informações sensíveis.

  3. Faça o coração refletir o estado persistido desde a primeira renderização:
     - Ao iniciar a aplicação, carregar os IDs favoritos antes de definir `aria-pressed`, ícone, classe e nome acessível de cada botão.
     - Usar coração preenchido para favorito e contorno para não favorito, mantendo também texto acessível que comunique "Adicionar aos favoritos" ou "Remover dos favoritos".
     - Não depender somente de cor ou do formato do ícone para indicar o estado.
     - Evitar uma mudança visual tardia perceptível após os cards já estarem na tela.

  4. Refatore `toggleFavorite()` para atualizar a fonte de verdade persistida:
     - Ao favoritar, adicionar o ID apenas se ainda não existir.
     - Ao desfavoritar, remover o ID correspondente.
     - Persistir a coleção atualizada antes de comunicar sucesso.
     - Se a escrita falhar, manter ou restaurar o estado anterior e informar que a alteração não pôde ser salva.
     - Prevenir duplicidade em cliques rápidos e não registrar listeners mais de uma vez.
     - Exibir feedback por toast com o nome do estabelecimento e a ação concluída.

  5. Sincronize todas as representações do mesmo estabelecimento:
     - Coração do card na página inicial.
     - Coração do modal de detalhes.
     - Card correspondente na página de favoritos.
     - Qualquer card recriado após busca, filtro, atualização temporal ou retorno de outra visão.
     - Ao abrir o modal, obter o estado da coleção persistida, sem depender do atributo visual de outro botão.

  6. Torne funcional o item "Favoritos" da navegação inferior:
     - Criar uma visão interna "Meus favoritos", seguindo o mesmo padrão de navegação usado pela página de agendamentos.
     - Atualizar item ativo e `aria-current` ao alternar entre Início, Favoritos e Agendamentos.
     - Preservar os estados da página inicial ao mudar de visão.
     - Gerenciar o foco, direcionando-o ao título da visão aberta.
     - Exibir contador e cards dos estabelecimentos cujos IDs estão salvos, reutilizando dados de `places.js`.

  7. Nos cards da página de favoritos, exiba informações úteis para retomar a tarefa:
     - Nome, categoria, nota, distância, bairro e disponibilidade operacional atual.
     - Ação "Ver detalhes" integrada ao modal já existente.
     - Coração preenchido com ação acessível para remover o estabelecimento.
     - Ao remover um favorito nessa página, atualizar imediatamente contador, lista, card inicial e modal, sem recarregar a página.
     - Não alterar os filtros ou a seleção da página inicial ao abrir detalhes a partir dos favoritos.

  8. Implemente um estado vazio útil:
     - Quando não houver favoritos, mostrar mensagem como "Você ainda não salvou nenhum lugar".
     - Explicar brevemente que o coração salva o estabelecimento neste navegador.
     - Oferecer uma ação "Encontrar estabelecimentos" que retorne à página inicial.
     - Não exibir uma área de lista vazia ou um contador inconsistente.

  9. Considere sincronização entre abas do mesmo navegador:
     - Escutar o evento `storage` apenas para a chave de favoritos.
     - Revalidar os dados recebidos e atualizar corações, contador e página de favoritos sem recarregar.
     - Não disparar toasts repetitivos para alterações originadas em outra aba.
     - Registrar o listener global uma única vez.

  10. Organize o código em funções pequenas e testáveis para:
      - Ler e validar favoritos.
      - Persistir a coleção.
      - Consultar se um estabelecimento está salvo.
      - Adicionar ou remover um ID.
      - Sincronizar botões e modal.
      - Renderizar a página e seu estado vazio.
      - Controlar a navegação entre as visões.

  11. Valide a implementação e corrija regressões. Considere concluído somente quando:
      - Favoritar um card preencher o coração no card e no modal correspondente.
      - Atualizar ou reabrir a página preservar todos os favoritos.
      - Desfavoritar remover o ID do storage e atualizar todas as representações.
      - Clicar rapidamente não gerar IDs duplicados.
      - A página de favoritos exibir exatamente os estabelecimentos persistidos.
      - Remover o último favorito apresentar imediatamente o estado vazio.
      - Conteúdo inválido ou corrompido no storage não quebrar a aplicação.
      - Falha ao salvar não produzir feedback falso de sucesso.
      - A sincronização entre abas atualizar a interface sem criar loops ou toasts repetidos.
      - O fluxo funcionar em mobile, desktop e apenas por teclado.
      - Busca, filtros, disponibilidade, detalhes, agendamentos, mapa, expansão do mapa, marcadores e geolocalização continuarem funcionando.
      - Não houver erros no console, listeners duplicados ou renderizações cumulativas.
</instructions>

<rules>
  - Seguir rigorosamente as 10 Heurísticas de Nielsen descritas em `docs\spec\heuristics\nilsen.md`, com ênfase em visibilidade do estado, consistência, controle do usuário e prevenção de erros.
  - Seguir as diretrizes de Clean Code descritas em `docs\spec\architecture\clean_code.md`, mantendo uma única fonte de verdade para os favoritos e funções com responsabilidades claras.
  - Preservar a natureza 100% estática do projeto: JavaScript Vanilla, HTML5 e CSS3, sem frameworks, backend, bundlers ou novas dependências.
  - Usar `localStorage` apenas para os IDs dos estabelecimentos favoritos.
  - Não associar a persistência local a uma conta remota nem afirmar que os favoritos serão sincronizados entre dispositivos.
  - Comunicar que os favoritos ficam salvos neste navegador quando essa limitação for relevante.
  - Manter a identidade visual lúdica, acolhedora e temática para pets, reutilizando tokens, fontes e padrões existentes em `styles.css`.
  - Manter abordagem mobile-first, foco visível, nomes acessíveis e áreas de toque mínimas de 44 x 44 pixels.
  - Não quebrar as integrações existentes de busca, filtros, disponibilidade, detalhes, agendamentos, mapa, expansão do mapa, marcadores e geolocalização.
</rules>
