import Language from "../../models/languageModel.js";
import chai from 'chai'
import chaiHttp from 'chai-http'
import should from 'should';
import { expect } from "chai";
import server from '../../server.js'

chai.use(chaiHttp)
describe("Language API", () => {

    describe('Languages', () => {
        beforeEach((done) => {
            Language.deleteOne({}, (err) => {
                done();
            });
        });   

        // describe('/GET Cities', () => {
        //     it('it should GET all the cities', (done) => {
        //         chai.request('http://127.0.0.1:5000')
        //             .get('/api/cities')
        //             .end((err, res) => {
        //                 res.status.should.be.equal(200);
        //                 expect(res.body).to.be.an('array').that.is.empty;
        //                 done();
        //             });
        //     });
        // });

    });
    
    describe('/GET languages', () => {
        it('it should GET all the languages', (done) => {
            chai.request('http://127.0.0.1:5000')
                .get('/api/languages/')
                .end((err, res) => {
                    res.status.should.be.equal(200);
                    expect(res.body).to.be.an('array').that.is.empty;
                    done();
                });
        });
    });
})