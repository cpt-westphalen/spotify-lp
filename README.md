# Teste técnico

## Estágio em Desenvolvimento Front-end na Prefeitura de Novo Hamburgo

> Descrição:
> Em anexo, encaminhamos uma pasta contendo três arquivos que demonstram o desafio (um pdf com a imagem do projeto e dois vídeos com efeitos visuais esperados) e uma pasta contendo todas as imagens, ícones e tipografias necessárias. Você pode utilizar as linguagens e tecnologias de front-end que achar necessário. Esse é todo o material e especificações que serão disponibilizados.
>
> Critérios de avaliação:
>
> -   Maior aproximação ao projeto completo;
> -   Qualidade e organização da codificação;
> -   Criatividade e desempenho do projeto (utilizamos ferramentas para análise de desempenho).

Prazo: 4 dias.

### Como rodar o projeto?

Requisitos: `NPM`

1. Clone o repositório
2. No terminal, acesse `/web`
3. Execute `npm install` no terminal
4. Ao terminar a instalação das dependências, execute `npm run dev` para o servidor de desenvolvimento
5. Para ter os arquivos de produção, execute `npm run build` (output: /web/dist)

### Stack

-   Vite
-   React
-   TypeScript

### Expectativa

[ imagem ]

### Final

[ imagens ]

#### Destaques

-   Efeitos de hover em links e cards clicáveis
-   Carrossel com transição (dependência leve: `react-responsive-carousel`)
-   Galeria dinâmica, com animações solicitadas (de fácil edição via `src/sections/GallerySection/data`)
-   Animação sutil na seção de 'showcase' do aplicativo
-   Organização de CSS por módulos
-   Uso de variáveis de CSS para cores principais
-   Sem dependências inseguras

#### Limites

-   Sem reponsividade
-   Acessibilidade média
-   Sem testes unitários
-   Links não levam a lugar algum
-   Uso de SPA para landing-page\*

_\* Pela simplicidade da página, poderia ser feita em uma tecnologia de SSR. Optei pelo React + TypeScript por ter maior domínio, o que torna o desenvolvimento mais eficiente (qualidade/tempo)._
