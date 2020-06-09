import React from 'react';

const About = ()=> {

  return (
    <section className="container">
      <h2>About</h2>
      <p 
        style={{
          margin: '30px 0',
          fontSize: '22px'
        }}
      >I'm a creator of multimedia and instructor</p>
      <article className="row" style={{textAlign: "left"}}>
        <div className="col-6">
          <img src="http://placeimg.com/500/400/tech/a"/>
        </div>
        <div className="col-6" style={{textAlign: "left"}}>
          <p>I have been a freelancer, worked for a company and a business owner, but I discovered my real passion is teaching web development &amp; programming in a simple and understandable way. I now run the Traversy Media YouTube channel and sell online courses</p>
        </div>
      </article>
    </section>
  )
}

export default About;