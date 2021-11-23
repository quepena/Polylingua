// process.env.NODE_ENV = 'test';

// // import { createRequire } from 'module';
// // const require = createRequire(import.meta.url);

var base = process.env.PWD;
var config = process.env.DUMMY_MONGO_URI;
import mongoose from 'mongoose';
import registerUser from "../userController.js";
import User from '../../models/userModel.js';
import should from 'should';
import testUtils from '../../test/utils.js';

describe("User API", function () {
    var dummyUser;
    before(function (done) {
        mongoose.connect(config, function () {
            console.log("eueueu"+config);
            done();
        })

        // dummyUser = new User({
        //     'username': 'dummyuser',
        //     'password': 'dummyuser',
        //     'knownAs': 'Dummy',
        //     'nativeLanguage': 'french',
        //     'isLearning': 'spanish',
        //     'dateOfBirth': '2000-04-03',
        //     'gender': 'Male',
        //     'country': 'Spain',
        //     'city': 'Barcelona',
        //     'introduction': 'dummy user'
        // })

        // dummyUser.save(function (err, user) {
        //     if (err) {
        //         console.log(err);
        //     }
        //     id = user._id;
        // })
    })

    // describe("Create User", function () {
    //     it("should create a new user", function (done) {
    //         var req = {
    //             body: {
    //                 'username': 'dummyuser',
    //                 // 'password': 'dummyuser',
    //                 'knownAs': 'Dummy',
    //                 // 'nativeLanguage': 'french',
    //                 // 'isLearning': 'spanish',
    //                 // 'dateOfBirth': '2000-04-03',
    //                 // 'gender': 'Male',
    //                 // 'country': 'Spain',
    //                 // 'city': 'Barcelona',
    //                 // 'introduction': 'dummy user'
    //             }
    //         }

    //         var res = testUtils.responseValidator(200, function (user) {
    //             user.should.have.property('username');
    //             user.username.should.equal('dummyuser');
    //             user.should.have.property('knownAs');
    //             user.body.should.equal('Dummy');
    //             done();
    //         })

    //         user.createUser(req, res)

    //     })
    // })
})