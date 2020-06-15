import React from "react";

const About = () => {
  return (
    <section className="container">
      <h2 style={{ marginBottom: "60px" }}>About Course</h2>
      <article className="row" style={{ textAlign: "left" }}>
        <div
          className="col-6"
          style={{
            display: "flex",
            flexFlow: "column",
            paddingTop: "60px",
            paddingRight: "40px",
            height: "520px",
            textAlign: "center",
            // border: '1px solid red'
          }}
        >
          <img 
            style={{borderRadius: '50%'}}
            width="100%" src="./images/profile.jpg" />
          <p
            style={{
              margin: "30px 0",
              fontSize: "22px",
            }}
          >I'm a creator of multimedia and instructor</p>
        </div>
        <div className="col-6" style={{ textAlign: "left" }}>
          <ul class="timeline">
            <li>
              <h3>1단계: UXUI Basic</h3>
              <p>UXUI에 대한 기본 이론과 실습.</p>
            </li>
            <li>
              <h3>2단계: HTML5 &amp; CSS3</h3>
              <ul>
                <li>- 웹 표준 기반 마크업 코딩</li>
                <li>- 레이아웃 및 인터랙티브 UI 구현</li>
                <li>- 반응형 레이아웃</li>
              </ul>
            </li>
            <li>
              <h3>3단계: JavaScript</h3>
              <ul>
                <li>- JavaScript 기본</li>
                <li>- ES6(모던 자바스크립트)</li>
                <li>- 라이브러리/플러그인 활용</li>
              </ul>
            </li>
            <li>
              <h3>4단계: Portfolio</h3>
              <ul>
                <li>- 포트폴리오 제작</li>
                <li>- UI 프레임워크 기반 웹앱 제작</li>
              </ul>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default About;
