import React, {useState, useEffect } from 'react';
import Work from './Work';

const Work_list = () => {

  const [works, setWorks] = useState([
    // { 
    //   title: '반응형 웹 - Inspiration 포트폴리오 테마',
    //   img_url: './images/portfolio_inspiration.jpg',
    //   text: "반응형 레아이아웃 포트폴리오 테마 프로젝트. 진입 애니메이션과 시각화 그래프 등을 구현",
    //   url: 'https://csslick.github.io/sns-api/'
    // },
    { 
      title: '2017 수료생 작품집',
      img_url: './images/portfolio2017.jpg',
      text: '기존의 서비스를 디자인부터 새롭게 리뉴얼한 팀 프로젝트 모음집',
      url: './images/팀프로젝트북170919.pdf'
    },
    { 
      title: '2018 수료생 작품',
      img_url: './images/portfolio_astro.jpg',
      text: "서울시립천문대를 새롭게 리뉴얼하여 제작한 팀 프로젝트 포트폴리오",
      url: 'https://eugeneeeeee.github.io/teamproject_observatory/'
    },
    { 
      title: '2019 수료생 작품',
      img_url: './images/portfolio2019.jpg',
      text: "기존 동물병원 홈페이지를 새롭게 리뉴얼하여 제작한 팀 프로젝트 포트폴리오",
      url: 'https://lynsphere.github.io/2nd_Haemaru/index.html'
    },
    // { 
    //   title: '2020 수료생 작품',
    //   img_url: './images/portfolio_dental.jpg',
    //   text: "낡은 디자인의 병원 홈페이지를 리뉴얼하여 제작한 팀 프로젝트 포트폴리오",
    //   url: 'https://ehduddl0601.github.io/human/'
    // },
    // { 
    //   title: 'do_type.js',
    //   img_url: './images/do_type.png',
    //   text: "매우 심플하고 간단하게 사용할 수 있는 오토타이핑 효과 자바스크립트 플러그인",
    //   url: 'https://github.com/csslick/do_type'
    // },
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
          <h2 style={{borderBottomColor: '#fff'}}>Works</h2>
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