# BibliotecaAPI

Uma API simples em Node.js para gerenciar uma coleção de livros. Este projeto foi desenvolvido utilizando o fluxo GitLab.

## Sumário

- [Configuração do Ambiente](#configuração-do-ambiente)
- [Como Usar a API](#como-usar-a-api)
- [Documentação da API](#documentação-da-api)
- [GitLab Flow](#gitlab-flow)

## Configuração do Ambiente

Instruções para configurar o projeto localmente.

1. Verifique se você possui o Node.js e npm instalados em sua máquina. Caso contrário, faça o download em [nodejs.org](https://nodejs.org/).
2. Clone o repositório para sua máquina local com o seguinte comando:
   ```bash
   git clone https://github.com/mvelosoo/api-livros.git
   
## Como Usar a API
A API pode ser acessada por meio de URLs como http://localhost:3000/api/livros. Ferramentas como Postman são recomendadas para testar os endpoints.

Exemplos de Endpoints:
GET /api/livros: Retorna uma lista de todos os livros.
POST /api/livros: Adiciona um novo livro à coleção.

## Documentação da API
A documentação da API é gerada automaticamente pelo Swagger. Para acessá-la, inicie o servidor e abra http://localhost:3000/api-docs no seu navegador.

## GitLab Flow
O desenvolvimento da API segue o modelo GitLab Flow, que é uma abordagem moderna e ágil para controle de versões. Essa metodologia permite um fluxo contínuo de trabalho, facilitando a integração de novas funcionalidades sem comprometer a estabilidade do código. Utilizando branches como `staging` para testes, `feature` para novas implementações e `production` para o código estável, conseguimos garantir um processo colaborativo e eficiente. Essa estrutura não apenas melhora a organização do repositório, mas também permite que a equipe trabalhe de maneira mais coordenada, reduzindo conflitos e aumentando a produtividade.
