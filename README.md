# Automação da API Chuck Norris

Este projeto automatiza testes da API pública do Chuck Norris usando Cypress com JavaScript. A ideia é validar dois endpoints principais, garantindo que o consumo das APIs
funcione corretamente e de forma confiável.

## Cenários de Teste Automatizados

**Cenário: Requisição bem-sucedida para a lista de categorias**  
&nbsp;&nbsp; **Dado** o endpoint `https://api.chucknorris.io/jokes/categories`  
&nbsp;&nbsp; **Quando** eu fizer uma requisição GET para esse endpoint  
&nbsp;&nbsp; **Então** a resposta deve ter status 200  
&nbsp;&nbsp; **E** a resposta deve conter uma lista de categorias  
<br>

**Cenário: Obter piada de uma categoria válida**  
&nbsp;&nbsp; **Dado** que possuo uma categoria válida  
&nbsp;&nbsp; **Quando** eu fizer uma requisição GET para `https://api.chucknorris.io/jokes/random?category={category}`  
&nbsp;&nbsp; **Então** a resposta deve ter status 200  
&nbsp;&nbsp; **E** o campo "value" deve conter uma piada  
&nbsp;&nbsp; **E** o campo "categories" deve conter a categoria utilizada na requisição  
<br>

**Cenário: Obter piada com categoria inválida**  
&nbsp;&nbsp; **Dado** uma categoria inexistente  
&nbsp;&nbsp; **Quando** eu fizer uma requisição GET para `https://api.chucknorris.io/jokes/random?category={category}`  
&nbsp;&nbsp; **E** enviar a categoria inexiste como parâmetro  
&nbsp;&nbsp; **Então** a resposta deve ter status 404  
<br>

**Cenário: Validar estrutura da resposta ao requisitar piada por categoria válida**  
&nbsp;&nbsp; **Dado** que eu obtenho uma categoria válida da lista de categorias  
&nbsp;&nbsp; **Quando** eu fizer uma requisição GET para `https://api.chucknorris.io/jokes/random?category={category}`  
&nbsp;&nbsp; **Então** a resposta deve conter os campos obrigatórios: "categories", "created_at", "icon_url", "id", "updated_at", "url", "value"

## Endpoints Testados

Os seguintes endpoints foram testados:

* ConsultaCategoria – GET /jokes/categories<br>
Retorna uma lista de categorias de piadas disponíveis.

*  ConsultaJokes – GET /jokes/random?category={category}<br>
Retorna uma piada aleatória com base na categoria informada.

## Tecnologias utilizadas

* Cypress (versão 14.3.0)
* JavaScript

## Como Executar os Testes

1. Clone o repositório:
`git clone git@github.com:humbertoguerrer/automacao-chucknorris-api.git`

2. Instale as dependências:
`npm intall`

3. Execute os testes com a interface do Cypress:
`npx cypress open`

4. Ou em modo headless (sem interface):
`npx cypress run`
