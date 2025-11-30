# 🌿 Vida Terrestre

<div align="center">

**Inventário de Fauna e Flora com IA**

[![React Native](https://img.shields.io/badge/React%20Native-0.74-61DAFB?style=flat&logo=react&logoColor=white)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-SDK%2051-000020?style=flat&logo=expo&logoColor=white)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

*Apoiando a conservação da biodiversidade através da tecnologia*

[Características](#-características) • [Instalação](#-instalação) • [Como Usar](#-como-usar) • [Arquitetura](#-arquitetura) • [Roadmap](#-roadmap)

</div>

---

## 📋 Sobre o Projeto

**Vida Terrestre** é um aplicativo móvel desenvolvido para apoiar inventários de biodiversidade em campo, integrando tecnologia de reconhecimento de imagens por IA para identificação assistida de espécies de fauna e flora.

### 🎯 Problema que Resolve

O monitoramento da biodiversidade ainda enfrenta desafios significativos:

- **Processos manuais** baseados em planilhas e registros dispersos
- **Falta de integração** entre dados de fauna, flora e pressão antrópica
- **Identificação tardia de riscos** ambientais (desmatamento, perda de habitat)
- **Dificuldade de análise** consolidada e tomada de decisão baseada em dados

### 🌍 Alinhamento com os ODS

Este projeto contribui diretamente para os Objetivos de Desenvolvimento Sustentável da ONU:

| ODS | Contribuição |
|-----|--------------|
| **ODS 15** - Vida Terrestre | Conservação e monitoramento de ecossistemas terrestres e espécies vulneráveis |
| **ODS 13** - Ação Contra a Mudança Climática | Apoio a políticas de mitigação através de informação qualificada |
| **ODS 11** - Cidades Sustentáveis | Gestão territorial responsável em zonas periurbanas e rurais |

---

## ✨ Características

### 🔍 Scanner Inteligente
- Captura de imagens via câmera ou galeria
- Reconhecimento assistido por IA com níveis de confiança
- Sugestões automáticas de espécies (top 3)
- Interface otimizada para uso em campo

### 🗺️ Mapeamento de Risco
- Visualização georreferenciada de avistamentos
- Marcação de áreas de risco ambiental
- Localização em tempo real
- Suporte a múltiplas camadas de informação

### 📚 Banco de Espécies
- Busca rápida por nome comum ou científico
- Informações detalhadas sobre cada espécie
- Status de conservação (IUCN)
- Histórico de avistamentos

### 🌐 Internacionalização
- Suporte a múltiplos idiomas (PT/EN)
- Interface adaptável ao contexto do usuário

### 🎨 Design Responsivo
- Tema escuro para uso em campo
- Interface otimizada para dispositivos móveis
- Experiência consistente em Android e iOS

---

## 👥 Público-Alvo

- 🏛️ Gestores de unidades de conservação
- 🔬 Pesquisadores e estudantes de biologia/ecologia
- 🌱 ONGs e coletivos socioambientais
- 🏢 Órgãos ambientais governamentais
- 👨‍🔬 Cientistas cidadãos e voluntários

---

## 🚀 Instalação

### Pré-requisitos

- Node.js >= 18.x
- npm ou yarn
- Expo Go (para testar no dispositivo)

### Configuração do Ambiente

```bash
# Clone o repositório
git clone https://github.com/SEU_USUARIO/vida-terrestre-app.git
cd vida-terrestre-app

# Instale as dependências
npm install
# ou
yarn install

# Inicie o servidor de desenvolvimento
npx expo start
```

### 📱 Testando no Dispositivo

1. Instale o app **Expo Go** no seu dispositivo:
   - [Android - Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - [iOS - App Store](https://apps.apple.com/app/expo-go/id982107779)

2. Escaneie o QR Code exibido no terminal

3. O app será aberto automaticamente no Expo Go

---

## 💻 Como Usar

### 🏠 Tela Inicial (Home)
- Navegue pela lista de espécies cadastradas
- Use a barra de busca para encontrar espécies específicas
- Toque em qualquer card para ver detalhes completos

### 📸 Scanner de Espécies
1. Acesse a aba "Scanner"
2. Conceda permissão de acesso à câmera
3. Capture uma foto ou selecione da galeria
4. Visualize as sugestões de identificação com níveis de confiança

### 🗺️ Mapa de Áreas de Risco
- Visualize avistamentos registrados
- Identifique áreas de risco ambiental
- Navegue pelo mapa com gestos intuitivos

> **Nota:** O mapa completo está disponível apenas nas versões Android e iOS

---

## 🏗️ Arquitetura

### Stack Tecnológico

```
┌─────────────────────────────────────┐
│         React Native (Expo)         │
├─────────────────────────────────────┤
│  • TypeScript                       │
│  • React Navigation                 │
│  • Expo Camera                      │
│  • Expo Image Picker                │
│  • React Native Maps                │
│  • Expo Location                    │
└─────────────────────────────────────┘
```

### Estrutura de Pastas

```
src/
├── components/          # Componentes reutilizáveis
│   ├── SpeciesCard.tsx
│   └── StatusBadge.tsx
├── data/               # Dados mockados
│   └── species.ts
├── i18n/               # Internacionalização
│   └── index.ts
├── screens/            # Telas da aplicação
│   ├── HomeScreen.tsx
│   ├── ScannerScreen.tsx
│   ├── MapScreen.native.tsx
│   ├── MapScreen.web.tsx
│   └── SpeciesDetailScreen.tsx
├── utils/              # Utilitários
│   └── confidence.ts
└── theme.ts            # Tema centralizado
```

---

## 📊 Requisitos do Sistema

### Desenvolvimento
- **SO:** Windows 10+, macOS ou Linux
- **Node.js:** 18.x ou superior
- **npm:** 9+ ou Yarn

### Dispositivos Móveis

#### Android
- Android 8.0 (API 26) ou superior
- Expo Go instalado via Google Play

#### iOS
- iOS 13 ou superior
- Expo Go via App Store

### Web (Demonstração)
- Navegadores modernos (Chrome, Edge, Firefox, Safari)
- Uso recomendado apenas para avaliar layout

---

## 🗺️ Roadmap

### 🎯 Próximas Funcionalidades

#### v2.0 - Integração com IA Real
- [ ] Conexão com API de visão computacional
- [ ] Treinamento com datasets específicos de fauna/flora
- [ ] Melhoria contínua da acurácia

#### v2.1 - Backend e Persistência
- [ ] API REST para registro de avistamentos
- [ ] Banco de dados para histórico
- [ ] Sincronização offline/online
- [ ] Sistema de autenticação

#### v2.2 - Funcionalidades Avançadas
- [ ] Filtros por espécie, risco e período
- [ ] Mapa de calor (heatmap) de avistamentos
- [ ] Exportação de relatórios
- [ ] Sistema de alertas para áreas críticas

#### v3.0 - Colaboração e Comunidade
- [ ] Perfis de usuário
- [ ] Sistema de validação por especialistas
- [ ] Gamificação e badges
- [ ] Integração com plataformas de ciência cidadã

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add: nova funcionalidade incrível'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Diretrizes de Código
- Use TypeScript para type safety
- Siga o padrão de código existente
- Adicione testes para novas funcionalidades
- Atualize a documentação conforme necessário

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

**Gabriel de Morais Rodrigues**

- GitHub: [(https://github.com/GabrielMorais77)](https://github.com/seu-usuario)
- LinkedIn: [meu-perfil](https://www.linkedin.com/in/gabriel-morais-3078338a/)
- Email: gabriel.morais777rodrigues@gmail.com

---

## 🙏 Agradecimentos

- Comunidade React Native e Expo
- Instituições de conservação que inspiraram este projeto
- Todos os contribuidores e apoiadores

---

<div align="center">

**Desenvolvido com 💚 para a conservação da biodiversidade**

⭐ Se este projeto foi útil, considere dar uma estrela!

</div>