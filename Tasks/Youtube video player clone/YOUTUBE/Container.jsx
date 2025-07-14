import React from 'react'
import Videoitems from './Videoitems'
import Videoplayer from './Videoplayer';

const Container = ({state,play,run}) => {
  return (
    <div>
        <div>
            <article>
                <aside>
                    <Videoplayer play={play}></Videoplayer>
                </aside>

                {/* =============================================== */}

                <aside>{
                        state.map((data)=>{
                            console.log(data);
                        return   <Videoitems run={run} data={data}></Videoitems>
                    })

                    }
                </aside>
            </article>
        </div>
    </div>
  )
}

export default Container