# Diretrizes de Clean Code para o Oportuniza

## 1. Objetivo

Este documento define as diretrizes de código limpo para o Oportuniza. Ele sintetiza princípios difundidos por Robert C. Martin em *Clean Code* e os adapta ao contexto real do sistema, sem substituir a leitura da obra nem reproduzir seu conteúdo.

Estas regras se aplicam a código novo, correções e refatorações em:

- PHP e Laravel 10;
- Livewire 3 e Blade;
- monolito modular com DDD;
- JavaScript e CSS pontuais;
- testes PHPUnit;
- integrações, comandos Artisan, jobs e serviços de infraestrutura.

O objetivo é produzir código fácil de compreender, alterar, testar e remover, preservando o comportamento do sistema e reduzindo o risco de regressões.

## 2. Princípios fundamentais

Código limpo deve:

1. Expressar claramente a intenção do negócio.
2. Ter uma única fonte de verdade para cada regra.
3. Manter responsabilidades pequenas e bem delimitadas.
4. Tornar o caminho correto simples e o uso incorreto difícil.
5. Isolar detalhes técnicos das regras de negócio.
6. Ser verificável por testes rápidos e determinísticos.
7. Melhorar progressivamente sem exigir reescritas amplas.

Clareza tem prioridade sobre concisão. Uma solução explícita e simples é preferível a uma abstração engenhosa que exija interpretação adicional.

## 3. Regra de melhoria contínua

Ao alterar um trecho, deixe-o pelo menos tão claro quanto estava antes. Pequenas melhorias relacionadas ao escopo são incentivadas:

- corrigir um nome enganoso;
- remover duplicação introduzida pela alteração;
- extrair uma condição complexa;
- adicionar um teste de regressão;
- eliminar código morto diretamente relacionado.

Não transforme uma correção localizada em uma refatoração ampla sem necessidade. Preserve alterações do usuário e não misture mudanças não relacionadas no mesmo conjunto de trabalho.

## 4. Nomes que revelam intenção

Nomes devem explicar o papel do elemento sem depender de comentários.

### Regras gerais

- Use a linguagem ubíqua do Oportuniza: `Aluno`, `Empresa`, `Vaga`, `Candidatura`, `Unidade`, `Perfil`, `Permissao` e `Curso`.
- Prefira nomes específicos a termos genéricos como `data`, `item`, `obj`, `manager`, `helper`, `processar` ou `handle` sem contexto.
- Evite abreviações não consolidadas e nomes de uma letra, exceto índices locais triviais.
- Não use nomes diferentes para o mesmo conceito nem o mesmo nome para conceitos distintos.
- Evite codificar tipo ou tecnologia no nome quando isso não acrescentar significado.
- Use português para conceitos do domínio e siga as convenções do framework para elementos técnicos.

### Classes e tipos

Use substantivos ou expressões nominais:

```php
final class SolicitarAtivacaoContaService
final readonly class AlunoListFilters
interface UsuarioRepositoryInterface
```

Evite nomes vagos:

```php
class Manager
class ProcessData
class Utils
```

### Métodos e funções

Use verbos que descrevam o efeito ou a consulta:

```php
$service->executar($dados);
$repository->buscarPorCpf($cpf);
$usuario->podeAcessarPainelAdministrativo();
```

Métodos booleanos devem formar uma pergunta clara:

```php
estaAtivo()
podeEditarUsuario()
possuiEndereco()
```

### Variáveis

- Nomeie pelo significado, não pelo tipo: `$usuarioInativo`, não `$arrayUsuario`.
- Inclua unidade quando houver risco de ambiguidade: `$tempoLimiteEmSegundos`.
- Coleções devem ter nome plural: `$usuarios`, `$emailsDosDestinatarios`.
- Não reutilize a mesma variável para significados diferentes.

## 5. Funções e métodos pequenos

Uma função deve fazer uma coisa, em um único nível de abstração.

- Extraia blocos quando um nome puder explicar melhor a intenção.
- Evite misturar validação, consulta, regra de negócio, persistência, e-mail e construção de resposta no mesmo método.
- Mantenha o fluxo principal legível como uma sequência de decisões do negócio.
- Prefira retornos antecipados para casos inválidos e reduza níveis de indentação.
- Evite parâmetros booleanos que mudam radicalmente o comportamento do método; crie operações explícitas.
- Não use parâmetros de saída. Retorne um valor ou objeto de resultado.
- Limite a quantidade de argumentos. Quando os dados formarem um conceito, use DTO ou Value Object.
- Métodos de consulta não devem alterar estado de forma inesperada.

Exemplo:

