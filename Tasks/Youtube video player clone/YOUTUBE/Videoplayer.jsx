import React from 'react'

const Videoplayer = ({play}) => {
  return (
    <div>
        {/* <video height={600} width={900} controls autoPlay muted id='player' src={play}></video> */}
        <video controls autoPlay muted id='player' src={play.videoUrl}></video>
        <div className="video-info">
          <h2>{play.title}</h2>
          <p>{play.views} • {play.uploadTime} • {play.isLive ? "🔴 Live" : ""}</p>
          <p className="channel">{play.author} • {play.subscriber}</p>
          <p className="desc">{play.description}</p>
        </div>
    </div>
  )
}

export default Videoplayer