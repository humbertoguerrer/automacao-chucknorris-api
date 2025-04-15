// cypress/e2e/apiChuckNorris.cy.js

describe('Testes da API Chuck Norris', () => {

    let categorias = [];

    it('Lista as categorias disponíveis', () => {
        cy.request('https://api.chucknorris.io/jokes/categories').then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body).to.be.an('array');
            expect(res.body).not.be.empty;

        })
    })

    it('Retorna uma piada para cada categoria válida', () => {

        cy.request('https://api.chucknorris.io/jokes/categories').then((categoriaRes) => {
            const categorias = categoriaRes.body;
            categorias.forEach((categoria) => {
                cy.request(`https://api.chucknorris.io/jokes/random?category=${categoria}`).then((res) => {
                    expect(res.status).to.eq(200);
                    expect(res.body).to.have.property('value');
                    expect(res.body.value).not.be.empty;
                    expect(res.body.categories).to.include(categoria);
                })
            })
        })
    })

    it('Retorna erro 404 para uma categoria inválida', () => {
        cy.request({
            url: 'https://api.chucknorris.io/jokes/random?category=inexistente',
            failOnStatusCode: false
        }).then((res) => {
            expect(res.status).to.eq(404)
        })
    })
})