```php
public function executar(SolicitarAtivacaoData $dados): ResultadoSolicitacao
{
    $usuario = $this->usuarios->buscarPorId($dados->usuarioId);

    if ($usuario === null) {
        return ResultadoSolicitacao::usuarioNaoEncontrado();
    }

    if ($usuario->estaAtivo()) {
        return ResultadoSolicitacao::contaJaAtiva();
    }

    $this->notificarResponsaveis($usuario);

    return ResultadoSolicitacao::enviada();
}
```

## 6. Um nível de abstração por bloco

Não misture conceitos de negócio com detalhes de infraestrutura no mesmo trecho.

Exemplo inadequado em um componente Livewire:

```php
DB::table('usuarios')->where('id', $id)->update(['active' => true]);
Mail::to($email)->send(...);
```

Fluxo esperado:

```text
Livewire/Controller
    → Application Service
        → regra de domínio
        → Repository Interface
            → implementação Eloquent
        → contrato de e-mail
```

Consulte também `docs/spec/architecture/ddd.md`. Em caso de conflito, a separação de camadas e os limites de módulo definidos na especificação DDD prevalecem.

## 7. Classes coesas e responsabilidade única

Uma classe deve ter um motivo principal para mudar.

- Componentes Livewire controlam estado da tela, validação de entrada e chamada de casos de uso.
- Controllers traduzem HTTP para casos de uso e respostas.
- Application Services orquestram o fluxo da aplicação.
- Domínio contém regras de negócio independentes do Laravel.
- Repositórios encapsulam persistência e consultas.
- Mailers, gateways e clientes encapsulam integrações externas.
- Blade apresenta dados; não consulta banco nem executa regras de negócio.

Sinais de baixa coesão:

- muitos campos usados por apenas alguns métodos;
- classe com métodos de áreas de negócio diferentes;
- dependências numerosas e não relacionadas;
- nomes como `Manager`, `Utils` ou `Service` sem capacidade específica;
- mudança simples que exige editar diversas partes da mesma classe.

Extraia responsabilidades somente quando houver um limite conceitual claro. Não crie classes sem comportamento apenas para aumentar o número de camadas.

## 8. Encapsulamento e dependências

- Dependa de contratos nas fronteiras entre domínio/aplicação e infraestrutura.
- Injete dependências pelo construtor sempre que possível.
- Evite `new` de serviços, repositórios ou controllers dentro da regra de negócio.
- Evite Service Locator com `app()` na aplicação e no domínio. Na apresentação legada, migre gradualmente para injeção explícita.
- Mantenha propriedades privadas; exponha somente o necessário.
- Não permita que detalhes de Eloquent vazem para entidades ou Value Objects do domínio.
- Evite cadeias extensas de chamadas que revelem a estrutura interna de outros objetos.
- Um módulo deve consumir o contrato público ou Application Service de outro módulo, nunca suas tabelas ou Models internos diretamente.

## 9. Dados e objetos

- Use DTOs imutáveis para transportar entrada validada entre camadas.
- Use Value Objects para conceitos com regras próprias, como CPF, telefone e período, quando o ganho justificar.
- Não passe arrays associativos sem contrato por muitos níveis da aplicação.
- Documente a forma de arrays inevitáveis com PHPDoc preciso.
- Evite retornar `null`, `false`, string e objeto como resultados alternativos da mesma operação. Use um tipo ou objeto de resultado coerente.
- Não exponha atributos que o chamador não precisa conhecer.
- Normalize dados nas fronteiras adequadas, mantendo um formato canônico internamente.

## 10. Condicionais legíveis

- Extraia condições complexas para métodos com nomes de negócio.
- Prefira cláusulas de guarda a grandes blocos `if/else`.
- Evite comparações implícitas ambíguas; use operadores estritos quando aplicável.
- Use `match`, enums ou polimorfismo quando representarem melhor um conjunto fechado de estados.
- Não espalhe strings mágicas de perfil, status ou permissão. Centralize constantes ou enums no módulo responsável.
- Não esconda efeitos colaterais dentro de condições.

Exemplo:

```php
if (! $usuario->podeAcessar($portal)) {
    return ResultadoLogin::acessoNaoAutorizado();
}
```

é preferível a uma expressão extensa que combine perfil, permissão, superusuário e portal no mesmo `if`.

## 11. Tratamento de erros

Erros devem ser explícitos, úteis e tratados na camada correta.

- Lance exceções para situações excepcionais, não para controle normal de fluxo.
- Use exceções específicas quando o chamador precisar distinguir causas.
- Não capture `Throwable` apenas para ignorá-lo ou retornar sucesso.
- Ao capturar uma exceção, resolva, traduza, registre ou relance com contexto.
- Preserve a exceção anterior ao encapsular uma falha.
- Não use `dd()`, `dump()` ou `die()` em código de produção.
- Não exponha stack trace, SQL, credenciais ou detalhes internos ao usuário.
- Mensagens ao usuário devem informar o problema e a recuperação; logs devem conter o contexto técnico.
- Operações com múltiplas gravações dependentes devem usar transação.
- Falhas parciais devem ser representadas claramente; não confirme sucesso total quando uma etapa obrigatória falhou.

