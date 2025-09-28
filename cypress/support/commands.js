Cypress.Commands.add('criar_user', (user) => {
    cy.api({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        body: user,
        failOnStatusCode: false
    }).then((response) => { return response })
})

Cypress.Commands.add('busca_list_user', () => {
    cy.api({
        method: 'GET',
        url: 'https://serverest.dev/usuarios'
    }).then((response) => { return response })
})

Cypress.Commands.add('busca_user', (id) => {
    cy.api({
        method: 'GET',
        url: `https://serverest.dev/usuarios/` + id
    }).then((response) => { return response })
})

Cypress.Commands.add('atlz_user', (id, user) => {
    cy.api({
        method: 'PUT',
        url: `https://serverest.dev/usuarios/` + id,
        body: user
    }).then((response) => { return response })
})

Cypress.Commands.add('del_user', () => {
    cy.api({
        method: 'DELETE',
        url: `https://serverest.dev/usuarios/${Cypress.env('idUsuario')}`
    }).then((response) => { return response })
})

Cypress.Commands.add('login', (email, senha) => {
    cy.api({
        method: 'POST',
        url: 'https://serverest.dev/login',
        body: { email: email, password: senha }
    }).then((response) => { return response })
})

Cypress.Commands.add('criar_prod', (prod) => {
    cy.api({
        method: 'POST',
        url: 'https://serverest.dev/produtos',
        body: prod,
        headers: {authorization: Cypress.env('token')}
    }).then((response) => { return response })
})

Cypress.Commands.add('busca_list_prod', () => {
    cy.api({
        method: 'GET',
        url: 'https://serverest.dev/produtos',
        headers: {authorization: Cypress.env('token')}
    }).then((response) => { return response })
})

Cypress.Commands.add('busca_prod', (id) => {
    cy.api({
        method: 'GET',
        url: `https://serverest.dev/produtos/` + id,
        headers: {authorization: Cypress.env('token')}
    }).then((response) => { return response })
})

Cypress.Commands.add('atlz_prod', (id, prod) => {
    cy.api({
        method: 'PUT',
        url: `https://serverest.dev/produtos/` + id,
        body: prod,
        headers: {authorization: Cypress.env('token')}
    }).then((response) => { return response })
})

Cypress.Commands.add('del_prod', () => {
    cy.api({
        method: 'DELETE',
        url: `https://serverest.dev/produtos/${Cypress.env('idProduto')}`,
        headers: {authorization: Cypress.env('token')}
    }).then((response) => { return response })
})

Cypress.Commands.add('busca_list_car', () => {
    cy.api({
        method: 'GET',
        url: 'https://serverest.dev/carrinhos',
        headers: {authorization: Cypress.env('token')}
    }).then((response) => { return response })
})

Cypress.Commands.add('criar_car', (car) => {
    cy.api({
        method: 'POST',
        url: 'https://serverest.dev/carrinhos',
        body: car,
        headers: {authorization: Cypress.env('token')}
    }).then((response) => { return response })
})

Cypress.Commands.add('conc_comp', () => {
    cy.api({
        method: 'DELETE',
        url: 'https://serverest.dev/carrinhos/concluir-compra',
        headers: {authorization: Cypress.env('token')}
    }).then((response) => { return response })
})

Cypress.Commands.add('canc_comp', () => {
    cy.api({
        method: 'DELETE',
        url: 'https://serverest.dev/carrinhos/cancelar-compra',
        headers: {authorization: Cypress.env('token')}
    }).then((response) => { return response })
})

Cypress.Commands.add('busca_car', (id) => {
    cy.api({
        method: 'GET',
        url: `https://serverest.dev/carrinhos/` + id,
        headers: {authorization: Cypress.env('token')}
    }).then((response) => { return response })
})