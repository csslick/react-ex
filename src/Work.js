import React from 'react';

const Work = (props)=> {
  return (
    <>
      <li>
        <h4>{props.title}</h4>
        <img src={props.img} alt={props.title} />
        <p>{props.text}</p>
      </li>
    </>
  )
}

export default Work;