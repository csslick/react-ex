import React from 'react';
import './BookInfo.css';

const BookInfo = () => {

  return (
    <section className='container' id="bookInfo">
      <div className="row">
        <figure className='col-4'>
          {/* img width 250 */}
          <img style={{width: '100%',maxWidth:'300px'}} src="./images/book.jpg"/>
        </figure>
        <article 
          className='col-8'
          style={{textAlign: "left", padding: '0 30px 30px 30px'}}>
          <h2>자바스크립트 프로젝트북</h2>
          <p style={{margin: '1em 0', fontSize:'20px'}}>실무에 적합한 9가지 프로젝트로 배우는 웹 프로그래밍</p>
          <span><b>권대용</b> 지음</span><br/><br/>
          <p>웹 퍼블리셔, 웹 개발자를 위한 웹 프로그래밍 레시피! 프로그래밍 언어를 공부할 때는 실무에서 많이 사용하는 코드를 조금씩 구현해보면서 익히는 것이 좋다. 이 책에서는 실무와 밀접한 내용을 다양한 유형의 웹 애플리케이션이나 UI 요소로 익힐 수 있도록 9가지 프로젝트를 구성했다</p>
          <a className='cta' href="https://cafe.naver.com/csslick/1258" target="_blank">예제소스 다운로드</a>
        </article>
      </div>
    </section>
  )
}

export default BookInfo;