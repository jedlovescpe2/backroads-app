import React from 'react'

const Title = ({title,subTitle}:{title:string,subTitle:string})=> {
  return (
    <h2>
      {title} <span>{subTitle}</span>
    </h2>
  )
}

export default Title