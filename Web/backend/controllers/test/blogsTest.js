import Post from "../../models/postModel.js";
import User from "../../models/userModel.js";
import chai from 'chai'
import chaiHttp from 'chai-http'
import should from 'should';
import { expect } from "chai";
import server from '../../server.js'
import generateToken from '../../utils/generateToken.js';

chai.use(chaiHttp)
describe("Blog API", () => {

    describe('Posts', () => {
        beforeEach((done) => {
            Post.deleteOne({}, (err) => {
                done();
            });
            // User.deleteOne({}, (err) => {
            //     done();
            // })
        });

        describe('/GET posts', () => {
            it('it should GET all the posts', (done) => {
                chai.request('http://127.0.0.1:5000')
                    .get('/api/blogs/:userId')
                    .end((err, res) => {
                        res.status.should.be.equal(200);
                        expect(res.body).to.be.an('array').that.is.empty;
                        done();
                    });
            });
        });
    });

    // let user = new User({ username: "user1", password: "user1", knownAs: "Jeremy", nativeLanguage: "French", 
    //                             isLearning: "German", dateOfBirth: "2001-09-08", gender: "Male", country: "France", 
    //                             city: "Paris", introduction: "Hi, I'm Jeremy" });

    // describe('/POST post', () => {
    //     it('it should post a new post', (done) => {
    //         let user = new User({
    //             username: "user1", password: "user1", knownAs: "Jeremy", nativeLanguage: "French",
    //             isLearning: "German", dateOfBirth: "2001-09-08", gender: "Male", country: "France",
    //             city: "Paris", introduction: "Hi, I'm Jeremy"
    //         });
    //         chai.request('http://127.0.0.1:5000')
    //             .post('/api/users/users/')
    //             .send(user)
    //         user.save();
    //         const token = generateToken(user.id)

    //         let post = {
    //             title: "What I like about Germany",
    //             contents: "I like Brezels.",
    //             userId: user.id,
    //             sectionId: user.isLearning
    //         }
    //         console.log(token);
    //         const config = {
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         }
    //         chai.request('http://127.0.0.1:5000')
    //             .post('/api/blogs/' + user.isLearning, config)
    //             .send(post)
    //             .end((err, res) => {
    //                 res.status.should.be.equal(201);
    //                 expect(res.body).to.be.an('object')
    //                 expect(res.body).to.have.a.property('title');
    //                 done();
    //             });
    //     })
    // });

    describe('/GET posts', () => {
        it('it should GET all the posts for a user', (done) => {
            let user = new User({
                username: "user1", password: "user1", knownAs: "Jeremy", nativeLanguage: "French",
                isLearning: "German", dateOfBirth: "2001-09-08", gender: "Male", country: "France",
                city: "Paris", introduction: "Hi, I'm Jeremy"
            });
            chai.request('http://127.0.0.1:5000')
                .post('/api/users/users/')
                .send(user)
            chai.request('http://127.0.0.1:5000')
                .get('/api/blogs/' + user.id)
                .end((err, res) => {
                    res.status.should.be.equal(200);
                    expect(res.body).to.be.an('array').that.is.empty;
                    done();
                });
        });
    });
});
    // });
// })