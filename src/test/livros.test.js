const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const { expect } = chai;
chai.use(chaiHttp);

describe('API de Livros', () => {

    it('deve retornar a lista de livros', (done) => {
        chai.request(app)
            .get('/livros')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                expect(res.body.length).to.be.greaterThan(0);
                done();
            });
    });

    it('deve adicionar um novo livro', (done) => {
        const novoLivro = { titulo: 'Novo Livro' };
        chai.request(app)
            .post('/livros')
            .send(novoLivro)
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res.body).to.have.property('id');
                expect(res.body).to.have.property('titulo').eql('Novo Livro');
                done();
            });
    });

    it('deve retornar a documentação Swagger na rota /api-docs', (done) => {
        chai.request(app)
            .get('/api-docs')
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });
});
