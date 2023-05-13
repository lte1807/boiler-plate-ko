const express = require('express') //다운받은 모듈을 가져와서 express 변수에 저장
const app = express() //function을 이용하여 새로운 express app을 만든다.
const port = 5000 // 포트 번호 포트는 3000번이든 4000번이든 아무거나 상관없다.

const mongoose = require('mongoose'); //몽고스 모듈 가져오기
//몽고DB node.js와 연동하는법
mongoose.connect('mongodb+srv://lte1807:4psRbKMkrVzpF93K@cluster0.wvkphlm.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true //이걸 안써주면 에러가 뜬다.
}).then(() => console.log('MongoDB Connected...')) //연결이 잘됐는지 안됐는지 확인
    .catch(err => console.log(err))

//mongoose 버전이 6 이상일 경우 useCreateIndex, useFindAndModify를 입력을 안해도 됨, 기본으로 되어있어 필요없어졌음


//루트 디렉토리에 오면 핼로우월드를 출력해준다.
app.get('/', (req, res) => {
    res.send('Hello World!~~~안녕하세요 ~ ') //req : 요청, res: 응답 .send : 브라우저로 요청값을 보낸다.
})

//원하는 포트에 서버를 오픈하는 문법, listen() 함수 안엔 두개의 파라미터가 필요 listen(서버를 오픈할 포트번호, function(){서버 오픈시 실행할 코드})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
