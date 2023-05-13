const mongoose = require('mongoose');

//스키마 생성
const userSchema = mongoose.Schema({
    //이름
    name: {
        type: String,
        maxlength: 50
    },
    //이메일
    email: {
        type: String,
        trim: true, //lee tae@naver.com 빈칸을 없애주는 역할
        unique: 1
    },
    password: {
        type: String,
        maxlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: { //일반유저와 관리자유저를 구분
        type: Number,
        default: 0 //지정하지않으면 기본값은 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

const User = mongoose.model('User', userSchema);

module.exports = { User }