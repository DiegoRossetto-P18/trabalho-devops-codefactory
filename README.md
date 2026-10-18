# Projeto DevOps - CodeFactory Solutions

## Sobre o projeto

Este projeto demonstra a adoção de práticas DevOps na empresa
fictícia CodeFactory Solutions.

Foi desenvolvida uma aplicação web para gerenciamento de tarefas,
utilizando versionamento com Git e GitHub, colaboração por branches
e Pull Requests, containerização com Docker e integração contínua
com GitHub Actions.

## Objetivo

Organizar e padronizar o fluxo de desenvolvimento da CodeFactory
Solutions, tornando o processo mais colaborativo, automatizado
e confiável.

## Funcionalidades

- Cadastro de tarefas;
- Marcação de tarefas concluídas;
- Exclusão de tarefas;
- Armazenamento no navegador;
- Execução em container Docker;
- Verificação automática com GitHub Actions.

## Tecnologias utilizadas

- HTML5;
- CSS3;
- JavaScript;
- Git;
- GitHub;
- Docker;
- Nginx;
- GitHub Actions.

## Estrutura de pastas

```text
trabalho-devops-codefactory/
├── .github/
│   └── workflows/
│       └── ci.yml
├── src/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── .dockerignore
├── Dockerfile
├── LICENSE
└── README.md
```

## Instalação

Clone o repositório:

```bash
git clone https://github.com/Uninteertrabalho/trabalho-devops-codefactory.git
```

Entre na pasta:

```bash
cd trabalho-devops-codefactory
```

## Execução sem Docker

Abra o arquivo:

```text
src/index.html
```

Também é possível utilizar a extensão Live Server no VS Code.

## Execução com Docker

Construa a imagem:

```bash
docker build -t app-codefactory .
```

Execute o container:

```bash
docker run -d --name codefactory-container -p 8080:80 app-codefactory
```

Acesse:

```text
http://localhost:8080
```

## Integração contínua

O projeto utiliza GitHub Actions para verificar os arquivos
obrigatórios e construir automaticamente a imagem Docker.

## Fluxo de desenvolvimento

1. Criação de uma Issue;
2. Criação de uma branch;
3. Desenvolvimento e commits;
4. Envio da branch;
5. Criação de Pull Request;
6. Revisão e merge.

## Autores

- Elaine Pereira Cavalcanti 
- Diego Rossetto Pereira 

## Licença

Este projeto utiliza a licença MIT.
