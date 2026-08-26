<goal>
  Implementar no vetPerto um indicador confiável de quais estabelecimentos estão disponíveis para atendimento no momento e integrar essa disponibilidade aos filtros, aos cards, aos marcadores do mapa e ao contador de resultados.
</goal>

<role>
  Engenheiro de Software Fullstack especializado em JavaScript Vanilla, HTML5 semântico, CSS3 moderno, regras temporais e interfaces mobile-first acessíveis.
</role>

<context>
  O vetPerto é uma aplicação web estática para localizar clínicas veterinárias, petshops e serviços de banho & tosa próximos ao usuário em Fortaleza - CE.
  Os estabelecimentos são carregados de `places.js`, exibidos em cards e representados por marcadores no Google Maps. A busca textual e os filtros de categoria são processados em `script.js`.
  Atualmente existem textos mocados como "Aberto agora", "Aberto até 19h" e "Aberto 24h", mas eles não são derivados de uma regra temporal única e podem divergir do dia ou horário real. O usuário precisa identificar rapidamente quais locais estão atendendo naquele momento e poder restringir os resultados somente a eles.
  Para esta aplicação, "disponível para atendimento agora" significa que a data e a hora atuais, no fuso `America/Fortaleza`, pertencem a um intervalo de funcionamento cadastrado para o estabelecimento. Essa indicação informa disponibilidade operacional e não garante vaga imediata ou dispensa agendamento.
</context>

