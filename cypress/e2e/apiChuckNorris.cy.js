// cypress/e2e/apiChuckNorris.cy.js

describe('Testes da API Chuck Norris', () => {

    it('Lista as categorias disponíveis', () => {
        cy.request('https://api.chucknorris.io/jokes/categories').then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body).to.be.an('array');
            expect(res.body).not.be.empty;

        })
    })

    it('Busca uma piada para cada categoria válida', () => {
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

    it('Verifica que possui todos os elementos na resposta', () => {
        cy.request('https://api.chucknorris.io/jokes/categories').then((res) => {
            const categoria = res.body[0];

            cy.request(`https://api.chucknorris.io/jokes/random?category=${categoria}`).then((res) => {
                expect(res.status).to.eq(200);
                expect(res.body).to.include.keys(
                    'categories',
                    'created_at',
                    'icon_url',
                    'id',
                    'updated_at',
                    'url',
                    'value'                   
                );
            });
        });
    });
});