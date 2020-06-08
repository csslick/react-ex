import React, {useState, useEffect } from 'react';
import Work from './Work';

const Work_list = () => {

  const [works, setWorks] = useState([
    { 
      title: 'work1',
      img_url: 'http://placeimg.com/400/300/tech/a',
      text: "작품1에 대한 설명입니다."
    },
    { 
      title: 'work2',
      img_url: 'http://placeimg.com/400/300/tech/b',
      text: "작품2에 대한 설명입니다."
    },
    { 
      title: 'work3',
      img_url: 'http://placeimg.com/400/300/tech/c',
      text: "작품3에 대한 설명입니다."
    },
  ])

  return (
    <>
      <section id="work_list" className="container">
        <h1>Work list</h1>
        <ul className="row">
          {works.map(work => {
            return (
              <Work 
                key={work.title} 
                img={work.img_url}
                title={work.title}  
                text={work.text}
              />            
            )
          })}
        </ul>
      </section>
    </>
  )
}

export default Work_list;