import React, {useState, useEffect } from 'react';
import Work from './Work';

const Work_list = () => {

  const [works, setWorks] = useState([
    { 
      title: '반응형 웹 - Inspiration 포트폴리오 테마',
      img_url: './images/portfolio_inspiration.jpg',
      text: "반응형 레아이아웃 포트폴리오 테마 프로젝트. 진입 애니메이션과 시각화 그래프 등을 구현",
      url: 'https://csslick.github.io/sns-api/'
    },
    { 
      title: '반응형 웹 - ME 포트폴리오 테마',
      img_url: './images/me_theme.jpg',
      text: "반응형 레아이아웃 포트폴리오 테마 프로젝트. 진입 애니메이션과 시각화 그래프 등을 구현",
      url: 'https://csslick-me.netlify.app/'
    },
    { 
      title: '핀터레스트 스타일 반응형 레이아웃',
      img_url: './images/portfolio_pin.jpg',
      text: "화면의 폭에 따라 사진의 배열이 변하게 되는 핀터레스트 스타일의 반응형 갤러리 페이지",
      url: 'https://csslick.github.io/pinterest-layout/'
    },
    { 
      title: '커스텀 채크박스',
      img_url: './images/csslick_check.png',
      text: "채크상자를 커스텀 디자인 구현한 편리한 플러그인입니다.",
      url: 'https://github.com/csslick/custom_checkbox'
    },
    { 
      title: 'do_type.js',
      img_url: './images/do_type.png',
      text: "매우 심플하고 간단하게 사용할 수 있는 오토타이핑 효과 자바스크립트 플러그인",
      url: 'https://github.com/csslick/do_type'
    },
    { 
      title: 'txtShadow.js',
      img_url: './images/txtShadow.png',
      text: "Animated Interactive Text Shadow Plugin For jQuery",
      url: 'https://www.jqueryscript.net/text/Animated-Interactive-Text-Shadow-Plugin-For-jQuery-txtShadow.html'
    },
  ])

  return (
    <>
      <div 
        className="container-fluid"
        style={{
          backgroundColor: '#000', 
          color: "#fff",
        }}
      >
        <section id="work_list" className="container">
          <h2 style={{borderBottomColor: '#fff'}}>Work list</h2>
          <ul className="row">
            {works.map(work => {
              return (
                <Work 
                  key={work.title} 
                  img={work.img_url}
                  title={work.title}  
                  text={work.text}
                  url={work.url}
                />            
              )
            })}
          </ul>
        </section>
      </div>
    </>
  )
}

export default Work_list;