<goal>
  Garantir que, ao clicar ou acionar pelo teclado o ícone de um estabelecimento no mapa do vetPerto, o modal de detalhes correspondente seja aberto imediatamente, sem exigir seleção adicional ou interação intermediária.
</goal>

<role>
  Engenheiro de Software Fullstack especializado em JavaScript Vanilla, HTML5 semântico, CSS3 moderno, acessibilidade e integração com Google Maps JavaScript API.
</role>

<context>
  O vetPerto é uma aplicação web estática para localizar clínicas veterinárias, petshops e serviços de banho & tosa em Fortaleza - CE.
  Os estabelecimentos de `places.js` são representados no Google Maps por `AdvancedMarkerElement` cujo conteúdo é um botão `.map-pin`. O modal `#place-details-modal` apresenta informações, disponibilidade, serviços, preços, produtos, avaliações, favoritos e ações de agendamento.
  Atualmente, o listener do pin chama `selectPlace()` com rolagem e movimentação do mapa antes de chamar `openPlaceDetails()`. O comportamento deve ser explícito e previsível: uma única ativação do ícone precisa abrir imediatamente o modal do estabelecimento correto, mantendo a seleção sincronizada sem depender da conclusão de rolagens, animações ou reposicionamentos.
</context>

<instructions>
  1. Antes de implementar, analise:
     - As diretrizes de usabilidade em `docs\spec\heuristics\nilsen.md`.
     - As diretrizes de qualidade em `docs\spec\architecture\clean_code.md`.
     - A integração descrita em `docs\spec\maps\google_maps.md`.
     - A estrutura atual de `index.html`, `styles.css`, `script.js`, `favorites.js`, `appointments.js` e `places.js`.
     - As funções `initGoogleMap()`, `selectPlace()`, `openPlaceDetails()` e `closePlaceDetails()`.

  2. Refatore o evento de ativação de cada `.map-pin` para executar um fluxo único e coeso:
     - Resolver o estabelecimento pelo ID associado ao pin.
     - Abrir `#place-details-modal` imediatamente na mesma interação.
     - Sincronizar, sem bloquear a abertura, o pin selecionado e o card correspondente.
     - Não aguardar `scrollIntoView`, animações, `panTo`, alteração de zoom ou qualquer operação assíncrona para mostrar o modal.
     - Não exigir primeiro selecionar o pin e depois clicar novamente.

  3. Preserve a relação correta entre pin e estabelecimento:
     - Cada pin deve abrir exclusivamente os dados do seu próprio `place.id`.
     - Título, categoria, nota, endereço, disponibilidade, favorito, serviços, produtos, horários e avaliações devem ser atualizados antes de tornar o modal interativo.
     - Não reutilizar conteúdo visual do estabelecimento aberto anteriormente.
     - Se o ID não existir na fonte de dados, não abrir um modal vazio e registrar apenas uma mensagem técnica segura no console.

  4. Mantenha a seleção sincronizada sem efeitos visuais desnecessários:
     - Aplicar `.selected` ao pin ativado e `.is-selected` ao card correspondente.
     - Não tornar visível um card ocultado pelos filtros apenas porque seu pin foi acionado.
     - Evitar rolagem automática da lista de cards quando a origem da ação for o mapa.
     - Preservar centro e zoom atuais por padrão; qualquer centralização visual deve ocorrer sem atrasar o modal e somente se não prejudicar o controle do usuário.
     - Manter o comportamento correto com o mapa expandido em tela cheia.

  5. Garanta operação equivalente por mouse, toque e teclado:
     - Manter o conteúdo do `AdvancedMarkerElement` como um botão real com `type="button"`.
     - Permitir ativação por clique, toque, `Enter` e barra de espaço usando o comportamento nativo do botão.
     - Manter nome acessível com o nome do estabelecimento e informação útil, sem depender apenas do ícone ou da cor.
     - Preservar foco visível no pin.
     - Não registrar listeners duplicados ao reinicializar ou atualizar o mapa.

  6. Garanta o gerenciamento correto do modal:
     - Passar o próprio pin como acionador para `openPlaceDetails()`.
     - Ao fechar pelo botão, backdrop ou `Esc`, devolver o foco ao pin quando ele continuar conectado e visível.
     - Se o pin deixar de existir ou ficar oculto por uma mudança de filtro enquanto o modal estiver aberto, devolver o foco a um destino seguro na tela inicial.
     - Evitar abrir duas instâncias, dois backdrops ou acumular handlers ao clicar rapidamente.
     - Se outro pin for ativado enquanto o modal estiver aberto, atualizar a instância existente para o novo estabelecimento.

  7. Preserve as integrações associadas ao estabelecimento aberto:
     - Estado persistido do coração e página de favoritos.
     - Disponibilidade operacional e horários estruturados.
     - Botões de serviço e fluxo de agendamento.
     - Ações de contato, rota e compartilhamento.
     - Filtros, contador, busca, marcadores e localização do usuário.

  8. Mantenha um comportamento seguro nos estados alternativos do mapa:
     - Com Google Maps carregado, os pins visíveis devem abrir o modal imediatamente.
     - Pins removidos pelo filtro não devem permanecer interativos no mapa.
     - No estado de carregamento ou fallback, não simular pins inexistentes nem produzir erros no console.
     - Uma falha da API não deve quebrar a abertura de detalhes por cards ou pela página de favoritos.

  9. Valide a implementação e corrija regressões. Considere concluído somente quando:
     - Um único clique em cada pin testado abrir o modal do estabelecimento correto.
     - `Enter` e barra de espaço produzirem o mesmo resultado.
     - O modal ficar visível sem aguardar rolagem, centralização ou mudança de zoom.
     - O pin e o card corretos receberem o estado selecionado.
     - O card não for rolado automaticamente quando o acionador for um pin.
     - Fechar o modal devolver o foco ao pin acionador.
     - O comportamento funcionar com mapa normal e expandido, em mobile e desktop.
     - Cliques rápidos não criarem múltiplos modais, backdrops ou listeners.
     - Favoritos, disponibilidade, agendamentos, filtros, busca, mapa e geolocalização continuarem funcionando.
     - Não houver erros no console nem conteúdo residual de outro estabelecimento.
</instructions>

<rules>
  - Seguir rigorosamente as 10 Heurísticas de Nielsen descritas em `docs\spec\heuristics\nilsen.md`, com ênfase em correspondência entre ação e resultado, visibilidade do status, consistência e controle do usuário.
  - Seguir as diretrizes de Clean Code descritas em `docs\spec\architecture\clean_code.md`, mantendo o handler pequeno, coeso e sem duplicação de responsabilidades.
  - Preservar a natureza 100% estática do projeto: JavaScript Vanilla, HTML5 e CSS3, sem frameworks, backend, bundlers ou novas dependências.
  - Continuar usando `AdvancedMarkerElement`; não substituir por APIs de marcador descontinuadas.
  - Não usar temporizadores artificiais para abrir o modal.
  - Não exigir duplo clique, gesto exclusivo ou interação adicional para acessar os detalhes.
  - Manter a identidade visual lúdica, acolhedora e temática para pets, reutilizando os padrões existentes.
  - Manter abordagem mobile-first, foco visível, nomes acessíveis e área de toque adequada.
  - Não quebrar as integrações existentes de busca, filtros, disponibilidade, favoritos, agendamentos, expansão do mapa, marcadores e geolocalização.
</rules>
