import React from 'react'
import './partone.css'
import { Link,useNavigate} from 'react-router-dom'

export default function PartOne(props) {
  const name="Sameera"
  const Navigate=useNavigate();
  return (
    <div>
      <h2 className='myName'>Hi. I'm {name} {props.secndname}</h2>
      <Link to={"/contact"}>{props.children}</Link>
      <button onClick={()=>Navigate("/contact")}>Click</button>
    </div>
  )
}
