import bcrypt from 'bcryptjs'

const users = [
    {
        username: 'antoine123',
        password: bcrypt.hashSync('antoine123', 15),
        knownAs: 'Antoine',
        nativeLanguage: "616dbf56a6d657519cbfdd4f",
        isLearning: "616dbf56a6d657519cbfdd450",
        dateOfBirth: "1998-05-02",
        gender: "Male",
        country: "616dbf56a6d657519cbfdd52",
        city: "616db6f9cdd07b901355c539",
        introduction: "I am Antoine",
        created: "2021-18-10",
        lastActive: "2021-18-10",
        isAdmin: false,
    },
]

export default users