<goal>
  Implementar no vetPerto a possibilidade de expandir o mapa para uma visualização em tela cheia e retornar ao layout original sem perder o estado atual da navegação.
</goal>

<role>
  Engenheiro de Software Fullstack especializado em JavaScript Vanilla, HTML5 semântico, CSS3 moderno e integração com Google Maps JavaScript API.
</role>

<context>
  O vetPerto é uma aplicação web estática, mobile-first, para localizar clínicas veterinárias, petshops e serviços de banho & tosa próximos ao usuário em Fortaleza - CE.
  A página principal exibe o Google Maps no elemento `#map`, dentro de `.map-wrapper`, com marcadores interativos, seleção sincronizada de estabelecimentos, filtros e botão de geolocalização. Quando a API não está disponível, o mesmo espaço apresenta um estado de fallback.
  Atualmente, o mapa fica limitado à área definida pelo layout. O usuário deve poder ampliá-lo para ocupar toda a viewport, explorar os estabelecimentos com mais espaço e depois retornar à visualização original, preservando centro, zoom, estabelecimento selecionado e filtros ativos.
</context>

<instructions>
  1. Analise antes da implementação:
     - As diretrizes de usabilidade em `docs\spec\heuristics\nilsen.md`.
     - As diretrizes de qualidade em `docs\spec\architecture\clean_code.md`.
     - A especificação da integração em `docs\spec\maps\google_maps.md`.
     - A estrutura e os comportamentos atuais em `index.html`, `styles.css` e `script.js`.

  2. Adicione à `.map-wrapper` um botão acessível para alternar entre os estados normal e expandido:
     - No estado normal, comunicar visualmente e por nome acessível a ação "Expandir mapa".
     - No estado expandido, transformar o mesmo controle em "Recolher mapa".
     - Usar ícone coerente com cada estado, sem depender apenas dele para comunicar a ação.
     - Informar o estado por meio de `aria-expanded` e associar o controle à região do mapa com `aria-controls`.
     - Posicionar o novo controle sem sobrepor o botão de geolocalização nem os controles nativos do Google Maps.

  3. Implemente o modo expandido ocupando toda a viewport disponível:
     - Manter o mapa acima dos demais elementos da interface com uma camada visual consistente e `z-index` controlado.
     - Considerar `100dvh` com fallback compatível para a altura da viewport em dispositivos móveis.
     - Respeitar áreas seguras do dispositivo (`safe-area-inset-*`) e impedir que os controles fiquem inacessíveis.
     - Bloquear a rolagem da página somente enquanto o mapa estiver expandido e restaurá-la ao recolher.
     - Não utilizar frameworks, bibliotecas adicionais ou abrir uma nova página.

  4. Implemente em `script.js` funções pequenas e coesas para expandir, recolher e sincronizar o estado da interface:
     - Permitir recolher pelo botão e pela tecla `Esc`.
     - Ao expandir, mover o foco para o botão de recolher; ao fechar, devolver o foco ao controle que iniciou a expansão.
     - Atualizar classes CSS e atributos ARIA a partir de uma única fonte de verdade.
     - Após qualquer alteração de tamanho, garantir que o Google Maps recalcule corretamente suas dimensões e mantenha o centro e o zoom anteriores.
     - Preservar marcadores, estabelecimento selecionado, filtros ativos e localização do usuário, sem reinicializar o mapa nem duplicar listeners.
     - Tratar mudanças de orientação e redimensionamento da viewport sem quebrar o estado expandido.

  5. Mantenha o recurso funcional nos diferentes estados do mapa:
     - Google Maps carregado normalmente.
     - Estado de carregamento.
     - Fallback por ausência ou erro da API.
     - Em todos os casos, o usuário deve conseguir expandir e recolher a região sem erros no console.

  6. Garanta responsividade e acessibilidade:
     - Em celulares, o modo expandido deve ocupar a tela e manter controles com área de toque mínima de 44 x 44 pixels.
     - Em desktop, o mapa deve ocupar a viewport e manter uma transição visual discreta.
     - O foco deve permanecer visível, a ordem de tabulação deve ser previsível e o mapa expandido não deve esconder o controle necessário para sair.
     - Respeitar `prefers-reduced-motion`, removendo animações não essenciais quando essa preferência estiver ativa.

  7. Valide manualmente a implementação e corrija eventuais regressões. Considere concluído somente quando:
     - O mapa alternar entre normal e tela cheia pelo botão em mobile e desktop.
     - A tecla `Esc` recolher o mapa e restaurar o foco corretamente.
     - Centro, zoom, seleção, filtros e marcadores forem preservados nas duas transições.
     - O botão de geolocalização e os controles do mapa continuarem utilizáveis.
     - O layout não apresentar rolagem indevida, sobreposição de controles ou conteúdo inacessível.
     - O fallback também puder ser expandido e recolhido.
     - Não houver erros no console nem regressões na busca, nos filtros, nos favoritos e na abertura dos detalhes dos estabelecimentos.
</instructions>

<rules>
  - Seguir rigorosamente as 10 Heurísticas de Nielsen descritas em `docs\spec\heuristics\nilsen.md`, com ênfase em visibilidade do estado do sistema, consistência, controle e liberdade do usuário.
  - Seguir as diretrizes de Clean Code descritas em `docs\spec\architecture\clean_code.md`, usando nomes que revelem intenção, funções coesas e ausência de duplicação ou código morto.
  - Preservar a natureza 100% estática do projeto: JavaScript Vanilla, HTML5 e CSS3, sem frameworks, bundlers ou novas dependências.
  - Manter a identidade visual lúdica, acolhedora e temática para pets, usando os tokens, fontes e padrões visuais já presentes em `styles.css`.
  - Manter abordagem mobile-first e compatibilidade com os breakpoints existentes.
  - Não usar a Fullscreen API do navegador como única solução; a expansão deve funcionar como estado de layout mesmo quando essa API não estiver disponível ou for recusada.
  - Não expor, alterar ou duplicar credenciais do Google Maps.
  - Não quebrar as integrações existentes de busca, filtros, favoritos, detalhes, marcadores e geolocalização.
</rules>
