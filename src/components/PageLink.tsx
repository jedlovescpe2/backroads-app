import React from 'react'

const PageLink = ({ id, href, text,itemClass }:{id:number,href:string, text:string, itemClass:string}) => {
  return (
    <li>
        <a href={href} className={itemClass}>
          {" "}{text}{" "}
        </a>
      </li>
  )
}

export default PageLink