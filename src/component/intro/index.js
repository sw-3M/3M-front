import React,{useState,useEffect} from 'react';
import {Main,Suport} from './style';
import background from "../../img/background.png";
import left from "../../img/left.png";
import right from "../../img/right.png";
import month from "../../img/month.png";
const Intro = () => {
    
    return (
        <>
            <Main>
                {/* header 공간 */}
                <header>
                    더미공간
                </header>
                <img src={background}></img>
                <div class="inner">
                    <div class="box">
                        <span class="big">학과소개 </span>
                        <span class="small"> 소프트웨어공통학과, 소프트웨어개발학과, 임베디드개발학과</span>
                    </div>
                    <div class="box">
                        <span class="big">입학정보 </span>
                        <span class="small"> 중학교 내신 80% + 출결,봉사 20% = 100%</span>
                    </div>
                    <div class="box">
                        <span class="big">행사소개 </span>
                        <span class="small"> 전공동아리 해커톤 대회, GSM festival, 동백제</span>
                    </div>

                </div>
            </Main>
            <Suport>
                <span>오늘의 식단</span>
                <img src={month}></img>
                <div class="inner">
                    <div class="date"><sapn><img src={left}/></sapn> 11월 24일 수요일 <span><img src={right}/></span></div>
                    <div class="lunch">점심</div>
                    <div class="food">닭갈비덮밥</div>
                    <div class="food">호박두부된장국</div>
                    <div class="food">인절미크루아상</div>
                    <div class="food">동치미</div>
                    <div class="food">수제망고쥬스</div>
                </div>
            </Suport>
        </>
    );
};

export default Intro;
