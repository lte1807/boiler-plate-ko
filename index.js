const express = require('express') //다운받은 모듈을 가져와서 express 변수에 저장
const app = express() //function을 이용하여 새로운 express app을 만든다.
const port = 5000 // 포트 번호 포트는 3000번이든 4000번이든 아무거나 상관없다.
const bodyParser = require('body-parser');
const { User } = require("./models/User");
const config = require("./config/key");

app.use(bodyParser.urlencoded({ extended: true })); //application/x-www-form-urlencoded
app.use(bodyParser.json());//application/json

const mongoose = require('mongoose'); //몽고스 모듈 가져오기
//몽고DB node.js와 연동하는법
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true //이걸 안써주면 에러가 뜬다.
}).then(() => console.log('MongoDB Connected...')) //연결이 잘됐는지 안됐는지 확인
    .catch(err => console.log(err))

//mongoose 버전이 6 이상일 경우 useCreateIndex, useFindAndModify를 입력을 안해도 됨, 기본으로 되어있어 필요없어졌음


//루트 디렉토리에 오면 핼로우월드를 출력해준다. 출력 라우트
app.get('/', (req, res) => {
    res.send('Hello World! ') //req : 요청, res: 응답 .send : 브라우저로 요청값을 보낸다.
})

app.post('/register', (req, res) => {
    //회원가입할 때 필요한 정보들을 client에서 가져오면,
    //그 정보들을 DB에 넣어준다.
    const user = new User(req.body);
    //user모델에 정보가 저장됨
    //실패 시, 실패한 정보를 보내줌
    user.save().then(() => {
        res.status(200).json({
            success: true
        })
    }).catch((err) => {
        return res.json({ success: false, err })
    });


})

//원하는 포트에 서버를 오픈하는 문법, listen() 함수 안엔 두개의 파라미터가 필요 listen(서버를 오픈할 포트번호, function(){서버 오픈시 실행할 코드})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
