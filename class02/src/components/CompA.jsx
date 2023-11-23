import React, { useState } from 'react';

const CompA = (props) => {
    const [title,setTitle] = useState("my heading")
    props.titleHandler(title)
  return (
    <div className='heading'>CompA</div>
  )
}

export default CompA