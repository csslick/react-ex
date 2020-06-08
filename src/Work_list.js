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
      <h1>Work list</h1>
      <ul>
        {works.map(work => {
          return (
            <Work 
              key={work.title} 
              title={work.title} 
              img={work.img_url} 
              text={work.text}
            />            
          )
        })}
      </ul>
    </>
  )
}

export default Work_list;