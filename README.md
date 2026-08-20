# Projeto DevOps - CodeFactory Solutions

## Sobre o Projeto
Trabalho prático para organizar o fluxo de desenvolvimento da CodeFactory Solutions usando cultura DevOps, padronizando o código e automatizando os processos.

## Objetivos
- Organizar o versionamento do projeto com Git e GitHub
- Criar container com Docker
- Configurar pipeline simples de Integração Contínua (CI)

## Tecnologias
- Git e GitHub
- Docker
- GitHub Actions
- HTML/JS

## Estrutura de Pastas
codefactory-devops/
├── .github/
│   └── workflows/
│       └── ci.yml
├── src/
│   └── index.html
├── Dockerfile
├── LICENSE
└── README.md

## Como Executar

1. Clone o repositório:
git clone https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git

2. Entre na pasta:
cd NOME_DO_REPOSITORIO

3. Rode o container Docker:
docker build -t app-codefactory .
docker run -d -p 8080:80 app-codefactory

4. Acesse no navegador: `http://localhost:8080`

## Licença
MIT LicenseLinha conflitante na main
