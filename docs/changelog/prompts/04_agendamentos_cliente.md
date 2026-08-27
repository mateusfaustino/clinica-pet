<goal>
  Implementar no vetPerto uma página de agendamentos do cliente que reúna compromissos confirmados mocados e agendamentos salvos no navegador, além de permitir escolher e confirmar horários disponíveis a partir dos serviços de cada estabelecimento.
</goal>

<role>
  Engenheiro de Software Fullstack especializado em JavaScript Vanilla, HTML5 semântico, CSS3 moderno, persistência no navegador e interfaces mobile-first acessíveis.
</role>

<context>
  O vetPerto é uma aplicação web estática para localizar clínicas veterinárias, petshops e serviços de banho & tosa em Fortaleza - CE.
  Os estabelecimentos e seus serviços estão em `places.js`. Cada serviço possui nome, descrição, duração e preço, e a aba "Serviços & Preços" do modal contém botões "Agendar". Os estabelecimentos também possuem uma agenda semanal estruturada em `openingSchedule`, usada para calcular sua disponibilidade no fuso `America/Fortaleza`.
  A navegação inferior já possui o item "Agendamentos", mas ele ainda não abre uma visão funcional. Atualmente, clicar em "Agendar" apenas apresenta um toast e não permite selecionar data ou horário.
  O cliente deve visualizar seus agendamentos confirmados, incluindo dados mocados e compromissos criados durante o uso. Como o projeto não possui backend, os novos agendamentos devem ser persistidos em `localStorage` e reaparecer após atualizar ou reabrir a aplicação no mesmo navegador.
</context>

