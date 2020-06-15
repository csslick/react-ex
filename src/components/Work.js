import React from 'react';
import './Work.css';

const Work = (props)=> {
  return (
    <li className="col-4">
      <a href={props.url} target="_blank">
        <img src={props.img} alt={props.title} />
        <h4>{props.title}</h4>
        <p>{props.text}</p>
      </a>
    </li>
  )
}

export default Work;