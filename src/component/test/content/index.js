import React,{useState,useEffect} from 'react';
import json_date from './date.json';
import './reset.css';
import {Global,Content,Title,Choice,Footer,GageBar} from './style';
import imgA from './rocket.png';
import {useHistory} from 'react-router-dom';
const Test = () => {
    const history = useHistory();
    const [score, setscore]=useState(0);
    const [question,setQuesetion]=useState();
    const [counter,setCounter]=useState(0);
    const counterArrey = ['첫','두','세','네','다'];
    const [data,setData]=useState(json_date);

    const rand_question = () => {
        const rand = Math.random() * data.length-1;
        const randInt = parseInt(rand);
        setQuesetion(data[randInt]);
        const tmp=data.filter((e,i)=>{if(i !== randInt)return e;});
        setData(tmp);
        // let randArray = ['10'];
        // console.log(randArray.find(randInt));
        // if(randArray.find(randInt) == undefined){
        //     setQuesetion(json_date[randInt]);
        //     randArray.push(randInt);
        //     console.log(question);
        // } else {
        //     rand_question();
        // }
    };
    const onclick = (e) => {
        if(e.target.id == question.index){
            setscore(score+1);
            console.log(score);
        }
        rand_question();
        setCounter(counter+1);
        if(counter > 3){
            console.log('end');
            history.push({pathname:'/last', state:{score:score}})
            return;
        }
    }
    useEffect(()=>{rand_question();},[]);

    return (
    <>
    <Global/>
    <section className="inner">
        <Title>
            {/* 질문 순번, 질문 내역 */}
            <p className="revised">{counterArrey[counter]}번째 질문</p>
            <p className="question">{question&& question.question}</p>
        </Title>
        {/* 질문 선택 바 */}
        <Content>
            <div className="question_1 box text gage" onClick={onclick}>
            <div id="0" >{question&& question.choice[0]}</div>
            </div>
            <div className="question_2 box text gage" onClick={onclick}>
            <div id="1" >{question&& question.choice[1]}</div>
            </div>
        </Content>
        <Choice>
            <div className="rocket">
            <img src={ imgA } />
            <p className="rocket-text">개발자 시작</p>
            </div>
            {/* page counting */}
            <div className="counting">
            <p>{counter+1} page / 5 page</p>
            </div>
        </Choice>
        <Footer>
            <div className="bar" />
            <GageBar width={counter}></GageBar>
        </Footer>
        {/* 게이지 */}
    </section>
    </>
        
    )
}
export default Test;