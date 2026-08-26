	# Guia de Configuração: Google Cloud Console & Credenciais do Google Maps

Este documento fornece um passo a passo completo para configurar o **Google Cloud Console**, cadastrar a conta de faturamento (aproveitando o crédito gratuito mensal de **US$ 200,00**), ativar as APIs necessárias e gerar as credenciais seguras para o projeto **vetPerto**.

---

## 1. Visão Geral do Faturamento e Gratuidades

O Google Maps Platform adota um modelo *Pay-As-You-Go*, mas concede automaticamente a cada conta de faturamento um **crédito gratuito recorrente de US$ 200,00 todos os meses**.

* **Volume Gratuito:** O crédito mensal de US$ 200 cobre aproximadamente **28.000 carregamentos de mapas dinâmicos** (*Maps JavaScript API*) por mês.
* **Segurança Financeira:** Nenhum valor é cobrado além do crédito mensal, a menos que seu tráfego exceda essa cota e você não tenha configurado travas.
* **Cartão de Crédito:** É obrigatório cadastrar um cartão de crédito para verificação de identidade e ativação da conta no Google Cloud, mas **não haverá cobrança** dentro do limite gratuito.

---

## 2. Passo a Passo no Google Cloud Console

### Passo 2.1: Acessar e Criar o Projeto
1. Acesse o [Google Cloud Console](https://console.cloud.google.com/).
2. Faça login com sua conta Google.
3. No topo da página, clique no seletor de projetos e selecione **"Novo Projeto"** (*New Project*).
4. Defina o nome do projeto (ex.: `vetPerto-web`) e clique em **"Criar"** (*Create*).
5. Certifique-se de que o projeto recém-criado está selecionado no menu superior.

---

### Passo 2.2: Configurar a Conta de Faturamento (Billing)
1. No menu lateral (ícone de menu ☰), acesse **"Faturamento"** (*Billing*).
2. Clique em **"Vincular uma conta de faturamento"** (*Link a billing account*) ou **"Criar Conta de Faturamento"** (*Manage billing accounts*).
3. Selecione o país (**Brasil**), aceite os termos de serviço e prossiga.
4. Preencha seus dados de identificação e adicione os dados do cartão de crédito.
5. Conclua a ativação.

> [!TIP]
> **Configurar Alerta de Orçamento (Recomendado para Custo Zero):**
> 1. No menu de **Faturamento**, clique em **"Orçamentos e alertas"** (*Budgets & alerts*).
> 2. Clique em **"Criar orçamento"** (*Create budget*).
> 3. Dê o nome de `Limite Gratuito Google Maps` e defina o valor como **R$ 1,00** ou **US$ 1,00**.
> 4. Marque para receber alertas por e-mail quando atingir 50%, 90% e 100% do valor. Assim, você será notificado antes de qualquer possibilidade de cobrança real.

---

### Passo 2.3: Ativar a API do Google Maps
1. No menu superior ou lateral, acesse **"APIs e serviços"** > **"Biblioteca"** (*APIs & Services > Library*).
2. Na barra de pesquisa, digite `Maps JavaScript API`.
3. Clique sobre **"Maps JavaScript API"** e clique no botão **"Ativar"** (*Enable*).
4. *(Opcional / Futuro)* Se desejar busca textual avançada ou geocodificação no futuro, ative também:
   - **Places API (New)**
   - **Geocoding API**

---

### Passo 2.4: Criar um Map ID (Obrigatório para Marcadores Modernos)
A versão moderna do Google Maps utiliza marcadores avançados (`AdvancedMarkerElement`), que exigem um identificador de mapa (**Map ID**).

1. No menu lateral, acesse **"Google Maps Platform"** > **"Gerenciamento de mapas"** (*Map Management*).
2. Clique em **"Criar ID do mapa"** (*Create Map ID*).
3. Preencha:
   - **Nome:** `vetPerto Mapa Principal`
   - **Tipo de mapa:** JavaScript
   - **Opção de raster/vetor:** **Vetor** (*Vector*) - permite melhor desempenho e suporte a marcadores avançados.
4. Clique em **"Salvar"** (*Save*).
5. Copie o **ID do mapa** gerado (uma sequência alfanumérica de 16 caracteres, ex.: `a1b2c3d4e5f67890`).

---

### Passo 2.5: Gerar e Restringir a Chave de API (API Key)

> [!CAUTION]
> **Nunca utilize uma chave de API sem restrições em produção.**
> Em aplicações web estáticas (frontend), a chave de API fica visível no código-fonte do navegador. As **restrições por referenciador HTTP** e **restrições de API** impedem que terceiros utilizem sua chave em outros sites.

1. Acesse **"Google Maps Platform"** > **"Credenciais"** (*Credentials*).
2. Clique em **"Criar credenciais"** > **"Chave de API"** (*Create Credentials > API key*).
3. A chave será gerada. Clique imediatamente em **"Editar chave de API"** (*Edit API key*).
4. Configure as seções conforme abaixo:

#### A. Restrições de aplicativo (*Application restrictions*)
1. Selecione **"Referenciadores HTTP (sites da Web)"** (*Websites / HTTP referrers*).
2. Em **"Restrições de site"**, adicione as URLs autorizadas a consumir sua chave:
   * **Para desenvolvimento local:**
     - `http://localhost:*/*`
     - `http://127.0.0.1:*/*`
   * **Para produção (quando publicar em hospedagem):**
     - `https://seu-dominio.com/*`
     - `https://*.seu-dominio.com/*` (se usar subdomínios)
     - *(ex. para GitHub Pages: `https://seu-usuario.github.io/*`)*

#### B. Restrições de API (*API restrictions*)
1. Selecione **"Restringir chave"** (*Restrict key*).
2. No menu suspenso, marque apenas as APIs ativadas:
   - **Maps JavaScript API**
3. Clique em **"Salvar"** (*Save*).

---

## 3. Resumo das Credenciais Obtidas

Ao final deste processo, você terá duas informações essenciais:

| Credencial | Formato Exemplo | Onde será inserida |
| :--- | :--- | :--- |
| **API Key** | `AIzaSyD-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX` | No arquivo de configuração / script de carregamento |
| **Map ID** | `a1b2c3d4e5f67890` | Na inicialização do mapa no JavaScript |

---

## 4. Referências Oficiais & Políticas
* [Instruções para Restringir Chaves de API](https://docs.cloud.google.com/api-keys/docs/add-restrictions-api-keys)
* [Tabela de Preços do Google Maps Platform](https://cloud.google.com/maps-platform/pricing?utm_campaign=gmp_git_agentskills_v1)
* [Termos de Serviço do Google Maps Platform](https://cloud.google.com/maps-platform/terms?utm_campaign=gmp_git_agentskills_v1)
