import React from 'react'

const Videoitems = (props) => {
  return (
    <div className="video-card" onClick={()=>(props.run(props.data))}>

      <div className="thumb-container">
        <img id='videos' src={props.data.thumbnailUrl} alt='' />
        <span className="duration">{props.data.duration}</span>
      </div>

      <div className="video-meta">
        <h3>{props.data.title}</h3>
        <p>{props.data.author}</p>
        <p>{props.data.views} • {props.data.uploadTime}</p>
      </div>    

    </div>
  )
}

export default Videoitems