<instructions>
  1. Antes de implementar, analise:
     - As diretrizes de usabilidade em `docs\spec\heuristics\nilsen.md`.
     - As diretrizes de qualidade em `docs\spec\architecture\clean_code.md`.
     - A estrutura e os comportamentos atuais de `index.html`, `styles.css`, `script.js` e `places.js`.
     - O modal de detalhes, os botões `.book-service-btn`, a navegação inferior e a estrutura `openingSchedule`.
     - As regras de disponibilidade implementadas no prompt `docs\changelog\prompts\03_disponibilidade_atendimento.md`.

  2. Crie uma visão interna de "Meus agendamentos", acessível pelo item "Agendamentos" da navegação inferior:
     - Manter a aplicação estática e evitar recarregamento de página.
     - Atualizar corretamente o item ativo e `aria-current` da navegação ao alternar entre início e agendamentos.
     - Exibir título, breve contexto e uma ação clara para voltar à busca de estabelecimentos.
     - Preservar o estado da tela inicial, incluindo busca, categoria, filtro "Atendendo agora", estabelecimento selecionado e posição do mapa.
     - Gerenciar o foco ao trocar de visão, direcionando-o para o título principal da página aberta.

  3. Crie dados mocados de agendamentos confirmados do cliente:
     - Manter os fixtures separados da lógica de renderização, em estrutura clara e reutilizável.
     - Incluir pelo menos três compromissos futuros próximos à data atual, distribuídos entre hoje, esta semana e uma data posterior.
     - Usar deslocamentos relativos à data atual para que os filtros continuem demonstráveis, sem persistir novamente esses fixtures no `localStorage`.
     - Cada agendamento deve conter identificador, origem (`mock` ou `local`), estabelecimento, serviço, data, horário, duração, preço, endereço e status "Confirmado".
     - Relacionar os compromissos mocados a estabelecimentos e serviços existentes em `places.js`, evitando duplicação desnecessária dos dados de cadastro.

  4. Implemente uma camada de persistência segura e versionada para os agendamentos criados pelo usuário:
     - Usar uma chave explícita, por exemplo `vetperto:appointments:v1`.
     - Definir um esquema único para serialização e leitura dos registros.
     - Salvar datas e horários em formato não ambíguo e interpretá-los no fuso `America/Fortaleza`.
     - Validar conteúdo, tipos, campos obrigatórios e referências a estabelecimento/serviço ao ler o storage.
     - Ignorar registros inválidos sem interromper a aplicação e tratar indisponibilidade, quota excedida ou corrupção do `localStorage` com mensagem amigável.
     - Não armazenar HTML, dados sensíveis, informações de pagamento ou credenciais.
     - Combinar os fixtures mocados e os registros válidos do storage sem duplicá-los, ordenando os próximos compromissos cronologicamente.

  5. Na página de agendamentos, renderize cards com as informações necessárias para o cliente comparecer:
     - Data e horário em formato brasileiro.
     - Nome do estabelecimento e do serviço.
     - Duração, preço, endereço e status textual "Confirmado".
     - Identificação visual consistente entre dados mocados e dados do navegador, sem expor detalhes técnicos como "localStorage" ao usuário.
     - Estado vazio amigável com ação "Encontrar um serviço" quando não houver resultados para o filtro selecionado.

  6. Adicione filtros de data à página:
     - Disponibilizar, no mínimo, "Todos", "Hoje" e "Esta semana".
     - Implementar como controles acessíveis com estado visual e `aria-pressed` sincronizados.
     - Considerar o fuso `America/Fortaleza` para determinar o início e o fim do dia e da semana.
     - Definir "Esta semana" de forma consistente, considerando segunda-feira como primeiro dia e incluindo domingo.
     - Atualizar lista e contador imediatamente, sem recarregar a página.
     - Exibir claramente o estado vazio do filtro e permitir retornar a "Todos" em uma ação.

  7. Substitua o toast atual dos botões "Agendar" por um fluxo real de seleção de horário:
     - Ao clicar em "Agendar" em um serviço, abrir um modal ou bottom sheet acessível contendo estabelecimento e serviço escolhidos.
     - Exibir datas futuras selecionáveis e seus horários disponíveis, respeitando `openingSchedule`, duração do serviço e o fuso `America/Fortaleza`.
     - Não oferecer horários no passado, fora do expediente, durante intervalos fechados ou cujo término ultrapasse o fechamento do estabelecimento.
     - Gerar slots em intervalos coerentes, por exemplo a cada 30 minutos, e considerar jornadas após meia-noite e locais 24 horas.
     - Remover da disponibilidade slots já ocupados por agendamentos mocados ou armazenados para o mesmo estabelecimento.
     - Exibir estado sem horários e permitir escolher outra data sem perder o serviço selecionado.

  8. Antes de salvar, apresente uma etapa de confirmação com resumo completo:
     - Estabelecimento, serviço, data, horário, duração, preço e endereço.
     - Ações explícitas "Voltar" e "Confirmar agendamento".
     - Não confirmar ao selecionar apenas o horário e prevenir cliques duplicados.
     - Revalidar o slot imediatamente antes de persistir para evitar conflito dentro do estado local da aplicação.
     - Após sucesso, salvar uma única vez, mostrar feedback acessível, fechar o fluxo e abrir ou atualizar "Meus agendamentos" com o novo compromisso em destaque.
     - Se a persistência falhar, informar que o agendamento não foi salvo e manter a seleção para nova tentativa.

  9. Garanta controle e acessibilidade no fluxo:
     - Usar `role="dialog"`, `aria-modal="true"`, título acessível e foco inicial significativo.
     - Manter o foco dentro do modal enquanto estiver aberto e devolvê-lo ao botão "Agendar" ao cancelar.
     - Permitir fechar pelo botão visível, backdrop quando seguro e tecla `Esc`, sem criar agendamento.
     - Garantir área de toque mínima de 44 x 44 pixels, foco visível e estados que não dependam somente de cor.
     - Respeitar `prefers-reduced-motion` e evitar anúncios excessivos por leitores de tela.

  10. Organize o JavaScript em responsabilidades pequenas e testáveis:
      - Leitura, validação e escrita no storage.
      - Combinação e ordenação de agendamentos.
      - Cálculo dos filtros de data.
      - Geração e validação de slots.
      - Controle das visões e do modal.
      - Renderização da lista e feedback ao usuário.
      - Receber a data/hora de referência por parâmetro nas regras temporais para permitir testes determinísticos.

  11. Valide a implementação e corrija regressões. Considere concluído somente quando:
      - A página exibir conjuntamente compromissos mocados e registros válidos do navegador em ordem cronológica.
      - Os filtros "Hoje" e "Esta semana" funcionarem corretamente em horários controlados no fuso de Fortaleza.
      - Um agendamento confirmado aparecer imediatamente na página e continuar presente após recarregar a aplicação.
      - Atualizar a página não duplicar fixtures nem registros persistidos.
      - Slots passados, fora do expediente, sobrepostos ou incompatíveis com a duração não puderem ser confirmados.
      - Cancelar ou pressionar `Esc` não alterar o storage.
      - Conteúdo inválido no storage não quebrar a interface.
      - O fluxo funcionar em mobile e desktop, apenas por teclado e com leitores de tela.
      - Busca, filtros, disponibilidade, favoritos, detalhes, mapa, expansão do mapa, marcadores e geolocalização continuarem funcionando.
      - Não houver erros no console, listeners duplicados ou renderizações cumulativas.
</instructions>

<rules>
  - Seguir rigorosamente as 10 Heurísticas de Nielsen descritas em `docs\spec\heuristics\nilsen.md`, com ênfase em visibilidade do status, controle e liberdade, prevenção de erros e reconhecimento em vez de memorização.
  - Seguir as diretrizes de Clean Code descritas em `docs\spec\architecture\clean_code.md`, mantendo funções coesas, uma única fonte de verdade e regras temporais testáveis.
  - Preservar a natureza 100% estática do projeto: JavaScript Vanilla, HTML5 e CSS3, sem frameworks, backend, bundlers ou novas dependências.
  - Usar `America/Fortaleza` como fuso de referência para agenda, filtros e horários disponíveis.
  - Usar `localStorage` somente para persistência local de agendamentos confirmados pelo usuário.
  - Não simular integração com agenda real, pagamento, prontuário, autenticação ou confirmação externa da clínica.
  - Não afirmar que um slot está reservado fora do navegador atual; comunicar a limitação local quando necessário.
  - Não permitir agendamentos no passado nem fora do expediente cadastrado.
  - Manter a identidade visual lúdica, acolhedora e temática para pets, reutilizando tokens, fontes e padrões existentes em `styles.css`.
  - Manter abordagem mobile-first, foco visível, navegação por teclado e áreas de toque adequadas.
  - Não quebrar as integrações existentes de busca, filtros, disponibilidade, favoritos, detalhes, mapa, expansão do mapa, marcadores e geolocalização.
</rules>