## 12. Efeitos colaterais e estado

- Um método deve tornar seus efeitos colaterais previsíveis pelo nome e contrato.
- Não envie e-mail, altere sessão ou grave auditoria dentro de getters.
- Evite estado global e estático mutável.
- Use sessão apenas para estado de navegação ou mensagens temporárias, não como fonte principal da regra de negócio.
- Jobs e listeners devem ser idempotentes quando puderem ser repetidos.
- Eventos devem representar fatos ocorridos, usando nomes no passado.
- Horário e identificadores aleatórios devem ser injetáveis ou controláveis nos testes quando influenciarem a regra.

## 13. Comentários

O código deve explicar “o quê” e “como”; comentários devem explicar “por quê” quando isso não estiver evidente.

Comentários aceitáveis:

- decisão arquitetural ou limitação externa relevante;
- regra não óbvia do SGE ou de integração;
- aviso de segurança;
- PHPDoc que descreve contrato, generics, forma de array ou exceções;
- `TODO` acionável, com contexto e referência quando disponível.

Evite:

- repetir literalmente o código;
- narrar cada linha;
- manter código comentado;
- comentários desatualizados;
- assinaturas de autoria ou histórico de alterações;
- marcadores vagos como `TODO: corrigir depois`.

Se um comentário tenta compensar código confuso, primeiro tente renomear ou extrair o trecho.

## 14. Formatação e organização dos arquivos

- Siga PSR-12 e Laravel Pint.
- Respeite `.editorconfig` e o estilo já predominante no arquivo.
- Uma classe principal por arquivo.
- Imports explícitos e sem itens não utilizados.
- Agrupe elementos relacionados e mantenha conceitos de alto nível antes dos detalhes privados.
- Use espaçamento para separar ideias, não para criar ruído.
- Evite linhas excessivamente longas e aninhamento profundo.
- Não aplique formatação massiva em arquivos fora do escopo.
- Blade deve manter HTML semântico, indentação consistente e o mínimo de lógica.
- CSS específico deve usar nomes previsíveis e evitar estilos inline quando houver reutilização.
- JavaScript deve permanecer pequeno, acessível e restrito ao comportamento que Livewire/HTML não resolvem adequadamente.

## 15. Duplicação

Duplicação de regra é mais perigosa que repetição visual pequena.

- Centralize regras de autorização, normalização, cálculo e transição de estado.
- Reutilize componentes Blade para padrões visuais recorrentes.
- Reutilize Application Services para o mesmo caso de uso em Controller e Livewire.
- Não extraia uma abstração apenas porque dois trechos são parecidos; confirme que representam o mesmo conceito e mudam pelas mesmas razões.
- Prefira uma pequena duplicação clara a uma abstração prematura com parâmetros e condicionais obscuros.

## 16. Código morto e compatibilidade

- Remova imports, variáveis, métodos e branches comprovadamente não utilizados quando estiverem no escopo da mudança.
- Não mantenha código comentado; o Git preserva o histórico.
- Não crie opções, parâmetros ou abstrações “para uso futuro” sem requisito atual.
- Antes de remover código público ou legado, pesquise consumidores, rotas, bindings, Blade, jobs, comandos e testes.
- Migrações do legado devem ser incrementais, conforme a estratégia definida em `ddd.md`.
- Compatibilidade temporária deve ter motivo documentado e caminho de remoção.

## 17. Segurança como parte da clareza

Código seguro deve deixar explícita a fronteira de confiança.

- Valide entrada no servidor.
- Autorize a ação imediatamente antes do caso de uso sensível.
- Use mass assignment apenas com campos permitidos.
- Escape saída HTML; permita HTML bruto somente quando controlado e necessário.
- Use Query Builder/Eloquent com parâmetros, evitando SQL concatenado.
- Normalize identificadores como CPF e telefone antes de comparar ou persistir.
- Não confie em campos `disabled`, `readonly`, propriedades públicas Livewire ou IDs enviados pelo cliente.
- Use `#[Locked]` para estado Livewire que não deve ser adulterado, sem tratar isso como substituto da autorização.
- Proteja formulários com CSRF, limite tentativas em endpoints sensíveis e evite enumeração de contas.
- Nunca registre senhas, tokens, documentos completos ou dados pessoais desnecessários.

## 18. Testes limpos

Testes são parte do código de produção e seguem as mesmas exigências de clareza.

