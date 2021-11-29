import City from "../../models/cityModel.js";
import Country from "../../models/countryModel.js";
import chai from 'chai'
import chaiHttp from 'chai-http'
import should from 'should';
import { expect } from "chai";
import server from '../../server.js'

chai.use(chaiHttp)
describe("City API", () => {

    describe('Cities', () => {
        beforeEach((done) => {
            City.deleteOne({}, (err) => {
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
    
    describe('/GET cities', () => {
        it('it should GET all the cities for a country', (done) => {
            let country = new Country({
                countryName: "France"
            });
            chai.request('http://127.0.0.1:5000')
                .post('/api/countries/')
                .send(country)
                console.log(country);
            chai.request('http://127.0.0.1:5000')
                .get('/api/cities/' + country.id)
                .end((err, res) => {
                    res.status.should.be.equal(200);
                    expect(res.body).to.be.an('array').that.is.empty;
                    done();
                });
        });
    });
})