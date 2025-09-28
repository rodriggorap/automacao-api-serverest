
/// <reference types="cypress" />
describe('API do Serverest', () => {
    context('USUARIO', () => {
        it('Criar Usuário', () => {
            cy.fixture('usuario').then(function (usuario) {
                const user = usuario.cria_usuario
                cy.criar_user(user)
            }).then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body.message).to.eq('Cadastro realizado com sucesso')
                Cypress.env('idUsuario', response.body._id)
            })
        });

        it('Teste de falha - Criar Usuário', () => {
            cy.fixture('usuario').then(function (usuario) {
                const user = usuario.cria_usuario
                cy.criar_user(user)
            }).then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.message).to.eq('Este email já está sendo usado')
            })
        });

        it('Listar usuários', () => {
            cy.busca_list_user()
                .then((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body.usuarios).to.be.an('array')
                })
        });

        it('Buscar usuário por ID', () => {
            const id = Cypress.env('idUsuario')
            cy.busca_user(id)
                .then((response) => {
                    expect(response.status).to.eq(200)
                })
        });

        it('Atualizar Usuário', () => {
            cy.fixture('usuario').then(function (usuario) {
                const user = usuario.atualizar_usuario
                const id = Cypress.env('idUsuario')
                cy.atlz_user(id, user)
            }).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.message).to.eq('Registro alterado com sucesso')
            })
        });
    })

    context('LOGIN', () => {
        it('Realiza Login no sistema', () => {
            cy.fixture("usuario").then(function (usuario) {
                const email = usuario.atualizar_usuario.email
                const senha = usuario.atualizar_usuario.password
                cy.login(email, senha)
                    .then((response) => {
                        expect(response.status).to.eq(200)
                        expect(response.body.message).to.eq('Login realizado com sucesso')
                        Cypress.env('token', response.body.authorization)
                    })
            })
        });
    })

    context('PRODUTO', () => {
        it('Cadastro de Produto', () => {
            cy.fixture("produto").then(function (produto) {
                const prod = produto.criar_prod
                cy.criar_prod(prod)
                    .then((response) => {
                        expect(response.status).to.eq(201)
                        expect(response.body.message).to.eq('Cadastro realizado com sucesso')
                        Cypress.env('idProduto', response.body._id)
                    })
            })
        });

        it('Listar produtos', () => {
            cy.busca_list_prod()
                .then((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body.produtos).to.be.an('array')
                })
        });

        it('Buscar produto por ID', () => {
            const id = Cypress.env('idProduto')
            cy.busca_prod(id)
                .then((response) => {
                    expect(response.status).to.eq(200)
                })
        });

        it('Atualizar Produto', () => {
            cy.fixture('produto').then(function (produto) {
                const prod = produto.atlz_prod
                const id = Cypress.env('idProduto')
                cy.atlz_prod(id, prod)
            }).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.message).to.eq('Registro alterado com sucesso')
            })
        });
    })

    context('CARRINHO', () => {
        it('Listar carrinhos', () => {
            cy.busca_list_car()
                .then((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body.carrinhos).to.be.an('array')
                })
        });

        it('Cadastro de Carrinho', () => {
            cy.fixture("carrinho").then(function (carrinho) {
                const car = carrinho.criar_car
                car.produtos[0].idProduto = Cypress.env('idProduto');
                cy.criar_car(car)
                    .then((response) => {
                        expect(response.status).to.eq(201)
                        expect(response.body.message).to.eq('Cadastro realizado com sucesso')
                        Cypress.env('idCarrinho', response.body._id)
                    })
            })
        });

        it('Buscar carrinho por ID', () => {
            const id = Cypress.env('idCarrinho')
            cy.busca_car(id)
                .then((response) => {
                    expect(response.status).to.eq(200)
                })
        });

        it('Concluir compra', () => {
            cy.conc_comp()
                .then((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body.message).to.eq('Registro excluído com sucesso')
                })
        });

        /*
            it('Cancelar compra', () => {
                cy.canc_comp()
                    .then((response) => {
                        expect(response.status).to.eq(200)
                        expect(response.body.message).to.eq('Registro excluído com sucesso. Estoque dos produtos reabastecido')
                    })
            });
        */
    })

    context('DELETAR PRODUTO E USUÁRIO', () => {
        it('Deletar produto por ID', () => {
            cy.del_prod()
                .then((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body.message).to.eq('Registro excluído com sucesso')
                })
        });

        it('Deletar usuário por ID', () => {
            cy.del_user()
                .then((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body.message).to.eq('Registro excluído com sucesso')
                })
        });
    })


})