import React from 'react'

function Title({title, customClass}) {
  return (
    <h2 className={`text-3xl font-bold text-gray-200 my-5 ${customClass}`}>{title}</h2>
  )
}

export default Title