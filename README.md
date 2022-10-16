# projeto autoral-GeekBook

<p align="center">
  <img  src="./src/assets/images/book-removebg-preview.png">
</p>
<h1 align="center">
  GeekBook
</h1>
<div align="center">

  <h3>Built With</h3>

  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" height="30px"/>
  
</div>

<br/>

# Description

GeekBook é um gerenciamento de mangás, animes, séries e novels.

</br>

## Features

- Criar uma conta e acessá-la
- Cadastrar uma obra e mudar qual foi seu último capítulo/episódio visto
- Criar um top 10 ranking das suas obras cadastradas
- Compartilhar sua coleção e ranking atraves de um link

</br>

## Rotas

### /home

Essa rota lista suas obras cadastradas ativas.

Nela é possivel:

- Visualizar o pôster e a sinopse da obra.
- Visualizar e mudar o status da obra
- Visualizar e mudar o ultímo capítulo/episódio visto
  - Ao clicar no último capítulo/episodio da obra aparecera um input, para salvar o valor deve-se apertar o enter, Esc ou clicar no X o input some.
- Deletar a obra de sua coleção
- Filtrar sua lista pelo nome

<h1 align="center" >
<img alt="gif" src="./readme/home.gif">
</h1>

#

### /complete

Essa rota lista suas obras cadastradas completas.

Nela é possivel:

- Visualizar o pôster da obra.
- Visualizar e mudar o status da obra
- Visualizar e mudar o ultímo capítulo/episódio visto
  - Ao clicar no último capítulo/episodio da obra aparecera um input, para salvar o valor deve-se apertar o enter, Esc ou clicar no X o input some.
- Deletar a obra de sua coleção
- Filtrar sua lista pelo nome

<h1 align="center" >
<img alt="gif" src="./readme/complete.gif">
</h1>

#

### /add

Nessa rota é possivel cadastrar uma obra em sua coleção.

- Categoria:
  - Selecione uma categoria e insira o nome da obra que você deseja acompanhar
    - O input de nome mostra as obras já cadastradas, caso você escolha uma delas a sinopse e o pôster virão preenchidos
- Descrição (opcional)
  - Preencha a sinopse e o link do pôster
- Informações adicionais
  - Preencha o último capítulo/episodio visto e o status dela

<h1 align="center" >
<img alt="gif" src="./readme/add.gif">
</h1>

#

### /ranking

Nessa rota é possivel visualizar e mudar seu top 10 ranking.

- O input, do tipo auto complete, mostra as obras disponiveis para cada lugar do ranking

<h1 align="center" >
<img alt="gif" src="./readme/ranking.gif">
</h1>

#

## Feature: Compartilhar coleção

Ao clicar no compartilhar, localizado no sidebar, um link será gerado, ao acessar esse link será possivel visualizar a coleção e o ranking do dono do link

<h1 align="center" >
<img alt="gif" src="./readme/share.gif">
</h1>

#

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_BASE_URL`

- endereço HTTP do backEnd, sem a barra final.

- Ex: http://localhost:5000

`VITE_APP_URL`

- endereço HTTP do frontEnd, sem a barra final.

- Ex: http://127.0.0.1:5173

#

## Run Locally

Clone the project

```bash
  git clone https://github.com/ThVinicius/geekBook_FrontEnd.git
```

Go to the project directory

```bash
  cd geekBook_FrontEnd
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

</br>

## Acknowledgements

- [Awesome Badges](https://github.com/Envoy-VC/awesome-badges)

</br>

## Authors

- Vinicius Pacheco is a student at Driven Education and is putting effort into it to switch careers. Nowadays he works with Engineering,
  looking forward to become a Dev.
  <br/>

#
