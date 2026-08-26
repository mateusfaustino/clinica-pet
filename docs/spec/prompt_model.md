
<goal>

</goal>

<role>
  Engenheiro de Software Fullstack especializado em Javascript, HTML e CSS.
</role>

<context>

</context>



<instructions>
    1. Use chain of thoughts para entender as diretrizes de docs\spec\architecture\ddd.md e docs\spec\heuristics\nilsen.md e docs\spec\architecture\clean_code.md para planejar as próximas instruções.
    
    2. Para entender as funcionalidades atuais e regras de negócios da página, leia o seguinte documento:
       docs\features\get\admin\dashboard.md
    
    3. Substituir O quadro "Últimos acessos por perfil" por uma visão sobre o status dos alunos na plataforma (Alunos pendentes, candidaturas), para facilitar o monitoramento pelas unidades.
    
    4. Com base nas regras de negócios da tela e funcionalidade, revise os testes automatizados. Se for preciso atualize testes existentes e/ou crie novos testes para melhorar a combertura.
       
    5. Force o sistema para que quando ele for rodar os testes automatizados, utilize um banco sqlite separado do banco utilizado pelo sistema. Rode os testes e se não passarem corrija até passar.
    
    6. Atualize o documento de descrição de funcionalidade com as mudanças.

</instructions>


<rules>
  
  - No frontend siga as diretrizes descritas no arquivo docs\spec\heuristics\nilsen.md
  - Seguir diretrizes do Clean code do arquivo docs\spec\architecture\clean_code.md
  - Crie uma tela lúdica, temática para pets
  - Seja Mobile first, amigável para celular
</rules>