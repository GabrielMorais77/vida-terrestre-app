# 🌿 Vida Terrestre — Inventário de Fauna e Flora com IA

Aplicativo móvel para apoiar inventários de biodiversidade (fauna/flora), com foco em:
- registro de espécies em campo,
- visualização em mapa de áreas de risco ambientais,
- uso de IA para reconhecimento assistido de espécies a partir de imagens.

Construído em **React Native + Expo**, com navegação em abas, telas dedicadas para scanner, mapa e detalhes de espécies.

---

## 1. Descrição do Problema

O monitoramento da biodiversidade em unidades de conservação, áreas rurais e zonas de expansão urbana ainda é, em muitos casos, um processo:

- **manual**, baseado em planilhas, cadernos de campo e registros dispersos;
- **pouco integrado**, dificultando análises consolidadas entre fauna, flora e pressão antrópica;
- **reativo**, onde riscos (desmatamento, perda de habitat, espécies ameaçadas) são identificados tardiamente.

Isso impacta diretamente:

- equipes de **gestão ambiental** que precisam de dados atualizados para tomada de decisão;
- **pesquisadores** e **ONGs** que precisam de séries históricas confiáveis;
- órgãos públicos que necessitam de informação estruturada para políticas de conservação.

O app **Vida Terrestre** nasce para prototipar uma solução que centralize avistamentos de espécies, apoie o reconhecimento por IA a partir de fotos e destaque áreas de risco em um mapa interativo.

---

## 2. Justificativa (Relevância Social)

O projeto se conecta diretamente com a **Agenda 2030 da ONU**, em especial:

- **ODS 15 – Vida Terrestre**  
  - Conservação, recuperação e uso sustentável de ecossistemas terrestres.  
  - Monitoramento de espécies vulneráveis e ameaçadas.
- (Indiretamente) **ODS 13 – Ação Contra a Mudança Global do Clima**  
  - Apoio a políticas de mitigação e adaptação via informação qualificada sobre impactos em habitats.
- (Indiretamente) **ODS 11 – Cidades e Comunidades Sustentáveis**  
  - Gestão territorial mais responsável em zonas periurbanas e rurais.

**Justificativa técnica e social:**

- Facilitar **inventários participativos** (profissionais + cidadãos) com tecnologia móvel acessível.
- Prover uma base para **análises espaciais** de risco (ex.: sobreposição de avistamentos com áreas de desmatamento).
- Criar um ponto de partida para integrar **modelos de IA** (classificadores de imagem) ao fluxo de campo, reduzindo o tempo de identificação preliminar de espécies.

O README justifica o uso de IA como componente estratégico:  
> O reconhecimento automático não substitui o especialista, mas **acelera a triagem** e permite que equipes foquem esforço na validação e na análise ecológica, não apenas na coleta manual de dados.

---

## 3. Público-Alvo

O aplicativo é voltado a:

- **Gestores de unidades de conservação** (federais, estaduais, municipais);
- **Órgãos ambientais** (secretarias, agências reguladoras);
- **Pesquisadores e estudantes** de biologia, ecologia e ciências ambientais;
- **ONGs e coletivos socioambientais** envolvidos em monitoramento de fauna/flora;
- **Cientistas cidadãos** e voluntários engajados em ações de conservação.

Benefícios diretos:

- Centralização de registros de espécies com localização, status de conservação e data.
- Visualização intuitiva de **áreas de risco** (desmatamento, pressão urbana).
- Suporte a **trabalho de campo** com coleta rápida, mesmo com conectividade limitada (visão futura).

---

## 4. Objetivos do Aplicativo

### 4.1 Objetivo Geral

Prover um protótipo funcional de aplicativo móvel para **inventário de fauna e flora com suporte de IA**, integrando:

- listagem e busca de espécies;
- visualização em mapa de áreas de risco;
- scanner de espécies por imagem (simulado no protótipo, planejado para IA real).

### 4.2 Objetivos Específicos (mensuráveis)

1. **Cadastro e consulta rápida de espécies**  
   - Permitir que o usuário encontre uma espécie em até **3 interações** (busca + toque no card).
2. **Visualização de risco**  
   - Exibir, em uma tela dedicada, um mapa com marcadores de:
     - avistamentos recentes;
     - áreas de desmatamento / risco (planejado).
3. **Reconhecimento assistido por IA**  
   - Disponibilizar um fluxo de captura de imagem com sugestão automática de espécie (no protótipo: simulado; na evolução: integração com modelo real).
4. **Suporte a tomada de decisão**  
   - Fornecer, para cada espécie, ao menos:
     - nome comum,
     - nome científico,
     - status de conservação (segura, vulnerável, ameaçada),
     - localização e data do último registro.

---

## 5. Tipo de Aplicação

- **Tipo:** Aplicativo móvel **híbrido/cross-platform**  
- **Tecnologias principais:**
  - **React Native** (via **Expo**)
  - **TypeScript**
  - **React Navigation** (stack + bottom tabs)

O app foi desenhado para rodar em:

- **Android** (via Expo Go, build ou emulador);
- **iOS** (via Expo Go, build ou simulador);
- **Web** (via `expo start --web`, útil para demonstrações e testes de layout, podendo evoluir para PWA).

---

## 6. Arquitetura da Aplicação

Estrutura principal do projeto:

```text
src/
  components/
    SpeciesCard.tsx       # Card de espécie (lista principal)
    StatusBadge.tsx       # Badge visual com status de conservação
  data/
    species.ts            # Lista estática de espécies (mock de banco/API)
  screens/
    HomeScreen.tsx        # Tela inicial com busca, cards e alerta de risco
    MapScreen.tsx         # Tela de mapa (placeholders de mapa/área de risco)
    ScannerScreen.tsx     # Tela de scanner (simulação de IA)
    SpeciesDetailScreen.tsx # Detalhes de espécie selecionada
App.tsx                   # Navegação (Stack + Bottom Tab)
app.json                  # Configuração Expo (nome, ícone, esquema etc.)