- Um teste deve demonstrar um comportamento relevante.
- Nomeie o teste pelo cenário e resultado esperado.
- Organize conceitualmente em preparação, ação e verificação, sem comentários obrigatórios.
- Mantenha uma ação principal por teste quando isso tornar a falha mais clara.
- Evite depender da ordem de execução, relógio real, rede, SGE ou banco externo.
- Use SQLite separado conforme a configuração de testes do projeto.
- Crie builders ou métodos auxiliares quando reduzirem ruído sem esconder dados importantes do cenário.
- Não duplique a implementação dentro do teste.
- Verifique resultado observável: retorno, estado persistido, evento, e-mail, auditoria ou resposta HTTP.
- Cubra caminho feliz, validação, autorização, ausência de dados e falhas relevantes.
- Todo bug corrigido deve receber teste de regressão quando tecnicamente viável.
- Testes devem ser determinísticos; não aceite intermitência como comportamento normal.

## 19. Diretrizes específicas para Laravel e Livewire

### Controllers

- Devem ser pequenos: validar ou receber Request, chamar caso de uso e devolver resposta.
- Não devem concentrar consultas e regras de negócio.

### Livewire

- Propriedades públicas representam apenas estado necessário da tela.
- Métodos de ação validam, autorizam e delegam ao Application Service.
- `render()` não deve causar efeitos colaterais.
- Queries não devem ser construídas diretamente no componente.
- Estados de loading devem usar `wire:target` específico.
- IDs e flags sensíveis devem ser protegidos e revalidados no servidor.

### Eloquent e repositórios

- Models de persistência pertencem à infraestrutura.
- Repositórios devem encapsular consultas, joins e detalhes de schema.
- Evite N+1, seleção excessiva e paginação após carregar toda a coleção.
- Métodos de repositório devem revelar a intenção da consulta, não o mecanismo SQL.

### Blade

- Não use `DB`, Eloquent ou serviços diretamente na view.
- Evite cálculos e transformações complexas; prepare os dados antes da renderização.
- Use componentes existentes e mantenha acessibilidade e heurísticas descritas em `docs/spec/heuristics/nilsen.md`.

### Configuração

- Não espalhe regras de negócio em `.env` ou arquivos de configuração genéricos.
- Segredos ficam no ambiente; valores padrão não podem ser inseguros.
- Limpe ou reconstrua cache de configuração quando uma alteração exigir.

## 20. Sinais de alerta

Revise o design quando encontrar:

- método longo com vários níveis de indentação;
- classe com muitas dependências;
- parâmetro booleano que seleciona fluxos distintos;
- array sem contrato circulando entre várias camadas;
- regra duplicada em Controller, Livewire e Service;
- consulta SQL em Blade ou componente de apresentação;
- comentário necessário para explicar um nome ruim;
- captura genérica de exceção sem tratamento real;
- strings mágicas de roles, permissions ou status repetidas;
- alteração de dado em método aparentemente consultivo;
- teste que precisa conhecer detalhes privados da implementação;
- mudança simples que exige editar muitos arquivos sem uma razão arquitetural clara.

Esses sinais não são proibições absolutas, mas exigem justificativa ou refatoração proporcional.

## 21. Checklist de implementação e revisão

Antes de concluir uma alteração, verifique:

- [ ] Os nomes expressam a linguagem e a intenção do negócio?
- [ ] Cada método trabalha em um único nível de abstração?
- [ ] Controller/Livewire apenas coordena a apresentação e delega o caso de uso?
- [ ] Regras, consultas e integrações estão na camada correta?
- [ ] Há duplicação de regra ou uma abstração prematura?
- [ ] As dependências são explícitas e apontam para contratos adequados?
- [ ] Entradas são validadas, normalizadas e autorizadas no servidor?
- [ ] Erros são tratados sem ocultar falhas nem expor detalhes internos?
- [ ] Operações relacionadas são atômicas quando necessário?
- [ ] Comentários explicam decisões, não o código óbvio?
- [ ] Não há código morto, debugging ou imports não usados?
- [ ] O código segue PSR-12 e passa no Laravel Pint?
- [ ] Os testes usam o banco separado, são determinísticos e cobrem a regressão?
- [ ] A suíte relevante passa sem introduzir novos avisos?
- [ ] A interface segue `docs/spec/heuristics/nilsen.md`?
- [ ] O backend segue `docs/spec/architecture/ddd.md`?

## 22. Regra para uso pela IA

Ao criar ou alterar código, a IA deve:

1. Ler esta especificação e a especificação DDD aplicável.
2. Inspecionar implementações equivalentes antes de propor uma nova abstração.
3. Fazer a menor alteração coesa que resolva integralmente o requisito.
4. Preservar contratos e mudanças existentes fora do escopo.
5. Implementar testes proporcionais ao risco.
6. Executar a suíte relevante, Laravel Pint e verificação de diff.
7. Informar objetivamente o resultado e qualquer limitação restante.

O propósito não é maximizar a quantidade de classes ou minimizar linhas de código. O propósito é tornar a intenção evidente, as mudanças seguras e o sistema sustentável.
