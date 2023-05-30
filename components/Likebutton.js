'use client'
import React, { useState } from 'react'


function Likebutton() {

    const [like, setlike] = useState(false)

  return (
    <button className='text-xl' onClick={e => setlike(!like)}> {like ? <span className='text-4xl'>💘 </span>: <span>💢</span>} </button>
  )
}

export default Likebutton