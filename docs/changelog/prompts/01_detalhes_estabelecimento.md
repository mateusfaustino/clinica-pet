<goal>
  Implementar a funcionalidade de visualização de detalhes dos estabelecimentos nos cards do vetPerto, exibindo um painel/modal rico e interativo com informações completas, serviços, produtos e preços mocados.
</goal>

<role>
  Engenheiro de Software Fullstack especializado em Javascript (Vanilla), HTML5 semântico e CSS3 moderno.
</role>

<context>
  O projeto vetPerto é uma aplicação web estática (mobile-first) voltada para busca e localização de clínicas veterinárias, petshops e serviços de banho & tosa em Fortaleza - CE.
  Atualmente, os 100 estabelecimentos estão carregados a partir de `places.js` e exibidos em cards na página inicial e pins no mapa.
  Ao clicar no botão "Ver detalhes" de qualquer card (ou no marcador do mapa), o sistema deve abrir uma visão detalhada do estabelecimento selecionado, exibindo seus dados de contato, horário, serviços oferecidos com preços, catálogo de produtos com valores e ações de agendamento/contato, tudo com dados mocados.
</context>

<instructions>
  1. Use chain of thoughts para analisar as diretrizes de `docs\spec\heuristics\nilsen.md` e `docs\spec\architecture\clean_code.md` antes de planejar e executar a implementação.
  
  2. Analise a estrutura atual em `index.html`, `styles.css`, `script.js` e a base de dados mocada em `places.js`.
  
  3. Estruture os dados em `places.js` (ou através de uma camada de enriquecimento mocada) para que cada estabelecimento possua:
     - Endereço completo, telefone/WhatsApp e horário detalhado de funcionamento.
     - Descrição institucional ("Sobre o local") e comodidades (ex.: Estacionamento, Farmácia Integrada, Wi-Fi, Atendimento Domiciliar).
     - Lista de Serviços com descrição, duração estimada e preço formatado em Real (R$) de acordo com a categoria (ex.: Consultas, Vacinas, Exames, Cirurgias, Banho & Tosa, Hidratação, Hotelzinho).
     - Lista de Produtos (especialmente para Petshops e Clínicas) com nome, categoria, preço em R$ e selo (ex.: Rações Super Premium, Petiscos, Antipulgas, Camas, Acessórios).
     - Avaliações/Reviews recentes mocadas com comentários de tutores.

  4. Crie a interface visual de Detalhes (modal/bottom-sheet deslizante mobile-friendly):
     - Cabeçalho visual temático com foto/ilustração, botão de fechar acessível, botão de favoritar e badge de status (Aberto/Fechado).
     - Informações essenciais: Nota com estrelas, quantidade de avaliações, endereço com botão "Como chegar", botão de contato direto via WhatsApp/Telefone.
     - Navegação interna por abas ou seções claras: "Serviços & Preços", "Produtos", "Sobre & Horários" e "Avaliações".
     - Cards de serviços e produtos com destaque visual para os preços, botões de ação ("Agendar horário" ou "Adicionar ao pedido") e feedback imediato via toast.

  5. Integre a abertura e fechamento da interface no `script.js`:
     - Disparar a exibição dos detalhes ao clicar em "Ver detalhes" nos cards ou nos pins do mapa.
     - Garantir controle do usuário: fechamento pelo botão "X", clique no backdrop/overlay ou pressionando a tecla `Esc`.
     - Gerenciamento de foco acessível (`role="dialog"`, `aria-modal="true"`, foco inicial no título e retorno ao botão acionador ao fechar).

  6. Garanta a responsividade total (Mobile-First):
     - Em telas de celular (< 768px): comportamento fluido estilo *Bottom Sheet* com rolagem suave.
     - Em telas maiores / Desktop: modal centralizado ou painel lateral integrado ao mapa.
</instructions>

<rules>
  - Seguir rigorosamente as 10 Heurísticas de Nielsen descritas em `docs\spec\heuristics\nilsen.md` (controle e liberdade do usuário com tecla Esc, visibilidade do status, consistência de padrões e prevenção de erros).
  - Seguir as diretrizes de Clean Code descritas em `docs\spec\architecture\clean_code.md` (funções pequenas e coesas, nomes que revelam intenção, separação clara de responsabilidades e ausência de código morto).
  - Preservar a natureza 100% estática do projeto (Vanilla JavaScript, HTML5 e CSS3, sem dependência de frameworks ou bundlers).
  - Manter a identidade visual lúdica, acolhedora e temática para pets (fontes Fredoka/Nunito, paleta de cores acolhedora e microinterações).
  - Todos os preços devem seguir o formato monetário brasileiro (`R$ XX,XX`).
  - Não quebrar as integrações existentes de busca, filtros de categoria, favoritos e mapa.
</rules>
