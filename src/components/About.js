import React from "react";

const About = () => {
  return (
    <section className="container">
      <h2 style={{ marginBottom: "60px" }}>About Course</h2>
      <article className="row" style={{ textAlign: "left" }}>
        <div
          className="col-6"
          style={{
            // display: "flex",
            flexFlow: "column",
            // paddingRight: "40px",
            // height: "520px",
            textAlign: "center",
            // border: '1px solid red'
          }}
        >
          <img
            style={{ borderRadius: "50%" }}
            width="80%"
            src="./images/profile.jpg"
          />
          <p
            style={{
              margin: "20px 0",
              fontSize: "22px",
            }}
          >
            <b>Michael Kwon</b> is the creator of multimedia and instructor
          </p>
          <p>
            현업에서 멀티미디어 콘텐츠와 게임 개발자로 다양한 상용 작품을 런칭한
            경험이 있으며 관련 업계에서 프리랜서로도 활동하였다. 미디어와 웹
            분야에 꾸준히 관심을 가지면서 저서 집필, 강의 등을 겸하고 있다.
          </p>
          <br />
          <p>
            E-mail:{" "}
            <a
              style={{ color: "#333", textDecoration: "underline" }}
              href="mailto:tailofmoon@naver.com"
            >
              tailofmoon@naver.com
            </a>
          </p>
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
