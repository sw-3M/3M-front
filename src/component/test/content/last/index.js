import React,{useState,useEffect} from 'react';
import './reset.css';
import {Global,Section} from './style';

const Last = (props) => {
    const score = props.location.state.score;
    const [result,setResult] = useState('');
    useEffect(() => {
        switch(score){
            case 0:
            case 1:
                setResult('프알못');
                break;
            case 2:
            case 3:
                setResult('프린이');
                break;
            case 4:
            case 5:
                setResult('천성적인 개발자');
                break;
            default:
        }
    },[])
    return (
        <>
        <Global/>
        <Section>
            <div>{result}</div>
        </Section>
        </>
    )
}
export default Last;