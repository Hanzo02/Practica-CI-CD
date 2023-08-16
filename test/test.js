const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); 

chai.use(chaiHttp);
const expect = chai.expect;

describe('Pruebas de la aplicación web', () => {
    it('retornar "Hola, haciendo pruebas"', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('Hellouda, haciendo pruebas');
                done();
            });
    });
});