<instructions>
  1. Antes de implementar, analise:
     - As diretrizes de usabilidade em `docs\spec\heuristics\nilsen.md`.
     - As diretrizes de qualidade em `docs\spec\architecture\clean_code.md`.
     - A estrutura atual de `index.html`, `styles.css`, `script.js` e `places.js`.
     - O funcionamento conjunto da busca, dos filtros de categoria, do contador, dos cards e dos marcadores do mapa.

  2. Estruture em `places.js` os horários de funcionamento de cada estabelecimento em formato próprio para processamento, mantendo os textos amigáveis usados na aba de horários:
     - Representar os sete dias da semana e permitir zero, um ou mais intervalos por dia.
     - Representar explicitamente estabelecimentos com atendimento 24 horas.
     - Suportar locais fechados em determinados dias, intervalos de almoço e jornadas que atravessem a meia-noite.
     - Manter uma única fonte de verdade para o cálculo da disponibilidade; não inferir o estado a partir de textos como `badge` ou `status`.
     - Atualizar ou remover dados textuais duplicados que possam divergir do resultado calculado.

  3. Implemente em `script.js` uma camada temporal pequena, coesa e testável:
     - Calcular a disponibilidade usando o fuso horário `America/Fortaleza`, sem depender do fuso configurado no dispositivo do usuário.
     - Receber a data/hora de referência por parâmetro, usando o momento atual apenas como valor padrão, para permitir testes determinísticos.
     - Tratar corretamente abertura, fechamento, mudança de dia, jornadas após meia-noite e atendimento 24 horas.
     - Retornar um estado semântico, no mínimo: `open`, `closed` ou `unknown`, além de um texto amigável para exibição.
     - Quando possível, informar a próxima mudança relevante, por exemplo: "Atendendo agora · até 19h" ou "Fechado · abre amanhã às 8h".
     - Na ausência de horários válidos, usar "Horário não informado" e nunca classificar o estabelecimento silenciosamente como disponível.

  4. Exiba a disponibilidade de forma consistente nos cards e nos detalhes do estabelecimento:
     - Usar um badge textual como "Atendendo agora", "Fechado no momento" ou "Horário não informado".
     - Diferenciar visualmente os estados sem depender somente de cor, preservando contraste e legibilidade.
     - Atualizar o conteúdo existente que hoje apresenta badges fixos.
     - Disponibilizar a informação para tecnologias assistivas e evitar anúncios repetitivos durante atualizações automáticas.
     - Manter claro que "Atendendo agora" representa o horário operacional, não a confirmação de vaga imediata.

  5. Adicione à área de filtros um controle independente chamado "Atendendo agora":
     - Implementar como botão de alternância ou chip acessível, com `aria-pressed` sincronizado ao estado visual.
     - Permitir combinar o filtro de disponibilidade com categoria e busca textual; por exemplo, "Veterinário" + "Atendendo agora" + termo pesquisado.
     - Ao ativar, exibir somente estabelecimentos cujo estado calculado seja `open`.
     - Ao desativar, voltar a considerar todos os estados sem limpar a categoria ou a busca existentes.
     - Apresentar feedback objetivo ao ativar ou desativar e manter o controle reversível em um único clique.

  6. Faça a disponibilidade reverberar em toda a experiência de resultados:
     - Atualizar cards visíveis, marcadores do Google Maps e contador usando a mesma lista filtrada.
     - Não exibir no mapa marcadores de estabelecimentos excluídos pelo filtro.
     - Preservar a sincronização entre card e marcador e evitar manter selecionado um estabelecimento que ficou oculto sem comunicar a mudança.
     - Exibir um estado vazio útil quando nenhum estabelecimento estiver atendendo segundo os demais critérios, com ação clara para remover o filtro de disponibilidade.
     - Manter o filtro funcional tanto com o Google Maps ativo quanto no fallback do mapa.

  7. Atualize os estados automaticamente sem recarregar a página:
     - Recalcular a disponibilidade ao iniciar a aplicação, quando a página voltar a ficar visível e em intervalos suficientes para refletir mudanças de minuto sem atualizações excessivas.
     - Reaplicar os filtros e atualizar badges, marcadores e contador quando um estabelecimento abrir ou fechar.
     - Registrar listeners e temporizadores apenas uma vez e liberar qualquer recurso quando apropriado.

  8. Revise a implementação conforme os critérios de aceite e corrija regressões. Considere concluído somente quando:
     - Um estabelecimento aberto, fechado, 24 horas, sem expediente no dia e com jornada após meia-noite receber o estado correto em horários controlados.
     - O cálculo produzir o mesmo resultado independentemente do fuso local do navegador.
     - O filtro "Atendendo agora" puder ser combinado com cada categoria e com a busca textual.
     - Cards, marcadores e contador exibirem sempre o mesmo conjunto de resultados.
     - Ativar e desativar o filtro não apagar os demais critérios ativos.
     - O estado vazio permitir remover o filtro facilmente.
     - Badges e atributos acessíveis forem atualizados sem depender apenas de cor.
     - Busca, favoritos, detalhes, expansão do mapa, geolocalização e seleção de estabelecimentos continuarem funcionando.
     - Não houver erros no console, listeners duplicados ou temporizadores excessivos.
</instructions>

<rules>
  - Seguir rigorosamente as 10 Heurísticas de Nielsen descritas em `docs\spec\heuristics\nilsen.md`, com ênfase em visibilidade do status, correspondência com o mundo real, controle do usuário e prevenção de erros.
  - Seguir as diretrizes de Clean Code descritas em `docs\spec\architecture\clean_code.md`, mantendo uma única regra de disponibilidade, funções coesas, nomes que revelem intenção e dependência temporal injetável.
  - Preservar a natureza 100% estática do projeto: JavaScript Vanilla, HTML5 e CSS3, sem frameworks, backend, bundlers ou novas dependências.
  - Usar o fuso horário IANA `America/Fortaleza` como referência das regras de funcionamento.
  - Não usar os textos de badge como regra de negócio e não consultar a API do Google Places para determinar disponibilidade.
  - Não afirmar que existe vaga ou atendimento imediato; comunicar apenas a compatibilidade do horário atual com o expediente cadastrado.
  - Manter a identidade visual lúdica, acolhedora e temática para pets, reutilizando os tokens e padrões de `styles.css`.
  - Manter a abordagem mobile-first, áreas de toque adequadas, foco visível e estados compreensíveis por leitores de tela.
  - Não quebrar as integrações existentes de busca, categorias, favoritos, detalhes, mapa, expansão do mapa, marcadores e geolocalização.
</rules>
