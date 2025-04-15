// cypress/e2e/apiChuckNorris.cy.js

describe('Chuck Norris API', () => {
    it('Deve retornar uma lista de categorias', () => {
        cy.request('https://api.chucknorris.io/jokes/categories').then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body).to.be.an('array');
            expect(res.body).not.be.empty;
        })

        
    })
})
