import React from 'react'

const Tour = ({image,title,info,date,location,days,cost}:
  { image:string,title:string,info:string,date:string,location:string,days:number,cost:number}) => {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={image} className="tour-img" alt="" />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{info}</p>
        <div className="tour-footer">
          <p>
            <span><i className="fas fa-map"></i></span> {location}
          </p>
          <p>{days} days</p>
          <p>from ${cost}</p>
        </div>
      </div>
    </article>
  )
}

export default Tour