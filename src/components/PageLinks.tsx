import { pageLinks } from '@/data'
import React, { FC } from 'react'
import PageLink from './PageLink'

const PageLinks = ({parentClass,itemClass}:{parentClass:string,itemClass:string})  => {

  return (
    <ul className={parentClass} id="nav-links">
    {pageLinks.map(link => <PageLink key={link.id} {...link} itemClass={itemClass} />)}
  </ul>
  )
}

export default PageLinks